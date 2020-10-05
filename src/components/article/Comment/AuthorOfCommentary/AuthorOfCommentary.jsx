import {NavLink} from "react-router-dom";
import Styles from "../Comment.module.css";
import React from "react";


const Author = (props) => {
    let path = '/Comments/' + props.id;
    return (
        <NavLink className={Styles.link} to={path}>
            <p className={Styles.person}>{props.name}</p>
        </NavLink>
    )
}

export default Author