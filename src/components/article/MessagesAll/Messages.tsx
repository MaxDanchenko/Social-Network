import React from 'react'
import Styles from './Messages.module.scss'
import Person from './Person/Person'
import MyAnswer from './MyAnswer/MyAnswer'
import {reduxForm} from 'redux-form'
import AddMessageForm from './AddMessageFormRedux/AddMessageFormRedux'

type ValuesType = {
  newMessageBody: string
}
type FriendsListType = {
  id: number
  name: string
  src: string
}
type MessageType = {
  id: number
  message: string
}
type PropsType = {
  friendsList: Array<FriendsListType>
  messages: Array<MessageType>;

  sendMessage: (newMessageBody: string) => void
}


const Messages: React.FC<PropsType> = (props) => {

  const FriendsName = props.friendsList.map((Friend) => (
    <Person id={Friend.id} name={Friend.name} src={Friend.src}/>
  ))

  const MyDialog = props.messages.map((Dialog) => (
    <MyAnswer message={Dialog.message}/>
  ))
  const addNewMessage = (values: ValuesType) => {
    props.sendMessage(values.newMessageBody)
  }
  return (
    <div className={Styles.mainWrap}>
      <div className={Styles.personsWrap}>{FriendsName}</div>
      <div className={Styles.messageWrap}>
        <div className={Styles.message}>
          {MyDialog}
        </div>
        <AddMessageFormRedux onSubmit={addNewMessage}/>
      </div>
    </div>
  )
}
type ReduxFormType = { newMessageBody: string }
const AddMessageFormRedux = reduxForm<ReduxFormType>({form: 'dialogAddMessageForm'})(AddMessageForm)
export default Messages