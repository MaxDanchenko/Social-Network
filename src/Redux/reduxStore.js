import {applyMiddleware, combineReducers, createStore} from 'redux';
import messageReducer from './messageReducer';
import usersReducer from './usersReducer';
import profileReducer from './profileReducer';
import authUserReducer from './authUserReducer';
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import appReducer from "./appReducer";

let reducers = combineReducers({
    messagePage: messageReducer,
    usersPage: usersReducer,
    profilePage: profileReducer,
    authUser: authUserReducer,
    form: formReducer,
    app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store

export default store