import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { auth, logIn } from '../../../Redux/authUserReducer'
import Authorization from './Authorization'

const AuthUserContainer = (props) => {
  useEffect(() => {
    props.auth(props.email, props.id, props.login)
  })
  return <Authorization {...props} />
}

const mapStateToProps = (state) => ({
  logIn: state.authUser.logIn,
  isAuth: state.authUser.isAuth,
  captchaUrl: state.authUser.captchaUrl,
})

export default connect(mapStateToProps, {
  auth,
  logIn
})(AuthUserContainer)
