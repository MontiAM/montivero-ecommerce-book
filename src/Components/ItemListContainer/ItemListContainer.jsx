import React from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getAllProducts } from '../../helpers/getProducts'
import { motion } from'framer-motion/dist/framer-motion'


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
    <motion.div 
      className='items-list-container'
      initial={{ width: 0 }}
      animate={{ width: '100%'}}
      exit={{ x: window.innerWidth, transition: {duration: 0.1}}}
    >
      <ItemList listProducts={products}/>
    </motion.div>
  )
}


export default ItemListContainer  