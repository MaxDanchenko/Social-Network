import React, {useCallback, useState} from 'react'
import Styles from './Search.module.scss'
import debounce from 'lodash.debounce'
import searchIcon from '../../../images/icons/search.svg'
import searchIconActive from '../../../images/icons/search-active.svg'
import {SearchResult} from '../searchResult/SearchResult'


const Search: React.FC = () => {
  const [dbValue, setDbValue] = useState()
  const [hideIcon, setHideIcon] = useState(false)
  const [hideResult, setHideResult] = useState(false)
  const changeIcon = () => {
    if (!hideIcon) {
      setHideIcon(true)
    } else setHideIcon(false)
  }
  const debouncedSave = useCallback(
    debounce((eventValue) => setDbValue(eventValue), 1000), [],
  )
  const handleChange = (e: any) => {
    const eventValue = e.target.value
    debouncedSave(eventValue)
  }
  const showResult = () => {
    if (!hideResult) {
      setHideResult(true)
    } else setHideResult(false)
  }
  return (
    <>
      <div className={Styles.inputWrapper}>

        <input type="text"
               placeholder="Find people"
               className={Styles.area}
               onChange={handleChange}/>

        <div onMouseLeave={changeIcon}
             onMouseEnter={changeIcon}
             onClick={showResult}
             className={Styles.searchIconWrapper}>
          <img className={Styles.searchIcon}
               src={!hideIcon ? searchIcon : searchIconActive} alt="search"/>
        </div>
        {hideResult && <SearchResult/>}
      </div>
    </>
  )
}

export default Search

