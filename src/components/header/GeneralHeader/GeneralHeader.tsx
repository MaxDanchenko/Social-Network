import React from 'react'
import Styles from './GeneralHeader.module.scss'
import MainImg from '../mainImg/MainImg'
import Contact from '../buttons/contact/Contact'
import Activity from '../buttons/activity/Activity'


const GeneralHeader: React.FC = () => {
  return (
    <header className={Styles.head}>
      <MainImg/>
      <div className={Styles.wrap}>
        <Activity/>
        <Contact/>
      </div>
    </header>
  )
}

export default GeneralHeader
