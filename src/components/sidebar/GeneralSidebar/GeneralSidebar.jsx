import React from 'react'
import Styles from './GeneralSidebar.module.scss'
import HomePage from '../HomePage/HomePage'
import Menu from '../Menu/Menu'
import Button from '../Button/Button'

const Sidebar = (props) => {
  return (
    <aside className={Styles.menu}>
      <div className={Styles.wrapper}>
        <HomePage profile={props.profile} status={props.status} />
        <Menu />
        <Button />
      </div>
    </aside>
  )
}

export default Sidebar
