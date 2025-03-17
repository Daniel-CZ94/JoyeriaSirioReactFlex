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
        <ItemListContainer greeting="Bienvenidos"/>
        {/*<div className="d-flex align-items-center">
          <strong role="status">Loading...</strong>
          <div className="spinner-border ms-auto" aria-hidden="true"></div>
        </div>*/}
      </div>
    </>
  )
}

export default App
