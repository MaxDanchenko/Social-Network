import {applyMiddleware, combineReducers, createStore} from 'redux';
import commentReducer from './commentReducer';
import messageReducer from './messageReducer';
import usersReducer from './usersReducer';
import profileReducer from './profileReducer';
import authUserReducer from './authUserReducer';
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    commentPage: commentReducer,
    messagePage: messageReducer,
    usersPage: usersReducer,
    profilePage: profileReducer,
    authUser: authUserReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store

export default store