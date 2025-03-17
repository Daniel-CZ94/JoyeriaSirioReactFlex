import React from "react"
import { NumericFormat } from "react-number-format"

const Item = ({producto}) => {
    return(
        /*<div className="row row-cols-1 row-cols-md-1 g-2">
            <div className="col">
                <div className="card">
                    <img src={producto.img} className="img-fluid" alt={producto.nombre}></img>
                    <div className="card-body">
                        <h5 className="card-title">{producto.nombre}</h5>                    
                        <p className="card-text"><NumericFormat value={producto.precio.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'}></NumericFormat></p>
                        <a href="#" className="btn btn-primary">Detalles</a>
                    </div>
                </div>
            </div>
        </div>*/
        <div className="card">
                    <img src={producto.img} className="img-fluid" alt={producto.nombre}></img>
                    <div className="card-body">
                        <h5 className="card-title">{producto.nombre}</h5>                    
                        <p className="card-text"><NumericFormat value={producto.precio.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix={'$'}></NumericFormat></p>
                        <a href="#" className="btn btn-primary">Detalles</a>
                    </div>
                </div>
    )
}
export default Item