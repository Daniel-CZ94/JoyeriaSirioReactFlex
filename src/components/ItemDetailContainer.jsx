import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemLoading from "./ItemLoading"
import ItemDetail from "./ItemDetail"
import { collection, doc, getDoc } from "firebase/firestore"
import { db } from "../service/firebase"

const ItemDetailContainer = () =>{
    const [product,setProduct] = useState({})
    const [loading,setLoading] = useState(false)
    const [invalid,setInvalid] = useState(null)
    const {id} = useParams()

    /*useEffect(()=>{
        setLoading(true)
        getProducts()
        .then((res)=> setProduct(res.find((item)=> item.id === id)))
        .catch((error) => console.log(error))
        .finally(()=>setLoading(false))
    },[])*/
    useEffect(()=>{
        setLoading(true)
        const productoCollection = collection(db,"productos")
        const docRef = doc(productoCollection,id)
        getDoc(docRef)
        .then((res)=>{
            if(res.data()){
                setProduct({id:res.id,...res.data()})
            }else{
                setInvalid(true)
            }
        })
        .catch((error) => console.log(error))
        .finally(()=>setLoading(false))
    },[])

   if(invalid){
    return <div className="alert alert-primary" role="alert">
        El producto no existe
    </div>
   }
   return(
    <div className="container">
            {loading ?  <ItemLoading/> : <ItemDetail product={product}/>}
        </div>
)
}
export default ItemDetailContainer