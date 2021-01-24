import React from 'react'
import Styles from './byePage.module.scss'
import {NavLink} from 'react-router-dom'
import img from '../../images/smiley.png'


const ByePage = () => {
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.imgWrap}>
        <img className={Styles.img} src={img} alt="Smiley"/>
      </div>
      <NavLink to={'Sign In'} className={Styles.goBack}>
        Go back
      </NavLink>
    </div>
  )
}
export default ByePage
