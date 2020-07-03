import React from "react";
import Styles from "./UserName.module.css"


const UserName = () => {
    return (
        <div className={Styles.wrap}>
            <a href="#" className={Styles.link}><img src={require("../ImagesNav/profile_icon.jpg")} alt=""
                                                   className={Styles.link_icon}/></a>
            <a href="#" className={Styles.link}><p className={Styles.paragraph}>Alex</p></a>
            <a href="#" className={Styles.link}><p className={Styles.paragraph}>Home</p></a>
        </div>
    )
}

export default UserName;