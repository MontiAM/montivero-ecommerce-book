import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Item from '../Item/Item'
import './ItemList.css'


function ItemList({ listProducts }) {
  const { categoryID } = useParams()
  const [products, setProducts] = useState([...listProducts])

  useEffect( () => {
    setProducts(listProducts)
  }, [categoryID])

  return (
    <div className='item-list'>
      {products.map( (producto) => <Item product={producto} key={producto.id} />)
      }
    </div>
  )
}

export default ItemList

