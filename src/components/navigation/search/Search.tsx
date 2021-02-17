import React from 'react'
import Styles from './Search.module.scss'


const Search: React.FC = () => {
  return <input type="text" placeholder="Search" className={Styles.area}/>
}

export default Search
