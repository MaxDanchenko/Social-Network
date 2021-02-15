import {CurrentItemType} from '../api/apiTyper'
import {usersAPI} from '../api/usersAPI'
import {updateObjectInArray} from '../utilities/object-helper'
import {Dispatch} from 'redux'


const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const IS_FETCHING_FUNK = 'IS_FETCHING_FUNK'
const TOGGLE_BUTTON = 'TOGGLE_BUTTON'

type InitialStateType = {
  users: Array<CurrentItemType>
  pageSize: number
  pageUserCount: number
  currentPage: number
  isFetching: boolean
  followingInProgress: Array<any>
}
const initialState = {
  users: [],
  pageSize: 7,
  pageUserCount: 70,
  currentPage: 1,
  isFetching: true,
  followingInProgress: []
} as InitialStateType

const usersReducer = (state = initialState, action: UsersActionsType): InitialStateType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {
          followed: true
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {
          followed: false
        })
      }
    case SET_USERS: {
      return {...state, users: action.users}
    }
    case SET_CURRENT_PAGE: {
      return {...state, currentPage: action.currentPage}
    }
    case IS_FETCHING_FUNK: {
      return {...state, isFetching: action.isFetching}
    }
    case TOGGLE_BUTTON: {
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
type UsersActionsType = FollowSuccessType | UnfollowSuccessType | SetUsersType | SetCurrentPageType | SetIsFetchingType | ToggleButtonType
type FollowSuccessType = {
  type: typeof FOLLOW
  userId: number
}
export const followSuccess = (userId: number): FollowSuccessType => ({type: FOLLOW, userId})
type UnfollowSuccessType = {
  type: typeof UNFOLLOW
  userId: number
}
export const unfollowSuccess = (userId: number): UnfollowSuccessType => ({type: UNFOLLOW, userId})
type SetUsersType = {
  type: typeof SET_USERS
  users: Array<CurrentItemType>
}
export const setUsers = (users: Array<CurrentItemType>): SetUsersType => ({type: SET_USERS, users})
type SetCurrentPageType = {
  type: typeof SET_CURRENT_PAGE
  currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPageType => ({
  type: SET_CURRENT_PAGE,
  currentPage
})
type SetIsFetchingType = {
  type: typeof IS_FETCHING_FUNK
  isFetching: boolean
}
export const setIsFetching = (isFetching: boolean): SetIsFetchingType => ({
  type: IS_FETCHING_FUNK,
  isFetching
})
type ToggleButtonType = {
  type: typeof TOGGLE_BUTTON
  isFetching: boolean
  userId: number
}
export const toggleButtonProgress = (isFetching: boolean, userId: number): ToggleButtonType => ({
  type: TOGGLE_BUTTON,
  isFetching,
  userId
})
type GetUsersDispatchType = SetIsFetchingType | SetCurrentPageType | SetUsersType
export const getUsers = (currentPage: number, pageSize: number) => (dispatch: Dispatch<GetUsersDispatchType>) => {
  dispatch(setIsFetching(true))
  dispatch(setCurrentPage(currentPage))
  usersAPI.getUsers(currentPage, pageSize).then((data) => {
    dispatch(setIsFetching(false))
    dispatch(setUsers(data.items))
  })
}

const followUnfollow = async (userId: number, dispatch: any, apiMethod: any, actionCreator: any) => {
  dispatch(toggleButtonProgress(true, userId))
  const response = await apiMethod(userId)
  if (response.data.resultCode === 0) {
    dispatch(actionCreator(userId))
  }
  dispatch(toggleButtonProgress(false, userId))
}
export const follow = (userId: number) => async (dispatch: Dispatch<FollowSuccessType>) => {
  const apiMethod = usersAPI.follow.bind(usersAPI)
  const actionCreator = followSuccess
  followUnfollow(userId, dispatch, apiMethod, actionCreator)
}
export const unfollow = (userId: number) => async (dispatch: Dispatch<UnfollowSuccessType>) => {
  const apiMethod = usersAPI.unfollow.bind(usersAPI)
  const actionCreator = unfollowSuccess
  followUnfollow(userId, dispatch, apiMethod, actionCreator)
}

export default usersReducer
