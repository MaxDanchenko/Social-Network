import React from 'react'
import Styles from '../Users.module.scss'
import inviteIcon from '../../../images/icons/user.svg'
import {useDispatch, useSelector} from 'react-redux'
import {getFollowingSelector} from '../../../Redux/selectors'
import {follow, unfollow} from '../../../Redux/usersReducer'
import {CurrentItemType} from '../../../api/ApiTypes'

type PropsType = {
  el: CurrentItemType
}
export const FollowButton: React.FC<PropsType> = ({el}) => {
  const dispatch = useDispatch()
  const followingInProgress = useSelector(getFollowingSelector)

  return (
    <div className={Styles.buttonWrap}>
      {el.followed ? (
        <button
          disabled={followingInProgress.some((id: number) => id === el.id)}
          onClick={() => {
            console.log(el.followed)
            dispatch(unfollow(el.id)
            )}}
          className={Styles.unfollowButton}
        >
          Remove
        </button>
      ) : (
        <button
          disabled={followingInProgress.some((id: number) => id === el.id)}
          onClick={() => {
            console.log(el.followed)
            dispatch(follow(el.id))
          }}
          className={Styles.followButton}
        >
          <img className={Styles.inviteIcon} src={inviteIcon} alt=""/>
          Add Friend
        </button>
      )}
    </div>
  )
}