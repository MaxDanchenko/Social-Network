import React from 'react'
import Styles from './MainImg.module.scss'


const MainImg: React.FC = () => {
  return (
    <div className={Styles.backImgWrap}>
      <img
        src={require('../homePageImages/reactBg.jpg')}
        alt=""
        className={Styles.backImg}
      />
    </div>
  )
}

export default MainImg
