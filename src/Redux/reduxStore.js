import {combineReducers, createStore} from "redux";
import commentReducer from "./commentReducer";
import messageReducer from "./messageReducer";

let reducers = combineReducers({
    commentPage: commentReducer,
    messagePage: messageReducer
});

let store = createStore(reducers);

export default store