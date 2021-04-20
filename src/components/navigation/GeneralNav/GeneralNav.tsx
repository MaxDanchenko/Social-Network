import React from 'react'
import Styles from './GeneralNav.module.scss'
import ProfileIcon from '../profileIcon/ProfileIcon'
import Search from '../search/Search'
import Settings from '../settings/Settings'
import NavMenu from '../menu/Menu'
import LoginUserContainer from '../../header/LogOutUser/LogOutUserContainer'
import Player from '../../article/Music/AudioPlayer'



const GeneralNav: React.FC = () => {
  return (
    <nav className={Styles.nav}>
      <div className={Styles.navWrap}>
        <div className={Styles.form}>
          <ProfileIcon/>
          <Search/>
        </div>
        <Player />
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
