import React, {useEffect, useRef} from 'react'
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
  const messageEl = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (messageEl.current) {
      messageEl.current.addEventListener('DOMNodeInserted', (event: any) => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
      });
    }
  }, [])
  const FriendsName = props.friendsList.map((el) => (
    <Person key={el.id} id={el.id} name={el.name} src={el.src}/>
  ))

  const MyDialog = props.messages.map((Dialog) => (
    <MyAnswer key={Dialog.id} message={Dialog.message}/>
  ))
  const addNewMessage = (values: ValuesType) => {
    props.sendMessage(values.newMessageBody)
  }
  return (
    <div className={Styles.mainWrap}>
      <div className={Styles.personsWrap}>{FriendsName}</div>
      <div className={Styles.messageWrap}>
        <div ref={messageEl} className={Styles.message}>
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