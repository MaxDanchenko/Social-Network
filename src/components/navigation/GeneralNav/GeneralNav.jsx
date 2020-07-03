import React from "react";
import Styles from "./GeneralNav.module.css";
import ProfileIcon from "../profileIcon/ProfileIcon";
import Search from "../search/Search";
import UserName from "../userName/UserName";
import Settings from "../settings/Settings";
import NavMenu from "../menu/Menu";


const GeneralNav = () => {
    return (
        <nav className={Styles.nav}>
            <div className={Styles.navWrap}>
            <form className={Styles.form}>
                <ProfileIcon/>
                <Search/>
            </form>
            <UserName/>
            <div className={Styles.icons}>
            <NavMenu/>
            <Settings/>
            </div>
            </div>
        </nav>
    )
}

export default GeneralNav;