import React from 'react'
import Styles from './AudioPlayer.module.scss'
import PlayIcon from '../../../images/media-icons/play-button.png'
import PauseIcon from '../../../images/media-icons/pause.png'

type PropsType = {
  isPlaying: boolean
  togglePlay: () => void
}
const PlayPauseToggle: React.FC<PropsType> = ({togglePlay, isPlaying}) => {
  return (
    <>
      {
        !isPlaying ?
          <div onClick={togglePlay} className={Styles.button}>
            <img className={Styles.buttonIcon} src={PlayIcon} alt=""/>
          </div>
          :
          <div onClick={togglePlay} className={Styles.button}>
            <img className={Styles.buttonIcon} src={PauseIcon} alt=""/>
          </div>
      }
    </>
  )
}

export default PlayPauseToggle
