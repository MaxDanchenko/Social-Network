import {AppStateType} from './reduxStore'

export const getInitialStatusSelector = (state: AppStateType) => state.app.initialStatus
export const getCaptchaSelector = (state: AppStateType) => state.authUser.captchaUrl
export const getIsAuthSelector = (state: AppStateType) => state.authUser.isAuth
export const getFriendListSelector = (state: AppStateType) => state.messagePage.friendsList
export const getMessagesSelector = (state: AppStateType) => state.messagePage.messages
export const getProfileSelector = (state: AppStateType) => state.profilePage.profile
export const getProfileIdSelector = (state: AppStateType) => state.profilePage.profile.userId
export const getStatusSelector = (state: AppStateType) => state.profilePage.status
export const getIdSelector = (state: AppStateType) => state.authUser.id
export const getUsersSelector = (state: AppStateType) => state.usersPage.users
export const getFoundUsersCountSelector = (state: AppStateType) => state.usersPage.totalFoundUsersCount
export const getPageSizeSelector = (state: AppStateType) => state.usersPage.pageSize
export const getPageUserCountSelector = (state: AppStateType) => state.usersPage.pageUserCount
export const getCurrentPageSelector = (state: AppStateType) => state.usersPage.currentPage
export const getIsFetchingSelector = (state: AppStateType) => state.usersPage.isFetching
export const getFollowingSelector = (state: AppStateType) => state.usersPage.followingInProgress
export const getFriendsSelector = (state: AppStateType) => state.friendsPage.friends
export const getFriendsTotalCountSelector = (state: AppStateType) => state.friendsPage.pageFriendsCount
export const getCurrentFriendsPageSelector = (state: AppStateType) => state.friendsPage.currentPage
export const getFriendsPageSizeSelector = (state: AppStateType) => state.friendsPage.pageSize
