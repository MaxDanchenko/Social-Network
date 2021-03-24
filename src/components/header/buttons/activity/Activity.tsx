import React from 'react'
import Styles from './Activity.module.scss'
import cn from 'classnames'


const Activity: React.FC = () => {
  return (
    <div className={Styles.wrap}>
      <ul className={Styles.table}>
        <li className={Styles.list}>
          <a className={Styles.link} href="#">
            {' '}
            <img
              src={require('../../HeaderImages/active-like.png')}
              alt=""
              className={Styles.icon}
            />
            Liked
          </a>
        </li>
        <li className={Styles.list}>
          <a className={Styles.link} href="#">
            <img
              src={require('../../HeaderImages/icon_message.png')}
              alt=""
              className={Styles.icon}
            />
            Message
          </a>
        </li>
        <li className={Styles.list}>
          <a className={cn(Styles.link, Styles.small_link)} href="#">
            <img
              src={require('../../HeaderImages/icon_dots.png')}
              alt=""
              className={cn(Styles.icon, Styles.small_icon)}
            />
            More
            <img
              src={require('../../HeaderImages/arrow-down.png')}
              alt=""
              className={cn(Styles.icon, Styles.small_icon)}
            />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Activity
