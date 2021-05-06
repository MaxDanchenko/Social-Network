import React from 'react'
import Styles from './UserList.module.scss'
import {User} from './User'
import {FollowButton} from './FollowButton'
import {CurrentItemType} from '../../../api/ApiTypes'

type PropsType = {
  users: Array<CurrentItemType>
  handleHideResult?: () => void
}
export const UserList: React.FC<PropsType> = ({users, handleHideResult}) => {
  const hideResult = () => {
    handleHideResult && handleHideResult()
  }
  return (
    <div>
      {users.map((el: any) => (
        <div key={el.id} onClick={hideResult}>
          <div className={Styles.personWrap}>
            <User el={el}/>
            <FollowButton el={el}/>
          </div>
        </div>
      ))}
    </div>
  )
}