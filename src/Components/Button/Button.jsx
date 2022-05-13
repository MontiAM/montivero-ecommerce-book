import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

function Button({boton, id}) {
  return (
    <button className='button'>
        <Link className='button-link' to={`/Item/${id}`}>{boton}</Link>
    </button>
  )
}



export default Button