import {stopSubmit} from 'redux-form'
import {authAPI} from '../api/authAPI'
import {securityAPI} from '../api/securityAPI'
import {Dispatch} from 'redux'


const SET_AUTH_USER = 'SET_AUTH_USER'
const GET_SECURITY_CAPTCHA = 'GET_SECURITY_CAPTCHA'

type InitialStateType = {
  email: string | null
  id: number | null
  login: string | null
  isAuth: boolean
  captchaUrl: string
}
const initialState = {
  email: null,
  id: null,
  login: null,
  isAuth: false,
  captchaUrl: ''
} as InitialStateType

type AuthActionType = SetUserDataType | GetCaptchaType
const authUserReducer = (state = initialState, action: AuthActionType): InitialStateType => {
  switch (action.type) {
    case SET_AUTH_USER:
    case GET_SECURITY_CAPTCHA:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}


export type SetUserDataType = {
  type: typeof SET_AUTH_USER
  payload: {
    email: string | null
    id: number | null
    login: string | null
    isAuth: boolean
  }
}
export const setUserData = (email: string | null,
                            id: number | null,
                            login: string | null,
                            isAuth: boolean): SetUserDataType => ({
  type: SET_AUTH_USER,
  payload: {
    email,
    id,
    login,
    isAuth
  }
})
type GetCaptchaType = {
  type: typeof GET_SECURITY_CAPTCHA
  payload: {
    captchaUrl?: string
  }
}
export const getSecurityCaptcha = (captchaUrl: string): GetCaptchaType => ({
  type: GET_SECURITY_CAPTCHA,
  payload: {captchaUrl}
})


export const auth = () => async (dispatch: Dispatch<SetUserDataType>) => {
  const response = await authAPI.auth()
  if (response.resultCode === 0) {
    const {email, id, login} = response.data
    dispatch(setUserData(email, id, login, true))
  }
}
export const getCaptchaUrl = () => async (dispatch: Dispatch<GetCaptchaType>) => {
  const response = await securityAPI.getCaptchaUrl()
  const captchaUrl = response.url
  dispatch(getSecurityCaptcha(captchaUrl))
}


export const logIn = (email: string | null,
                      password: string | null,
                      rememberMe?: boolean,
                      captcha?: string) => async (dispatch: any) => {
  const response = await authAPI.logIn(email, password, rememberMe, captcha)
  if (response.resultCode === 0) {
    dispatch(auth())
  } else {
    if (response.resultCode === 10) {
      dispatch(getCaptchaUrl())
    }
    const errorMessage =
      response.messages.length > 0
        ? response.messages[0]
        : 'Some error'
    const action = stopSubmit('logIn', {_error: errorMessage})
    dispatch(action)
  }
}
export const logOut = () => async (dispatch: Dispatch<SetUserDataType>) => {
  const response = await authAPI.logOut()
  if (response.resultCode === 0) {
    dispatch(setUserData(null, null, null, false))
  }
}

export default authUserReducer
