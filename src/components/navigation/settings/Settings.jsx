import React from "react";
import Styles from "./Settings.module.scss"


const Settings = () => {
    return (
        <ul className={Styles.table + " " + Styles.table_small}>
            <li className={Styles.list + " " + Styles.small}>
                <a href="" className={Styles.link}>
                    <img src={require("../ImagesNav/icon_lock.png")} alt=""
                         className={Styles.image + " " + Styles.small}/>
                </a>
            </li>
            <li className={Styles.list + " " + Styles.small}>
                <a href="" className={Styles.link}>
                    <img src={require("../ImagesNav/more-info.png")} alt=""
                         className={Styles.image + " " + Styles.small}/>
                </a>
            </li>
        </ul>
    )
}

export default Settings;