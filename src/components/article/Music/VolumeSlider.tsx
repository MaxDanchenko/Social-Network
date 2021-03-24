import React from 'react'
import Styles from './AudioPlayer.module.scss'
import VolumeIcon from '../../../images/media-icons/volume.png'


type PropsType = {}
const VolumeSlider: React.FC<PropsType> = () => {
  return (
    <>
      <div className={Styles.button}>
        <img className={Styles.buttonIcon} src={VolumeIcon} alt=""/>
      </div>
    </>
  )
}

export default VolumeSlider
