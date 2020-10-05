import {NavLink} from 'react-router-dom';
import React from 'react';
import Styles from './Comment.module.css'



const Author = (props) => {
    let path = '/Comments/' + props.id;
    return (
        <NavLink className={Styles.link} to={path}>
            <p className={Styles.person}>{props.name}</p>
        </NavLink>
    )
}
const Commentary = (props) => {
    let path = '/Comments/' + props.id;
    return (
        <NavLink className={Styles.link} to={path}>
            <p className={Styles.person}>
                {props.post}
            </p>
        </NavLink>
    )
}

const Comment = (props) => {
    let Comments = props.commentaryList.map(Comm => <Commentary id={Comm.id} post={Comm.post}/>);
    let Persons = props.personsList.map(Person => <Author name={Person.name} id={Person.id} com={Person.com}/>);


    let newComment = React.createRef();
    let onAddPost = () => {
        props.onAddPost()
    }
    let onPostChange = () => {
        let text = newComment.current.value;
        props.onPostChange(text)
    }
    return (
        <div className={Styles.main}>
            <div className={Styles.personWrap}>
                {Persons}
            </div>
            <div className={Styles.commentWrap}>
                {Comments}
            </div>
            <div className={Styles.writeMessage}>
                <textarea onChange={onPostChange} value={props.newCommentAdd} ref={newComment} placeholder={'Write' +
                ' your message'} className={Styles.MessageArea} name="message" id="txt" cols="2" maxLength={'500'}/>
                <button onClick={onAddPost} type={'button'} className={Styles.SendButton} resize={'none'}>Send</button>
            </div>

        </div>
    )
}

export default Comment;