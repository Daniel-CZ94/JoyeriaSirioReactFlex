import React from "react"
import { NumericFormat } from "react-number-format"
import ItemCounter from "./ItemCounter"
const ItemDetail = ({product}) => {
    const onAdd = (quantity) =>{
        alert(`Agregaste ${quantity} unidades`)
    }
    return (
        /*<div>
            <h1>Detalle del producto: {product.nombre}</h1>
            <img src={product.img} alt={product.nombre}/>
            <p>{product.descripcion}</p>
            <p>Existencias: {product.stock}</p>
            <p>Precio: <NumericFormat value={product.precio} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalSeparator="." decimalScale={2}></NumericFormat></p>
            
        </div>*/
        <div className="row" style={{justifyContent: "center",alignItems: "center"}}>
            <div className="col-lg-5">
                        <div className="card">
                            <img className="card-img-top" alt={product.nombre} src={product.img}/>
                            <div className="card-body">
                                <h5 className="card-title">{product.nombre}</h5>
                                <p className="card-text"><em>{product.descripcion}</em></p>
                                <p className="card-text">Existencias: {product.stock}</p>
                                <p className="card-text">Precio: <NumericFormat value={product.precio} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalSeparator="." decimalScale={2}></NumericFormat></p>
                                <ItemCounter stock={product.stock} onAdd={onAdd} />
                            </div>
                        </div>
                    </div>
        </div>
        
    )
}
export default ItemDetail