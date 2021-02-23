import {instance} from './api'
import {AuthMeDataType, ResponseData, UserLoginDataType} from './ApiTypes'


export const authAPI = {
  auth() {
    return instance.get<ResponseData<AuthMeDataType>>('auth/me').then((res) => res.data)
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
    }).then((res) => res.data)
  },
  logOut() {
    return instance.delete('auth/login').then((res): Promise<ResponseData> => res.data)
  }
}
