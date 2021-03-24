import React from 'react'
import {CurrentItemType} from '../../../api/ApiTypes'
import FriendsContainer from './Friends/FriendsContainer'
import AllUsers from './AllUsers/AllUsers'
import {makeStyles, Theme, useTheme} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import SwipeableViews from 'react-swipeable-views'

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

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: '#ededed',
    boxShadow: '0 0 5px 1px #9c9c9c'
  }
}))
type PropsType = {
  users: Array<CurrentItemType>
  pageSize: number
  pageUserCount: number
  currentPage: number

  followingInProgress: any
  unfollow: (userId: number) => void
  follow: (userId: number) => void
  onPageChanged: (arg: number) => void
}
const UsersFollowing: React.FC<PropsType> = (props) => {
  const classes = useStyles()
  const theme = useTheme()
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }

  const handleChangeIndex = (index: number) => {
    setValue(index)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Friends" {...a11yProps(0)} />
          <Tab label="All users" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <FriendsContainer/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <AllUsers
            users={props.users}
            pageSize={props.pageSize}
            pageUserCount={props.pageUserCount}
            currentPage={props.currentPage}
            unfollow={props.unfollow}
            follow={props.follow}
            onPageChanged={props.onPageChanged}
            followingInProgress={props.followingInProgress}/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
      </SwipeableViews>
    </div>
  )
}
export default UsersFollowing
