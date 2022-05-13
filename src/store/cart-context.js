import { createContext, useState } from 'react'

const CartContext = createContext({
    products: []
});


export const CartContextProvider = ( {children}) => {

    const [ itemList, setItemList ] = useState([])

    const addItem = (item, quantity) => {
        console.log(itemList);
        item.quantity = quantity
        const itemToAdd = item
        setItemList(itemList.push(itemToAdd))
    }

    const removeItem = (itemID) => {
        setItemList(itemList.filter( p => p.id !== itemID ))
    }

    const clearItem = () => {
        setItemList([])
    }

    const isInCart = (itemId) => {
        return itemList.includes( p => p.id == itemId)
    }

    return (
        <CartContext.Provider value={ {
            products: itemList,
            addItem,
            removeItem
        }}>
            {children}
        </CartContext.Provider>
    )    
}


export default CartContext;