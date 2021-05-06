import React from 'react'
import Pagination from '@material-ui/lab/Pagination';
import Styles from './UserPaginator.module.scss'

type PropsType = {
  pageUserCount?: number
  onPageChanged: any
  paginationSize?: 'small' | 'medium' | 'large'
}
export const UserPaginator: React.FC<PropsType> = ({onPageChanged, pageUserCount, paginationSize}) => {
  const [page, setPage] = React.useState(1);
  const handleChange = (event: any, value: any) => {
    onPageChanged(value)
    setPage(value);
  };
  return (
    <div className={Styles.wrapper}>
      <Pagination size={paginationSize} color={"primary"} onChange={handleChange} page={page} count={pageUserCount} showFirstButton showLastButton />
    </div>
  )
}
