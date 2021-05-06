import React from 'react'
import Styles from './HomePage.module.scss'
import MainImg from '../mainImg/MainImg'
import Contact from '../buttons/contact/Contact'
import Activity from '../buttons/activity/Activity'


const HomePage: React.FC = () => {
  return (
    <div className={Styles.wrap}>
      <MainImg/>
      <div className={Styles.subWrap}>
        <Activity/>
        <Contact/>
      </div>
    </div>
  )
}

export default HomePage
