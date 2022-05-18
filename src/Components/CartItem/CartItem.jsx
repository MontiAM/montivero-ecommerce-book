import React, { useContext, useState } from 'react'
import './CartItem.css'
import ButtonGoToCart from '../ButtonGoToCart/ButtonGoToCart'
import CartContext from '../../store/cart-context'
import CartProduct from '../CartProduct/CartProduct'

function CartItem() {
  const cartCtx = useContext(CartContext)
  const [ products, setProducts] = useState(cartCtx.cartList)
  console.log(products);


  return (
    <div className='CartItem'>
      {
        cartCtx.cartList.length === 0 
        ? <ButtonGoToCart irA={''} desc='listado'/>
        : products.map( (product => <CartProduct product={product} key={product.id}/>))
      }
      
      
    </div>
  )
}

export default CartItem