import React from 'react'
import { Link } from 'react-router-dom'
import './ButtonGoToCart.css'

function ButtonGoToCart({irA, desc}) {
  return (
    <Link to={`/${irA}`}><button className='button-addCart'>Ir al {desc}</button></Link>
  )
}

export default ButtonGoToCart


