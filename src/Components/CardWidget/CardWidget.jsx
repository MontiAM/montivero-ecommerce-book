import React from 'react'
import './CardWidget.css'
import { FaShoppingCart } from "react-icons/fa";


function CardWidget({items}) {
  return (
    <div className='card__widget'>
        <div id="card-widget"><a href="#" ><FaShoppingCart/>{items}</a></div>
    </div>
  )
}

export default CardWidget