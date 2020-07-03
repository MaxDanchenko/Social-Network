import React from "react";
import Styles from "./Menu.module.css"
import {NavLink} from "react-router-dom";


const Menu = () => {
    return (
        <ul className={Styles.table}>
            <li className={Styles.list}><NavLink to={"/Home"} className={Styles.link}>Home</NavLink></li>
            <li className={Styles.list}><NavLink to={"/Messages"} className={Styles.link}>Messages</NavLink></li>
            <li className={Styles.list}><NavLink to={"/Comments"} className={Styles.link}>Comments</NavLink></li>
            <li className={Styles.list}><NavLink to={"/About"} className={Styles.link}>About</NavLink></li>
            <li className={Styles.list}><NavLink to={"/Email Signup"} className={Styles.link}>Email Signup</NavLink></li>
            <li className={Styles.list}><NavLink to={"/Photos"} className={Styles.link}>Photos</NavLink></li>
            <li className={Styles.list}><NavLink to={"/Reviews"} className={Styles.link}>Reviews</NavLink></li>
            <li className={Styles.list}><NavLink to={"/Videos"} className={Styles.link}>Videos</NavLink></li>
            <li className={Styles.list}><NavLink to={"/Likes"} className={Styles.link}>Likes</NavLink></li>
        </ul>
    )
}


export default Menu;