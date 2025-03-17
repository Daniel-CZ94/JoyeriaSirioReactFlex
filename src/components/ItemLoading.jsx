import React from "react"
const ItemLoading = () =>{
    return(
        <div className="d-flex align-items-center">
            <strong role="status">Cargando...</strong>
            <div className="spinner-border ms-auto" aria-hidden="true"></div>
        </div>
    )
}
export default ItemLoading