import React from "react";
import Styles from "./GeneralArticle.module.css"
import {BrowserRouter, Route} from "react-router-dom";




const GeneralArticle = () => {
    return (
        <BrowserRouter>
            <article className={Styles.main}>

            </article>
        </BrowserRouter>
    )
}

export default GeneralArticle;