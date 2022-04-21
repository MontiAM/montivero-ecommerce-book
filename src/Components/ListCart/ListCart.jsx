import React from 'react'
import './ListCart.css'


function ListCart({titleh2}) {

  return (
    <div className='cart'>
        <h2 className='cart__title'>{titleh2}</h2>
    </div>
  )
}

export default ListCart