import React from 'react'
import {connect} from 'react-redux'
import {logOut} from '../../../Redux/authUserReducer'
import LogOutUser from './LogOutUser'
import {AppStateType} from "../../../Redux/reduxStore";

type PropsType = {
  logOut: () => void
  isAuth: boolean
}
const LogOutUserContainer: React.FC<PropsType> = ({logOut, isAuth}) => {
  return <LogOutUser logOut={logOut} isAuth={isAuth}/>
}

const mapStateToProps = (state: AppStateType) => ({
  isAuth: state.authUser.isAuth
})

export default connect(mapStateToProps, {logOut}
)(LogOutUserContainer)
