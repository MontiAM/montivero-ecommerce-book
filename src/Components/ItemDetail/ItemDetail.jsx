import React from 'react'
import ItemCounter from '../ItemCounter/ItemCounter'
import './ItemDetail.css'

function ItemDetail({firstProduct}) {

  return (
    <div className='ItemDetail'>
        <div className='ItemDetail-section'>
            <img src={firstProduct.src} alt={`imagen ${firstProduct.title}`} />
        </div>
        <div className='ItemDetail-section info'>
            <div className='ItemDetail-section-data'>
                <h2>{firstProduct.title}</h2>
                <p>{firstProduct.description}</p>
                <h3>Precio: ${firstProduct.price}</h3>
            </div>    
            <ItemCounter stock={firstProduct.stock}/>    
        </div>
    </div>
  )
}

export default ItemDetail