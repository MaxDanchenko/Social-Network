import React from 'react'
import Styles from '../AudioPlayer.module.scss'
import PrevIcon from '../../../../images/media-icons/previous.svg'
import NextIcon from '../../../../images/media-icons/next.svg'
type PropsType = {
  nextTrack: () => void
  prevTrack: () => void
  trackListLength: number
}
const TrackToggle: React.FC<PropsType> = ({trackListLength, nextTrack, prevTrack}) => {
  return (
    <>
      <div className={Styles.button}>
        <img className={Styles.buttonIcon} onClick={prevTrack} src={PrevIcon} alt=""/>
      </div>
      <div className={Styles.button} onClick={nextTrack}>
        <img className={Styles.buttonIcon} src={NextIcon} alt=""/>
      </div>
    </>
  )
}
export default TrackToggle
