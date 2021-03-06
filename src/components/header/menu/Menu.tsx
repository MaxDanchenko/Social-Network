import React from 'react'
import Styles from './Menu.module.scss'


const NavMenu: React.FC = () => {
  return (
    <ul className={Styles.table}>
      <li className={Styles.list}>
        <a href="" className={Styles.link}>
          <img
            src={require('../headerImages/icon_friends.png')}
            alt=""
            className={Styles.image}
          />
        </a>
      </li>
      <li className={Styles.list}>
        <a href="" className={Styles.link}>
          <img
            src={require('../headerImages/icon_messages.png')}
            alt=""
            className={Styles.image}
          />
        </a>
      </li>
      <li className={Styles.list}>
        <a href="" className={Styles.link}>
          <img
            src={require('../headerImages/icon_globe_active.png')}
            alt=""
            className={Styles.image}
          />
        </a>
      </li>
    </ul>
  )
}

export default NavMenu
