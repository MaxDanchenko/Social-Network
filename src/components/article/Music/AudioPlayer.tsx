import React, {useEffect, useRef, useState} from 'react'
import Styles from './AudioPlayer.module.scss'
import {src} from './AudioList'
import Repeat from './RepeatButton'
import TrackToggle from './TrackToggle'
import PlayPauseToggle from './PlayPauseToggle'
import TimeTrackSlider from './TimeTrackSlider'


const Player: React.FC = () => {
  const [loopStatus, setLoopStatus] = useState<boolean>(false)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [duration, setDuration] = useState<any>(null)
  const [currentTime, setCurrentTime] = useState<string>('0:00')
  const [track, setTrack] = useState<number>(0)
  const audioRef = useRef(null)
  const nextTrack = () => {
    if (track === src.length - 1) {
      return setTrack(0)
    } else if (track >= 0) {
      return setTrack(track + 1)
    }
  }
  const prevTrack = () => {
    if (track) {
      return setTrack(track - 1)
    } else if (!track) {
      return setTrack(src.length - 1)
    }
  }
  useEffect(() => {
    const audio: any = audioRef.current
    if (duration) {
      audio.play()
    }
  }, [track])

  // let a = 193.673469 // duration from object
  // let b = (a / 60).toFixed(1) // cut number
  // let c = ((b.split('.').splice(1) + 0) * (60 / 100)) // seconds part
  // let d = b.split('.').splice(0, 1) // minutes part
  // let e = `${d}:${c}` // result min + sec
//175.673469
  const changeDuration = (e: any) => {
    e = (e.duration / 60).toFixed(1)  // cut
    const minutes = e.split('.').splice(0, 1) // minutes part
    const seconds = ((e.split('.').splice(1) + 0) * (60 / 100)) // seconds part
    const result = `${minutes}:${seconds}` // result min + sec
    setDuration(result)
  }
  const togglePlay = () => {
    const audio: any = audioRef.current
    changeDuration(audio)
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
  let trackListLength = src.length
  return (
    <div className={Styles.wrap}>
      <audio src={src[track]} ref={audioRef}>
      </audio>
      <div className={Styles.audioPlayer}>
        <div className={Styles.btnWrap}>
          <Repeat loopStatus={loopStatus} loopingTrack={loopingTrack}/>
          <TrackToggle trackListLength={trackListLength} prevTrack={prevTrack} nextTrack={nextTrack}/>
          <PlayPauseToggle togglePlay={togglePlay} isPlaying={isPlaying}/>
        </div>
        <div className={Styles.timeLineWrap}>
          <div>{currentTime || '0:00'}</div>
          <div className={Styles.trackName}>Imagine Dragons - Follow you</div>
          <TimeTrackSlider audioRef={audioRef}/>
          <div>{duration || '0:00'}</div>
        </div>
      </div>
    </div>
  )
}

export default Player

