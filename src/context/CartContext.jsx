import {createContext,useContext,useState} from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart,setCart] = useState([])

    const addItem = (item,quantity) => {
        
    }
    const clearCart = () => {
        setCart([])
    }
    const removeItem = () =>{

    }
    const inCartExists = (id) => {

    }
    const totalCart = () => {

    }
    const totalItems = () => {

    }
    return(
        <CartContext.Provider value={{cart,addItem,clearCart,removeItem,totalCart,totalItems,inCartExists}}>
            {children}
        </CartContext.Provider>
    )

}

export const useCart = () => useContext(CartContext)