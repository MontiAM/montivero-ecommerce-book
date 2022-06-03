import React, { useContext } from 'react'
import ButtonGoToCart from '../ButtonGoToCart/ButtonGoToCart'
import './CartTotales.css'
import CartContext from '../../store/cart-context'

function CartTotales({totalPrice, totalCount}) {
    const cartCtx = useContext(CartContext)
    const useCheckout = () => {
        cartCtx.cleanCart()
    }

    return (
        <>
            <div className='cart-totales'>
                <div>
                    <p>Total productos: {totalCount} </p>
                    <p>Precio Total: {totalPrice}</p>
                </div>
                <ButtonGoToCart finish={true} irA={''} checkout={useCheckout} desc='terminar compra'/>
            </div>
        </>
    )
}

export default CartTotales