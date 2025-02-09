import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { colorPrimaryPython, colorPrimaryMicropython, colorPrimaryPythonKids, colorPrimaryFlet } from '../../colors'
import Access from '../Access/Access';
const Navbar = () => {
  const [backgroundColor, setBackgroundColor] = useState('');
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const location = useLocation();
  const color = location.pathname.includes("micropython") ? colorPrimaryMicropython : location.pathname.includes("pythonKids") ? colorPrimaryPythonKids : location.pathname.includes("flet") ? colorPrimaryFlet : colorPrimaryPython
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
          <nav id="navbar" className={isMobileNavOpen ? `navbar navbar-mobile h-auto ${location.pathname.includes("micropython") ? 'navbar-mobile-micropython' : ''}` : `navbar`} >
            <ul className={isMobileNavOpen ? 'h-50 ml-6 mr-6' : ''}>
              <Access />
              <li onClick={isMobileNavOpen ? handleMobileNavToggle : null}><Link to={location.pathname.includes("micropython") ? "/micropython" : location.pathname.includes("pythonKids") ? "/pythonKids" : location.pathname.includes("flet") ? "/flet" : "/"} style={isMobileNavOpen ? { color: "#012973", fontSize: "1.4rem" } : null} className={isMobileNavOpen ? 'nav-link scrollto active' : ''}>Inicio</Link></li>
              {<li onClick={isMobileNavOpen ? handleMobileNavToggle : null}><Link to={location.pathname.includes("micropython") ? "/" : "/micropython"} style={isMobileNavOpen ? { color: "#012973", fontSize: "1.4rem" } : null} className={isMobileNavOpen ? 'nav-link scrollto active' : ''}>{title}</Link></li>}
              {location.pathname.includes("micropython") ? <li onClick={isMobileNavOpen ? handleMobileNavToggle : null}><Link to={"/pythonKids"} style={isMobileNavOpen ? { color: "#012973", fontSize: "1.4rem" } : null} className={isMobileNavOpen ? 'nav-link scrollto active' : ''}>PythonKids</Link></li> : null}
              {location.pathname.includes("pythonKids") ? <li onClick={isMobileNavOpen ? handleMobileNavToggle : null}><Link to={"/"} style={isMobileNavOpen ? { color: "#012973", fontSize: "1.4rem" } : null} className={isMobileNavOpen ? 'nav-link scrollto active' : ''}>Python</Link></li> : null}
              <li onClick={isMobileNavOpen ? handleMobileNavToggle : null}><Link to={location.pathname.includes("micropython") ? "/micropython/classes" : location.pathname.includes("pythonKids") ? "/pythonKids/classes" : location.pathname.includes("flet") ? "/flet/classes" : "/classes"} style={isMobileNavOpen ? { color: "#012973", fontSize: "1.4rem" } : null} className={isMobileNavOpen ? 'nav-link scrollto active' : ''}>Clases</Link></li>
              {(location.pathname.includes("micropython") || location.pathname.includes("pythonKids")) ? <li><Link to="/flet" style={isMobileNavOpen ? { color: "#012973", fontSize: "1.4rem" } : null} className={isMobileNavOpen ? 'nav-link scrollto active' : ''}>Crea tu App</Link></li> : <li onClick={isMobileNavOpen ? handleMobileNavToggle : null}><Link to="/exercises" style={isMobileNavOpen ? { color: "#012973", fontSize: "1.4rem" } : null} className={isMobileNavOpen ? 'nav-link scrollto active' : ''}>Ejercicios</Link></li>}
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
                          <li>
                            <Link to="/digitalPortfolio" style={{ color: "#012973" }} className="nav-link scrollto active">Django</Link>
                          </li>
                          <li>
                            <Link to="/professionalCarrer" style={{ color: "#012973" }} className="nav-link scrollto active">Carrera Profesional</Link>
                          </li>
                          <li>
                            <Link to="/github/classes" style={{ color: "#012973" }} className="nav-link scrollto active">Github</Link>
                          </li>
                        </ul>
                      </li>
                    </>)
                  }
                </> : null
              }
              {(!location.pathname.includes("micropython") && !location.pathname.includes("pythonKids")) ? isMobileNavOpen ?
                <>
                  {location.pathname.includes("pythonKids") ? <li>
                    <Link to="/" style={{ color: "#012973", fontSize: "1.4rem" }} className="nav-link scrollto active">Python</Link>
                  </li> : <li>
                    <Link to="/pythonKids" style={{ color: "#012973", fontSize: "1.4rem" }} className="nav-link scrollto active">Python Kids</Link>
                  </li>
                  }
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
                  <Link className="dropdown-toggle" to="#" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">+ Contenido</Link>
                  <ul className={backgroundColor ? "dropdown-menu" : "dropdown-menu bg-transparent"} style={{ background: backgroundColor }} aria-labelledby="navbarDropdown2">
                    {location.pathname.includes("pythonKids") ? <li>
                      <Link to="/" style={{ color: "#012973" }} className="nav-link scrollto active">Python</Link>
                    </li> : <li>
                      <Link to="/pythonKids" style={{ color: "#012973" }} className="nav-link scrollto active">Python Kids</Link>
                    </li>
                    }
                    {location.pathname.includes("flet") ?
                      <li>
                        <Link to="/" style={{ color: "#012973" }} className="nav-link scrollto active">Python</Link>
                      </li> :
                      <li>
                        <Link to="/flet" style={{ color: "#012973" }} className="nav-link scrollto active">Crea tu app</Link>
                      </li>
                    }
                    <li>
                      <Link to="/algorithms" style={{ color: "#012973" }} className="nav-link scrollto active">Algoritmos</Link>
                    </li>
                    <li>
                      <Link to="/healthAndProductivity" style={{ color: "#012973" }} className="nav-link scrollto active">Salud y productividad</Link>
                    </li>
                    <li><hr className="dropdown-divider text-light" /></li>
                    <li>
                      <Link to="/projects" style={{ color: "#012973" }} className="nav-link scrollto active">Proyectos</Link>
                    </li>
                  </ul>
                </li> : null
              }
              <li onClick={isMobileNavOpen ? handleMobileNavToggle : null}><Link to={location.pathname.includes("micropython") ? "/micropython/contact" : location.pathname.includes("pythonKids") ? "/pythonKids/contact" : "/contact"} style={isMobileNavOpen ? { color: "#012973", fontSize: "1.4rem" } : null} className={isMobileNavOpen ? 'nav-link scrollto active' : ''}>Contacto</Link></li>
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
