import React from 'react'
import {connect} from "react-redux";
import {auth, logIn} from "../../../Redux/authUserReducer";
import Authorization from "./Authorization";



class AuthUserContainer extends React.Component {
    componentDidMount() {
        this.props.auth(this.props.email, this.props.id, this.props.login)
    }

    render() {
        return <Authorization {...this.props }/>
    }
}

const mapStateToProps = (state) => ({
    logIn: state.authUser.logIn,
    isAuth: state.authUser.isAuth
})

export default connect(mapStateToProps, {auth, logIn})(AuthUserContainer)

