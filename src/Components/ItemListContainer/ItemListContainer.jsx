import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { getProducts } from '../../helpers/getProducts'
import productsData from '../../helpers/products.json'
import { useParams } from 'react-router-dom'
// import {collection, getDocs, getFirestore, query, where, limit} from 'firebase/firestore'
// import { useEffect } from 'react'


function ItemListContainer() {

  // useEffect( () => {
  //   const db = getFirestore(); // Trae los datos de la collection
  //   const itemCollection = collection(db, 'items') // La coleccion de datos
  //   const q = query(
  //     itemCollection,
  //     where('price', '<', 500),
  //     limit(1)
  //   )
  //   getDocs(itemCollection)
  //     .then(snapshot => {
  //       console.log(snapshot.docs.map( doc => {
  //         return { ...doc.data, id: doc.id}
  //       }));
  //     })
  //     .catch( err => console.log(err))
  // })

  const { categoryID }  = useParams();
  const listProducts = getProducts(productsData, categoryID)

  return (
    <div className='items-list-container'>
      <ItemList listProducts={listProducts}/>
    </div>
  )
}


export default ItemListContainer