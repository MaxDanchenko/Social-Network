import React from 'react';
import {connect} from "react-redux";
import * as axios from "axios";
import {setUserData} from "../../../Redux/authUserReducer";
import LoginUser from "./LoginUser";


class LoginUserContainer extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
            .then(response => {
                if(response.data.resultCode === 0) {
                    this.props.setUserData(response.data.data.login)
                }
            })
    }

    render() {
        return <LoginUser {...this.props  }/>
    }
}

const mapStateToProps = (state) => ({
    login: state.authUser.login
})

export default connect(mapStateToProps, {setUserData})(LoginUserContainer)