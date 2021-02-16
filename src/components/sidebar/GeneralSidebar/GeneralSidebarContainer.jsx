import React, {useEffect} from 'react'
import Sidebar from './GeneralSidebar'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {getStatus, getUserProfile, savePhoto, updateStatus} from '../../../Redux/profileReducer'
import {auth} from '../../../Redux/authUserReducer'
import {withRouter} from 'react-browser-router'


const GeneralSidebarContainer = (props) => {
  const refreshProfile = () => {
    let userId = props.match.params.userId
    if (!userId) userId = props.id
    if (!props.id) {
      props.history.push('/Sign In')
    }
    props.getUserProfile(userId)
    props.getStatus(userId)
  }
  useEffect(() => {
    refreshProfile()
  }, [])
  useEffect(() => {
    refreshProfile()
  }, [props.match.params.userId])
  return <Sidebar {...props} />
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  isAuth: state.authUser.isAuth,
  id: state.authUser.id
})
export default compose(
  connect(mapStateToProps, {
    getUserProfile,
    getStatus,
    updateStatus,
    auth,
    savePhoto
  }),
  withRouter
)(GeneralSidebarContainer)
