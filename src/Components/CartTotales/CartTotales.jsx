import React from 'react'
import './CartTotales.css'

function CartTotales({totalPrice, totalCount}) {

    return (
        <div className='cart-totales'>
            <p>Total productos: {totalCount} </p>
            <p>Precio Total: {totalPrice}</p>
        </div>
    )
}

export default CartTotales