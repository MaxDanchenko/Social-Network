import React from "react";
import Styles from "./Messages.module.css";
import {NavLink} from "react-router-dom";
import WriteMessageContainer from "./WriteMessage/WriteMessageContainer";

const Person = (props) => {
    let path = '/Messages/' + props.id;
    return (
        <NavLink className={Styles.link} to={path}>
            <img className={Styles.avatar} src={props.src} alt="avatar"/>
            <p className={Styles.name}>{props.name}</p>
        </NavLink>
    )
}
const FriendMessage = (props) => {
    return (
        <div className={Styles.dialog}>
            <p className={Styles.post}>
                {props.msg}
            </p>
            <p className={Styles.post}>
                {props.my}
            </p>
        </div>
    )
}
const MyAnswer = (props) => {
    return (
        <div className={`${Styles.dialog} ${Styles.myDialog}`}>
            <p className={Styles.post}>
                {props.my}
            </p>
        </div>
    )
}

const Messages = (props) => {
    let FriendsName = props.friendsList.map(Friend => <Person name={Friend.name} src={Friend.src}/>);
    let FriendsDialog = props.dialogsList.map(Dialog => <FriendMessage msg={Dialog.FriendMessage}/>);
    let MyDialog = props.myDialogsList.map(Dialog => <MyAnswer my={Dialog.my}/>);

    let newPost = React.createRef();

    let addMessage = () => {
        props.addMessage()
    }
    let onMessageChange = () => {
        let text = newPost.current.value
        props.onMessageChange(text)
    }

    return (
        <div className={Styles.mainWrap}>
            <div className={Styles.personsWrap}>
                {FriendsName}
            </div>
            <div className={Styles.messageWrap}>
                <div className={Styles.message}>
                    {FriendsDialog}
                    {MyDialog}
                </div>
                <form className={Styles.writeMessage}>
                <textarea ref={newPost} onChange={onMessageChange} value={props.myDialogsListNew} placeholder={'Write' +
                ' your message'} className={Styles.MessageArea} name="message" id="txt" cols="2"  maxLength={'500'}/>
                    <button onClick={addMessage} type={'Button'} className={Styles.SendButton} resize={'none'}>Send</button>
                </form>
                {/*<WriteMessageContainer/>*/}
            </div>

        </div>
    )
}
export default Messages;