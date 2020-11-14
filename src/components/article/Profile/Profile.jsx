import React from "react";
import Styles from './Profile.module.css'
import PreLoader from "../../CommonFiles/PreLoader/PreLoader";
import avatar from '../../../images/avatars/annUser.jpg'
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWIthHooks";
import {setProfilePhoto} from "../../../Redux/profileReducer";

const Profile = (props) => {
    if (!props.profile) {
      return  <PreLoader/>
    }
    const addPhoto = (e) => {
        if (e.target.files.length) {
           props.savePhoto (e.target.files[0])
        }
    }

    return (
        <div className={Styles.wrapper}>
            <div className={Styles.subWrapper}>
                <img className={Styles.avatar} src={props.profile.photos.large != undefined ? props.profile.photos.large : avatar} alt='avatar'/>
                <ul>
                    <li className={Styles.profileItem}>Full Name: {props.profile.fullName}</li>
                    <li className={Styles.profileItem}>About me: {props.profile.aboutMe}</li>
                    <li className={Styles.profileItem}>Job search status: {props.profile.lookingForAJobDescription} </li>
                    <li className={Styles.profileItem}>user id: {props.profile.userId}</li>
                    <li className={Styles.profileItem}>contacts: {props.profile.contacts.twitter}</li>
                </ul>
            </div>
            {props.isOwner && <input onChange={addPhoto} type="file" accept=".jpg, .jpeg, .png"/>}
            <ProfileStatusWithHooks profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
        </div>

    )

}
export default Profile