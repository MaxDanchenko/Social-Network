import React from 'react';
import Styles from './LoginUser.module.css';
import {NavLink} from "react-router-dom";

const LoginUser = (props) => {
    return (
        <div className={Styles.signWrap}>
            <NavLink  to={'/Sign In'} className={Styles.signIn}>1{props.login}</NavLink>
        </div>
    )
}

export default LoginUser;