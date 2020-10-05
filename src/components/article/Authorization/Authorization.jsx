import React from 'react';
import {AuthForm} from "./AuthForm/AuthForm";
import Styles from "./Authorization.module.css";
import {reduxForm} from "redux-form";
import {NavLink} from "react-router-dom";

const Authorization = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }
    return (
        <div className={Styles.mainPageAuth}>
            <div className={Styles.imageWrapper}>
                <NavLink className={Styles.imageLink} to={'/Home'}>
                    <img className={Styles.fbImage} src={'https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg'} alt="logo"/>
                </NavLink>
            </div>
            <div className={Styles.authWrapper}>
                <AuthFormRedux  onSubmit={onSubmit}/>
            </div>
        </div>
    )
}
const AuthFormRedux = reduxForm({form: 'login'})(AuthForm)



export default Authorization;