import {CommonActionsType, InferActionsTypes} from './reduxStore'
import {friendsAPI} from '../api/friendsAPI'


const initialState = {
  friends: [
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
  pageSize: 7,
  pageFriendsCount: 70,
  currentPage: 1,
}

const friendsReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'GET_FRIENDS_LIST':
      return {
        ...state,
        friends: action.friends.items
      }
    default:
      return state
  }
}
const actions = {
  friendsList: (friends: any) => ({type: 'GET_FRIENDS_LIST', friends}) as const,
}
export const getFriends = (friend: boolean): ThunkType => async (dispatch) => {
  const response = await friendsAPI.getFriends(friend)
  dispatch(actions.friendsList(response))
}


export default friendsReducer

type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = CommonActionsType
