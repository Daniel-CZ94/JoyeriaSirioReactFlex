import React from "react"
import {useCart} from '../context/CartContext'
import CartView from "./CartView"
import CartEmpty from "./CartEmpty"

const CartContainer = () =>{
    const {cart} = useCart()
    return(
        <>
            {
                cart.length ? <CartView/> : <CartEmpty/>
            }
        </>
    )

}

export default CartContainer