import {stopSubmit} from 'redux-form'
import {authAPI} from '../api/authAPI'
import {securityAPI} from '../api/securityAPI'
import {CommonActionsType, InferActionsTypes} from "./reduxStore";


const initialState = {
  email: '',
  id: 0,
  login: '',
  isAuth: false,
  captchaUrl: ''
}


const authUserReducer = (state = initialState, action: ActionType): InitialStateType => {
  switch (action.type) {
    case 'SET_AUTH_USER':
    case 'GET_SECURITY_CAPTCHA':
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

const actions = {
  setUserData: (email: string,
                id: number,
                login: string,
                isAuth: boolean) => ({
    type: 'SET_AUTH_USER',
    payload: {email, id, login, isAuth}
  }) as const,
  getSecurityCaptcha: (captchaUrl: string) => ({
    type: 'GET_SECURITY_CAPTCHA',
    payload: {captchaUrl}
  }) as const
}


export const auth = (): ThunkType => async (dispatch) => {
  const response = await authAPI.auth()
  if (response.resultCode === 0) {
    const {email, id, login} = response.data
    dispatch(actions.setUserData(email, id, login, true))
  }
}
export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
  const response = await securityAPI.getCaptchaUrl()
  const captchaUrl = response.url
  dispatch(actions.getSecurityCaptcha(captchaUrl))
}
export const logIn = (email: string,
                      password: string,
                      rememberMe?: boolean,
                      captcha?: string): ThunkType => async (dispatch) => {
  const response = await authAPI.logIn(email, password, rememberMe, captcha)
  if (response.resultCode === 0) {
    dispatch(auth())
  } else {
    if (response.resultCode === 10) {
      dispatch(getCaptchaUrl())
    }
    const errorMessage = response.messages.length > 0
        ? response.messages[0]
        : 'Some error'
    const action = stopSubmit('logIn', {_error: errorMessage})
    dispatch(action)
  }
}
export const logOut = (): ThunkType => async (dispatch) => {
  const response = await authAPI.logOut()
  if (response.resultCode === 0) {
    dispatch(actions.setUserData('', 0, '', false))
  }
}

export default authUserReducer

type InitialStateType = typeof initialState
type ActionType = InferActionsTypes<typeof actions>
type ThunkType = CommonActionsType