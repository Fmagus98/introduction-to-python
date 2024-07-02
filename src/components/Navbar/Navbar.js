import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { colorPrimaryPython, colorPrimaryMicropython } from '../../colors'
import Loggin from '../Loggin/Loggin';
const Navbar = () => {
  const [backgroundColor, setBackgroundColor] = useState('');
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const location = useLocation();
  const color = location.pathname.includes("micropython") ? colorPrimaryMicropython : colorPrimaryPython
  const title = location.pathname.includes("micropython") ? "Python" : "Micropython"

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const eightyPercentHeight = window.innerHeight * 0.6;
      if (scrollPosition >= eightyPercentHeight) {
        setBackgroundColor(color);
      } else {
        setBackgroundColor('');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [color]);


  const handleMobileNavToggle = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <>
      <header id="header" className="fixed-top d-flex align-items-center header-transparent" style={{ background: color }}>
        <div className="container d-flex align-items-center justify-content-between">
          <div className="logo">
            <h1><a href="/"><span>Fablab - python</span></a></h1>
          </div>
          <nav id="navbar" className={isMobileNavOpen ? `navbar navbar-mobile h-auto ${location.pathname.includes("micropython") ? 'navbar-mobile-micropython' : ''}` : `navbar`}>
            <ul className={isMobileNavOpen ? 'h-50 ml-6 mr-6' : ''}>
              <Loggin />
              <li onClick={isMobileNavOpen ? handleMobileNavToggle : null}><Link to={location.pathname.includes("micropython") ? "/micropython" : "/"} style={isMobileNavOpen ? { color: "#012973", fontSize: "1.4rem" } : null} className={isMobileNavOpen ? 'nav-link scrollto active' : ''}>Inicio</Link></li>
              <li onClick={isMobileNavOpen ? handleMobileNavToggle : null}><Link to={location.pathname.includes("micropython") ? "/" : "/micropython"} style={isMobileNavOpen ? { color: "#012973", fontSize: "1.4rem" } : null} className={isMobileNavOpen ? 'nav-link scrollto active' : ''}>{title}</Link></li>
              <li onClick={isMobileNavOpen ? handleMobileNavToggle : null}><Link to={location.pathname.includes("micropython") ? "/micropython/classes" : "/classes"} style={isMobileNavOpen ? { color: "#012973", fontSize: "1.4rem" } : null} className={isMobileNavOpen ? 'nav-link scrollto active' : ''}>Clases</Link></li>
              {location.pathname.includes("micropython") ? null : <li onClick={isMobileNavOpen ? handleMobileNavToggle : null}><Link to="/exercises" style={isMobileNavOpen ? { color: "#012973", fontSize: "1.4rem" } : null} className={isMobileNavOpen ? 'nav-link scrollto active' : ''}>Ejercicios</Link></li>}
              {localStorage.getItem("passwordPython") && !location.pathname.includes("micropython") ?
                <>
                  {isMobileNavOpen ? (
                    <>
                      <li onClick={isMobileNavOpen ? handleMobileNavToggle : null}>
                        <Link to="/digitalPortfolio" style={{ color: "#012973", fontSize: "1.4rem" }} className="nav-link scrollto active">Django</Link>
                      </li>
                      <li onClick={isMobileNavOpen ? handleMobileNavToggle : null}>
                        <Link to="/professionalCarrer" style={{ color: "#012973", fontSize: "1.4rem" }} className="nav-link scrollto active">Carrera Profesional</Link>
                      </li>
                      <li onClick={isMobileNavOpen ? handleMobileNavToggle : null}>
                        <Link to="/github/classes" style={{ color: "#012973", fontSize: "1.4rem" }} className="nav-link scrollto active">Github</Link>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="nav-item dropdown">
                        <Link className="dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Contenido Adicional
                        </Link>
                        <ul className={backgroundColor ? "dropdown-menu" : "dropdown-menu bg-transparent"} style={{ background: backgroundColor }} aria-labelledby="navbarDropdown">
                          <li onClick={handleMobileNavToggle}>
                            <Link to="/digitalPortfolio" style={{ color: "#012973" }} className="nav-link scrollto active">Django</Link>
                          </li>
                          <li onClick={handleMobileNavToggle}>
                            <Link to="/professionalCarrer" style={{ color: "#012973" }} className="nav-link scrollto active">Carrera Profesional</Link>
                          </li>
                          <li onClick={handleMobileNavToggle}>
                            <Link to="/github/classes" style={{ color: "#012973" }} className="nav-link scrollto active">Github</Link>
                          </li>
                        </ul>
                      </li>
                    </>)
                  }
                </> : null
              }
              {!location.pathname.includes("micropython") ? isMobileNavOpen ?
                <>
                  <li onClick={handleMobileNavToggle}>
                    <Link to="/algorithms" style={{ color: "#012973", fontSize: "1.4rem" }} className="nav-link scrollto active">Algoritmos</Link>
                  </li>
                  <li onClick={handleMobileNavToggle}>
                    <Link to="/healthAndProductivity" style={{ color: "#012973", fontSize: "1.4rem" }} className="nav-link scrollto active">Salud y productividad</Link>
                  </li>
                  <li onClick={handleMobileNavToggle}>
                    <Link to="/projects" style={{ color: "#012973", fontSize: "1.4rem" }} className="nav-link scrollto active">Proyectos</Link>
                  </li>
                </>
                :
                <li className="nav-item dropdown">
                  <Link className="dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">+ Contenido</Link>
                  <ul className={backgroundColor ? "dropdown-menu" : "dropdown-menu bg-transparent"} style={{ background: backgroundColor }} aria-labelledby="navbarDropdown">
                    <li onClick={handleMobileNavToggle}>
                      <Link to="/algorithms" style={{ color: "#012973" }} className="nav-link scrollto active">Algoritmos</Link>
                    </li>
                    <li onClick={handleMobileNavToggle}>
                      <Link to="/healthAndProductivity" style={{ color: "#012973" }} className="nav-link scrollto active">Salud y productividad</Link>
                    </li>
                    <li><hr className="dropdown-divider text-light" /></li>
                    <li onClick={handleMobileNavToggle}>
                      <Link to="/projects" style={{ color: "#012973" }} className="nav-link scrollto active">Proyectos</Link>
                    </li>
                  </ul>
                </li> : null
              }
              <li onClick={isMobileNavOpen ? handleMobileNavToggle : null}><Link to={location.pathname.includes("micropython") ? "/micropython/contact" : "/contact"} style={isMobileNavOpen ? { color: "#012973", fontSize: "1.4rem" } : null} className={isMobileNavOpen ? 'nav-link scrollto active' : ''}>Contacto</Link></li>
            </ul>
            <i className={`mobile-nav-toggle bi ${isMobileNavOpen ? 'bi-x' : 'bi-list'}`}
              onClick={handleMobileNavToggle}></i>
          </nav>
        </div >
      </header >
    </>
  )
}

export default Navbar
