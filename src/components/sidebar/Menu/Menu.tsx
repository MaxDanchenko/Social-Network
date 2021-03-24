import React, {useState} from 'react'
import Styles from './Menu.module.scss'
import {NavLink} from 'react-router-dom'
import HomeIcon from '../../../images/menu-icons/home.png'
import ProfileIcon from '../../../images/menu-icons/profile-user.png'
import MessageIcon from '../../../images/menu-icons/email.png'
import UsersIcon from '../../../images/menu-icons/multiple-users-silhouette.png'
import PhotoIcon from '../../../images/menu-icons/camera-to-take-photos.png'
import VideoIcon from '../../../images/menu-icons/video-player.png'
import MusicIcon from '../../../images/menu-icons/music.png'

const Menu: React.FC = () => {
  const [menu] = useState([
    {id: '1', linkTo: '/Home', menuName: 'Home', icon: HomeIcon},
    {id: '2', linkTo: '/Profile', menuName: 'Profile', icon: ProfileIcon},
    {id: '3', linkTo: '/Messages', menuName: 'Messages', icon: MessageIcon},
    {id: '4', linkTo: '/Users', menuName: 'Users', icon: UsersIcon},
    {id: '5', linkTo: '/Music', menuName: 'Music', icon: MusicIcon},
    {id: '6', linkTo: '/Photos', menuName: 'Photos', icon: PhotoIcon},
    {id: '7', linkTo: '/Videos', menuName: 'Videos', icon: VideoIcon},
  ])
  return (
    <ul className={Styles.table}>
      {
        menu.map(el =>
          <li key={el.id} className={Styles.list}>
            <NavLink activeClassName={Styles.activeListItem} to={el.linkTo} className={Styles.link}>
              <img className={Styles.menuLinkIcon} src={el.icon} alt="icon "/>
              <div className={Styles.menuLinkItem}>{el.menuName}</div>
            </NavLink>
          </li>)
      }
    </ul>
  )
}

export default Menu
