import React from 'react'
import Styles from './GeneralSidebar.module.scss'
import Avatar from '../avatar/Avatar'
import Menu from '../menu/Menu'
import {ProfileType} from '../../../api/ApiTypes'

type PropsType = {
  profile: ProfileType
  status: string
}
const Sidebar: React.FC<PropsType> = ({profile, status}) => {
  return (
    <aside className={Styles.menu}>
      <div className={Styles.wrapper}>
        <Avatar profile={profile} status={status}/>
        <Menu/>
      </div>
    </aside>
  )
}

export default Sidebar
