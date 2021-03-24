import React, {useState} from 'react'
import Styles from './AudioPlayer.module.scss'
import Slider from '@material-ui/core/Slider'

function valueLabelFormat(value: number) {
  const [coefficient, exponent] = value
    .toExponential()
    .split('e')
    .map((item) => Number(item))
  return `${Math.round(coefficient)}e^${exponent}`
}

type PropsType = {
  audioRef: any
}
const TimeTrackSlider: React.FC<PropsType> = ({audioRef}) => {
  const [value, setValue] = useState<number | number[]>(0)
  const handleChange = (event: any, newValue: number | number[]) => {
    setValue(newValue)
  }
  if (audioRef.current) {
    let duration = audioRef.current.duration
  }
  return (
    <div className={Styles.timeSlider}>
      <Slider
        value={value}
        min={0}
        step={0.1}
        max={6}
        scale={(x) => x ** 10}
        getAriaValueText={valueLabelFormat}
        valueLabelFormat={valueLabelFormat}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="non-linear-slider"
      />
    </div>
  )
}

export default TimeTrackSlider

