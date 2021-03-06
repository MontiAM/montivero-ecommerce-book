import React, { useState } from 'react'
import { FaPlus, FaMinus } from "react-icons/fa";
import ButtonGoToCart from '../ButtonGoToCart/ButtonGoToCart'
import './ItemCounter.css'

function ItemCounter({stock, onAdd, show}) {
    const [counter, setCounter] = useState(0)
    
    const handelersAdd = () => {
        if (counter < stock) {
        setCounter(counter + 1)
    }
    }
    const handelersLes = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }

    const handelerButton = () => {
        onAdd(counter);
        setCounter(0)
    }

  return (
      <>    
        <div className='item-handelers'>
            <div className='item-handelers-buttons'>
                <button className='button-counter' href="#" onClick={handelersLes}><FaMinus className='icon'/></button>
                <p>{counter}</p>
                <button className='button-counter' onClick={handelersAdd}><FaPlus className='icon'/></button>
            </div>
            { show ? <ButtonGoToCart irA={'cart'} desc='carrito'/> : <></>}
            <button onClick={handelerButton} className='button-addCart'>Agregar al carrito</button>
        </div>
      </>
  )
}

export default ItemCounter