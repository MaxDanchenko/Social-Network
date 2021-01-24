import React from 'react'
import Styles from './LogOutUser.module.scss'
import {NavLink, Redirect} from 'react-router-dom'


const LogOutUser = ({logOut, isAuth}) => {
  if (!isAuth) {
    return <Redirect to={'ByePage'}/>
  }
  return (
    <div className={Styles.signWrap}>
      <NavLink to={'#'} onClick={logOut} className={Styles.sign}>
        Log Out
      </NavLink>
    </div>
  )
}

export default LogOutUser
