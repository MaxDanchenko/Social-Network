import React from 'react'
import {connect} from 'react-redux'
import {AppStateType} from '../../../Redux/reduxStore'
import Search from './Search'


const SearchContainer = () => {
  return (
    <Search/>
  )
}

const mapStateToProps = (state: AppStateType) => {

}

export default connect(
  mapStateToProps,
)(SearchContainer)