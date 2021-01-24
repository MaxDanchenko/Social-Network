import {usersAPI} from '../api/usersAPI'
import {profileAPI} from '../api/profileAPI'


const SET_STATUS = 'SET_STATUS'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_PHOTO_SUCCESS = 'SET_PHOTO_SUCCESS'

const initialState = {
  profile: null,
  status: ''
}

const profileReducer = (state = initialState, action) => {
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
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile
})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const setPhotoSuccess = (photos) => ({
  type: SET_PHOTO_SUCCESS,
  photos
})

export const getUserProfile = (userId) => async (dispatch) => {
  const response = await usersAPI.profile(userId)
  dispatch(setUserProfile(response.data))
}
export const getStatus = (userId) => async (dispatch) => {
  const response = await profileAPI.getStatus(userId)
  dispatch(setStatus(response.data))
}
export const updateStatus = (status) => async (dispatch) => {
  const response = await profileAPI.updateStatus(status)
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status))
  }
}
export const savePhoto = (photos) => async (dispatch) => {
  const response = await profileAPI.setProfilePhoto(photos)
  if (response.data.resultCode === 0) {
    dispatch(setPhotoSuccess(response.data.data.photos))
  }
}

export default profileReducer
