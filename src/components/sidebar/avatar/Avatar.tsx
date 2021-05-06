import React from 'react'
import Styles from './Avatar.module.scss'
import {PreLoader} from '../../commonFiles/PreLoader/PreLoader'
import avatar from '../../../images/avatars/annUser.jpg'
import {ProfileType} from '../../../api/ApiTypes'
import {NavLink} from 'react-router-dom'

type PropsType = {
  profile: ProfileType
  status: string
}
const Avatar: React.FC<PropsType> = ({profile, status}) => {
  if (!profile.photos) {
    return <PreLoader/>
  }
  return (
    <div className={Styles.main}>
      <NavLink className={Styles.linkPerson} to={'/profile/' + profile.userId}>
        <img
          src={profile.photos.large || avatar}
          alt="avatar"
          className={Styles.profiles}
        />
      </NavLink>
      <h1 className={Styles.names}>{profile.fullName}</h1>
      <p className={Styles.subName}>{status}</p>
    </div>
  )
}

export default Avatar
