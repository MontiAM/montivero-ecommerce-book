import React, { useState } from 'react'
import ItemCounter from '../ItemCounter/ItemCounter'
import './ItemDetail.css'

function ItemDetail({productID}) {

  const handlererOnAdd = (quantityToAdd) => {
    setCount(quantityToAdd)
  }

  const [ count, setCount] = useState(0)

  const [ product, setProduct ] = useState(productID)

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
            <ItemCounter stock={product.stock} ondAdd={handlererOnAdd}/>    
        </div>
    </div>
  )
}

export default ItemDetail