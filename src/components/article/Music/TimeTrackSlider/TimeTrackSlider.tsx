import React from 'react'
import Styles from './TimeTrackSlider.module.scss'
import Slider from '@material-ui/core/Slider'
import './Slider.scss'

type srcType = {
  id: number
  trackName: string
  url: string
}
type PropsType = {
  currentTime: number
  duration: number
  secondsToHms: (e: number) => any
  percentage: number
  handleChange: (e: any, value: any) => void
  src: srcType
}
const TimeTrackSlider: React.FC<PropsType> = ({
                                                src,
                                                currentTime,
                                                duration,
                                                secondsToHms,
                                                percentage,
                                                handleChange,
                                              }) => {
  if (!currentTime) {
    currentTime = 0.01
  }
  return (
    <div className={Styles.timeLineWrap}>
      <div className={Styles.time}>{secondsToHms(currentTime)}</div>
      <div className={Styles.trackName}>
        {src.trackName}
      </div>
      <div className={Styles.timeSlider}>
        <Slider
          className={Styles.slider}
          value={percentage}
          min={0}
          step={1}
          max={100}
          scale={(x) => x ** 10}
          onChange={handleChange}
        />
      </div>
      <div className={Styles.time}>{secondsToHms(duration)}</div>
    </div>
  )
}

export default TimeTrackSlider

