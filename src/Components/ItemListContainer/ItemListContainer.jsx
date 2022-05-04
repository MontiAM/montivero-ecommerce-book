// import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'

function ItemListContainer() {

  const PRODUCTOS = [
    {
      id: "1", 
      title: "El señor de los anillos", 
      src:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fpics.filmaffinity.com%2FEl_se_or_de_los_anillos_La_comunidad_del_anillo-744631610-large.jpg&imgrefurl=https%3A%2F%2Fwww.filmaffinity.com%2Fes%2Ffilm750283.html&tbnid=nLVsHXoqE5eYFM&vet=12ahUKEwjq-aS76bf3AhXNRLgEHSApAY8QMygAegUIARDTAQ..i&docid=6iPrzf5Y7OMSVM&w=841&h=1200&q=el%20se%C3%B1or%20de%20los%20anillos&ved=2ahUKEwjq-aS76bf3AhXNRLgEHSApAY8QMygAegUIARDTAQ", 
      stock:"6", 
      price: "600", 
      description: "Libro sobre...."},
  {
      id: "2", 
      title: "El Hobbit",
      src:"https://www.google.com/imgres?imgurl=https%3A%2F%2Ftrabalibros.com%2Frs%2F3809%2F4886d523-1977-4fa1-ab24-df1b609c897c%2Fff4%2Ffilename%2Fel-hobbit-j-r-r-tolkien-trabalibros.jpg&imgrefurl=https%3A%2F%2Ftrabalibros.com%2Flibros%2Fel-hobbit-jrr-tolkien&tbnid=uDFjJvkVhT6mPM&vet=12ahUKEwjh2Jqs6bf3AhWISLgEHXAPA10QMygCegUIARDcAQ..i&docid=ApP9Y2hpp84xVM&w=275&h=432&q=el%20hobbit%20libro&ved=2ahUKEwjh2Jqs6bf3AhWISLgEHXAPA10QMygCegUIARDcAQ", 
      stock:"4", 
      price: "600", 
      description: "Libro sobre...."},
  {
      id: "3", 
      title: "Harry Poter y la piedra filosofal",
      src:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn-3.expansion.mx%2Fdims4%2Fdefault%2F3c2903c%2F2147483647%2Fstrip%2Ftrue%2Fcrop%2F290x445%2B0%2B0%2Fresize%2F1200x1841!%2Fformat%2Fwebp%2Fquality%2F90%2F%3Furl%3Dhttps%253A%252F%252Fcherry-brightspot.s3.amazonaws.com%252Fmedia%252F2009%252F03%252F09%252Fpotter_piedrafilosofal_th.jpg&imgrefurl=https%3A%2F%2Fwww.quien.com%2Fespectaculos%2F2009%2F03%2F09%2Fprimera-edicion-de-potter-se-vende-por-19-mil-120-dolares&tbnid=aiNNdW6PjNDECM&vet=12ahUKEwjgjqG16Lf3AhUjqJUCHX6TCkEQMygVegUIARDqAQ..i&docid=Dcr7klkNBpOoxM&w=1200&h=1841&q=harry%20potter%20y%20la%20piedra%20filosofal%20url%20imagen&ved=2ahUKEwjgjqG16Lf3AhUjqJUCHX6TCkEQMygVegUIARDqAQ", 
      stock:"7", 
      price: "600", 
      description: "Libro sobre...."},
  {
      id: "4", 
      title: "Harry Poter y la camara de los secretos",
      src:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fesharrypotter%2Fimages%2Fb%2Fb6%2FHarry_Potter_y_la_Camara_Secreta_Portada_Espa%25C3%25B1ol.PNG%2Frevision%2Flatest%3Fcb%3D20151020165931&imgrefurl=https%3A%2F%2Fharrypotter.fandom.com%2Fes%2Fwiki%2FHarry_Potter_y_la_c%25C3%25A1mara_secreta&tbnid=uSF5ahUQeR6tRM&vet=12ahUKEwjUqJyE6bf3AhWEuZUCHYCqBVIQMygBegUIARDFAQ..i&docid=kyEn0dPHOLNehM&w=1594&h=2541&q=harry%20potter%20y%20la%20c%C3%A1mara%20secreta%20imagenes&ved=2ahUKEwjUqJyE6bf3AhWEuZUCHYCqBVIQMygBegUIARDFAQ", 
      stock:"10", 
      price: "600", 
      description: "Libro sobre...."},
  {
      id: "5", 
      title: "Harry Poter y el prisionero de Azcaban",
      src:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fesharrypotter%2Fimages%2F8%2F81%2FHarry_Potter_y_el_prisionero_de_Azkaban_Portada_Espa%25C3%25B1ol.PNG%2Frevision%2Flatest%3Fcb%3D20151020170338&imgrefurl=https%3A%2F%2Fharrypotter.fandom.com%2Fes%2Fwiki%2FHarry_Potter_y_el_prisionero_de_Azkaban&tbnid=8Jf3XqetIZmA_M&vet=12ahUKEwivpNmQ6bf3AhX4pZUCHT5nCzEQMygBegUIARDbAQ..i&docid=iv6YR5iXNQK-LM&w=1594&h=2541&q=harry%20potter%20y%20el%20prisionero%20de%20azkaban&ved=2ahUKEwivpNmQ6bf3AhX4pZUCHT5nCzEQMygBegUIARDbAQ", 
      stock:"5", 
      price: "600", 
      description: "Libro sobre...."},
  {
      id: "6", 
      title: "Harry Poter y la orden del Fenix",
      src:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fesharrypotter%2Fimages%2F3%2F37%2FHarry_Potter_y_la_Orden_del_F%25C3%25A9nix_portada_versi%25C3%25B3n_2015.jpg%2Frevision%2Flatest%3Fcb%3D20171206190125&imgrefurl=https%3A%2F%2Fharrypotter.fandom.com%2Fes%2Fwiki%2FHarry_Potter_y_la_Orden_del_F%25C3%25A9nix&tbnid=Su-lBZCQhur4kM&vet=12ahUKEwiOorqc6bf3AhX1SrgEHThgDg4QMygBegUIARDKAQ..i&docid=5FKn6-PDdIrV8M&w=1614&h=2603&q=harry%20potter%20y%20la%20orden%20del%20fenix&ved=2ahUKEwiOorqc6bf3AhX1SrgEHThgDg4QMygBegUIARDKAQ", 
      stock:"7", 
      price: "600", 
      description: "Libro sobre...."}
  ]

  const bringProducts = (PRODUCTOS) => {
    const myPromise = new Promise( (resolve, reject) => {
      setTimeout( () => {
        resolve(PRODUCTOS)
      }, 2000)  
    })
    return myPromise
  }

// --------------------------------------------
  // const [products, setProducts] = useState([])

  // useEffect( () => {
  //   bringProducts()
  //    .then( products => {
  //         console.log('carga correcta');
  //         setProducts(products)
  //     } )
  //     .catch( err => {
  //       console.log('error en la carga');
  //       console.log(err)
  //     })
  // }, [])
// --------------------------------------------
  
  return (
    <div className='items-list-container'>
      <ItemList bringProducts={bringProducts} listProducts={PRODUCTOS}/>
    </div>
  )
}


export default ItemListContainer