import React, { use, useState } from "react"
import { useCart } from "../context/CartContext"
import { useForm } from "react-hook-form"
import { db } from "../service/firebase"
import { addDoc, collection, getDoc, serverTimestamp, updateDoc } from "firebase/firestore"
import { useNavigate } from "react-router-dom"

const FormDataClient = () => {
    const [orderId,setOrderId] = useState('')
    const {cart,totalCart,clearCart} = useCart()
    const {register,handleSubmit, formState:{errors},getValues} = useForm()
    const navigate = useNavigate()


    const confirmarCompra = (dataForm) =>{
        //console.log(dataForm)
        
        //navigate("/")
        let compra = {
            cliente:{
                nombre: dataForm.nombre,
                apellido: dataForm.apellido,
                direccion: dataForm.direccion,
                correoElectronico: dataForm.correoElectronico
            },
            compra:cart,
            total:totalCart(),
            fecha:serverTimestamp()
        }
        const ordenes = collection(db,"ordenes")
        addDoc(ordenes,compra)
        .then((res)=>{
            //ACTUALIZAR STOCK
            /*cart.forEach((item)=>{
                const docRef = doc(db,"productos",item,id)
                getDoc(docRef)
                .then((dbDoc)=>{
                    updateDoc(docRef,{stock:dbDoc.data().stock - item.quantity})
                })
                .catch((error)=>console.log(error))
            })*/
           setOrderId(res.id)
           clearCart()
           navigate("/ordencompleta",{state:{idcompra:res.id}})
        })
        .catch((error)=>console.log(error))
        
    }
    return(
        <div className="container">
            <form className="row g-3 needs-validation" onSubmit={handleSubmit(confirmarCompra)}>
                <div className="mb-3">
                    <label className="form-label" htmlFor="inputName">Nombre</label>
                    <input type="text" className="form-control" id="inputName" {...register("nombre",{required:true})} />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="inputLastName">Apellidos</label>
                    <input type="text" className="form-control" id="inputLastName" {...register("apellido",{required:true})}></input>
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="inputAddress">Direccion</label>
                    <textarea className="form-control" id="inputAddress" rows="3" {...register("direccion",{required:true})}/>
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="inputMail">Correo electronico</label>
                    <input type="email" className="form-control" id="inputMail" {...register("correoElectronico",{required:true})}></input>
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