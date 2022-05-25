import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getAllProducts } from '../../helpers/getProducts'


function ItemListContainer() {

  const [products, setProducts] = useState([])
  const { categoryID }  = useParams();

  useEffect( () => {
    getAllProducts(categoryID)
      .then( snapshot => {
        setProducts( snapshot.docs.map( (doc) => 
          ({ id: doc.id, ...doc.data()})
        ))
      })
      .catch( err => console.log(err))
  }, [categoryID] )

  return (
    <div className='items-list-container'>
      <ItemList listProducts={products}/>
    </div>
  )
}


export default ItemListContainer