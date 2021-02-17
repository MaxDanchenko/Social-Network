import React from 'react'
import Styles from './formValidator.module.scss'
import cn from 'classnames'



const ValidateInput: React.FC<any> = ({input, meta, ...props}) => {
  const hasError = meta.error && meta.touched
  return (
    <div>
      <div
        className={cn(Styles.validateWrapper, {[Styles.required]: hasError})}
      >
        <input className={Styles.accountField} {...input} {...props} />
        <span
          className={`${hasError && Styles.showErrorMessage} ${
            Styles.errorMessage
          }`}
        >
          {meta.error}
        </span>
      </div>
    </div>
  )
}

export default ValidateInput
