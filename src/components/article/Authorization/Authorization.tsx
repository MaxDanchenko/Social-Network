import React from 'react'
import AuthForm from './AuthForm/AuthForm'
import Styles from './Authorization.module.scss'
import {reduxForm} from 'redux-form'
import {NavLink, Redirect} from 'react-router-dom'


type PropsType = {
  captchaUrl: string | File
  logIn: (email: string,
          password: string,
          rememberMe?: boolean,
          captcha?: string) => void
}
const Authorization: React.FC<PropsType> = ({logIn, captchaUrl}) => {
  const onSubmit = (formData: ReduxFormType) => {
    logIn(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    )
  }
  return (
    <div className={Styles.mainPageAuth}>
      <div className={Styles.imageWrapper}>
        <div className={Styles.image}>
          <p className={Styles.networkName}>Social Network</p>
        </div>
      </div>
      <div className={Styles.authWrapper}>{
        //@ts-ignore
        <AuthFormRedux captchaUrl={captchaUrl} onSubmit={onSubmit}/>
      }
      </div>
    </div>
  )
}
type ReduxFormType = {
  email: string
  password: string
  rememberMe?: boolean
  captcha?: string
}
const AuthFormRedux = reduxForm<ReduxFormType>({form: 'logIn'})(AuthForm)

export default Authorization
