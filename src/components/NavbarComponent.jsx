import CartWidgetComponent from "./CartWidgetComponent"

const NavbarComponent = () => {
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="./logosirio.png" alt="Logo" width={40} height={40} className="d-inline-block align-text-top"></img>
                    &nbsp;Joyas Sirio
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Anillos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Argollas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pulseras</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Relojes</a>
                        </li>
                    </ul>
                    <CartWidgetComponent/>
                </div>
            </div>
        </nav>
    )
}
export default NavbarComponent