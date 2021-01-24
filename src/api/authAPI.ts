import {instance} from './api'
import {AuthMeType, UserLoginType} from './apiTyper'


export const authAPI = {
  auth() {
    return instance.get<AuthMeType>('auth/me')
  },
  logIn(
    email: string | null,
    password: string | null,
    rememberMe: boolean | null = false,
    captcha: string | null = null
  ) {
    return instance.post<UserLoginType>('auth/login', {
      email,
      password,
      rememberMe,
      captcha
    })
  },
  logOut() {
    return instance.delete<UserLoginType>('auth/login')
  }
}
