import React, { use, useState } from "react"

const FormDataClient = () => {
    const [buyer,setBuyer] = useState({})
    return(
        <div className="container">
            <form>
                <div className="mb-3">
                    <label className="form-label" htmlFor="inputName">Nombre</label>
                    <input type="text" className="form-control" id="inputName" required></input>
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="inputLastName">Apellidos</label>
                    <input type="text" className="form-control" id="inputLastName" required></input>
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="inputAddress">Direccion</label>
                    <textarea className="form-control" id="inputAddress" rows="3" required/>
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="inputMail">Correo electronico</label>
                    <input type="email" className="form-control" id="inputMail" required></input>
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="inputConfirmMail">Confirme su correo electronico</label>
                    <input type="email" className="form-control" id="inputConfirmMail" required></input>
                </div>
                <button type="submit" className="btn btn-primary">Finalizar compra</button>
            </form>
        </div>
    )
}
export default FormDataClient