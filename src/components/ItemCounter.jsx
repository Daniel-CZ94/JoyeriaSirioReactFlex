import { useState } from "react"

const ItemCounter = ({stock, onAdd}) =>{
    const [count,setCount] = useState(1)

    const add = () =>{
        if(count < stock){
            setCount(count + 1)
        }
    }
    const substract = () =>{
        if(count > 0){
            setCount(count - 1)
        }
    }
    const addToCart = () =>{
        onAdd(count)
    }
    return (
        <div>
            <div>
                <button className="btn btn-danger" onClick={substract}>-</button>
                <span className="btn">{count}</span>
                <button className="btn btn-success" onClick={add}>+</button>
            </div>
            <br/>
            <div className="d-grid gap-2">
                <button className="btn btn-primary" disabled={stock===0 || count === 0} onClick={addToCart}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-plus" viewBox="0 0 16 16">
                        <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/>
                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                    </svg>
                </button>
            </div>
        </div>
    )
}
export default ItemCounter