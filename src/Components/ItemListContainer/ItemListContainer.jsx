import React, {useState } from 'react'
import { FaPlus, FaMinus } from "react-icons/fa";
import './ItemListContainer.css'
import ModalContainer from '../ModalContainer/ModalContainer'

function Intermedio () {
  const [counter, setCounter] = useState(0)
  const add = () => {
    setCounter(counter + 1)
  }
  const les = () => {
    setCounter(counter - 1)
  }
  const styles = {
    width: '30px',
    height: '30px',
  }
  return (
    <>
      <div style={ {display: 'flex', alignItems:'center', gap:'30px'} }>
        <a style={styles} onClick={add}><FaPlus/></a>
        <p style={styles}>{counter}</p>
        <a style={styles} onClick={les}><FaMinus/></a>
      </div>
    </>
  )
}

function ItemListContainer({ griting }) {
  return (
    <div className='body'>
        {/* <ModalContainer content={<Intermedio/>}/> */}
        {griting}
    </div>
  )
}

export default ItemListContainer