import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { getProducts } from '../../helpers/getProducts'
import productsData from '../../helpers/products.json'
import { useParams } from 'react-router-dom'

function ItemListContainer() {

  const { categoryID }  = useParams();
  const listProducts = getProducts(productsData, categoryID)

  return (
    <div className='items-list-container'>
      <ItemList listProducts={listProducts}/>
    </div>
  )
}


export default ItemListContainer