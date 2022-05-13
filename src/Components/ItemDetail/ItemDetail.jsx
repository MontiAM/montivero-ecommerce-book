import React, { useState, useContext } from 'react'
import ItemCounter from '../ItemCounter/ItemCounter'
import './ItemDetail.css'
import CartContext from '../../store/cart-context'

function ItemDetail({productID}) {
  
  const cartCtx = useContext(CartContext)
  const [ quantity, setQuantity] = useState(0)
  const [ product, setProduct ] = useState(productID)

  
  const handlererOnAdd = (quantityToAdd) => {
    setQuantity(quantityToAdd)
    cartCtx.addItem(productID, quantityToAdd)
  }

  return (
    <div className='ItemDetail'>
        <div className='ItemDetail-section'>
            <img src={product.src} alt={`imagen ${product.title}`} />
        </div>
        <div className='ItemDetail-section info'>
            <div className='ItemDetail-section-data'>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <h3>Precio: ${product.price}</h3>
            </div>    
            <ItemCounter stock={product.stock} onAdd={handlererOnAdd}/>    
        </div>
    </div>
  )
}

export default ItemDetail