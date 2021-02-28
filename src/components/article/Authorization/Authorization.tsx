import React from 'react'
import AuthForm from './AuthForm/AuthForm'
import Styles from './Authorization.module.scss'
import {reduxForm} from 'redux-form'
import {NavLink, Redirect} from 'react-router-dom'


type PropsType = {
  isAuth: boolean
  captchaUrl: string | File
  logIn: (email: string,
          password: string,
          rememberMe?: boolean,
          captcha?: string) => void
}
const Authorization: React.FC<PropsType> = ({isAuth, logIn, captchaUrl}) => {
  if (isAuth) {
    return <Redirect to={'home'}/>
  }
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
        <NavLink className={Styles.imageLink} to={'/Home'}>
          <p className={Styles.networkName}>Social Network</p>
        </NavLink>
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
