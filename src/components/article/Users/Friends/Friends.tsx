import React, {useEffect} from 'react'
import Styles from './Friends.module.scss'
import {FriendsType} from './FriendsContainer'


type PropsType = {
  friends: FriendsType
  getFriendsList: (friend: boolean) => void
}
const Friends: React.FC<PropsType> = ({friends, getFriendsList}) => {
  useEffect(() => {
    getFriendsList(true)
  }, [])
  return (
    <div className={Styles.mainWrap}>
      {friends.items && friends.items.map((el: any) => <div>
        <p>{el.name}</p>
        <p>{el.status}</p>
      </div>)
      }
    </div>
  )
}

export default Friends