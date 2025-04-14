import React, { useContext,useState } from "react"
import { NumericFormat } from "react-number-format"
import ItemCounter from "./ItemCounter"
import { CartContext } from '../context/CartContext'
const ItemDetail = ({product}) => {
    const {addItem,inCartExists} = useContext(CartContext)
    const [inCart,setInCart] = useState(false)

    const onAdd = (quantity) =>{
        addItem(product,quantity)
    }
    return (
        <div className="row" style={{justifyContent: "center",alignItems: "center"}}>
            <div className="col-lg-5">
                        <div className="card">
                            <img className="card-img-top" alt={product.nombre} src={product.img}/>
                            <div className="card-body">
                                <h5 className="card-title">{product.nombre}</h5>
                                <p className="card-text"><em>{product.descripcion}</em></p>
                                <p className="card-text">Existencias: {product.stock}</p>
                                <p className="card-text">Precio: <NumericFormat value={product.precio} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalSeparator="." decimalScale={2}></NumericFormat></p>
                                { 
                                product.stock > 0 
                                ? <ItemCounter stock={product.stock} onAdd={onAdd} existsCart={inCartExists(product.id)} /> 
                                :  <div className="alert alert-danger" role="alert">
                                        Producto no disponible
                                    </div>
                                } 
                            </div>
                        </div>
                    </div>
        </div>
        
    )
}
export default ItemDetail