import {CommonActionsType, InferActionsTypes} from './reduxStore'
import {friendsAPI} from '../api/friendsAPI'


const initialState = {
  friends: {
    items: [
      {
        name: '',
        id: 0,
        photos: {
          small: '',
          large: '',
        },
        status: '',
        followed: false,
      },
    ],
    totalCount: 0,
  },
}

const usersReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'GET_FRIENDS_LIST':
      return {
        ...state,
        friends: action.friends,
      }
    default:
      return state
  }
}
const actions = {
  friendsList: (friends: any) => ({type: 'GET_FRIENDS_LIST', friends}) as const,
}
export const getFriendsList = (friend: boolean): ThunkType => async (dispatch) => {
  const response = await friendsAPI.getFriends(friend)
  dispatch(actions.friendsList(response))
}


export default usersReducer

type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = CommonActionsType
