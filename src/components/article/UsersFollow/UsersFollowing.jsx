import React from 'react';
import Styles from './Users.module.css'
import {NavLink} from "react-router-dom";
import avatar from '../../../images/avatars/annUser.jpg'
import PreLoader from "../../CommonFiles/PreLoader/PreLoader";

let UsersFollowing = (props) => {
    if (!props.users) {
        return  <PreLoader/>
    }
    let pagesCount = Math.ceil(props.pageUserCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div className={Styles.usersWrap}>
        {props.users.map(u => <div key={u.id}>
            <div className={Styles.personWrap}>
                <div className={Styles.personSubWrap}>
                    <NavLink className={Styles.link} to={'/profile/' + u.id}>
                        <img className={Styles.avatar} src={u.photos.small != null ? u.photos.small : avatar}
                             alt="avatar"/>
                    </NavLink>
                    <ul className={Styles.person}>
                        <NavLink className={Styles.linkPerson} to={'/profile/' + u.id}>
                            <li className={Styles.personName}>{u.name}</li>
                            <li className={Styles.aboutPerson}>{u.job} {u.city}</li>
                            <li className={Styles.aboutPerson}>{u.interests}</li>
                        </NavLink>
                    </ul>
                </div>
                <div className={Styles.buttonWrap}>
                    {u.followed ?
                        <button
                            disabled={props.followingInProgress.some(id => id === u.id)}
                                onClick={() => {{props.unfollow(u.id)}}}
                                className={Styles.unfollowButton}>Unfollow</button>
                        : <button
                            disabled={props.followingInProgress.some(id => id === u.id)}
                                  onClick={() => {{props.follow(u.id)}}}
                                  className={Styles.followButton}>
                            <img className={Styles.inviteIcon}
                                 src={require('../../../images/small_icons/icon_invite.png')}
                                 alt=""/>Add Friend</button>}
                </div>
            </div>
        </div>)
        }
        <div className={Styles.buttonsBlock}>
            {pages.map(p => {
                return <button className={props.currentPage === p && Styles.pageButton}
                               onClick={(e) => {
                                   if (!props.currentPage) {
                                       return  <PreLoader/>
                                   }
                                   props.onPageChanged(p)
                               }}>{p}</button>
            })}
        </div>
    </div>
}


export default UsersFollowing;