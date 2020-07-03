import React from "react";
import Styles from "./Button.module.css"


const Button = () => {
    return (
        <button className={Styles.butt}><a href="#" className={Styles.butt_link}>Create a Page</a></button>
    )
}

export default Button;