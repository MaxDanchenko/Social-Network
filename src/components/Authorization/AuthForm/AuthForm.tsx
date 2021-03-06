import React from 'react'
import Styles from './AuthForm.module.scss'
import {NavLink} from 'react-router-dom'
import {Field, InjectedFormProps} from 'redux-form'
import {maxLengthCreator, minLengthCreator, requiredField} from '../../../utilities/validator'
import ValidateInput from '../../commonFiles/passwordValidator/formValidator'
import CaptchaInput from './CaptchaInput'
import cn from 'classnames'
import {ReduxFormType} from '../Authorization'


const maxLength32 = maxLengthCreator(32)
const minLength4 = minLengthCreator(4)

type PropsType = {
  captchaUrl?: string
}
const AuthForm: React.FC<InjectedFormProps<ReduxFormType
  & InjectedFormProps<{}, {}, string>, {}, string>
  & PropsType> = ({handleSubmit, error, captchaUrl}) => {

  return (<form onSubmit={handleSubmit}>
    <div className={Styles.authWrapper}>
      <h3 className={Styles.logInto}>Log Into Social Network</h3>
      <div className={Styles.authSubWrapper}>
        <div className={Styles.inputWrap}>
          <Field
            validate={[requiredField, maxLength32, minLength4]}
            name={'email'}
            component={ValidateInput}
            className={cn(Styles.input, Styles.required)}
            type="email"
            placeholder={'Email'}
          />
        </div>
        <div className={Styles.inputWrap}>
          <Field
            validate={[requiredField, maxLength32, minLength4]}
            name={'password'}
            component={ValidateInput}
            className={cn(Styles.input, Styles.required)}
            type="password"
            placeholder={'Password'}
          />
        </div>
        {error && !captchaUrl ? (<span className={Styles.showErrorMessage}>{error}</span>) : null}
      </div>
      {captchaUrl ? (<div className={Styles.captchaUrl}>
        <div>
          <img
            className={Styles.captchaUrlImage}
            src={captchaUrl}
            alt=""
          />
        </div>
        <Field
          name={'captcha'}
          component={CaptchaInput}
          className={Styles.captchaInp}
          type="textarea"
          placeholder={'Type the characters'}
        />
      </div>) : false}
      <div className={Styles.loginFormWrap}>
        <div className={Styles.buttonWrap}>
          <button className={Styles.signInButton}>Log In</button>
        </div>
        <div className={Styles.recoverPassWrap}>
          <NavLink className={Styles.recoverPass} to={'/Recover Account'}>
            Forgot account?
          </NavLink>
          <div className={Styles.or}>or</div>
        </div>
        <div className={Styles.createAccountWrap}>
          <div className={Styles.createAccount}>
            <button className={Styles.createAccountButton}>
              Create New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>)
}

export default AuthForm
