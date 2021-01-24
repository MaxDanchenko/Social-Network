import {stopSubmit} from 'redux-form'
import {authAPI} from '../api/authAPI'
import {securityAPI} from '../api/securityAPI'
import {usersAPI} from '../api/usersAPI'


const SET_AUTH_USER = 'SET_AUTH_USER'
const GET_SECURITY_CAPTCHA = 'GET_SECURITY_CAPTCHA'

type InitialStateType = {
  email: string | null
  id: number | null
  login: string | null
  isAuth: boolean
  captchaUrl: string | null
}
const initialState = {
  email: null,
  id: null,
  login: null,
  isAuth: false,
  captchaUrl: null
} as InitialStateType


const authUserReducer = (state = initialState, action: any): InitialStateType => {
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
type SetUserDataType = {
  type: typeof SET_AUTH_USER
  payload: {
    email: string | null
    id: number | null
    login: string | null
    isAuth: boolean | null
  }
}
export const setUserData = (email: string | null,
                            id: number | null,
                            login: string | null,
                            isAuth: boolean | null): SetUserDataType => ({
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
    captchaUrl: string
  }
}
export const getSecurityCaptcha = (captchaUrl: string): GetCaptchaType => ({
  type: GET_SECURITY_CAPTCHA,
  payload: {captchaUrl}
})


export const auth = () => async (dispatch: any) => {
  const response = await usersAPI.auth()
  if (response.data.resultCode === 0) {
    const {email, id, login} = response.data.data
    dispatch(setUserData(email, id, login, true))
  }
}
export const getCaptchaUrl = () => async (dispatch: any) => {
  const response = await securityAPI.getCaptchaUrl()
  const captchaUrl = response.data.url
  dispatch(getSecurityCaptcha(captchaUrl))
}
export const logIn = (email: string | null,
                      password: string | null,
                      rememberMe: boolean | null,
                      captcha: string | null) => async (dispatch: any) => {
  const response = await authAPI.logIn(email, password, rememberMe, captcha)
  if (response.data.resultCode === 0) {
    dispatch(auth())
  } else {
    if (response.data.resultCode === 10) {
      dispatch(getCaptchaUrl())
    }
    const errorMessage =
      response.data.messages.length > 0
        ? response.data.messages[0]
        : 'Some error'
    const action = stopSubmit('logIn', {_error: errorMessage})
    dispatch(action)
  }
}
export const logOut = () => async (dispatch: any) => {
  const response = await authAPI.logOut()
  if (response.data.resultCode === 0) {
    dispatch(setUserData(null, null, null, false))
  }
}

export default authUserReducer
