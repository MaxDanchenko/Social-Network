import React from 'react'
import Styles from '../AudioPlayer.module.scss'
import RepeatIcon from '../../../../images/media-icons/progress-arrows-active.svg'
import ActiveRepeatIcon from '../../../../images/media-icons/progress-arrows.svg'

type PropsType = {
  loopingTrack: () => void
  loopStatus: boolean
}
const Repeat: React.FC<PropsType> = ({loopingTrack, loopStatus}) => {
  return (
    <>
      {loopStatus
        ?
        <div className={Styles.button} onClick={loopingTrack}>
          <img className={Styles.buttonIcon} src={RepeatIcon} alt=""/>
        </div>
        :
        <div className={Styles.button} onClick={loopingTrack}>
          <img className={Styles.buttonIcon} src={ActiveRepeatIcon} alt=""/>
        </div>
      }
    </>
  )
}

export default Repeat
