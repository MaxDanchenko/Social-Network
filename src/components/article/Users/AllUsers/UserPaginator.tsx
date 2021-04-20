import React from 'react'
import Styles from '../Users.module.scss'
import cn from 'classnames'
import arrowLeft from '../../../../images/small_icons/left.svg'
import arrowRight from '../../../../images/small_icons/right.svg'

type PropsType = {
  pageSize: number
  currentPage: number
  pageUserCount: number
  onPageChanged: any
}
export const UserPaginator: React.FC<PropsType> = ({
                                                     onPageChanged,
                                                     pageUserCount,
                                                     pageSize,
                                                     currentPage,
                                                   }) => {
  let pagesCount = Math.ceil(pageUserCount / pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  const setNextPage = (p: any) => {
    p = currentPage + 1
    if (p <= 10) onPageChanged(p)
  }
  const setPrevPage = (p: any) => {
    p = currentPage - 1
    if (p >= 1) onPageChanged(p)
  }

  return (
    <div className={Styles.buttonsBlock}>
      <img className={cn(Styles.arrow, {[Styles.disabled]: currentPage <= 1})}
           src={arrowLeft}
           alt="arrow"
           onClick={setPrevPage}/>
      {pages.map((p) => {
        return (
          <button
            className={cn({[Styles.pageButton]: currentPage === p})}
            onClick={() => {
              onPageChanged(p)
            }}>
            {p}
          </button>
        )
      })}
      <img className={cn(Styles.arrow, {[Styles.disabled]: currentPage >= 10})}
           src={arrowRight}
           alt="arrow"
           onClick={setNextPage}/>
    </div>
  )
}