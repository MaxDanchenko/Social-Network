import React from 'react';
import {connect} from "react-redux";
import {logOut} from "../../../Redux/authUserReducer";
import LoginUser from "./LoginUser";


class LoginUserContainer extends React.Component {
render() {
        return <LoginUser {...this.props  }/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.authUser.isAuth
})

export default connect(mapStateToProps, {logOut})(LoginUserContainer)