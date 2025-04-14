import React from "react"
import { Link, Navigate, useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const PurchaseCompleted = () =>{
    const navigation = useNavigate();
    const location = useLocation()
    return(
        location.state ? 
        <div className="container text-center">
            <img src="./pago-exitoso.png" className="img-thumbnail" alt="Pago exitoso" height={400} width={400}/>
            <div className="row">&nbsp;</div>
            <div className="row">
                <div className="alert alert-primary" role="alert">
                    Su compra se ha realizado exitosamente con la clave: <b>{location.state.idcompra}</b>
                </div>
                <p>En los siguientes dias, su mercancia estara llegando a su hogar</p>            
            </div>
            <div className="row">
                        <Link className="btn btn-primary" to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-house-door" viewBox="0 0 16 16">
                            <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z"/>
                        </svg>
                            &nbsp;Seguir comprando
                        </Link>
            </div>
        </div>
        :
        <Navigate to="/" replace/>
    )
}
export default PurchaseCompleted