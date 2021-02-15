import React, {useEffect} from 'react'
import {follow, getUsers, setCurrentPage, toggleButtonProgress, unfollow} from '../../../Redux/usersReducer'
import {connect} from 'react-redux'
import UsersFollowing from './UsersFollowing'
import PreLoader from '../../CommonFiles/PreLoader/PreLoader'
import {compose} from 'redux'


const UsersContainer = (props) => {
    useEffect(() => {
        props.getUsers(props.currentPage, props.pageSize)
    }, [])

    const onPageChanged = (pageNumber) => {
        props.getUsers(pageNumber, props.pageSize)
    }
    return (
        <>
            <UsersFollowing
                users={props.users}
                pageSize={props.pageSize}
                pageUserCount={props.pageUserCount}
                currentPage={props.currentPage}
                unfollow={props.unfollow}
                follow={props.follow}
                onPageChanged={onPageChanged}
                followingInProgress={props.followingInProgress}
            />
            {props.isFetching ? <PreLoader/> : null}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        pageUserCount: state.usersPage.pageUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default compose(
    connect(mapStateToProps, {
        getUsers,
        follow,
        unfollow,
        setCurrentPage,
        toggleButtonProgress
    })
)(UsersContainer)
