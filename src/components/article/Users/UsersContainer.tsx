import React, {useEffect} from 'react'
import {follow, getUsers, unfollow} from '../../../Redux/usersReducer'
import {connect} from 'react-redux'
import UsersFollowing from './UsersFollowing'
import PreLoader from '../../CommonFiles/PreLoader/PreLoader'
import {AppStateType} from '../../../Redux/reduxStore'
import {CurrentItemType} from '../../../api/ApiTypes'
import Styles from './Users.module.scss'
import {
  getCurrentPageSelector,
  getFollowingSelector,
  getIsFetchingSelector,
  getPageSizeSelector,
  getPageUserCountSelector,
  getUsersSelector,
} from '../../../Redux/selectors'


type PropsType = {
  users: Array<CurrentItemType>
  pageSize: number
  pageUserCount: number
  currentPage: number
  isFetching: boolean

  unfollow: (userId: number) => void
  follow: (userId: number) => void
  onPageChanged?: (p: number) => void
  followingInProgress: any
  getUsers: (currentPage: number, pageSize: number) => void
}
const UsersContainer: React.FC<PropsType> = (props) => {
  useEffect(() => {
    props.getUsers(props.currentPage, props.pageSize)
  }, [])

  const onPageChanged = (pageNumber: number) => {
    props.getUsers(pageNumber, props.pageSize)
  }
  return (
    <div className={Styles.userContainer}>
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
    </div>
  )
}

const mapStateToProps = (state: AppStateType) => {
  return {
    users: getUsersSelector(state),
    pageSize: getPageSizeSelector(state),
    pageUserCount: getPageUserCountSelector(state),
    currentPage: getCurrentPageSelector(state),
    isFetching: getIsFetchingSelector(state),
    followingInProgress: getFollowingSelector(state),
  }
}

export default connect(mapStateToProps, {
  getUsers,
  follow,
  unfollow,
})(UsersContainer)
