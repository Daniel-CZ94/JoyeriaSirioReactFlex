import { useState } from "react"
import { Link } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"

const ItemCounter = ({stock, onAdd, existsCart}) =>{
    const [count,setCount] = useState(1)
    //const notify = () => toast("Se agrego un articulo al carrito");

    const add = () =>{
        if(count < stock){
            setCount(count + 1);
        }
            
    }
    const substract = () =>{
        if(count > 0){
            setCount(count - 1)
        }
    }
    const addToCart = () =>{
        onAdd(count)
        toast.success("Se agrego un producto al carrito");
    }
    return (        
        <div>
            {existsCart ? (
                <div className="d-grid gap-2">
                <div className="alert alert-success" role="alert">
                    Este producto ya se encuentra en el carrito de compras
                </div> 
                <Link className="btn btn-primary" to="/cart">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                    </svg>&nbsp;Ir al carrito de compras
                </Link>
                
            </div>
            ):(
                <div>
                    <div className="btn-group" role="group">
                        <button className="btn btn-warning" onClick={substract}>&minus;</button>
                        <span className="btn">{count}</span>
                        <button className="btn btn-success" onClick={add}>&#43;</button>
                    </div>
                    <br/>
                    <br/>
                    <div className="d-grid gap-2">
                        <button className="btn btn-primary" disabled={stock===0 || count === 0} onClick={addToCart}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-cart-plus" viewBox="0 0 16 16">
                                <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/>
                                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                            </svg>&nbsp;Agregar al carrito
                        </button>                                  
                        
                    </div>
                    
                </div>
            )}
        <ToastContainer theme="dark" autoClose={2500}/>
        </div>
    )
}
export default ItemCounter