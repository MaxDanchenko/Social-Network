import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utilities/object-helper";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const IS_FETCHING_FUNK = 'IS_FETCHING_FUNK'
const TOGGLE_BUTTON = 'TOGGLE_BUTTON'

let initialState = {
    users: [],
    pageSize: 5,
    pageUserCount: 50,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                    users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case IS_FETCHING_FUNK: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_BUTTON: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state;
    }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setIsFetching = (isFetching) => ({type: IS_FETCHING_FUNK, isFetching})
export const toggleButtonProgress = (isFetching, userId) => ({type: TOGGLE_BUTTON, isFetching, userId})

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setIsFetching(true))
        dispatch(setCurrentPage(currentPage))
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setIsFetching(false))
            dispatch(setUsers(data.items))
        })
    }
}

const followUnfollow = async (userId, dispatch, apiMethod, actionCreator) => {
    dispatch(toggleButtonProgress(true, userId))
    let response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleButtonProgress(false, userId))
}
export const follow = (userId) => {
    return async (dispatch) => {
        let apiMethod = usersAPI.follow.bind(usersAPI)
        let actionCreator = followSuccess
        followUnfollow(userId, dispatch, apiMethod, actionCreator)
    }
}
export const unfollow = (userId) => {
    return async (dispatch) => {
        let apiMethod = usersAPI.unfollow.bind(usersAPI)
        let actionCreator = unfollowSuccess
        followUnfollow(userId, dispatch, apiMethod, actionCreator)
    }
}


export default usersReducer;