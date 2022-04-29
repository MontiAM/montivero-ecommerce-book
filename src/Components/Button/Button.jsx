import React from 'react'
import './Button.css'

function Button({boton}) {
  return (
    <button className='button'>
        {boton}
    </button>
  )
}

export default Button