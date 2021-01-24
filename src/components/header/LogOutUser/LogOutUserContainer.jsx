import React from 'react'
import {connect} from 'react-redux'
import {logOut} from '../../../Redux/authUserReducer'
import LogOutUser from './LogOutUser'


const LogOutUserContainer = (props) => {
  return <LogOutUser {...props} />
}

const mapStateToProps = (state) => ({
  isAuth: state.authUser.isAuth
})

export default connect(mapStateToProps, {logOut}
)(LogOutUserContainer)
