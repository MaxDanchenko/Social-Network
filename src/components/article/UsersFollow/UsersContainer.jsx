import React from "react";
import {
    follow,
    unfollow,
    setCurrentPage,
    toggleButtonProgress,
    getUsers
} from "../../../Redux/usersReducer";
import {connect} from "react-redux";
import UsersFollowing from "./UsersFollowing";
import PreLoader from "../../CommonFiles/PreLoader/PreLoader";
import {compose} from "redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            <UsersFollowing
                users={this.props.users}
                pageSize={this.props.pageSize}
                pageUserCount={this.props.pageUserCount}
                currentPage={this.props.currentPage}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                onPageChanged={this.onPageChanged}
                followingInProgress={this.props.followingInProgress}/>
            {this.props.isFetching ? <PreLoader/> : null}
        </>
    }
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
    withAuthRedirect,
    connect(mapStateToProps, {getUsers, follow, unfollow, setCurrentPage, toggleButtonProgress}),

)(UsersContainer);
