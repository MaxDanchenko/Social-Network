import React from 'react'
import {connect} from 'react-redux'
import Friends from './Friends'
import {AppStateType} from '../../../../Redux/reduxStore'
import {CurrentItemType} from '../../../../api/ApiTypes'
import {getFriendsList} from '../../../../Redux/friendsReducer'

export type FriendsType = {
  items: Array<CurrentItemType>
  totalCount: number
}
type PropsType = {
  friends: FriendsType
  getFriendsList: (friend: boolean) => void
}
const FriendsContainer: React.FC<PropsType> = ({friends, getFriendsList}) => {
  return (
    <Friends friends={friends} getFriendsList={getFriendsList}/>
  )
}
const mapStateToProps = (state: AppStateType) => ({
  friends: state.friendsPage.friends,
})

export default connect(
  mapStateToProps,
  {getFriendsList},
)(FriendsContainer)
