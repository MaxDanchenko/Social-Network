import React from 'react';
import {connect} from "react-redux";
import {auth} from "../../../Redux/authUserReducer";
import LoginUser from "./LoginUser";


class LoginUserContainer extends React.Component {
    componentDidMount() {
        this.props.auth(this.props.email, this.props.id, this.props.login)
    }

    render() {
        return <LoginUser {...this.props  }/>
    }
}

const mapStateToProps = (state) => ({
    login: state.authUser.login
})

export default connect(mapStateToProps, {auth})(LoginUserContainer)