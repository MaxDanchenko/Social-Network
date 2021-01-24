import React from 'react'
import Styles from './MyAnswer.module.scss'
import cn from 'classnames'


const MyAnswer = (props) => {
  return (
    <div className={cn(Styles.dialog, Styles.myDialog)}>
      <p className={Styles.post}>{props.message}</p>
    </div>
  )
}

export default MyAnswer
