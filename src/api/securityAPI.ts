import {instance} from './api'
import {CaptchaType} from './ApiTypes'


export const securityAPI = {
  getCaptchaUrl() {
    return instance.get<CaptchaType>('/security/get-captcha-url').then(res => res.data)
  }
}
