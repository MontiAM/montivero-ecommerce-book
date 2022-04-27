import React, {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import ImgSDLA from '../../img/elSeñorDeLosAnillos.jpg'


function ItemListContainer({ griting }) {

  const PRODUCTS = [
    {id: "1", titulo: "El señor de los anillos", urlImg: ImgSDLA, cantidad:'6', precio: '600', descripcion: "Libro sobre...."},
    {id: "2", titulo: "El Hobbit",urlImg:'', cantidad:'4', precio: '600', descripcion: "Libro sobre...."},
    {id: "3", titulo: "Harry Poter y la piedra filosofal",urlImg:'', cantidad:'7', precio: '600', descripcion: "Libro sobre...."},
    {id: "4", titulo: "Harry Poter y la camara de los secretos",urlImg:'', cantidad:'10', precio: '600', descripcion: "Libro sobre...."},
    {id: "5", titulo: "Harry Poter y el prisionero de Azcaban",urlImg:'', cantidad:'5', precio: '600', descripcion: "Libro sobre...."},
    {id: "6", titulo: "Harry Poter y la orden del Fenix",urlImg:'', cantidad:'7', precio: '600', descripcion: "Libro sobre...."}
  ]

  // const importProducts = (ml) => {
  //   const myPromise = new Promise( (res, rej) => {
  //     setTimeout( () => {
  //       res(PRODUCTS)
  //     }, ml)
  //   })
  //   return myPromise
  // }

  // const [products, setProducts] = useState([])

  // useEffect( () => {
  //   importProducts(1500)
  //   .then( res => {
  //     console.log('ready products');
  //     console.log(res);
  //     setProducts(res);
  //   })
  //   .catch( err => console.log("Error" + err))
  // },[])
  

  return (
    <div className='items-list-container'>
      <ItemList titulo={"El señor de los anillos"} producto={PRODUCTS[0]}/>
    </div>
  )
}

export default ItemListContainer