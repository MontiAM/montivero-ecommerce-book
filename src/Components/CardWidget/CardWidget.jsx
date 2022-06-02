import React, { useEffect } from 'react'
import './CardWidget.css'
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

function CardWidget({items}) {
  useEffect( () => {
    console.log(items);
  }, [items])

  return (
    <div 
      className='card__widget'
    >
        <div id="card-widget">
          <Link to='/cart'><FaShoppingCart/>{items}</Link>  
        </div>
    </div>
  )
}

export default CardWidget