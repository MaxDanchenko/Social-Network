import React from 'react'
import Profile from './Profile'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import {savePhoto, updateStatus} from '../../../Redux/profileReducer'
import {compose} from 'redux'
import {AppStateType} from '../../../Redux/reduxStore'
import {ProfileType} from '../../../api/ApiTypes'
import {getIdSelector, getIsAuthSelector, getProfileSelector, getStatusSelector} from '../../../Redux/selectors'


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

  updateStatus: (status: string) => void
  savePhoto: (e: File) => void
}

const ProfileContainer: React.FC<PropsType> = (props) => {
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
  isAuth: getIsAuthSelector(state),
})
export default compose<any>(
  connect(mapStateToProps, {
    updateStatus,
    savePhoto,
  }),
  withRouter
)(ProfileContainer)
