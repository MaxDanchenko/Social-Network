import {instance} from './api'
import {AuthMeDataType, ResponseData, UserLoginDataType} from './commonApiTypes'


export const authAPI = {
  auth() {
    return instance.get<ResponseData<AuthMeDataType>>('auth/me')
  },
  logIn(
    email: string | null,
    password: string | null,
    rememberMe: boolean | null = false,
    captcha: string | null = null
  ) {
    return instance.post<ResponseData<UserLoginDataType>>('auth/login', {
      email,
      password,
      rememberMe,
      captcha
    })
  },
  logOut() {
    return instance.delete('auth/login')
  }
}
