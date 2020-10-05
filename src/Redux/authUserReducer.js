import {authAPI, usersAPI} from "../api/api";
import {followSuccess, toggleButtonProgress} from "./usersReducer";

// const LOG_IN = 'LOG_IN'
// const LOG_OUT = 'LOG_OUT'
const Set_Auth_User = 'Set_Auth_User'

let initialState = {
    email: null,
    id: null,
    login: null,
    isAuth: false,
    password: null
}

const authUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case Set_Auth_User:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        // case LOG_IN:
        //     return {
        //         ...state,
        //         ...action.data,
        //         password: action.password,
        //         email: action.email
        //     }
        // case LOG_OUT:
        //     return {
        //         ...state,
        //         ...action.data,
        //         id: action.id
        //     }

        default:
            return state;
    }
}
// export const logInUser = (userId, email, password) => ({type: LOG_IN, userId, email, password})
// export const logOutUser = (userId, email, password) => ({type: LOG_OUT, userId, email, password})
export const setUserData = (email, id, login, isAuth) => ({type: Set_Auth_User, data: {email, id, login, isAuth}})

export const auth = (email, id, login, isAuth) => {
    return (dispatch) => {
        dispatch(setUserData(email, id, login, isAuth))
        usersAPI.auth(email, id, login, isAuth)
            .then(response => {
                if (response.data.resultCode == 0) {
                    let {email, id, login, isAuth} = response.data.data
                    dispatch(setUserData(email, id, login, isAuth))
                }
            })
    }
}
export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleButtonProgress(true, userId))
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleButtonProgress(false, userId))
            })
    }
}
// export const login = (userId, email, password) => {
//     return (dispatch) => {
//         dispatch(userId, email, password)
//         authAPI.logIn(userId, email, password)
//             .then(response => {
//                 if (response.data.resultCode == 0) {
//                     dispatch(logInUser(userId, email, password))
//                 }
//             })
//     }
// }
// export const logout = (userId, email, password) => {
//     return (dispatch) => {
//         dispatch(userId, email, password)
//         authAPI.logOut(userId, email, password)
//             .then(response => {
//                 if (response.data.resultCode == 0) {
//                     dispatch(logOutUser(userId, email, password))
//                 }
//             })
//     }
// }

export default authUserReducer;