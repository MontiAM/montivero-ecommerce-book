import React, {useState} from 'react'
import { FaPlus, FaMinus } from "react-icons/fa";
import './ItemList.css'


function ItemList(producto) {
  
  const [counter, setCounter] = useState(0)
  const onAdd = () => {
    if (counter < producto.producto.cantidad) {
      setCounter(counter + 1)
    }
  }
  const onLes = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  const sectionStyle = {
    backgroundImage: "url(" + producto.producto.urlImg + ")",
    objectFit: "contain"
  }

  return (
       <div className='item-list' style={ sectionStyle }>
         <h1>{producto.producto.titulo}</h1>
         <div className='item-list-handelers'>
            <a href="#" onClick={onAdd}><FaPlus/></a>
            <p>{counter}</p>
            <a href="#" onClick={onLes}><FaMinus/></a>
         </div>
         <div>${producto.producto.precio}</div>
       </div>
  )
}

export default ItemList

