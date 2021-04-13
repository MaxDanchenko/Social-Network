import React, {ChangeEvent} from 'react'
import Styles from './Profile.module.scss'
import PreLoader from '../../CommonFiles/PreLoader/PreLoader'
import ProfileStatus from './ProfileStatus/ProfileStatus'
import {ProfileType} from '../../../api/ApiTypes'
import src from '../../../images/avatars/1.png'

type PropsType = {
  profile: ProfileType
  isOwner: boolean
  status: string

  updateStatus: (status: string) => void
  savePhoto: (e: File) => void
}
const Profile: React.FC<PropsType> = (props) => {
  if (!props.profile || !props.profile.contacts) {
    return <PreLoader/>
  }

  const addPhoto = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      props.savePhoto(e.target.files[0])
    }
  }
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.subWrapper}>
        <ul>
          <li className={Styles.profileItem}>
            Full Name:
            <span>{props.profile.fullName}</span>
          </li>
          <li className={Styles.profileItem}>
            About me:
            <span>
              {props.profile.aboutMe
                ? props.profile.aboutMe
                : 'React developer'}
            </span>
          </li>
          <li className={Styles.profileItem}>
            Job search status:
            <span>
              {props.profile.lookingForAJobDescription
                ? props.profile.lookingForAJobDescription
                : 'Looking for my dream company'}
            </span>
          </li>
          <li className={Styles.profileItem}>
            Contacts:
            <span>
              {props.profile.contacts.twitter
                ? props.profile.contacts.twitter
                : 'LinkedIn'}
            </span>
          </li>
        </ul>
      </div>
      {props.isOwner && (
        <label className={Styles.fileContainer}>
          Change photo
          <input onChange={addPhoto} type="file" hidden/>
        </label>
      )}
      <ProfileStatus
        status={props.status}
        updateStatus={props.updateStatus}
      />
    </div>
  )
}
export default Profile
