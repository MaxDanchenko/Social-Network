import React from 'react'
import Styles from './formValidator.module.css'


const ValidateInput = ({input, meta, ...props}) => {

    const hasError = meta.error && meta.touched
    return (
        <div>
            <div className={hasError && Styles.required}>
                <input {...input} {...props} />
            </div>
            <span className={`${hasError && Styles.showErrorMessage} ${Styles.errorMessage}`}>{meta.error}</span>
        </div>
    )
}


export default ValidateInput