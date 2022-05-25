import React, { useState, useContext } from 'react'
import ItemCounter from '../ItemCounter/ItemCounter'
import ButtonGoToCart from '../ButtonGoToCart/ButtonGoToCart'
import './ItemDetail.css'
import CartContext from '../../store/cart-context'

function ItemDetail({productID}) {
  
  const cartCtx = useContext(CartContext)
  const [ quantity, setQuantity] = useState(0)
  
  const handlererOnAdd = (quantityToAdd) => {
    setQuantity(quantityToAdd)
    cartCtx.addToCart(productID, quantityToAdd)
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
            {
              quantity > 0 ? <ButtonGoToCart irA={'cart'} desc='carrito'/> : <ItemCounter stock={productID.stock} onAdd={handlererOnAdd}/>    
            }
        </div>
    </div>
  )
}

export default ItemDetail