import React, {useEffect} from 'react'
import Styles from './App.module.scss'
import {Redirect, Route} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import './components/commonFiles/NullStyles.module.scss'
import GeneralNav from './components/header/GeneralHeader/GeneralNav'
import GeneralSidebarContainer from './components/sidebar/GeneralSidebar/GeneralSidebarContainer'
import HomePage from './components/homePage/HomePage/HomePage'
import MessagesContainer from './components/MessagesAll/MessagesContainer'
import AuthUserContainer from './components/Authorization/AuthUserContainer'
import {initialize} from './Redux/appReducer'
import {PreLoader} from './components/commonFiles/PreLoader/PreLoader'
import PhotoGallery from './components/PhotoGallery/PhotoGallery'
import ByePage from './components/byePage/ByePage'
import {getInitialStatusSelector} from './Redux/selectors'
import Videos from './components/Videos/Videos'
import NewsContainer from './components/newsBar/NewsContainer'
import {Profile} from './components/Profile/Profile'
import {UsersPage} from './components/Users/UsersPage'
import {MusicPage} from './components/Music/GeneralMusicPage'


export const App: React.FC = () => {
    const initialStatus = useSelector(getInitialStatusSelector)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(initialize())
    }, [])
    const pathName = ['/Home', '/Messages', '/Users', '/profile/:userId?', '/Music', '/Photos', '/Videos']
    const routeComponent = (component: React.FC, index: number) => (<Route exact path="/" component={component} key={index}/>)
    return (
      <div className={Styles.appPreloaderWrapper}>{
          !initialStatus ? <PreLoader/> :
            <div>
                <Redirect from='/' to='/Home'/>
                <Route>
                    {pathName.map((path: string, index: number) => (<Route path={path} component={GeneralNav} key={index}/>))}
                </Route>
                <Route>
                    {[GeneralNav].map((component: React.FC, index: number) => routeComponent(component, index))}
                </Route>
                <div className={Styles.wrapper}>
                    <Route path="/Sign In" render={() => <AuthUserContainer/>}/>
                    <Route path="/ByePage" render={() => <ByePage/>}/>
                    <div className={Styles.subWrap}>
                        <Route>{[HomePage, GeneralSidebarContainer]
                          .map((component: any, index: number) => routeComponent(component, index))}
                        </Route>
                        <Route>
                            {pathName.map((path: string, index: number) => (<Route
                              path={path}
                              component={GeneralSidebarContainer}
                              key={index}
                            />))}
                        </Route>
                        <div className={Styles.mainBlockWrap}>
                            <Route path="/Home" render={() => <HomePage/>}/>
                            <Route path="/Messages" render={() => <MessagesContainer/>}/>
                            <Route path="/Users" render={() => <UsersPage/>}/>
                            <Route path="/profile/:userId?" render={() => <Profile/>}/>
                            <Route path="/Photos" render={() => <PhotoGallery/>}/>
                            <Route path="/Music" render={() => <MusicPage/>}/>
                            <Route path="/Videos" render={() => <Videos/>}/>
                            <Route>
                                {pathName.map((path: string, index: number) => (
                                  <Route path={path} component={NewsContainer} key={index}/>))}
                            </Route>
                        </div>
                    </div>
                </div>
            </div>
      }</div>
    )
}