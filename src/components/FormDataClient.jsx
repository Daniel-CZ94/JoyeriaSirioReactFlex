import React, { use, useState } from "react"
import { useCart } from "../context/CartContext"
import { useForm } from "react-hook-form"
import { db } from "../service/firebase"
import { addDoc, collection, getDoc, serverTimestamp, updateDoc } from "firebase/firestore"
import { useNavigate,Navigate } from "react-router-dom"

const FormDataClient = () => {
    const [orderId,setOrderId] = useState('')
    const {cart,totalCart,clearCart,totalItems} = useCart()
    const {register,handleSubmit, formState:{errors}} = useForm()
    const navigate = useNavigate()


    const confirmarCompra = (dataForm) =>{   
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
        totalItems() > 0 || orderId !== '' ?
        <div className="container">
            <form className="row g-3 needs-validation" onSubmit={handleSubmit(confirmarCompra)}>
                <div className="mb-3">
                    <label className="form-label" htmlFor="nombre">Nombre</label>
                    <input type="text" className="form-control" name="nombre" {...register("nombre",{required:true})} />
                    {errors?.nombre?.type === "required" && <span style={{color:'red'}}>Por favor completa este campo</span>}
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="apellido">Apellidos</label>
                    <input type="text" className="form-control" name="apellido" {...register("apellido",{required:true})}></input>
                    {errors?.apellido?.type === "required" && <span style={{color:'red'}}>Por favor completa este campo</span>}
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="direccion">Direccion</label>
                    <textarea className="form-control" name="direccion" rows="3" {...register("direccion",{required:true})}/>
                    {errors?.direccion?.type === "required" && <span style={{color:'red'}}>Por favor completa este campo</span>}
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="correoElectronico">Correo electronico</label>
                    <input type="email" className="form-control" name="correoElectronico" {...register("correoElectronico",{required:true})}></input>
                    {errors?.correoElectronico?.type === "required" && <span style={{color:'red'}}>Por favor completa este campo</span>}
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="confirmMail">Confirme su correo electronico</label>
                    <input type="email" className="form-control" name="confirmMail"  {...register("confirmMail",{required:true})}></input>
                    {errors?.confirmMail?.type === "required" && <span style={{color:'red'}}>Por favor completa este campo</span>}
                </div>
                <button type="submit" className="btn btn-primary">Finalizar compra</button>
            </form>
        </div>
        :
        <Navigate to="/cart" replace/>
    )
}
export default FormDataClient