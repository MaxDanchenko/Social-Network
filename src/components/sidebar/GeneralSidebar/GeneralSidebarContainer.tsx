import React, {useEffect} from 'react'
import Sidebar from './GeneralSidebar'
import {connect} from 'react-redux'
import {getStatus, getUserProfile} from '../../../Redux/profileReducer'
import {CurrentItemType, ProfileType} from '../../../api/ApiTypes'
import {AppStateType} from '../../../Redux/reduxStore'
import {getIdSelector, getProfileSelector, getStatusSelector, getUsersSelector} from '../../../Redux/selectors'


type PropsType = {
  match: {
    params: {
      userId: number | null
    }
  }
  id: number | null
  history: any
  profile: ProfileType
  status: string

  getUserProfile: (userId: number | null) => void
  getStatus: (userId: number | null) => void
}
const GeneralSidebarContainer: React.FC<PropsType> = (props) => {
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
  return <Sidebar profile={props.profile} status={props.status}/>
}

let mapStateToProps = (state: AppStateType) => ({
  profile: getProfileSelector(state),
  status: getStatusSelector(state),
  id: getIdSelector(state)
})
export default connect(mapStateToProps, {getUserProfile, getStatus})(GeneralSidebarContainer)
