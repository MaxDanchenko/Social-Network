import React from "react";
import Styles from "./MainImg.module.scss"


const MainImg = () => {
    return (
        <div className={Styles.backImgWrap}>
            <img src={require("../HeaderImages/article_bg.jpg")} alt="" className={Styles.backImg}/>
        </div>
    )
}

export default MainImg;