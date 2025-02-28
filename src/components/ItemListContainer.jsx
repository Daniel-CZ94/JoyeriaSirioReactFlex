const ItemListContainer = (props) => {
    return(
        <div className="col-lg-3">
            <h3>{props.nombreproducto}</h3>
            <img src="./product1.png" alt={props.nombreproducto} className="img-fluid"></img>
            <p>{props.precio}</p>
        </div>
        
    )
}
export default ItemListContainer