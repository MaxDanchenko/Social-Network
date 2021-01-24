import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import messageReducer from "./messageReducer";
import usersReducer from "./usersReducer";
import profileReducer from "./profileReducer";
import authUserReducer from "./authUserReducer";
import appReducer from "./appReducer";

const rootReducers = combineReducers({
  messagePage: messageReducer,
  usersPage: usersReducer,
  profilePage: profileReducer,
  authUser: authUserReducer,
  form: formReducer,
  app: appReducer,
});

const store = createStore(rootReducers, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.store = store;

export default store;
