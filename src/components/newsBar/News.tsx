import React from 'react'
import Styles from './News.module.scss'
import {list} from './NewsList'

type PropsType = {}
const News: React.FC<PropsType> = () => {
  return (
    <div className={Styles.wrap}>
      { list.map(el => <div className={Styles.newsItem} key={el.id}>
          <h3 className={Styles.title}>{el.title}</h3>
          <div className={Styles.text}>
            {el.body}
          </div>
          <a className={Styles.link} target={'_blank'} href={el.link}>
            <button className={Styles.readMoreButton}>
              Read More
            </button>
          </a>
        </div>
      )
      }
    </div>
  )
}

export default News
