import React from 'react'
import {actions} from '../../../Redux/messageReducer'
import {connect} from 'react-redux'
import Messages from './Messages'
import {compose} from 'redux'
import {reset} from 'redux-form'
import {AppStateType} from '../../../Redux/reduxStore'
import {getFriendListSelector, getMessagesSelector} from '../../../Redux/selectors'


const mapStateToProps = (state: AppStateType) => ({
  friendsList: getFriendListSelector(state),
  messages: getMessagesSelector(state),
})

const mapDispatchToProps = (dispatch: any) => ({
  sendMessage: (newMessageBody: string) => {
    dispatch(actions.sendMessageCreator(newMessageBody))
    dispatch(reset('dialogAddMessageForm'))
  },
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(Messages)
