import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import NavbarComponent from './components/NavbarComponent'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'
import { CartProvider } from './context/CartContext'
import CartContainer from './components/CartContainer'

function App() {

  return (
    <>
    <BrowserRouter>
    <CartProvider>
    <NavbarComponent/>
    <Routes>
      <Route path='/' element={<ItemListContainer greeting="Bienvenidos"/>}/>
      <Route path='/category/:category' element={<ItemListContainer greeting="Bienvenidos"/>}/>
      <Route path='/product/:id' element={<ItemDetailContainer/>}/>
      <Route path='/cart' element={<CartContainer/>}/>
    </Routes>
    </CartProvider>   
    
    </BrowserRouter>
    
      <br></br>
      
      
    </>
  )
}

export default App
