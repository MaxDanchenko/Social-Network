import React, {useEffect} from 'react'
import {useTheme} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import SwipeableViews from 'react-swipeable-views'
import {
  getCurrentFriendsPageSelector,
  getCurrentPageSelector, getFriendsPageSizeSelector,
  getFriendsSelector, getFriendsTotalCountSelector,
  getIsFetchingSelector,
  getPageSizeSelector, getPageUserCountSelector,
  getUsersSelector,
} from '../../../Redux/selectors'
import {useDispatch, useSelector} from 'react-redux'
import Styles from './Users.module.scss'
import {getUsers} from '../../../Redux/usersReducer'
import {CurrentItemType} from '../../../api/ApiTypes'
import {UserList} from './AllUsers/UserList'
import {UserPaginator} from './AllUsers/UserPaginator'
import {PreLoader} from '../../CommonFiles/PreLoader/PreLoader'
import {getFriends} from '../../../Redux/friendsReducer'

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const {children, value, index, ...other} = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  }
}

type PropsType = {}
export const UsersPage: React.FC<PropsType> = () => {
  const users: Array<CurrentItemType> = useSelector(getUsersSelector)
  const friends: Array<CurrentItemType> = useSelector(getFriendsSelector)
  const pageSize = useSelector(getPageSizeSelector)
  const currentPage = useSelector(getCurrentPageSelector)
  const pageUserCount = useSelector(getPageUserCountSelector)
  const friendsCurrentPage = useSelector(getCurrentFriendsPageSelector)
  const friendsTotalCount = useSelector(getFriendsTotalCountSelector)
  const friendsPageSize = useSelector(getFriendsPageSizeSelector)
  const isFetching = useSelector(getIsFetchingSelector)
  const dispatch = useDispatch()
  const onUsersPageChanged = (pageNumber: number) => {
    dispatch(getUsers(pageNumber, pageSize))
  }
  const onFriendsPageChanged = () => {
    dispatch(getFriends(true))
  }
  const getUsersList = getUsers
  const getFriendsList = getFriends
  useEffect(() => {
    dispatch(getUsersList(currentPage, pageSize))
  }, [])
  useEffect(() => {
    dispatch(getFriendsList(true))
  }, [])
  const theme = useTheme()
  const [value, setValue] = React.useState(0)
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }
  const handleChangeIndex = (index: number) => {
    setValue(index)
  }
  return (
    <div className={Styles.userContainer}>
      <div>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="All users" {...a11yProps(0)} />
            <Tab label="Friends" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            {isFetching ? <PreLoader/> : null}
            <div className={Styles.usersWrap}>
              <UserList users={users}/>
              <UserPaginator
                pageSize={friendsPageSize}
                currentPage={currentPage}
                pageUserCount={pageUserCount}
                onPageChanged={onUsersPageChanged}
              />
            </div>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            {isFetching ? <PreLoader/> : null}
            <div className={Styles.usersWrap}>
              <UserList users={friends}/>
              <UserPaginator
                pageSize={pageSize}
                currentPage={friendsCurrentPage}
                pageUserCount={friendsTotalCount}
                onPageChanged={onFriendsPageChanged}
              />
            </div>
          </TabPanel>
        </SwipeableViews>
      </div>
    </div>
  )
}
