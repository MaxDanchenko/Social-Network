import React, {useEffect, useRef, useState} from 'react'
import Styles from './AudioPlayer.module.scss'
import {src} from './AudioList'
import Repeat from './RepeatButton/RepeatButton'
import TrackToggle from './TrackToggle/TrackToggle'
import PlayPauseToggle from './PlayPauseToggle/PlayPauseToggle'
import TimeTrackSlider from './TimeTrackSlider/TimeTrackSlider'
import VolumeSlider from './VolumeSlider/VolumeSlider'


const Player: React.FC = () => {
  const [percentage, setPercentage] = useState<number>(0)
  const [isMuted, setIsMuted] = useState<boolean>(false)
  const [loopStatus, setLoopStatus] = useState<boolean>(false)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [duration, setDuration] = useState(0)
  const [currTime, setCurrTime] = useState(0)
  const [trackNum, setTrackNum] = useState(0)
  const audioRef = useRef(null)
  const nextTrack = () => {
    if (trackNum === src.length - 1) {
      return setTrackNum(0)
    } else if (trackNum >= 0) {
      return setTrackNum(trackNum + 1)
    }
  }
  const prevTrack = () => {
    if (trackNum) {
      return setTrackNum(trackNum - 1)
    } else if (!trackNum) {
      return setTrackNum(src.length - 1)
    }
  }
  useEffect(() => {
    const audio: any = audioRef.current
    if (duration) {
      setIsPlaying(true)
      audio.play()
    }
  }, [trackNum])
  useEffect(() => {
    const audio: any = audioRef.current
    if (percentage == 100.00) {
      setIsPlaying(false)
      nextTrack()
    }
  }, [percentage])
  const secondsToHms = (seconds: number) => {
    let duration = seconds
    let hours = duration / 3600
    duration = duration % 3600
    //@ts-ignore
    let min = parseInt(duration / 60)
    duration = duration % 60
    //@ts-ignore
    let sec = parseInt(duration)

    if (sec < 10) {
      //@ts-ignore
      sec = `0${sec}`
    }
    if (min < 10) {
      //@ts-ignore
      min = `${min}`
    }
    //@ts-ignore
    if (parseInt(hours, 10) > 0) {
      //@ts-ignore
      return `${parseInt(hours, 10)}:${min}:${sec}`
    } else if (min == 0) {
      return `0:${sec}`
    } else {
      return `${min}:${sec}`
    }
  }
  const getCurrDuration = (e: any) => {
    if (e.currentTarget.duration) {
      const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2)
      const time = ((e.currentTarget.duration / 100) * percentage).toFixed(2)
      //@ts-ignore
      setCurrTime(time)
      //@ts-ignore
      setPercentage(percent)
    }
  }
  const handleChange = (event: any, newValue: number) => {
    console.log({event})
    const audio: any = audioRef.current
    const handleTime = ((duration / 100) * newValue)
    if (audio) {
      audio.currentTime = handleTime
    }
    setPercentage(newValue)
  }
  const togglePlay = () => {
    const audio: any = audioRef.current
    audio.volume = 0.5
    if (!isPlaying) {
      setIsPlaying(true)
      audio.play()
    }
    if (isPlaying) {
      setIsPlaying(false)
      audio.pause()
    }
  }
  const loopingTrack = () => {
    const audio: any = audioRef.current
    if (!loopStatus) {
      setLoopStatus(true)
      audio.loop = true
    } else {
      setLoopStatus(false)
      audio.loop = false
    }
  }
  const setMuted = () => {
    const audio: any = audioRef.current
    if (!isMuted) {
      setIsMuted(true)
      audio.muted = true
    }
    if (isMuted) {
      setIsMuted(false)
      audio.muted = false
    }
  }
  const trackListLength = src.length
  return (
    <div className={Styles.wrap}>
      <audio src={src[trackNum].url}
             ref={audioRef}
             onTimeUpdate={getCurrDuration}
             onLoadedData={(e: any) => {
               setDuration(e.currentTarget.duration.toFixed(2))
             }}>
      </audio>
      <div className={Styles.audioPlayer}>
        <div className={Styles.btnWrap}>
          <Repeat loopStatus={loopStatus}
                  loopingTrack={loopingTrack}/>
          <TrackToggle trackListLength={trackListLength}
                       prevTrack={prevTrack}
                       nextTrack={nextTrack}/>
          <PlayPauseToggle togglePlay={togglePlay}
                           isPlaying={isPlaying}/>
          <VolumeSlider setMuted={setMuted}
                        isMuted={isMuted}/>
        </div>
        <TimeTrackSlider percentage={percentage}
                         handleChange={handleChange}
                         secondsToHms={secondsToHms}
                         duration={duration}
                         src={src[trackNum]}
                         currentTime={currTime}/>
      </div>
    </div>
  )
}

export default Player

