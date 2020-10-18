import {authAPI, usersAPI} from "../api/api";
import {followSuccess, toggleButtonProgress} from "./usersReducer";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER = 'SET_AUTH_USER'

let initialState = {
    email: null,
    id: null,
    login: null,
    isAuth: false,
}

const authUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}
export const setUserData = (email, id, login, isAuth) => ({type: SET_AUTH_USER, payload: {email, id, login, isAuth}})

export const auth = () => (dispatch) => {
    return usersAPI.auth()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {email, id, login} = response.data.data
                dispatch(setUserData(email, id, login, true))
            }
        })
}
export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleButtonProgress(true, userId))
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleButtonProgress(false, userId))
            })
    }
}
export const logIn = (email, password, rememberMe) => (dispatch) => {
    authAPI.logIn(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(auth())
            } else {
                let errorMessage = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
                let action = stopSubmit('logIn', {_error: errorMessage})
                dispatch(action)
            }
        })
}
export const logOut = () => (dispatch) => {
    authAPI.logOut()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserData(null, null, null, false))
            }
        })
}

export default authUserReducer;