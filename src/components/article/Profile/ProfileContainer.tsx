import React, {useEffect} from 'react'
import Profile from './Profile'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import {getStatus, getUserProfile, savePhoto, updateStatus} from '../../../Redux/profileReducer'
import {compose} from 'redux'
import {AppStateType} from "../../../Redux/reduxStore";
import {ProfileType} from "../../../api/apiTyper";


type PropsType = {
  match: {
    params: {
      userId: number
    }
  }
  history: {
    push: (string: string) => void
  }
  id: number
  getUserProfile: (userId: number) => void
  getStatus: (userId: number) => void
}

const ProfileContainer: React.FC<PropsType> = (props) => {
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
  return (
    <Profile
      {...props}
      isOwner={!props.match.params.userId}
      setProfilePhoto={savePhoto}
    />
  )
}

type MapStateToPropsType = {
  profile: ProfileType
  status: string
  id: number | null
  isAuth: boolean
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  id: state.authUser.id,
  isAuth: state.authUser.isAuth
})
export default compose(
  connect(mapStateToProps, {
    getUserProfile,
    getStatus,
    updateStatus,
    savePhoto
  }),
  withRouter
)(ProfileContainer)
