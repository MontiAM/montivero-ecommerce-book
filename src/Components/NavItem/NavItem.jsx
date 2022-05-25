import React from 'react'
import { FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';


function NavItem({ link }) {
  return (
    <>
      <li className='nav__item'>
        <Link to={`/category/:${link}`} className='nav_link'>{link}</Link>
        <FaAngleDown className='nav__item-arrow'/>
      </li>
    </>
    )
}

export default NavItem

