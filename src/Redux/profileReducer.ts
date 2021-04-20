import {profileAPI} from '../api/profileAPI'
import {ProfileType} from '../api/ApiTypes'
import {CommonActionsType, InferActionsTypes} from './reduxStore'


const initialState = {
  profile: {
    userId: 0,
    lookingForAJob: true,
    lookingForAJobDescription: '',
    aboutMe: '',
    fullName: '',
    contacts: {
      twitter: '',
    },
    photos: {
      small: '',
      large: '',
    },
  },
  status: '',
}

const profileReducer = (state = initialState, action: profileActionType): InitialStateType => {
  switch (action.type) {
    case 'SET_USER_PROFILE': {
      return {...state, profile: action.profile}
    }
    case 'SET_STATUS': {
      return {...state, status: action.status}
    }
    case 'SET_PHOTO_SUCCESS': {
      return {...state, profile: {...state.profile, photos: action.photos}}
    }
    default:
      return state
  }
}

export const actions = {
  setUserProfile: (profile: ProfileType) => ({
    type: 'SET_USER_PROFILE',
    profile,
  }) as const,
  setStatus: (status: string) => ({type: 'SET_STATUS', status}) as const,
  setPhotoSuccess: (photos: { small: string, large: string }) => ({
    type: 'SET_PHOTO_SUCCESS',
    photos,
  }) as const,
}

export const getUserProfile = (userId: number | null): ThunkType => async (dispatch) => {
  const response = await profileAPI.profile(userId)
  dispatch(actions.setUserProfile(response))
}
export const getStatus = (userId: number | null): ThunkType => async (dispatch) => {
  const response = await profileAPI.getStatus(userId)
  dispatch(actions.setStatus(response))
}
export const updateStatus = (status: string): ThunkType => async (dispatch) => {
  const response = await profileAPI.updateStatus(status)
  if (response.resultCode === 0) {
    dispatch(actions.setStatus(status))
  }
}
export const savePhoto = (photos: File): ThunkType => async (dispatch) => {
  const response = await profileAPI.setProfilePhoto(photos)
  if (response.resultCode === 0) {
    dispatch(actions.setPhotoSuccess(response.data.photos))
  }
}

export default profileReducer


type InitialStateType = typeof initialState
type profileActionType = InferActionsTypes<typeof actions>
type ThunkType = CommonActionsType<profileActionType>