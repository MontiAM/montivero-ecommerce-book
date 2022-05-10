import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'
import { getProductsID } from '../../helpers/getProducts'
import productsData from '../../helpers/products.json'
import { useParams } from 'react-router-dom'

function ItemDetailContainer() {

  const { ID } = useParams();

  const productID = getProductsID(productsData, ID)

  return (
    <div className='ItemDetailContainer'>
        { 
          <ItemDetail productID={productID}/>
        }
    </div>
  )
}

export default ItemDetailContainer