import {CommonActionsType, InferActionsTypes} from './reduxStore'
import {friendsAPI} from '../api/friendsAPI'
import {ItemsType} from '../api/ApiTypes'


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
  pageSize: 10,
  pageFriendsCount: 0,
  currentPage: 1,
}

const friendsReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'GET_FRIENDS_LIST':
      return {
        ...state,
        friends: action.friends.items,
        pageFriendsCount: action.friends.totalCount
      }
    default:
      return state
  }
}
const actions = {
  friendsList: (friends: ItemsType) => ({type: 'GET_FRIENDS_LIST', friends}) as const,
}
export const getFriends = (currentPage: number, pageSize: number, friend: boolean): ThunkType => async (dispatch) => {
  const response = await friendsAPI.getFriends(currentPage, pageSize, friend)
  dispatch(actions.friendsList(response))
}


export default friendsReducer

type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = CommonActionsType
