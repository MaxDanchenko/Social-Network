import React, {FormEvent, useEffect, useState} from 'react'
import Styles from './ProfileStatus.module.scss'
import {useDispatch, useSelector} from 'react-redux'
import {getStatusSelector} from '../../../../Redux/selectors'
import {updateStatus} from '../../../../Redux/profileReducer'


type PropsType = {
  ownerId: number
  profileId: number
}
const ProfileStatus: React.FC<PropsType> = ({ownerId, profileId}) => {
  const status = useSelector(getStatusSelector)
  const [editMode, setEditMode] = useState(false)
  const [newStatus, setNewStatus] = useState(status)
  const dispatch = useDispatch()
  const updateMyStatus = (status: string) => {
    dispatch(updateStatus(status))
  }
  useEffect(() => {
    setNewStatus(status)
  }, [status])

  const activateStatus = () => {
    setEditMode(true)
  }
  const deactivateStatus = () => {
    setEditMode(false)
    updateMyStatus(newStatus)
  }
  const setDeactivateStatus = (e: any) => {
    if (e.key === 'Enter') {
      deactivateStatus()
    }
  }
  const onStatusChange = (e: FormEvent<HTMLInputElement>) => {
    setNewStatus(e.currentTarget.value)
  }
  return (
    <div>
      {!editMode && ownerId === profileId ?
        <div className={Styles.statusWrap}>
          <p className={Styles.status}> status: </p>
          <p onDoubleClick={activateStatus} className={Styles.status}>
            {status || 'Double click on me and write your status :)'}
          </p>
        </div> : null
      }
      {editMode && ownerId === profileId ?
        <div className={Styles.editStatusWrap}>
          <input
            className={Styles.newStatusInput}
            onBlur={deactivateStatus}
            onKeyPress={setDeactivateStatus}
            onChange={onStatusChange}
            autoFocus={true}
            type="textarea"
            maxLength={50}
            value={newStatus}
          />
        </div> : null
      }
    </div>
  )
}
export default ProfileStatus
