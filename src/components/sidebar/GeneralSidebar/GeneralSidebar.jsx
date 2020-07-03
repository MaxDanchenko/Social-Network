import React from "react";
import Styles from "./GeneralSidebar.module.css";
import Profile from "../Profile/Profile";
import Menu from "../Menu/Menu";
import Button from "../Button/Button";


const Sidebar = () => {
    return (
        <aside className={Styles.menu}>
            <Profile/>
            <Menu/>
            <Button/>
        </aside>
    );
};

export default Sidebar;