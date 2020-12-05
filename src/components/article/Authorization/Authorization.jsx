import React from 'react';
import {AuthForm} from "./AuthForm/AuthForm";
import Styles from "./Authorization.module.scss";
import {reduxForm} from "redux-form";
import {NavLink, Redirect} from "react-router-dom";

const Authorization = (props) => {
    if (props.isAuth) {
        return <Redirect to={'profile'} />
    }
    const onSubmit = (formData) => {
        props.logIn(formData.email, formData.password, formData.rememberMe);
    }
    return (
        <div className={Styles.mainPageAuth}>
            <div className={Styles.imageWrapper}>
                <NavLink className={Styles.imageLink} to={'/Home'}>
                   <p className={Styles.networkName}>Social Network</p>
                </NavLink>
            </div>
            <div className={Styles.authWrapper}>
                <AuthFormRedux  onSubmit={onSubmit}/>
            </div>
        </div>
    )
}
const AuthFormRedux = reduxForm({form: 'logIn'})(AuthForm)



export default Authorization;