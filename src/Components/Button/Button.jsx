import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

function Button({boton, id}) {
  return (
    <button className='button'>
        <Link to={`/Item/${id}`}>{boton}</Link>
    </button>
  )
}



export default Button