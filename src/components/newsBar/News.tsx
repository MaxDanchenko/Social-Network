import React from 'react'
import Styles from './News.module.scss'
import PreLoader from "../CommonFiles/PreLoader/PreLoader";



type PropsType = {
  title: string
  body: string
}
const News: React.FC<PropsType> = ({title, body}) => {
  if (!title || !body) {
    return <PreLoader/>
  }
  return (
    <div className={Styles.newsWrap}>
      <h3 className={Styles.news}>NEWS</h3>
      <p className={Styles.title}>{title}</p>
      <div className={Styles.body}>{body}</div>
    </div>
  )
}

export default News