import React, {useEffect} from 'react'
import './App.scss'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import './components/CommonFiles/NullStyles.module.scss'
import GeneralNav from './components/navigation/GeneralNav/GeneralNav'
import GeneralSidebarContainer from './components/sidebar/GeneralSidebar/GeneralSidebarContainer'
import GeneralHeader from './components/header/GeneralHeader/GeneralHeader'
import MessagesContainer from './components/article/MessagesAll/MessagesContainer'
import UsersContainer from './components/article/UsersFollow/UsersContainer'
import AuthUserContainer from './components/article/Authorization/AuthUserContainer'
import {initialize} from './Redux/appReducer'
import PreLoader from './components/CommonFiles/PreLoader/PreLoader'
import PhotoGallery from './components/article/PhotoGallery/PhotoGallery'
import ByePage from './components/byePage/ByePage'
import {AppStateType} from './Redux/reduxStore'
import ProfileContainer from './components/article/Profile/ProfileContainer'
import NewsContainer from "./components/newsBar/NewsContainer";
import { getInitialStatusSelector } from './Redux/selectors'


type PropsType = {
  initialStatus: boolean
  initialize: () => void
}
const App: React.FC<PropsType> = ({initialStatus, initialize}) => {
  useEffect(() => {
    initialize()
  }, [])
  const pathName = ['/Home', '/Messages', '/UsersFollow', '/profile/:userId?', '/Photos', '/Videos']
  let pathNameForWeather = pathName.concat()
  pathNameForWeather = pathNameForWeather.splice(1, 5)
  const routeComponent = (component: React.FC, index: number) => (<Route exact path="/" component={component} key={index}/>)
  if (!initialStatus) {
    return <PreLoader/>
  }
  return (
    <div>
      <Route>
        {pathName.map((path: string, index: number) => (<Route path={path} component={GeneralNav} key={index}/>))}
      </Route>
      <Route>
        {[GeneralNav].map((component: React.FC, index: number) => routeComponent(component, index))}
      </Route>
      <div className="wrapper">
        <Route path="/Sign In" render={() =>
          //@ts-ignore
          <AuthUserContainer/>
        }/>
        <Route path="/ByePage" render={() => <ByePage/>}/>
        <div className="subWrap">
          <Route>
            {//@ts-ignore
              [GeneralHeader, GeneralSidebarContainer].map((component: React.FC, index: number) => routeComponent(component, index))}
          </Route>
          <Route>
            {pathName.map((path: string, index: number) => (<Route
              path={path}
              component={GeneralSidebarContainer}
              key={index}
            />))}
          </Route>
          <Route path="/Home" render={() => <GeneralHeader/>}/>
          <div className={'weatherWrap'}>
            <Route path="/Messages" render={() => <MessagesContainer/>}/>
            { //@ts-ignore
              <Route path="/UsersFollow" render={() => <UsersContainer/>}/>}
            { //@ts-ignore
              <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>}
            <Route path="/Photos" render={() => <PhotoGallery/>}/>
            {/*<Route>*/}
            {/*  {pathNameForWeather.map((path: string, index: number) => (<Route path={path} component={NewsContainer} key={index}/>))}*/}
            {/*</Route>*/}
            {/*<Route>*/}
            {/*  { //@ts-ignore*/}
            {/*    [NewsContainer].map((component: React.FC, index: number) => routeComponent(component, index))}*/}
            {/*</Route>*/}
          </div>
        </div>
      </div>
    </div>)
}

const mapStateToProps = (state: AppStateType) => ({
  initialStatus: getInitialStatusSelector(state)
})

export default connect(mapStateToProps, {initialize})(App)