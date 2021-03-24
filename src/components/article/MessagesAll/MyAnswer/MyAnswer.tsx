import React from 'react'
import Styles from './MyAnswer.module.scss'
import cn from 'classnames'

type PropsType = {
  message: string
}

const MyAnswer: React.FC<PropsType> = ({message}) => {
  return (
    <div className={cn(Styles.dialog, Styles.myDialog)}>
      <p className={Styles.post}>{message}</p>
    </div>
  )
}

export default MyAnswer
