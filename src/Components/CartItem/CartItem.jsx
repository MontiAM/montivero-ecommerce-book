import React, { useContext, useEffect, useState } from 'react'
import './CartItem.css'
import ButtonGoToCart from '../ButtonGoToCart/ButtonGoToCart'
import CartContext from '../../store/cart-context'
import CartProduct from '../CartProduct/CartProduct'
import CartTotales from '../CartTotales/CartTotales'

function CartItem() {
  const cartCtx = useContext(CartContext)
  const [ products, setProducts] = useState(cartCtx.cartList)

  useEffect(() => {
    setProducts(cartCtx.cartList)
  }, [cartCtx.cartList])


  return (
    <div className='CartItem'>
      {
        cartCtx.cartList.length === 0 
        ? <ButtonGoToCart irA={''} desc='listado'/>
        : products.map( (product => <CartProduct product={product} key={product.id}/>))
      }
      {
        cartCtx.cartList.length === 0 ? '' : <CartTotales totalCount={cartCtx.totalCount()} totalPrice={cartCtx.totalPrice()}/>
      }
      
    </div>
  )
}

export default CartItem