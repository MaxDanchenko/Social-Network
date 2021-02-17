import React from 'react'
import Styles from './ProfileIcon.module.scss'


const ProfileIcon: React.FC = () => {
  return (
    <a href="#">
      <img
        src={require('../../../images/reactLogo.svg')}
        alt=""
        className={Styles.profileIcon}
      />
    </a>
  )
}

export default ProfileIcon
