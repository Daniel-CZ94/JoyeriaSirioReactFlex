import {createContext,useContext,useState} from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart,setCart] = useState([])

    const addItem = (item,quantity) => {
        setCart([...cart,{...item,quantity}])
        //cart.map((compra)=> console.log(compra))
        printCart(cart)
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
        //console.log(cart.reduce((acc,prod) => (acc += prod.precio * prod.quantity),0))
        return cart.reduce((acc,prod) => (acc += prod.precio * prod.quantity),0)
        /*let  total = 0;
        for(let i = 0;i<cart.length;i++){
            console.log(cart[i].quantity)
        }
        return total;*/
    }
    const totalItems = () => {
        return cart.reduce((acc,prod) => acc += prod.quantity,0)
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
    return(
        <CartContext.Provider value={{cart,addItem,clearCart,removeItem,totalCart,totalItems,inCartExists,decreaseQuantityItem,incrementQuantityItem}}>
            {children}
        </CartContext.Provider>
    )

}

export const useCart = () => useContext(CartContext)