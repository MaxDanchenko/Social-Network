import React from "react";
import Styles from "./GeneralNav.module.css";
import ProfileIcon from "../profileIcon/ProfileIcon";
import Search from "../search/Search";
import Settings from "../settings/Settings";
import NavMenu from "../menu/Menu";
import LoginUserContainer from "../../header/LoginUser/LoginUserContainer";


const GeneralNav = (props) => {
    return (
        <nav className={Styles.nav}>
            <div className={Styles.navWrap}>
            <form className={Styles.form}>
                <ProfileIcon/>
                <Search/>
            </form>
            <div className={Styles.icons}>
                <LoginUserContainer/>
            <NavMenu/>
            <Settings/>
            </div>
            </div>
        </nav>
    )
}

export default GeneralNav;