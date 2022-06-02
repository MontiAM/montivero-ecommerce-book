import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'


function ItemList({ listProducts }) {

  return (
    <div className='item-list'>
      {listProducts.map( (producto) => <Item product={producto} key={producto.id} />)
      }
    </div>
  )
}

export default ItemList

