import React, { use } from "react"
import { useCart} from "../context/CartContext";
import { NumericFormat } from "react-number-format"

const CartItemCounter = ({compra}) =>{
    const {cart,incrementQuantityItem,decreaseQuantityItem} = useCart()
    /*const onAdd = () =>{
        cart.incrementQuantityItem()
    }
    const onSubstract = () =>{
        alert("Producto disminuido");
    }*/
    return (
        <div>
            <div className="btn-group" role="group">
                <button type="button" className="btn btn-warning" disabled={compra.quantity == 1} onClick={()=>decreaseQuantityItem(compra.id)}>&minus;</button>
                {/*<button type="button" className="btn btn-primary">1</button>*/}
                <span className="btn">{compra.quantity}</span>
                <button type="button" className="btn btn-success" disabled={compra.quantity >= compra.stock } onClick={()=>incrementQuantityItem(compra.id)}>&#43;</button>
            </div>
        </div>
    )

}
export default CartItemCounter