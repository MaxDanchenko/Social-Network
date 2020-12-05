import Styles from "../Messages.module.scss";
import React from "react";
import {NavLink} from "react-router-dom";


const Person = (props) => {
    let path = '/Messages/' + props.id;
    return (
        <NavLink className={Styles.link} to={path}>
            <img className={Styles.avatar} src={props.src} alt="avatar"/>
            <p className={Styles.name}>{props.name}</p>
        </NavLink>
    )
}

export default Person;
