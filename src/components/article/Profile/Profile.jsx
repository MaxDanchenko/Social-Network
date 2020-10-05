import React from "react";
import Styles from './Profile.module.css'
import PreLoader from "../../GeneralStyles/PreLoader";
import avatar from '../../../images/avatars/annUser.jpg'
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";

const Profile = (props) => {
    if (!props.profile) {
      return  <PreLoader/>
    }
    return (
        <div className={Styles.wrapper}>
            <div className={Styles.subWrapper}>
                <img className={Styles.avatar} src={props.profile.photos.small != null ? props.profile.photos.small : avatar} alt='avatar'/>
                <ul>
                    <li className={Styles.profileItem}>Full Name: {props.profile.fullName}</li>
                    <li className={Styles.profileItem}>About me: {props.profile.aboutMe}</li>
                    <li className={Styles.profileItem}>Job search status: {props.profile.lookingForAJobDescription} </li>
                    <li className={Styles.profileItem}>user id: {props.profile.userId}</li>
                    <li className={Styles.profileItem}>contacts: {props.profile.contacts.twitter}</li>
                </ul>
            </div>
            <ProfileStatus/>
        </div>

    )

}
export default Profile