import React from 'react'
import { FaAngleDown } from "react-icons/fa";


function NavItem({href, link}) {
  return (
    <>
      <li className='nav__item'>
        <a href={href} className='nav_link'>{link}</a>
        <FaAngleDown className='nav__item-arrow'/>
      </li>
    </>
    )
}

export default NavItem

