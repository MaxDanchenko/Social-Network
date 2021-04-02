import React from 'react'
import Styles from '../AudioPlayer.module.scss'
import VolumeIcon from '../../../../images/media-icons/volume.svg'
import MuteIcon from '../../../../images/media-icons/mute.svg'


type PropsType = {
  isMuted: boolean
  setMuted: () => void
}
const VolumeSlider: React.FC<PropsType> = ({isMuted, setMuted}) => {
  return (
    <>
      {
        isMuted ?
          <div className={Styles.button}>
            <img className={Styles.buttonIcon} onClick={setMuted} src={MuteIcon} alt=""/>
          </div>
          :
          <div className={Styles.button}>
            <img className={Styles.buttonIcon} onClick={setMuted} src={VolumeIcon} alt=""/>
          </div>
      }
    </>
  )
}

export default VolumeSlider
