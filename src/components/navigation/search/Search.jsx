import React from "react";
import Styles from "./Search.module.scss";


const Search = () => {
    return (
        <input type="text" placeholder="Search" className={Styles.area} />
    );
};

export default Search;