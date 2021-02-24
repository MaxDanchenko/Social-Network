import React from 'react'
import {actions} from '../../../Redux/messageReducer'
import {connect} from 'react-redux'
import Messages from './Messages'
import {compose} from 'redux'
import {withAuthRedirect} from '../../../hoc/withAuthRedirect'
import {reset} from 'redux-form'
import { AppStateType } from '../../../Redux/reduxStore'



const mapStateToProps = (state: AppStateType) => {
  return {
    friendsList: state.messagePage.friendsList,
    messages: state.messagePage.messages
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  sendMessage: (newMessageBody: string) => {
    dispatch(actions.sendMessageCreator(newMessageBody))
    dispatch(reset('dialogAddMessageForm'))
  }
})

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps)
)(Messages)
