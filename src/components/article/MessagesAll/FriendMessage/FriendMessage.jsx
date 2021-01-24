import React from 'react'
import Styles from './FriendMessage.module.scss'


const FriendMessage = (props) => {
  return (
    <div className={Styles.dialog}>
      <p className={Styles.post}>{props.msg}</p>
    </div>
  )
}

export default FriendMessage
