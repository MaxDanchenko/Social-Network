import React from "react";
import Styles from "./Search.module.css";


const Search = () => {
    return (
        <input type="text" placeholder="Search" className={Styles.area} />
    );
};

export default Search;