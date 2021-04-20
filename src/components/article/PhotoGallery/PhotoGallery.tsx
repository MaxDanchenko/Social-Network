import React from 'react'
import Styles from './PhotoGallery.module.scss'
import {PreLoader} from '../../CommonFiles/PreLoader/PreLoader'


const PhotoGallery: React.FC = () => {
  return (
    <div className={Styles.wrap}>
      coming soon...
      <PreLoader/>
    </div>
  )
}
export default PhotoGallery
