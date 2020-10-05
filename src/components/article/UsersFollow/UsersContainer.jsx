import React from "react";
import {followAC, removeAC, setUsersAC} from "../../../Redux/usersReducer";
import {connect} from "react-redux";
import Users from "./Users";


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        remove: (userId) => {
            dispatch(removeAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)


export default UsersContainer;