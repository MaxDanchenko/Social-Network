import React, {useEffect} from 'react'
import Profile from './Profile'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import {getStatus, getUserProfile, savePhoto, updateStatus} from '../../../Redux/profileReducer'
import {compose} from 'redux'
import {AppStateType} from "../../../Redux/reduxStore";
import {ProfileType} from "../../../api/ApiTypes";
import {getIdSelector, getIsAuthSelector, getProfileSelector, getStatusSelector} from "../../../Redux/selectors";


type PropsType = {
  profile: ProfileType
  status: string
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
  updateStatus: (status: string) => void
  savePhoto: (e: any) => void
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
      isOwner={!props.match.params.userId}
      savePhoto={props.savePhoto}
      profile={props.profile}
      status={props.status}
      updateStatus={props.updateStatus}
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
  profile: getProfileSelector(state),
  status: getStatusSelector(state),
  id: getIdSelector(state),
  isAuth: getIsAuthSelector(state)
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
