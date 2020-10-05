import React from "react";
import Styles from "./GeneralSidebar.module.css";
import HomePage from "../HomePage/HomePage";
import Menu from "../Menu/Menu";
import Button from "../Button/Button";


const Sidebar = () => {
    return (
        <aside className={Styles.menu}>
            <div className={Styles.wrapper}>
            <HomePage/>
            <Menu/>
            <Button/>
            </div>
        </aside>
    );
};

export default Sidebar;