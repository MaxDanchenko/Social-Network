import Styles from './Person.module.scss'
import React from 'react'
import {NavLink} from 'react-router-dom'

type PropsType = {
  id: number
  src: string
  name: string
}

const Person: React.FC<PropsType> = ({id, src, name}) => {
  let path = '/Messages/' + id
  return (
    <NavLink className={Styles.link} to={path}>
      <img className={Styles.avatar} src={src} alt="avatar"/>
      <p className={Styles.name}>{name}</p>
    </NavLink>
  )
}

export default Person
