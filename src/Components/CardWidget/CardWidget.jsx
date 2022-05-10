import React, { useState } from 'react'
import './CardWidget.css'
import { FaShoppingCart } from "react-icons/fa";


function CardWidget({items}) {

  const [ listCart, setListCart] = useState(false)
  const showListCart = () => {
    setListCart(!listCart)
    console.log(listCart);
  }

  return (
    <div className='card__widget'>
        <div id="card-widget"><a href="#" onClick={showListCart}><FaShoppingCart/>{items}</a></div>
    </div>
  )
}

export default CardWidget