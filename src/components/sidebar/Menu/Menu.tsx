import React, {useState} from 'react'
import Styles from './Menu.module.scss'
import {NavLink} from 'react-router-dom'


const Menu: React.FC = () => {
  const [menu] = useState([
    {id: 1, linkTo: '/Home', menuName: 'Home'},
    {id: 2, linkTo: '/Profile', menuName: 'Profile'},
    {id: 3, linkTo: '/Messages', menuName: 'Messages'},
    {id: 4, linkTo: '/UsersFollow', menuName: 'Users'},
    {id: 5, linkTo: '/Photos', menuName: 'Photos'},
    {id: 6, linkTo: '/Videos', menuName: 'Videos'},
    {id: 7, linkTo: '/Sign In', menuName: 'Sign In'}
  ])
  return (
    <ul className={Styles.table}>
      {
        menu.map(el =>
          <li key={el.id} className={Styles.list}>
          <NavLink to={el.linkTo} className={Styles.link}>
            {el.menuName}
          </NavLink>
        </li>)
      }
    </ul>
  )
}

export default Menu
