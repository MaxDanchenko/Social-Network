import React from 'react'
import Styles from './ProfileIcon.module.scss'


const ProfileIcon: React.FC = () => {
  return (
    <a href="#" className={Styles.profileIconWrap}>
      <img
        src={require('../../../images/gif/reactSquare.gif')}
        alt=""
        className={Styles.profileIcon}
      />
    </a>
  )
}

export default ProfileIcon
