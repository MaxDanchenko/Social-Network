import React, {useCallback, useState} from 'react'
import Styles from './Search.module.scss'
import debounce from 'lodash.debounce'
import searchIcon from '../../../images/icons/search.svg'
import {SearchResult} from '../searchResult/SearchResult'
import {findUsers} from '../../../Redux/usersReducer'
import {useDispatch, useSelector} from 'react-redux'
import {getCurrentPageSelector, getFoundUsersCountSelector, getPageSizeSelector} from '../../../Redux/selectors'



export const Search: React.FC = () => {
  const [hideIcon, setHideIcon] = useState(false)
  const [hideResult, setHideResult] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const usersCount = useSelector(getFoundUsersCountSelector)
  const pageSize = useSelector(getPageSizeSelector)
  const currentPage = useSelector(getCurrentPageSelector)
  const dispatch = useDispatch()
  const changeIcon = () => {
    if (!hideIcon) {
      setHideIcon(true)
    } else setHideIcon(false)
  }
  const debouncedSave = useCallback(
    debounce((inputValue, currentPage, pageSize) => dispatch(findUsers(inputValue, currentPage, pageSize)), 1000), [],
  )
  const handleChange = (e: any) => {
    e.preventDefault()
    const eventValue = e.target.value
    setInputValue(eventValue)
    debouncedSave(inputValue, currentPage, pageSize)
  }
  const onUsersPageChanged = (pageNumber: number) => {
    debouncedSave(inputValue, pageNumber, pageSize)
  }
  const handleShowResult = () => {
    setHideResult(true)
  }
  const handleHideResult = () => {
    setHideResult(false)
  }
  return (
    <>
      <div className={Styles.inputWrapper}>
        <form onFocus={handleShowResult}>
          <input type="text"
                 placeholder="Find people"
                 className={Styles.area}
                 onChange={handleChange}/>

          <div onMouseLeave={changeIcon}
                  onMouseEnter={changeIcon}
                  className={Styles.searchIconWrapper}>
            <img className={Styles.searchIcon}
                 src={searchIcon} alt="search"/>
          </div>
        </form>
        {hideResult && inputValue ?
          <SearchResult onUsersPageChanged={onUsersPageChanged}
                        usersCount={usersCount}
                        handleHideResult={handleHideResult}/>
          : null}
      </div>
    </>
  )
}


