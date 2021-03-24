import React from 'react'
import Styles from '../Users.module.scss'
import {NavLink} from 'react-router-dom'
import avatar from '../../../../images/menu-icons/profile-user.png'
import cn from 'classnames'
import arrowLeft from '../../../../images/small_icons/left.svg'
import arrowRight from '../../../../images/small_icons/right.svg'
import {CurrentItemType} from '../../../../api/ApiTypes'
import inviteIcon from '../../../../images/icons/add-friend.png'


type PropsType = {
  users: Array<CurrentItemType>
  pageSize: number
  pageUserCount: number
  currentPage: number

  followingInProgress: any
  unfollow: (userId: number) => void
  follow: (userId: number) => void
  onPageChanged: (arg: number) => void
}
const AllUsers: React.FC<PropsType> = (props) => {
  let pagesCount = Math.ceil(props.pageUserCount / props.pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  const setNextPage = (p: any) => {
    p = props.currentPage + 1
    if (p <= 10) props.onPageChanged(p)
  }
  const setPrevPage = (p: any) => {
    p = props.currentPage - 1
    if (p >= 1) props.onPageChanged(p)
  }

  return (
    <div className={Styles.usersWrap}>
      {props.users.map((u: any) => (
        <div key={u.id}>
          <div className={Styles.personWrap}>
            <div className={Styles.personSubWrap}>
              <NavLink className={Styles.link} to={'/profile/' + u.id}>
                <img
                  className={Styles.avatar}
                  src={u.photos.small != null ? u.photos.small : avatar}
                  alt="avatar"
                />
              </NavLink>
              <ul className={Styles.person}>
                <NavLink className={Styles.linkPerson} to={'/profile/' + u.id}>
                  <li className={Styles.personName}>{u.name}</li>
                  <li className={Styles.aboutPerson}>
                    Job: {u.job || 'React developer'}
                  </li>
                  <li className={Styles.aboutPerson}>{u.interests}</li>
                </NavLink>
              </ul>
            </div>
            <div className={Styles.buttonWrap}>
              {u.followed ? (
                <button
                  disabled={props.followingInProgress.some((id: number) => id === u.id)}
                  onClick={() => {
                    {
                      props.unfollow(u.id)
                    }
                  }}
                  className={Styles.unfollowButton}
                >
                  Remove
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some((id: number) => id === u.id)}
                  onClick={() => {
                    {
                      props.follow(u.id)
                    }
                  }}
                  className={Styles.followButton}
                >
                  <img className={Styles.inviteIcon} src={inviteIcon} alt=""/>
                  Add Friend
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
      <div className={Styles.buttonsBlock}>
        <img className={cn(Styles.arrow, {[Styles.disabled]: props.currentPage <= 1})}
             src={arrowLeft}
             alt="arrow"
             onClick={setPrevPage}/>
        {pages.map((p) => {
          return (
            <button
              className={cn({[Styles.pageButton]: props.currentPage === p})}
              onClick={() => {
                props.onPageChanged(p)
              }}>
              {p}
            </button>
          )
        })}
        <img className={cn(Styles.arrow, {[Styles.disabled]: props.currentPage >= 10})}
             src={arrowRight}
             alt="arrow"
             onClick={setNextPage}/>
      </div>
    </div>
  )
}
export default AllUsers