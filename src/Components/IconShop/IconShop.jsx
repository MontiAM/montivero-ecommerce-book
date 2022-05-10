import React from 'react'
import { FaBuffer } from "react-icons/fa";
import { Link } from 'react-router-dom'

const IconShop = () => {
  return (
    <>
        <div className='nav__logo'>
            <Link to={'/'}><FaBuffer/></Link>
            {/* <a href="#"><FaBuffer/></a> */}
        </div>
    </>
  )
}

export default IconShop