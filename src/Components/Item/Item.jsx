import React, { useState } from 'react'
import { FaPlus, FaMinus } from "react-icons/fa";
import Button from '../Button/Button';
import './Item.css'

function Item(product) {

    const [counter, setCounter] = useState(product.stock)
    const onAdd = () => {
        if (counter < product.stock) {
        setCounter(counter + 1)
    }
    }
    const onLes = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }

  return (
    <div className='item'>
        <img src={product.src} alt="img libro" className='img'/>
        <div className='item-contain'>
            <h1>{product.title}</h1>
            <div className='item-price'>${product.price}</div> 
            <div className='item-handelers'>
                <a href="#" onClick={onAdd}><FaPlus/></a>
                <p>{counter}</p>
                <a href="#" onClick={onLes}><FaMinus/></a>
            </div>
            <Button boton="Descripción"/>
        </div>
    </div>
  )
}

export default Item