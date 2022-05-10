import React from 'react'
import { FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';


function NavItem({ link }) {

  const linkTo = link.replace(/ /g,"");

  return (
    <>
      <li className='nav__item'>
        <Link to={`/category/:${linkTo}`} className='nav_link'>{link}</Link>
        <FaAngleDown className='nav__item-arrow'/>
      </li>
    </>
    )
}

export default NavItem

