import React from "react"
import {useCart} from '../context/CartContext'
import CartView from "./CartView"
import CartEmpty from "./CartEmpty"

const CartContainer = () =>{
    const {cart} = useCart()
    return(
        <div>
            {
                cart.length ? <CartView/> : <CartEmpty/>
            }
        </div>
    )

}

export default CartContainer