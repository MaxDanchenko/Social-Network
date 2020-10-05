import React from 'react';
import Styles from './Authorization.module.css';
import {NavLink} from "react-router-dom";

const Authorization = (props) => {
    return (
        <div className={Styles.wrapper}>
            <div className={Styles.subWrapper}>
                <div className={Styles.authWrapper}>
                    <p className={Styles.nameInput}>Login</p>
                    <p className={Styles.nameInput}>{props.login}</p>
                    <NavLink to={'/Sign In'}><input className={Styles.input} maxLength={16} type="login"/></NavLink>
                    <p className={Styles.nameInput}>Password</p>
                    <NavLink to={'/Sign In'}><input className={Styles.input} maxLength={16} type="password"/></NavLink>
                </div>
                <div className={Styles.buttonWrap}>
                    <button className={Styles.signButton}>Sign In</button>
                    <button className={Styles.signButton}>Sign Up</button>
                </div>
                <div>
                    <NavLink className={Styles.recoverPass} to={'/Sign In'}>Forgot your password?</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Authorization;