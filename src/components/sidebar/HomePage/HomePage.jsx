import React from "react";
import Styles from "./HomePage.module.css"


const HomePage = () => {
    return (
        <div className={Styles.main}>
            <a href="#"><img src={require("../SideImages/profile_icon.jpg")} alt="" className={Styles.profiles}/></a>
            <h1 className={Styles.names}>Every<br/> Interaction</h1>
            <a href="#"><p className={Styles.subname}>@EveryInteraction</p></a>
        </div>
    )
};

export default HomePage;