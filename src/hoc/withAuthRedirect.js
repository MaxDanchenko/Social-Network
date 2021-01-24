import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const mapStateToPropsForRedirect = (state) => ({
  isAuth: state.authUser.isAuth,
})

export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Redirect to="/Sign In" />
      return <Component {...this.props} />
    }
  }
  const ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(
    RedirectComponent
  )

  return ConnectedAuthRedirectComponent
}
