import React from 'react';
import './App.css';
import NullStyle from "./components/CommonFiles/NullStyles.module.css";
import GeneralNav from "./components/navigation/GeneralNav/GeneralNav";
import Sidebar from "./components/sidebar/GeneralSidebar/GeneralSidebar";
import GeneralHeader from "./components/header/GeneralHeader/GeneralHeader";
import {BrowserRouter, Route} from "react-router-dom";
import CommentContainer from "./components/article/Comment/CommentContainer";
import MessagesContainer from "./components/article/MessagesAll/MessagesContainer";
import UsersContainer from "./components/article/UsersFollow/UsersContainer";
import ProfileContainer from "./components/article/Profile/ProfileContainer";
import AuthUserContainer from "./components/article/Authorization/AuthUserContainer";


const App = () => {


    return (
        <BrowserRouter>
            <Route>
                {['/Home', '/Messages', '/Comments', '/UsersFollow', '/profile/:userId?', '/Photos', '/Reviews', '/Videos' ]
                    .map((path, index) =>
                        <Route path={path} component={GeneralNav} key={index}/>
                    )}
            </Route>
            <Route>
                {[GeneralNav].map((component, index)  =>
                    <Route exact path='/' component={component} key={index}/>
                )}
            </Route>
            <div className="wrapper">
                <Route path={'/Sign In'}
                       render={() => <AuthUserContainer/>}/>
                <div className="subWrap">
                    <Route>
                        {[GeneralHeader, Sidebar].map((component, index)  =>
                            <Route exact path='/' component={component} key={index}/>
                            )}
                    </Route>
                    <Route>
                        {['/Home', '/Messages', '/Comments', '/UsersFollow', '/profile/:userId?', '/Photos', '/Reviews', '/Videos' ]
                            .map((path, index) =>
                                <Route path={path} component={Sidebar} key={index}/>
                            )}
                    </Route>
                    <Route path={'/Home'} render={() => <GeneralHeader/>}/>
                    <Route path={'/Messages'}
                           render={() => <MessagesContainer/>}/>
                    <Route path={'/Comments'}
                           render={() => <CommentContainer/>}/>
                    <Route path={'/UsersFollow'}
                           render={() => <UsersContainer/>}/>
                    <Route path={'/profile/:userId?'}
                           render={() => <ProfileContainer/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
