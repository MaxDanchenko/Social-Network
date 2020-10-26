import React, {useEffect, useState} from 'react';
import Styles from './ProfileStatus.module.css'

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect( () => {
        setStatus(props.status)
    }, [props.status])

    const activateStatus = () => {
        setEditMode(true)
    }
    const deactivateStatus = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
            <div className={Styles.statusWrap}>
                <p onDoubleClick={activateStatus} className={Styles.status}>
                    {props.status || 'Write your status here'}
                </p>
            </div>
            }
            {editMode &&
            <div>
                <input onBlur={deactivateStatus} className={Styles.statusInput} onChange={onStatusChange}
                       autoFocus={true} type="textarea" maxLength={50} value={status}/>
            </div>
            }

        </div>
    )
}
export default ProfileStatusWithHooks;