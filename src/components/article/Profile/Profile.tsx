import React, {ChangeEvent} from 'react'
import Styles from './Profile.module.scss'
import {PreLoader} from '../../CommonFiles/PreLoader/PreLoader'
import ProfileStatus from './ProfileStatus/ProfileStatus'
import {savePhoto} from '../../../Redux/profileReducer'
import {useDispatch, useSelector} from 'react-redux'
import {getIdSelector, getProfileIdSelector, getProfileSelector} from '../../../Redux/selectors'


export const Profile = () => {
  const profile = useSelector(getProfileSelector)
  const profileId = useSelector(getProfileIdSelector)
  const ownerId = useSelector(getIdSelector)
  const dispatch = useDispatch()
  const saveNewPhoto = (e: File) => {
    dispatch(savePhoto(e))
  }
  if (!profile || !profile.contacts) {
    return <PreLoader/>
  }
  const addPhoto = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      saveNewPhoto(e.target.files[0])
    }
  }
  const profileItems = [
    {id: 1, name: 'Full Name:', content: profile.fullName},
    {id: 2, name: 'About me:', content: profile.aboutMe || 'React developer'},
    {id: 3, name: 'Job search status:', content: profile.lookingForAJobDescription || 'Looking for my dream company'},
    {id: 4, name: 'Contacts:', content: profile.contacts.twitter || 'LinkedIn'},
  ]
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.subWrapper}>
        <ul>
          {
            profileItems.map(el => {
              return <li key={el.id} className={Styles.profileItem}>
                {el.name}
                <span>{el.content}</span>
              </li>
            })
          }
        </ul>
      </div>
      <ProfileStatus profileId={profileId} ownerId={ownerId}/>
      {
        ownerId === profileId && <label className={Styles.fileContainer}>
          Change photo
          <input onChange={addPhoto} type="file" hidden/>
        </label>
      }
    </div>
  )
}
