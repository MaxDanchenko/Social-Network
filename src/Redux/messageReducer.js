const SEND_MESSAGE = 'SEND_MESSAGE'

const initialState = {
  friendsList: [
    { id: 1, name: 'John Williams', src: require('../images/avatars/1.png') },
    { id: 2, name: 'Chak Robertson', src: require('../images/avatars/2.png') },
    { id: 3, name: 'James Smith', src: require('../images/avatars/3.png') },
    { id: 4, name: 'Joe Rogan', src: require('../images/avatars/4.png') },
    { id: 5, name: 'Francis Ngannou', src: require('../images/avatars/5.png') },
    { id: 6, name: 'Daniel Cormrier', src: require('../images/avatars/6.png') },
  ],
  dialogsList: [
    {
      dialogId: 1,
      FriendMessage:
        ' John: "How are you doing man?"\n' +
        'I think we can do it' +
        'I think we can do it' +
        'I think we can do it' +
        'I think we can do it' +
        'I think we can do it' +
        'I think we can do it' +
        'I think we can do it' +
        'I think we can do it' +
        'I think we can do it' +
        'I think we can do it' +
        'I think we can do it',
    },
    {
      dialogId: 2,
      FriendMessage: ' Chak: "Wats up"\n',
    },
    {
      dialogId: 3,
      FriendMessage: 'Not too bad.',
    },
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

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
  case SEND_MESSAGE:
    const body = action.newMessageBody
    return {
      ...state,
      messages: [...state.messages, { id: 7, message: body }],
    }
  default:
    return state
  }
}

export const sendMessageCreator = (newMessageBody) => ({
  type: SEND_MESSAGE,
  newMessageBody,
})

export default messageReducer
