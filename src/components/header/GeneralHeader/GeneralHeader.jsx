import React from "react";
import Styles from "./GeneralHeader.module.css"
import MainImg from "../mainImg/MainImg";
import Contact from "../buttons/contact/Contact";
import Activity from "../buttons/activity/Activity";


const GeneralHeader = () => {
    return (
        <header className={Styles.head}>
            <MainImg/>
            <div className={Styles.wrap}>
            <Activity/>
            <Contact/>
            </div>
        </header>
    )
}

export default GeneralHeader;