import React from "react"
import Item from "./Item"

const ItemList = ({data}) => {
    return (
        <div>
            {/*{data.map((producto)=><Item key={producto.id} producto={producto}/>)}*/}
            {
                data.map((producto)=>(
                    <div className='col-lg-3'>
                        <Item key={producto.id} producto={producto}/>
                        <br />
                    </div>
                    
                ))
            }
        </div>
    )
}
export default ItemList