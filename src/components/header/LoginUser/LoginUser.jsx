import React from 'react';
import Styles from './LoginUser.module.scss';
import {NavLink} from "react-router-dom";


const LoginUser = (props) => {
    return (
        <div className={Styles.signWrap}>
            {!props.isAuth
                ?
                <NavLink to={'Sign In'} className={Styles.sign}>Log In</NavLink>
                :
                <NavLink to={'#'} onClick={props.logOut} className={Styles.sign}>Log Out</NavLink>
            }
        </div>
    )
}

export default LoginUser;