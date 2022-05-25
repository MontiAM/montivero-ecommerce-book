import React, { useContext } from 'react'
import './CartProduct.css'
import CartContext from '../../store/cart-context'

function CartProduct({product}) {
  const cartCtx = useContext(CartContext)
  return (
    <div className='CartProduct'>
        <div className='CartProduct-img'>
          <img src={product.src} alt="" />
        </div>
        <div className='CartProduct-contain'>
          <h2>{product.title}</h2>
          <div className='CartProduct-totals'>
            <h3>CANTIDAD: {product.quantity}</h3>
            <h3>PRECIO: {product.price}</h3>
          </div>
        </div>
        <button onClick={ () => cartCtx.deleteByID(product.id)}>Borrar</button>
    </div>
  )
}

export default CartProduct