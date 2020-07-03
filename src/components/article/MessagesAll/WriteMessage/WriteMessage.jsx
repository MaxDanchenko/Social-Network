import React from "react";
import Styles from "./WriteMessage.module.css"


let WriteMessage = (props) => {
    let newPost = React.createRef();
    let addMessage = () => {
        props.addMessage()
    }
    let onMessageChange = () => {
        let text = newPost.current.value
        props.onMessageChange(text)
    }



    return (
        <form className={Styles.writeMessage}>
                <textarea ref={newPost} onChange={onMessageChange} value={props.myDialogsListNew} placeholder={'Write' +
                ' your message'} className={Styles.MessageArea} name="message" id="txt" cols="2"  maxLength={'500'}/>
                <button onClick={addMessage} type={'Button'} className={Styles.SendButton} resize={'none'}>Send</button>
        </form>
    )
}

export default WriteMessage;