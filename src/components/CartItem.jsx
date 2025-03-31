import React, { use } from "react"
import { useCart } from '../context/CartContext'

const CartItem = ({compra}) => {
    return(
        <tr>
            <td>{compra.quantity}</td>
            <td>{compra.nombre}</td>
            <td>{compra.precio}</td>
            <td>{compra.quantity * compra.precio}</td>
            <td><button className="btn btn-warning">Cambiar</button></td>
            <td><button className="btn btn-danger">Borrar</button></td>
        </tr>
    )
}
export default CartItem