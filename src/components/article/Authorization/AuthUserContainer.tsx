import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {auth, logIn} from '../../../Redux/authUserReducer'
import Authorization from './Authorization'
import {AppStateType} from '../../../Redux/reduxStore'
import {getCaptchaSelector, getIsAuthSelector} from '../../../Redux/selectors'
import {Redirect} from 'react-router-dom'

type PropsType = {
  captchaUrl: string | File
  isAuth: boolean

  auth: () => void
  logIn: (email: string,
          password: string,
          rememberMe?: boolean,
          captcha?: string) => void
}
const AuthUserContainer: React.FC<PropsType> = ({auth, isAuth, logIn, captchaUrl}) => {
  useEffect(() => {
    auth()
  }, [])
  if (isAuth) {
    return <Redirect to={'home'}/>
  }
  return <Authorization logIn={logIn} captchaUrl={captchaUrl}/>
}
type MapStateToPropsType = {
  isAuth: boolean
  captchaUrl: string
}
type MapDispatchToPropsType = {
  auth: () => void
  logIn: (email: string,
          password: string,
          rememberMe?: boolean,
          captcha?: string) => void
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  isAuth: getIsAuthSelector(state),
  captchaUrl: getCaptchaSelector(state),
})

export default connect<MapStateToPropsType, MapDispatchToPropsType, any, AppStateType>(mapStateToProps, {
  auth,
  logIn,
})(AuthUserContainer)
