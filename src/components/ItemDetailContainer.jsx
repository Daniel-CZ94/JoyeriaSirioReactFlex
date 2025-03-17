import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProducts } from "../mock/asyncData"
import ItemLoading from "./ItemLoading"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () =>{
    const [product,setProduct] = useState({})
    const [loading,setLoading] = useState(false)
    const {id} = useParams()

    useEffect(()=>{
        setLoading(true)
        getProducts()
        .then((res)=> setProduct(res.find((item)=> item.id === id)))
        .catch((error) => console.log(error))
        .finally(()=>setLoading(false))
    },[])
    return(
        <div className="container">
                {loading ?  <ItemLoading/> : <ItemDetail product={product}/>}
            </div>
    )
}
export default ItemDetailContainer