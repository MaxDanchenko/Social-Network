import React from 'react'
import Styles from './HomePage.module.scss'
import PreLoader from '../../CommonFiles/PreLoader/PreLoader'
import avatar from '../../../images/avatars/annUser.jpg'


const HomePage = (props) => {
  if (!props.profile.photos) {
    return <PreLoader/>
  }
  return (
    <div className={Styles.main}>
      <img
        src={props.profile.photos.large || avatar}
        alt="avatar"
        className={Styles.profiles}
      />
      <h1 className={Styles.names}>{props.profile.fullName}</h1>
      <p className={Styles.subName}>{props.status}</p>
    </div>
  )
}

export default HomePage
