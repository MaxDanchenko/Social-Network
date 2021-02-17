import React from 'react'
import Styles from './MainImg.module.scss'


const MainImg: React.FC = () => {
  return (
    <div className={Styles.backImgWrap}>
      <img
        src={require('../HeaderImages/reactBg.jpg')}
        alt=""
        className={Styles.backImg}
      />
    </div>
  )
}

export default MainImg
