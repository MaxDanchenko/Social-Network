import React from 'react'
import Styles from './Users.module.scss'
import {NavLink} from 'react-router-dom'
import avatar from '../../../images/avatars/annUser.jpg'
import PreLoader from '../../CommonFiles/PreLoader/PreLoader'
import {CurrentItemType} from '../../../api/commonApiTypes'
import arrowLeft from '../../../images/small_icons/left.svg'
import arrowRight from '../../../images/small_icons/right.svg'
import cn from 'classnames'


type PropsType = {
  users: Array<CurrentItemType>
  pageSize: number
  pageUserCount: number
  currentPage: number

  followingInProgress: any
  unfollow: (userId: number) => void
  follow: (userId: number) => void
  onPageChanged: (arg: any) => void
}
const UsersFollowing: React.FC<PropsType> = (props) => {
  // if (!props.users) {
  //   return <PreLoader/>
  // }
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
                  Unfollow
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
                  <img
                    className={Styles.inviteIcon}
                    src={require('../../../images/small_icons/icon_invite.png')}
                    alt=""
                  />
                  Add Friend
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
      <div className={Styles.buttonsBlock}>
        <img  className={cn(Styles.arrow, {[Styles.disabled]: props.currentPage <= 1})}
              src={arrowLeft}
              alt="arrow"
              onClick={setPrevPage}/>
        {pages.map((p) => {
          return (
            <button
              //@ts-ignore
              className={props.currentPage === p && Styles.pageButton}
              onClick={(e) => {
                // if (!props.currentPage) {
                //   return <PreLoader/>
                // }
                props.onPageChanged(p)
              }}
            >
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

export default UsersFollowing
