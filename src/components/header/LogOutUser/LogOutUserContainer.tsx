import React from 'react'
import {connect} from 'react-redux'
import {logOut} from '../../../Redux/authUserReducer'
import LogOutUser from './LogOutUser'
import {AppStateType} from "../../../Redux/reduxStore";
import {getIsAuthSelector} from '../../../Redux/selectors';

type PropsType = {
  logOut: () => void
  isAuth: boolean
}
const LogOutUserContainer: React.FC<PropsType> = ({logOut, isAuth}) => {
  return <LogOutUser logOut={logOut} isAuth={isAuth}/>
}

const mapStateToProps = (state: AppStateType) => ({
  isAuth: getIsAuthSelector(state)
})

export default connect(mapStateToProps, {logOut}
)(LogOutUserContainer)
