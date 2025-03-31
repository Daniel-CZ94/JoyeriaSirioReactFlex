import React, { use } from "react"
import { useCart } from '../context/CartContext'


const CartView = () => {
    const {cart} = useCart()
    return(
        <ul>
            {cart.map((compra)=> <li>{compra.nombre}</li>)}
        </ul>
    )
}
export default CartView