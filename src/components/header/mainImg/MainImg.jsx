import React from "react";
import Styles from "./MainImg.module.css"


const MainImg = () => {
    return (
        <div className={Styles.bground}>
            <img src={require("../HeaderImages/article_bg.jpg")} alt="" className={Styles.bground}/>
        </div>
    )
}

export default MainImg;