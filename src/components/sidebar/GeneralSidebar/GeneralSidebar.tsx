import React from 'react'
import Styles from './GeneralSidebar.module.scss'
import HomePage from '../HomePage/HomePage'
import Menu from '../Menu/Menu'
import Button from '../Button/Button'
import {ProfileType} from "../../../api/apiTyper";

type PropsType = {
  profile: ProfileType
  status: string
}
const Sidebar: React.FC<PropsType> = ({profile, status}) => {
  return (
    <aside className={Styles.menu}>
      <div className={Styles.wrapper}>
        <HomePage profile={profile} status={status}/>
        <Menu/>
        <Button/>
      </div>
    </aside>
  )
}

export default Sidebar
