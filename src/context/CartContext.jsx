import {createContext,useContext,useState} from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart,setCart] = useState([])

    const addItem = (item,quantity) => {
        setCart([...cart,{...item,quantity}])
        //cart.map((compra)=> console.log(compra))
        console.log(cart.length)
    }
    const clearCart = () => {
        setCart([])
    }
    const removeItem = (id) =>{
        setCart(cart.filter((prod) => prod.id !== id))
    }
    const inCartExists = (id) => {
        return cart.some((prod) = prod.id === id)
    }
    const totalCart = () => {
        return cart.reduce((acc,prod) => (acc += prod.price * prod.quantity),0)
    }
    const totalItems = () => {
        return cart.reduce((acc,prod) => acc += prod.quantity,0)
    }
    return(
        <CartContext.Provider value={{cart,addItem,clearCart,removeItem,totalCart,totalItems,inCartExists}}>
            {children}
        </CartContext.Provider>
    )

}

export const useCart = () => useContext(CartContext)