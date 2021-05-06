import React from 'react'
import Styles from './UserList.module.scss'
import {NavLink} from 'react-router-dom'
import avatar from '../../../images/menu-icons/profile-user.png'
import {CurrentItemType} from '../../../api/ApiTypes'

type PropsType = {
  el: CurrentItemType
}
export const User: React.FC<PropsType> = ({el}) => {
  return (
    <div className={Styles.personSubWrap}>
      <NavLink className={Styles.link} to={'/profile/' + el.id}>
        <img
          className={Styles.avatar}
          src={el.photos.small != null ? el.photos.small : avatar}
          alt="avatar"
        />
      </NavLink>
      <ul className={Styles.person}>
        <NavLink className={Styles.linkPerson} to={'/profile/' + el.id}>
          <li className={Styles.personName}>{el.name}</li>
          <li className={Styles.aboutPerson}>
            'React developer'
          </li>
        </NavLink>
      </ul>
    </div>
  )
}