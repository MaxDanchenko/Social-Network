import React from 'react';
import Styles from './Users.module.css'
import {NavLink} from "react-router-dom";
import * as axios from 'axios'
import avatar from '../../../images/avatars/annUser.jpg'


class UsersFollowingAPI extends React.Component {
    componentDidMount() {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}
            &count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}
            &count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }


    render() {
        let path = '/UsersFollow/' + this.props.id;

        let pagesCount = Math.ceil(this.props.pageUserCount / this.props.pageSize)

        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div>
            {
                this.props.users.map(u => <div key={u.id}>
                    <div className={Styles.personWrap}>
                        <div className={Styles.personSubWrap}>
                            <NavLink className={Styles.link} to={path}>
                                <img className={Styles.avatar} src={u.photos.small != null ? u.photos.small : avatar}
                                     alt="avatar"/>
                            </NavLink>
                            <ul className={Styles.person}>
                                <li className={Styles.personName}>{u.name}</li>
                                <li className={Styles.aboutPerson}>{u.job}, {u.city}</li>
                                <li className={Styles.aboutPerson}>{u.interests}</li>
                            </ul>
                        </div>
                        <div className={Styles.buttonWrap}>
                            {u.friend
                                ? <button onClick={() => {
                                    this.props.remove(u.id)
                                }} className={Styles.followButton}><img className={Styles.inviteIcon}
                                                                        src={require('../../../images/small_icons/icon_invite.png')}
                                                                        alt=""/>Add Friend</button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
                                }} className={Styles.removeButton}>Remove</button>}
                        </div>
                    </div>
                </div>)
            }
            <div className={Styles.buttonsBlock}>
                { pages.map(p => {
                    return <button className={this.props.currentPage === p && Styles.pageButton}
                    onClick = { (e)=> {this.onPageChanged(p) }}>{p}</button>
                })}
            </div>
        </div>
    }
}


export default UsersFollowingAPI;