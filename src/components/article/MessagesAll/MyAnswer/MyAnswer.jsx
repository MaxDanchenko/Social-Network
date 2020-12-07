import React from 'react'
import Styles from "./MyAnswer.module.scss";


const MyAnswer = (props) => {
    return (
        <div className={`${Styles.dialog} ${Styles.myDialog}`}>
            <p className={Styles.post}>
                {props.message}
            </p>
        </div>
    )
}

export default MyAnswer;