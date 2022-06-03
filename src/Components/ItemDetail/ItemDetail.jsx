import React, { useState, useContext } from 'react'
import ItemCounter from '../ItemCounter/ItemCounter'
import './ItemDetail.css'
import CartContext from '../../store/cart-context'

function ItemDetail({productID}) {
  
  const cartCtx = useContext(CartContext)
  const [ quantity, setQuantity] = useState(0)
  
  const handlererOnAdd = (quantityToAdd) => {
    if (quantityToAdd > 0 ) {
      setQuantity(quantityToAdd)
      cartCtx.addToCart(productID, quantityToAdd)
    } else {
      alert('Debe agregar un monto mayor a 0')
    }
  }

  const showGoToCart = () => {
    return quantity
  }

  return (
    <div className='ItemDetail'>
        <div className='ItemDetail-section'>
            <img src={productID.src} alt={`imagen ${productID.title}`} />
        </div>
        <div className='ItemDetail-section info'>
            <div className='ItemDetail-section-data'>
                <h2>{productID.title}</h2>
                <p>{productID.description}</p>
                <h3>Precio: ${productID.price}</h3>
            </div>
            <ItemCounter show={showGoToCart()} stock={productID.stock} onAdd={handlererOnAdd}/>    
        </div>
    </div>
  )
}

export default ItemDetail