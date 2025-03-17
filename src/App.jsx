import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import NavbarComponent from './components/NavbarComponent'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {

  return (
    <>
    <BrowserRouter>
    <NavbarComponent/>
    <Routes>
      <Route path='/' element={<ItemListContainer greeting="Bienvenidos"/>}/>
      <Route path='/category/:category' element={<ItemListContainer greeting="Bienvenidos"/>}/>
      <Route path='/product/:id' element={<ItemDetailContainer/>}/>
    </Routes>
    </BrowserRouter>
    
      <br></br>
      
      
    </>
  )
}

export default App
