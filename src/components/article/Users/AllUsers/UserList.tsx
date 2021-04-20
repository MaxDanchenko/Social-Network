import React from 'react'
import Styles from '../Users.module.scss'
import {User} from './User'
import {FollowButton} from './FollowButton'
import {CurrentItemType} from '../../../../api/ApiTypes'

type PropsType = {
  users: Array<CurrentItemType>
}
export const UserList: React.FC<PropsType> = ({users}) => {
  return (
    <div>
      {users.map((el: any) => (
        <div key={el.id}>
          <div className={Styles.personWrap}>
            <User el={el}/>
            <FollowButton el={el}/>
          </div>
        </div>
      ))}
    </div>
  )
}