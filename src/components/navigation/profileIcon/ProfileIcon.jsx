import React from 'react';
import Styles from './ProfileIcon.module.scss';


const ProfileIcon = () => {
    return (
        <a href='/Home'><img src={require('../../../images/reactLogo.svg')} alt='' className={Styles.fbook} /></a>
    )
}

export default ProfileIcon;
