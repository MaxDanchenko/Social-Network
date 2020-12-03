import React from "react";
import Styles from "./Menu.module.scss"



const NavMenu = () => {
    return (
        <ul className={Styles.table}>
            <li className={Styles.list}>
                <a href="" className={Styles.link}>
                    <img src={require("../ImagesNav/icon_friends.png")} alt="" className={Styles.image}/>
                </a>
            </li>
            <li className={Styles.list}>
                <a href="" className={Styles.link}>
                    <img src={require("../ImagesNav/icon_messages.png")} alt="" className={Styles.image}/>
                </a>
            </li>
            <li className={Styles.list}>
                <a href="" className={Styles.link}>
                    <img src={require("../ImagesNav/icon_globe_active.png")} alt=""
                         className={Styles.image}/>
                </a>
            </li>
        </ul>
    )
};

export default NavMenu;