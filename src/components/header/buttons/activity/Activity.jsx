import React from "react";
import Styles from "./Activity.module.css"


const Activity = () => {
    return (
        <ul className={Styles.table}>
            <li className={Styles.list}>
                <a className={Styles.link} href="#"> <img
                    src={require("../../HeaderImages/active-like.png")} alt=""
                    className={Styles.icon}/>Liked</a>
            </li>
            <li className={Styles.list}>
                <a className={Styles.link} href="#"><img
                    src={require("../../HeaderImages/icon_message.png")} alt=""
                    className={Styles.icon}/>Message</a>
            </li>
            <li className={Styles.list}>
                <a className={Styles.link + " " + Styles.small_link} href="#"><img
                    src={require("../../HeaderImages/icon_dots.png")} alt=""
                    className={Styles.icon + " " + Styles.small_icon}/>More<img
                    src={require("../../HeaderImages/arrow-down.png")} alt=""
                    className={Styles.icon + " " + Styles.small_icon}/></a>
            </li>
        </ul>
    )
}

export default Activity;