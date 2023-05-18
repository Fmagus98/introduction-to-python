import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <header>
    <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <a className="navbar-brand" href="/"><img className="me-3" alt=""style={{"height":"6vh"}} id="img-logo"src='/src/img/fablab.png'/>Python FabLab</a>     
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item"><Link to="/" className="nav-link">Inicio</Link></li>
                    <li className="nav-item"><Link to="/classes" className="nav-link">Clases</Link></li>
                    <li className="nav-item"><Link to="/exercises" className="nav-link">Ejercicios</Link></li>
                    <li className="nav-item"><button id="buttonProjects" className="nav-link">Proyectos</button></li>
                    <li className="nav-item"><Link to="/contact"  className="nav-link">Contacto</Link></li>
                </ul>
                <form action="/search/" method="GET" className="d-flex">
                    <input className="form-control me-2" type="search" name="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Buscar</button>
                </form>
            </div>
        </div>
    </nav>
</header>    
  )
}

export default Navbar