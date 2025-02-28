import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import NavbarComponent from './components/NavbarComponent'
import ItemListContainer from './components/ItemListContainer'

function App() {

  return (
    <>
      <NavbarComponent/>
      <br></br>
      <div className='container'>
        <ItemListContainer precio={"$5.00"} nombreproducto={"Producto 1"}/>
      </div>
    </>
  )
}

export default App
