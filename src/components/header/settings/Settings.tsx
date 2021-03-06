import React from 'react'
import Styles from './Settings.module.scss'
import cn from 'classnames'


const Settings: React.FC = () => {
  return (
    <ul className={cn(Styles.table, Styles.table_small)}>
      <li className={cn(Styles.list, Styles.small)}>
        <a href="" className={Styles.link}>
          <img
            src={require('../headerImages/icon_lock.png')}
            alt=""
            className={cn(Styles.image, Styles.small)}
          />
        </a>
      </li>
      <li className={cn(Styles.list, Styles.small)}>
        <a href="" className={Styles.link}>
          <img
            src={require('../headerImages/more-info.png')}
            alt=""
            className={cn(Styles.image, Styles.small)}
          />
        </a>
      </li>
    </ul>
  )
}

export default Settings
