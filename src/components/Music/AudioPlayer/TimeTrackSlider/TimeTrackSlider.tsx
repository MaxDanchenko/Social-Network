import React from 'react'
import Styles from './TimeTrackSlider.module.scss'
import Slider from '@material-ui/core/Slider'
import './Slider.scss'


type PropsType = {
  currentTime: number
  duration: number
  secondsToHms: (e: number) => any
  percentage: number
  handleChange: (e: any, value: any) => void
}
const TimeTrackSlider: React.FC<PropsType> = ({currentTime,
                                                duration,
                                                secondsToHms,
                                                percentage,
                                                handleChange,}) => {
  if (!currentTime) {
    currentTime = 0.01
  }
  return (
    <div className={Styles.timeLineWrap}>
      <div className={Styles.time}>{secondsToHms(currentTime)}</div>
      <div className={Styles.timeSlider}>
        <Slider
          ThumbComponent={'br'}
          className={Styles.slider}
          value={percentage}
          min={0}
          step={1}
          max={100}
          scale={(x) => x ** 10}
          onChange={handleChange}
          placeholder={'Позови меня с собой'}
        />
      </div>
      <div className={Styles.time}>{secondsToHms(duration)}</div>
    </div>
  )
}

export default TimeTrackSlider

