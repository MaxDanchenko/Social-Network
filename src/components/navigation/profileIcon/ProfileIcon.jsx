import React from 'react';
import Styles from './ProfileIcon.module.scss';


const ProfileIcon = () => {
    return (
        <a href='/Home'><img src={require('../ImagesNav/logo_facebook.png')} alt='' className={Styles.fbook} /></a>
    )
}

export default ProfileIcon;
