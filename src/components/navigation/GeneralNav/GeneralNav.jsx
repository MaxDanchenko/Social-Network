import React from 'react'
import Styles from './GeneralNav.module.scss'
import ProfileIcon from '../profileIcon/ProfileIcon'
import Search from '../search/Search'
import Settings from '../settings/Settings'
import NavMenu from '../menu/Menu'
import LoginUserContainer from '../../header/LogOutUser/LogOutUserContainer'


const GeneralNav = () => {
  return (
    <nav className={Styles.nav}>
      <div className={Styles.navWrap}>
        <form className={Styles.form}>
          <ProfileIcon/>
          <Search/>
        </form>
        <div className={Styles.icons}>
          <NavMenu/>
          <Settings/>
          <LoginUserContainer/>
        </div>
      </div>
    </nav>
  )
}

export default GeneralNav
