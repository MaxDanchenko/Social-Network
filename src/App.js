import React from 'react';
import './App.scss';
import NullStyle from "./components/CommonFiles/NullStyles.module.scss";
import GeneralNav from "./components/navigation/GeneralNav/GeneralNav";
import Sidebar from "./components/sidebar/GeneralSidebar/GeneralSidebar";
import GeneralHeader from "./components/header/GeneralHeader/GeneralHeader";
import {Route} from "react-router-dom";
import MessagesContainer from "./components/article/MessagesAll/MessagesContainer";
import UsersContainer from "./components/article/UsersFollow/UsersContainer";
import ProfileContainer from "./components/article/Profile/ProfileContainer";
import AuthUserContainer from "./components/article/Authorization/AuthUserContainer";
import {compose} from "redux";
import {withRouter} from "react-browser-router";
import {connect} from "react-redux";
import {initialize} from "./Redux/appReducer";
import PreLoader from "./components/CommonFiles/PreLoader/PreLoader";
import Game from "./components/article/Game/Game";


class App extends React.Component {
    componentDidMount() {
        this.props.initialize()
    }

    render() {
        const pathName = ['/Home', '/Messages', '/UsersFollow', '/profile/:userId?', '/Photos', '/Game', '/Videos']
        const routeComponent = (component, index) => {
            return <Route exact path='/' component={component} key={index}/>
        }
        if (!this.props.initialStatus) {
            return <PreLoader/>
        }
        return (
            <div>
                <Route>
                    {pathName.map((path, index) =>
                        <Route path={path} component={GeneralNav} key={index}/>
                    )}
                </Route>
                <Route>
                    {[GeneralNav].map((component, index) => routeComponent(component, index))}
                </Route>
                <div className="wrapper">
                    <Route path={'/Sign In'}
                           render={() => <AuthUserContainer/>}/>
                    <div className="subWrap">
                        <Route>
                            {[GeneralHeader, Sidebar].map((component, index) => routeComponent(component, index))}
                        </Route>
                        <Route>
                            {pathName.map((path, index) =>
                                <Route path={path} component={Sidebar} key={index}/>
                            )}
                        </Route>
                        <Route path={'/Home'}
                               render={() => <GeneralHeader/>}/>
                        <Route path={'/Messages'}
                               render={() => <MessagesContainer/>}/>
                        <Route path={'/UsersFollow'}
                               render={() => <UsersContainer/>}/>
                        <Route path={'/profile/:userId?'}
                               render={() => <ProfileContainer/>}/>
                        <Route path={'/Game'}
                               render={() => <Game/>}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialStatus: state.app.initialStatus
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initialize}))(App);
