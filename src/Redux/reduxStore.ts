import {Action, applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import messageReducer from './messageReducer'
import usersReducer from './usersReducer'
import profileReducer from './profileReducer'
import authUserReducer from './authUserReducer'
import appReducer from './appReducer'
import friendsReducer from './friendsReducer'


const rootReducers = combineReducers({
  messagePage: messageReducer,
  usersPage: usersReducer,
  profilePage: profileReducer,
  authUser: authUserReducer,
  friendsPage: friendsReducer,
  form: formReducer,
  app: appReducer,
})

export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never
export type CommonActionsType<A extends Action = Action, R = Promise<void> | void> = ThunkAction<R, AppStateType, unknown, A>

type RootReducerType = typeof rootReducers
export type AppStateType = ReturnType<RootReducerType>


const store = createStore(rootReducers, applyMiddleware(thunkMiddleware))


// @ts-ignore
window.store = store
export default store
