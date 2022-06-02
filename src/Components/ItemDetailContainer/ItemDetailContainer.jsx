import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'
import { getProductsID } from '../../helpers/getProducts'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { motion } from'framer-motion/dist/framer-motion'


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
    <motion.div 
      className='ItemDetailContainer'
      initial={{ width: 0 }}
      animate={{ width: '100%'}}
      exit={{ x: window.innerWidth, transition: {duration: 0.1}}}
    >
      <ItemDetail productID={product}/>   
    </motion.div>
  )
}

export default ItemDetailContainer