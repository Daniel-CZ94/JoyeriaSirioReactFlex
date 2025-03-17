import { useEffect } from "react"
import { useState } from "react"
import { getProducts } from "../mock/asyncData"
import ItemList from "./ItemList"
import ItemLoading from "./ItemLoading"
import { useParams } from "react-router-dom"

const ItemListContainer = ({greeting}) => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const {category} = useParams()
    useEffect(()=>{
        setLoading(true)
        getProducts()
        .then((res)=>{
            if(category){
                setData(res.filter((item)=> item.categoria.toLowerCase() === category))
            }else{
                setData(res)
            }            
        })
        .catch((error)=>console.log(error))
        .finally(()=>setLoading(false))

    },[category])
    return(
            <div className="container">
                <h1 className="text-light">{greeting}</h1>
                {loading ?  <ItemLoading/> : <ItemList data={data}/>}
                {/*loading ?  <p>Cargando...</p> : <ItemList data={data}/>*/}
            </div>
    )
}
export default ItemListContainer