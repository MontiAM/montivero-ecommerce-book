import React, { useContext } from 'react'
import './CartProduct.css'
import CartContext from '../../store/cart-context'
import { motion } from'framer-motion/dist/framer-motion'
import { Link } from 'react-router-dom'

function CartProduct({product}) {
  const cartCtx = useContext(CartContext)
  return (
    <motion.div 
      className='CartProduct'
      initial={{ width: 0 }}
      animate={{ width: '90%'}}
      exit={{ x: window.innerWidth, transition: {duration: 0.1}}}
    >
        <div className='CartProduct-img'>
          <img src={product.src} alt="" />
        </div>
        <div className='CartProduct-contain'>
          <Link className='CartProduct-h2' to={`/Item/${product.id}`}>{product.title}</Link>
          <div className='CartProduct-totals'>
            <h3>CANTIDAD: {product.quantity}</h3>
            <h3>PRECIO: {product.price}</h3>
          </div>
        </div>
        <button onClick={ () => cartCtx.deleteByID(product.id)}>Borrar</button>
    </motion.div>
  )
}

export default CartProduct