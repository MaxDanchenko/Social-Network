import React, {useCallback, useState} from 'react'
import Cropper from 'react-easy-crop'
import src from '../../../images/avatars/5.png'

type PropsType = {
  photo: any
}
const ProfilePhoto: React.FC<PropsType> = ({photo}) => {
  const [crop, setCrop] = useState({x: 0, y: 0})
  const [zoom, setZoom] = useState(1)
debugger
  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels)
  }, [])
  return (
    <div>
      <Cropper
        image={photo}
        crop={crop}
        zoom={zoom}
        aspect={4 / 3}
        onCropChange={setCrop}
        onCropComplete={onCropComplete}
        onZoomChange={setZoom}
      />
    </div>
  )
}

export default ProfilePhoto
