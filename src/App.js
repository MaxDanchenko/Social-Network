import React from 'react';
import './App.css';
import NullStyle from "./components/GeneralStyles/NullStyles.module.css";

import GeneralNav from "./components/navigation/GeneralNav/GeneralNav";
import Sidebar from "./components/sidebar/GeneralSidebar/GeneralSidebar";
import GeneralHeader from "./components/header/GeneralHeader/GeneralHeader";
import GeneralArticle from "./components/article/GeneralArticle/GenralArticle";
import Comment from "./components/article/comment/Comment";

import {BrowserRouter, Route} from "react-router-dom";
import Messages from "./components/article/MessagesAll/Messages";
import CommentContainer from "./components/article/comment/CommentContainer";
import MessagesContainer from "./components/article/MessagesAll/MessagesContainer";


const App = () => {
    return (
        <BrowserRouter>
            <GeneralNav/>
            <div className="wrapper">
                <div className="subWrap">
                    <Sidebar/>
                    <Route path={'/Home'} render={() => <GeneralHeader/>}/>
                    <Route path={'/Messages'}
                           render={() => <MessagesContainer/>}/>
                    <Route path={'/Comments'}
                           render={() => <CommentContainer/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
