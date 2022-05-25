import React from 'react'
import Button from '../Button/Button';
import './Item.css'

function Item({product}) {

  return (
    <div className='item'>
        <img src={product.src} alt="img libro" className='img'/>
        <div className='item-contain'>
            <div>
                <h1>{product.title}</h1>
                <div className='item-price'>${product.price}
                </div> 
            </div>
            <Button boton="Descripción" id={product.id}/>
        </div>
    </div>
  )
}

export default Item