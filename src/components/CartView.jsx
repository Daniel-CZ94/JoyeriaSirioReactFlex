import React, { use } from "react"
import { useCart } from '../context/CartContext'
import CartItem from "./CartItem"


const CartView = () => {
    const {cart} = useCart()
    return(
        <div className="table-responsive">
            <table className="table table-dark table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Producto</th>
                            <th>Precio unitario</th>
                            <th>Precio total</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((compra)=> <CartItem key={compra.id} compra={compra}/> )
                            /*cart.map((compra)=> {
                                <tr>
                                    <td>{compra.quantity}</td>
                                    <td>{compra.nombre}</td>
                                    <td>{compra.precio}</td>
                                    <td>{compra.quantity * compra.precio}</td>
                                </tr>
                            } )*/
                        }
                        <tr>
                            <td colSpan={4}></td>
                            <td>Total:</td>
                            <td>$1000</td>
                        </tr>
                    </tbody>
                
            </table>
        </div>
    )
}
export default CartView