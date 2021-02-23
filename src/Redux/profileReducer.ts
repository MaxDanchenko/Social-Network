import {profileAPI} from '../api/profileAPI'
import {ProfileType} from '../api/ApiTypes'
import {Dispatch} from 'redux'


const SET_STATUS = 'SET_STATUS'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_PHOTO_SUCCESS = 'SET_PHOTO_SUCCESS'

type InitialStateType = {
  profile: ProfileType
  status: string
}
const initialState = {
  profile: {},
  status: ''
} as InitialStateType

type ProfileActionType = SetUserProfileType | SetStatusType | SetPhotoSuccessType
const profileReducer = (state = initialState, action: ProfileActionType): InitialStateType => {
  switch (action.type) {
    case SET_USER_PROFILE: {
      return {...state, profile: action.profile}
    }
    case SET_STATUS: {
      return {...state, status: action.status}
    }
    case SET_PHOTO_SUCCESS: {
      return {...state, profile: {...state.profile, photos: action.photos}}
    }
    default:
      return state
  }
}
type SetUserProfileType = {
  type: typeof  SET_USER_PROFILE
  profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): SetUserProfileType => ({
  type: SET_USER_PROFILE,
  profile
})
type SetStatusType = {
  type: typeof SET_STATUS
  status: string
}
export const setStatus = (status: string): SetStatusType => ({type: SET_STATUS, status})
type SetPhotoSuccessType = {
  type: typeof SET_PHOTO_SUCCESS
  photos: {
    small?: string
    large?: string
  }
}
export const setPhotoSuccess = (photos: {small?: string, large?: string}): SetPhotoSuccessType => ({
  type: SET_PHOTO_SUCCESS,
  photos
})


export const getUserProfile = (userId: number | null) => async (dispatch: Dispatch<SetUserProfileType>) => {
  const response = await profileAPI.profile(userId)
  dispatch(setUserProfile(response))
}
export const getStatus = (userId: number | null) => async (dispatch: Dispatch<SetStatusType>) => {
  const response = await profileAPI.getStatus(userId)
  dispatch(setStatus(response))
}
export const updateStatus = (status: string) => async (dispatch: Dispatch<SetStatusType>) => {
  const response = await profileAPI.updateStatus(status)
  if (response.resultCode === 0) {
    dispatch(setStatus(status))
  }
}
export const savePhoto = (photos: File) => async (dispatch: Dispatch<SetPhotoSuccessType>) => {
  const response = await profileAPI.setProfilePhoto(photos)
  if (response.resultCode === 0) {
    dispatch(setPhotoSuccess(response.data.photos))
  }
}

export default profileReducer
