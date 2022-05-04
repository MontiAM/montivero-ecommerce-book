import { useState, useEffect } from 'react'
import Item from '../Item/Item'
import './ItemList.css'


function ItemList({listProducts, bringProducts}) {

  const [products, setProducts] = useState([])


  useEffect( () => {
    bringProducts(listProducts)
     .then( products => {
          console.log('carga correcta');
          setProducts(products)
      } )
      .catch( err => {
        console.log('error en la carga');
        console.log(err)
      })
  }, [])


  return (
    <div className='item-list'>
      {products.map( (producto) => <Item product={producto} key={producto.id} />)
      }
    </div>
  )
}

export default ItemList

