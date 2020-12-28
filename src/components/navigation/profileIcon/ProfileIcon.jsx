import React from 'react';
import Styles from './ProfileIcon.module.scss';


const ProfileIcon = () => {
    return (
        <a href='#'><img src={require('../../../images/reactLogo.svg')} alt='' className={Styles.profileIcon} /></a>
    )
}

export default ProfileIcon;
