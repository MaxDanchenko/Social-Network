import React from 'react'
import Styles from "./AuthForm.module.scss";
import {NavLink, Redirect} from "react-router-dom";
import {Field} from "redux-form";
import {maxLengthCreator, minLengthCreator, requiredField} from "../../../../utilities/validator";
import ValidateInput from "../../../CommonFiles/passwordValidator/formValidator";

const maxLength32 = maxLengthCreator(32)
const minLength4 = minLengthCreator(4)

export const AuthForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={Styles.authWrapper}>
                <h3 className={Styles.logInto}>Log Into Social Network</h3>
                <div className={Styles.authSubWrapper}>
                    <div className={Styles.inputWrap}>
                        <Field validate={[requiredField, maxLength32, minLength4]} name={'email'} component={ValidateInput}
                               className={`${Styles.input} ${Styles.required}`} type="email" placeholder={'Email'}/>
                    </div>
                    <div className={Styles.inputWrap}>
                        <Field validate={[requiredField, maxLength32, minLength4]} name={'password'} component={ValidateInput}
                               className={`${Styles.input} ${Styles.required}`} type="password" placeholder={'Password'}/>
                    </div>
                    <span className={Styles.showErrorMessage}>{props.error}</span>
                </div>
                <div className={Styles.buttonWrap}>
                        <button className={Styles.signInButton}>Log In</button>
                </div>
                <div>
                    <NavLink className={Styles.recoverPass} to={'/Recover Account'}>Forgot account?</NavLink>
                    <div className={Styles.or}>or</div>
                </div>
                <div className={Styles.createAccountWrap}>
                    <NavLink className={Styles.createAccount} to={'/Regestration'}>
                        <button className={Styles.createAccountButton}>Create New Account</button>
                    </NavLink>
                </div>

            </div>
        </form>
    )
}