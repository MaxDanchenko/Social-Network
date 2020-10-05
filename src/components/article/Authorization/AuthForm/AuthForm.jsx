import React from 'react'
import Styles from "./AuthForm.module.css";
import {NavLink} from "react-router-dom";
import {Field} from "redux-form";
import {maxLengthCreator, minLengthCreator, requiredField} from "../../../../utilities/validator";
import ValidateInput from "../../../CommonFiles/passwordValidator/formValidator";

const maxLength16 = maxLengthCreator(16)
const minLength4 = minLengthCreator(4)

export const AuthForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={Styles.authWrapper}>
                <h3 className={Styles.logInto}>Log Into Facebook</h3>
                <div className={Styles.authSubWrapper}>
                    <div className={Styles.inputWrap}>
                        <Field validate={[requiredField, maxLength16, minLength4]} name={'login'} component={ValidateInput}
                               className={`${Styles.input} ${Styles.required}`} type="login" placeholder={'Login'}/>
                    </div>
                    <div className={Styles.inputWrap}>
                        <Field validate={[requiredField, maxLength16, minLength4]} name={'password'} component={ValidateInput}
                               className={`${Styles.input} ${Styles.required}`} type="password" placeholder={'Password'}/>
                    </div>

                </div>
                <div className={Styles.buttonWrap}>
                    <NavLink to={'/Sign In'}>
                        <button className={Styles.signInButton}>Log In</button>
                    </NavLink>
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