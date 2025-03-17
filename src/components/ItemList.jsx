import React from "react"
import Item from "./Item"

const ItemList = ({data}) => {
    return (
        <div>
            {/*{data.map((producto)=><Item key={producto.id} producto={producto}/>)}*/}
            {
                data.map((producto)=>(
                    <div key={producto.id} className='col-lg-3'>
                        <Item  producto={producto}/>
                        <br />
                    </div>
                    
                ))
            }
        </div>
    )
}
export default ItemList