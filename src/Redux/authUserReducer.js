import {authAPI, usersAPI} from "../api/api";
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

export const auth = () => async (dispatch) => {
    let response = await usersAPI.auth()
    if (response.data.resultCode === 0) {
        let {email, id, login} = response.data.data
        dispatch(setUserData(email, id, login, true))
    }
}
export const logIn = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.logIn(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(auth())
    } else {
        let errorMessage = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
        let action = stopSubmit('logIn', {_error: errorMessage})
        dispatch(action)
    }
}
export const logOut = () => async (dispatch) => {
    let response = await authAPI.logOut()
    if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false))
    }
}

export default authUserReducer;