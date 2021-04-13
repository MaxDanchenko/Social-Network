import React, { useState } from 'react'
import Styles from './VolumeSlider.module.scss'
import VolumeIcon from '../../../../images/media-icons/volume.svg'
import MuteIcon from '../../../../images/media-icons/mute.svg'
import Slider from '@material-ui/core/Slider'


type PropsType = {
  isMuted: boolean
  setMuted: () => void
}
function valueLabelFormat(value: number) {
  const [coefficient, exponent] = value
    .toExponential()
    .split('e')
    .map((item) => Number(item));
  return `${Math.round(coefficient)}e^${exponent}`;
}
const VolumeSlider: React.FC<PropsType> = ({isMuted, setMuted}) => {
  const [hover, setHover] = useState(false)
  const [value, setValue] = React.useState<number | number[]>(1);

  const handleChange = (event: any, newValue: number | number[]) => {
    setValue(newValue);
  };
  const showSlider = () => {
    if (!hover) {
      setHover(true)
    }
  }
  const hideSlider = () => {
    setHover(false)
  }
  return (
    <>
      {
        isMuted ?
          <div className={Styles.button}>
            <img className={Styles.buttonIcon} onClick={setMuted} src={MuteIcon} alt=""/>
          </div>
          :
          <div className={Styles.button} onMouseEnter={showSlider}>
            <img className={Styles.buttonIcon} onClick={setMuted} src={VolumeIcon} alt=""/>
          </div>
      }
      {/*{ <Slider*/}
      {/*  min={0}*/}
      {/*  step={0.1}*/}
      {/*  max={6}*/}
      {/*  scale={(x) => x ** 10}*/}
      {/*  getAriaValueText={valueLabelFormat}*/}
      {/*  valueLabelFormat={valueLabelFormat}*/}
      {/*  valueLabelDisplay="auto"*/}
      {/*  aria-labelledby="non-linear-slider"*/}
      {/*/>*/}
      {/*}*/}
    </>
  )
}

export default VolumeSlider
