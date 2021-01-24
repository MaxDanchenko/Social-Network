import React from 'react'
import Styles from './Button.module.scss'


const Button = () => {
  return (
    <button className={Styles.butt}>
      <a href="#" className={Styles.buttLink}>
        Create a Page
      </a>
    </button>
  )
}

export default Button