import React from 'react'
import {connect} from "react-redux";
import * as axios from "axios";
import {setUserData} from "../../../Redux/authUserReducer";
import Authorization from "./Authorization";


class AuthUserContainer extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
            .then(response => {
            if(response.data.resultCode === 0) {
                let {email, id, login} = response.data.data
                this.props.setUserData(email, id, login)
            }
        })
    }

    render() {
        return <Authorization {...this.props  }/>
    }
}

const mapStateToProps = (state) => ({
    login: state.authUser.login,
    email: state.authUser.email,
    id: state.authUser.id,
    authOrNo: state.authUser.authOrNo
})
export default connect(mapStateToProps, {setUserData})(AuthUserContainer)

