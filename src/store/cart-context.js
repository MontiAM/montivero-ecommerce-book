import { createContext, useState} from 'react'

const CartContext = createContext({
    cartList: [],
    isINCart: () => {},
    addToCart: () => {},
    cleanCart: () => {},
    deleteByID: () => {},
    totalCount: () => {},
    totalPrice: () => {},
    unitPerProducts: () => {}
    
});
export default CartContext;


export const CartContextProvider = ( {children}) => {

    const [ cartList, setCartList ] = useState([]);
    
    const isINCart = (id) => {
        return cartList.find( item => item.id === id ? true : false);
    }

    const addToCart = (item, quantity) => {
        if (isINCart(item.id)){
            setCartList(cartList.map( p => p.id === item.id ? {...p, quantity: p.quantity + quantity} : p));
        }
        else {
            setCartList([...cartList, {...item, quantity: quantity}]);
        }
    }

    const cleanCart = () => {
        setCartList([]);
    }

    const deleteByID = (id) => {
        setCartList(cartList.filter( p => p.id !== id));
    }

    const totalCount = () => {
        return  cartList.reduce( (ant, act) => ant + act.quantity, 0);
    }

    const totalPrice = () => {
        return cartList.reduce( (ant, act) => ant + act.quantity * act.price, 0);
    }

    const unitPerProducts = (id) => {
        return cartList.find( p => p.id === id).quantity;
    }

    return (
        <CartContext.Provider value={ {
            cartList,
            isINCart,
            addToCart,
            cleanCart,
            deleteByID,
            totalCount,
            totalPrice,
            unitPerProducts
        }}>
            {children}
        </CartContext.Provider>
    )    
}

