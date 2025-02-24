import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import NavbarComponent from './components/NavbarComponent'
import ItemListContainer from './components/ItemListContainer'

function App() {

  return (
    <>
      <NavbarComponent/>
      <br></br>
      <ItemListContainer precio={"$5.00"}/>
    </>
  )
}

export default App
