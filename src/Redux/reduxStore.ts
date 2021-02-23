import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import messageReducer from './messageReducer'
import usersReducer from './usersReducer'
import profileReducer from './profileReducer'
import authUserReducer from './authUserReducer'
import appReducer from './appReducer'
import newsReducer from './newsReducer'


const rootReducers = combineReducers({
  messagePage: messageReducer,
  newsReducer: newsReducer,
  usersPage: usersReducer,
  profilePage: profileReducer,
  authUser: authUserReducer,
  form: formReducer,
  app: appReducer
})

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never
export type InferActionsType<T extends  { [key: string]: (...args: any[]) => any}> = ReturnType<PropertiesType<T>>

type RootReducerType = typeof rootReducers
export type AppStateType = ReturnType<RootReducerType>

const store = createStore(rootReducers, applyMiddleware(thunkMiddleware))

// @ts-ignore
window.store = store

export default store
