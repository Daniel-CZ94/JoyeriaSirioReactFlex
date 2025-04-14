import {createContext,useContext,useState} from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart,setCart] = useState([])

    const addItem = (item,quantity) => {
        if(existsInCart(item.id)){
            const updateCart = cart.map((prod)=>{
                if(prod.id === item.id){
                    let amount = prod.quantity + quantity;
                    if(amount < prod.stock){
                        return {...prod,quantity: amount}
                    }else{
                        return {...prod,quantity: prod.stock}                        
                    }
                    
                }else{
                    return prod
                }
            })
            setCart(updateCart)            
        }else{
            setCart([...cart,{...item,quantity}])
        }
    }
    const clearCart = () => {
        setCart([])
    }
    const removeItem = (id) =>{
        setCart(cart.filter((prod) => prod.id !== id))
    }
    const inCartExists = (id) => {
        return cart.some((prod) => prod.id === id)
    }
    const totalCart = () => {
        return cart.reduce((acc,prod) => (acc += prod.precio * prod.quantity),0)
    }
    const totalItems = () => {
        //return cart.reduce((acc,prod) => acc += prod.quantity,0)
        return cart.length
    }
    const decreaseQuantityItem = (id) =>{
        const updateDecrease = cart.map((prod)=>{
            if(prod.id === id){
                return {...prod,quantity: prod.quantity - 1}
            }else{
                return prod
            }
        })
        setCart(updateDecrease)
    }
    const incrementQuantityItem = (id) =>{
        const updateIncrement = cart.map((prod)=>{
            if(prod.id === id){
                return {...prod,quantity: prod.quantity + 1}
            }else{
                return prod
            }
        })
        setCart(updateIncrement)
    }
    const printCart = arr => arr.forEach(element => {
        console.log(element)
    });
    const existsInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }
    return(
        <CartContext.Provider value={{cart,addItem,clearCart,removeItem,totalCart,totalItems,inCartExists,decreaseQuantityItem,incrementQuantityItem}}>
            {children}
        </CartContext.Provider>
    )

}

export const useCart = () => useContext(CartContext)