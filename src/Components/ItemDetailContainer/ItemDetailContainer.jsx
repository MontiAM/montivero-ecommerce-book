import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'
import { getProductsID } from '../../helpers/getProducts'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

function ItemDetailContainer() {

  const { ID } = useParams();
  const [product, setProduct] = useState({})

  useEffect( () => {
    getProductsID(ID)
      .then( snapshot => {
        if(snapshot.exists()) {
          setProduct( {id:snapshot.id, ...snapshot.data()})
        }
      })
  }, [] )

  return (
    <div className='ItemDetailContainer'>
        { 
          <ItemDetail productID={product}/>
        }
    </div>
  )
}

export default ItemDetailContainer