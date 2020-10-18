import React from 'react';
import Styles from './LoginUser.module.css';
import {NavLink} from "react-router-dom";

const LoginUser = (props) => {
    return (
        <div className={Styles.signWrap}>
            {!props.isAuth
                ?
                <NavLink to={'Sign In'} className={Styles.signIn}>Log In</NavLink>
                :
                <button onClick={props.logOut} className={Styles.signIn}>Log Out</button>
            }
        </div>
    )
}

export default LoginUser;