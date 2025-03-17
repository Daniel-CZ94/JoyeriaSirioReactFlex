import { useEffect } from "react"
import { useState } from "react"
import { getProducts } from "../mock/asyncData"
import ItemList from "./ItemList"
import ItemLoading from "./ItemLoading"

const ItemListContainer = ({greeting}) => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    useEffect(()=>{
        setLoading(true)
        getProducts()
        .then((res)=>{
            setData(res)
        })
        .catch((error)=>console.log(error))
        .finally(()=>setLoading(false))

    },[])
    return(
            <div>
                <h1 className="text-light">{greeting}</h1>
                {loading ?  <ItemLoading/> : <ItemList data={data}/>}
                {/*loading ?  <p>Cargando...</p> : <ItemList data={data}/>*/}
            </div>
    )
}
export default ItemListContainer