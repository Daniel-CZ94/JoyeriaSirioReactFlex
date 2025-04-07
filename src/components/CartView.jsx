import React, { use } from "react"
import { useCart } from '../context/CartContext'
import CartItem from "./CartItem"
import { NumericFormat } from "react-number-format"


const CartView = () => {
    const {cart,totalCart,clearCart} = useCart()
    return(
        <div className="container">
            <div className="row">&nbsp;</div>
            <div className="row text-right">             
                <div className="col d-flex flex-row-reverse">
                    <button className="btn btn-danger" onClick={()=>clearCart()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-cart-x" viewBox="0 0 16 16">
                            <path d="M7.354 5.646a.5.5 0 1 0-.708.708L7.793 7.5 6.646 8.646a.5.5 0 1 0 .708.708L8.5 8.207l1.146 1.147a.5.5 0 0 0 .708-.708L9.207 7.5l1.147-1.146a.5.5 0 0 0-.708-.708L8.5 6.793z"/>
                            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                        </svg>
                            &nbsp;Vaciar carrito
                    </button> 
                </div>                       
            </div>
            <div className="row">
                <div className="table-responsive">            
                    <table className="table table-dark table-hover">
                            <thead>
                                <tr>
                                    <th>&nbsp;</th>                       
                                    <th>Producto</th>
                                    <th>Precio unitario</th>
                                    <th>Precio total</th>
                                    <th>Cantidad</th>
                                    <th>&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart.map((compra)=> <CartItem key={compra.id} compra={compra}/> )
                                }
                                <tr>
                                    <td colSpan={2}></td>
                                    <td>Total:</td>
                                    <td><NumericFormat value={totalCart()} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalSeparator="." decimalScale={2}></NumericFormat></td>
                                    <td colSpan={2}></td>
                                </tr>
                            </tbody>
                    </table>
                    <div className="d-grid gap-2">
                        <button className="btn btn-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-credit-card" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
                            <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                        </svg>
                            &nbsp;Pagar
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default CartView