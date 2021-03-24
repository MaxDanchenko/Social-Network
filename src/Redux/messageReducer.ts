import {InferActionsTypes} from './reduxStore'

const initialState = {
  friendsList: [
    {id: 1, name: 'John Williams', src: require('../images/avatars/1.png')},
    {id: 2, name: 'Chak Robertson', src: require('../images/avatars/2.png')},
    {id: 3, name: 'James Smith', src: require('../images/avatars/3.png')},
    {id: 4, name: 'Joe Rogan', src: require('../images/avatars/4.png')},
    {id: 5, name: 'Francis Ngannou', src: require('../images/avatars/5.png')},
    {id: 6, name: 'Daniel Cormrier', src: require('../images/avatars/6.png')},
  ],
  messages: [
    {
      id: 1,
      message: ' no problem ',
    },
    {
      id: 1,
      message: ' i think so ',
    },
    {
      id: 1,
      message: ' ok man',
    },
  ],
}

const messageReducer = (state = initialState, action: messageActionType): InitialStateType => {
  switch (action.type) {
    case 'SEND_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, {id: 7, message: action.newMessageBody}],
      }
    default:
      return state
  }
}

export const actions = {
  sendMessageCreator: (newMessageBody: string) => ({
    type: 'SEND_MESSAGE',
    newMessageBody,
  }) as const,
}


export default messageReducer

export type InitialStateType = typeof initialState
type messageActionType = InferActionsTypes<typeof actions>