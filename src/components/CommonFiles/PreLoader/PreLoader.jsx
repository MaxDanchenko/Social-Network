import React from "react";
import Styles from "../article/UsersFollow/Users.module.css";
import preLoaderImg from "../../images/Eclipse-1s-84px.svg";


let PreLoader = (props) => {
    return <div className={Styles.preloadBlock}>
       <img alt={'text'} className={Styles.loadIcon} src={preLoaderImg}/>
    </div>
}


export default PreLoader;