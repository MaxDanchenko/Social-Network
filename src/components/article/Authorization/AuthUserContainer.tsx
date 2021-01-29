import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {auth, logIn} from '../../../Redux/authUserReducer'
import Authorization from './Authorization'
import {AppStateType} from '../../../Redux/reduxStore'

type PropsType = {
  captchaUrl: string
  isAuth: boolean
  
  auth: () => void
  logIn: (email: string | null,
          password: string | null,
          rememberMe?: boolean,
          captcha?: string) => void
}
const AuthUserContainer: React.FC<PropsType> = ({auth, isAuth, logIn, captchaUrl}) => {
  useEffect(() => {
    auth()
  }, [])
  return <Authorization isAuth={isAuth} logIn={logIn} captchaUrl={captchaUrl} />
}
type MapStateToPropsType = {
  isAuth: boolean
  captchaUrl: string
}
type MapDispatchToPropsType = {
  auth: () => void
  logIn: (email: string | null,
          password: string | null,
          rememberMe?: boolean,
          captcha?: string) => void
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  isAuth: state.authUser.isAuth,
  captchaUrl: state.authUser.captchaUrl
})

export default connect<MapStateToPropsType, MapDispatchToPropsType, PropsType, AppStateType>(mapStateToProps, {
  auth,
  logIn
})(AuthUserContainer)
