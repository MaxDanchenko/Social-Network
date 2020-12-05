import {NavLink} from "react-router-dom";
import Styles from "../Comment.module.scss";
import React from "react";


const Commentary = (props) => {
    let path = '/Comments/' + props.id;
    return (
        <NavLink className={Styles.link} to={path}>
            <p className={Styles.personComment}>
                {props.post}
            </p>
        </NavLink>
    )
}

export default Commentary