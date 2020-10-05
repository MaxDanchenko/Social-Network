import React from 'react'
import Styles from './formValidator.module.css'


export const ValidateInput = ({input, meta, ...props}) => {

    const hasError = meta.error && meta.touched
    return (
        <div>
            <div className={`${hasError && Styles.required} ${Styles.validateWrapper}`}>
                <input className={Styles.accountField} {...input} {...props} />
                <span className={`${hasError && Styles.showErrorMessage} ${Styles.errorMessage}`}>{meta.error}</span>
            </div>

        </div>
    )
}


export default ValidateInput