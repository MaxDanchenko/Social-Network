import React from 'react'
import Styles from './SearchResult.module.scss'
import {UserList} from '../../Users/AllUsers/UserList'
import {useSelector} from 'react-redux'
import {getIsFetchingSelector, getUsersSelector} from '../../../Redux/selectors'
import {UserPaginator} from '../../Users/AllUsers/UserPaginator'
import {ProgressBar} from '../../commonFiles/ProgressBar/ProgressLinear'

type PropsType = {
  usersCount?: number
  onUsersPageChanged: (p: number) => void
  handleHideResult?: () => void
}
export const SearchResult: React.FC<PropsType> = ({
                                                    onUsersPageChanged,
                                                    usersCount,
                                                    handleHideResult,
                                                  }) => {
  const users = useSelector(getUsersSelector)
  const isFetching = useSelector(getIsFetchingSelector)
  return (
    <div className={Styles.resultWrapper} onMouseLeave={handleHideResult}>
      {isFetching ? <ProgressBar/>
        :
        <div>
          {users.length === 0 ? <p>No matches found :(</p>
            :
            <div>
              <UserList users={users} handleHideResult={handleHideResult}/>
              <UserPaginator
                paginationSize={'medium'}
                pageUserCount={usersCount}
                onPageChanged={onUsersPageChanged}
              />
            </div>
          }
        </div>}
    </div>
  )
}