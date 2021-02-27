import {CurrentItemType} from '../api/ApiTypes'
import {usersAPI} from '../api/usersAPI'
import {updateObjectInArray} from '../utilities/object-helper'
import {CommonActionsType, InferActionsTypes} from "./reduxStore";


const initialState = {
  users: [
    {
      name: '',
      id: 0,
      photos: {
        small: '',
        large: '',
      },
      status: '',
      followed: false
    }
  ],
  pageSize: 7,
  pageUserCount: 70,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [0]
}

const usersReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'USERS_FOLLOW':
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {
          followed: true
        })
      }
    case 'USERS_UNFOLLOW':
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {
          followed: false
        })
      }
    case 'USERS_SET_USERS': {
      return {...state, users: action.users}
    }
    case 'USERS_SET_CURRENT_PAGE': {
      return {...state, currentPage: action.currentPage}
    }
    case 'USERS_IS_FETCHING': {
      return {...state, isFetching: action.isFetching}
    }
    case 'USERS_TOGGLE_BUTTON': {
      debugger
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId)
      }
    }
    default:
      return state
  }
}
const actions = {
  followSuccess: (userId: number) => ({type: 'USERS_FOLLOW', userId}) as const,
  unfollowSuccess: (userId: number) => ({type: 'USERS_UNFOLLOW', userId}) as const,
  setUsers: (users: Array<CurrentItemType>) => ({type: 'USERS_SET_USERS', users}) as const,
  setCurrentPage: (currentPage: number) => ({type: 'USERS_SET_CURRENT_PAGE', currentPage}) as const,
  setIsFetching: (isFetching: boolean) => ({type: 'USERS_IS_FETCHING', isFetching}) as const,
  toggleButtonProgress: (isFetching: boolean, userId: number) => ({type: 'USERS_TOGGLE_BUTTON', isFetching, userId}) as const
}

export const getUsers = (currentPage: number, pageSize: number): ThunkType => (dispatch) => {
  dispatch(actions.setIsFetching(true))
  dispatch(actions.setCurrentPage(currentPage))
  usersAPI.getUsers(currentPage, pageSize).then((data) => {
    dispatch(actions.setIsFetching(false))
    dispatch(actions.setUsers(data.items))
  })
}
const followUnfollow = async (userId: number, dispatch: any, apiMethod: any, actionCreator: any) => {
  dispatch(actions.toggleButtonProgress(true, userId))
  const response = await apiMethod(userId)
  if (response.data.resultCode === 0) {
    dispatch(actionCreator(userId))
  }
  dispatch(actions.toggleButtonProgress(false, userId))
}
export const follow = (userId: number): ThunkType => async (dispatch) => {
  const apiMethod = usersAPI.follow.bind(usersAPI)
  const actionCreator = actions.followSuccess
  followUnfollow(userId, dispatch, apiMethod, actionCreator)
}
export const unfollow = (userId: number): ThunkType => async (dispatch) => {
  const apiMethod = usersAPI.unfollow.bind(usersAPI)
  const actionCreator = actions.unfollowSuccess
  followUnfollow(userId, dispatch, apiMethod, actionCreator)
}

export default usersReducer

type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = CommonActionsType
