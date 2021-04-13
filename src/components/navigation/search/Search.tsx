import React, {useCallback, useState} from 'react'
import Styles from './Search.module.scss'
import {instance} from '../../../api/api'
import debounce from 'lodash.debounce'

//   const friendAPI = {
//   isFriend(term = 'test') {
//     return instance.get<any>(`users?term=${term}`).then((res) => res.data)
//   }
// }
 const Search: React.FC = () => {
//   const getFriends = () => {
//     friendAPI.isFriend('Danchenko')
//   }
//   const [value, setValue] = useState()
//   const [dbValue, setDbValue] = useState()
//   const debouncedSave = useCallback(
//     debounce((eventValue) => setDbValue(eventValue), 1000), []
//   )
//   const handleChange = (e: any) => {
//     const eventValue = e.target.value
//     setValue(eventValue)
//     debouncedSave(eventValue)
//   }
  return (
    <>
      <input type="text" placeholder="Find people" className={Styles.area}/>
           {/*<input type="text" placeholder="Find people" className={Styles.area} onChange={handleChange}/>*/}
           {/*<input type="text" value={value}/>*/}
           {/*<input type="text" value={dbValue}/>*/}
    </>
  )
}

export default Search
