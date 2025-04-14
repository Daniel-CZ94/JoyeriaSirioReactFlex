import { useEffect } from "react"
import { useState } from "react"
import ItemList from "./ItemList"
import ItemLoading from "./ItemLoading"
import { useParams } from "react-router-dom"
import { addDoc, collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../service/firebase"

const ItemListContainer = ({greeting}) => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const {category} = useParams()
    /*useEffect(()=>{
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

    },[category])*/
    useEffect(()=>{
        setLoading(true)
        const productosCollection = category 
        ? query(collection(db,"productos"), where("categoria","==",category))
        : collection(db,"productos")
        getDocs(productosCollection)
        .then((res)=>{
            const list = res.docs.map((doc)=>{
                return {
                    id:doc.id,
                    ...doc.data()
                }
            })
            setData(list)
        })
        .catch((error)=>console.log(error))
        .finally(()=>setLoading(false))

    },[category])
    /*const subirData = () =>{
        const collectionToAdd = collection(db,"productos")
        productos.map((item)=> addDoc(collectionToAdd,item))
    }*/
    return(
            <div className="container">
                {category ? <h1 className="text-light">Mostrando la categoria: {category}</h1> : <h1 className="text-light">{greeting}</h1>}
                <br></br>
                {loading ?  <ItemLoading/> : data.length > 0 ? <ItemList data={data}/> : <div className="alert alert-warning" role="alert">No hay datos que mostrar</div> }
                {/*<button onClick={subirData}>Subir info</button>*/}
            </div>
    )
}
export default ItemListContainer