import React, {FormEvent, useEffect, useState} from 'react'
import Styles from './ProfileStatus.module.scss'


type PropsType = {
  status: string
  updateStatus: (status: string) => void
}
const ProfileStatus: React.FC<PropsType> = (props) => {
  let [editMode, setEditMode] = useState(false)
  let [status, setStatus] = useState(props.status)
  
  useEffect(() => {
    setStatus(props.status)
  }, [props.status])
  
  const activateStatus = () => {
    setEditMode(true)
  }
  const deactivateStatus = () => {
    setEditMode(false)
    props.updateStatus(status)
  }
  const setDeactivateStatus = (e: any) => {
    if(e.key === 'Enter'){
      deactivateStatus()
    }
  }
  const onStatusChange = (e: FormEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value)
  }
  
  return (
    <div>
      {!editMode && (
        <div className={Styles.statusWrap}>
          <p className={Styles.status}> status: </p>
          <p onDoubleClick={activateStatus} className={Styles.status}>
            {props.status || 'Double click on me and write your status :)'}
          </p>
        </div>
      )}
      {editMode && (
        <div>
          <input
            onBlur={deactivateStatus}
            onKeyPress={setDeactivateStatus}
            className={Styles.statusInput}
            onChange={onStatusChange}
            autoFocus={true}
            type="textarea"
            maxLength={50}
            value={status}
          />
        </div>
      )}
    </div>
  )
}
export default ProfileStatus
