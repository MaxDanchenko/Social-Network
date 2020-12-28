import React from "react";
import Styles from './Profile.module.scss'
import PreLoader from "../../CommonFiles/PreLoader/PreLoader";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWIthHooks";

const Profile = (props) => {
    if (!props.profile) {
        return <PreLoader/>
    }
    const addPhoto = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    return (
        <div className={Styles.wrapper}>
            <div className={Styles.subWrapper}>
                <ul>
                    <li className={Styles.profileItem}>Full Name:
                        <span>
                            {props.profile.fullName}
                        </span>
                    </li>
                    <li className={Styles.profileItem}>About me:
                        <span>
                            {props.profile.aboutMe ? props.profile.aboutMe : 'React developer'}
                        </span>
                    </li>
                    <li className={Styles.profileItem}>Job search status:
                        <span>
                            {props.profile.lookingForAJobDescription ? props.profile.lookingForAJobDescription : 'Looking for my dream company'}
                        </span>
                    </li>
                    <li className={Styles.profileItem}>Contacts:
                        <span>
                            {props.profile.contacts.twitter ? props.profile.contacts.twitter : 'LinkedIn'}
                        </span>
                    </li>
                </ul>
            </div>
            {props.isOwner &&
            <label className={Styles.fileContainer}>
                Change photo
                <input onChange={addPhoto} type="file" hidden/>
            </label>}
            <ProfileStatusWithHooks profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
        </div>
    )
}
export default Profile