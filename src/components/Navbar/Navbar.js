import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loggin from '../Loggin/Loggin';
const Navbar = () => {
  const [backgroundColor, setBackgroundColor] = useState('');
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const eightyPercentHeight = window.innerHeight * 0.8;
      if (scrollPosition >= eightyPercentHeight) {
        setBackgroundColor('#010483');
      } else {
        setBackgroundColor('');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const handleMobileNavToggle = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <header id="header" className="fixed-top d-flex align-items-center header-transparent" style={{ background: backgroundColor }}>
      <div className="container d-flex align-items-center justify-content-between">
        <div className="logo">
          <h1><a href="/"><span>Fablab - python</span></a></h1>
          <a href="/"><img src="assets/img/logo.png" alt="" className="img-fluid" /></a>
        </div>
        <nav id="navbar" onClick={isMobileNavOpen ? handleMobileNavToggle:null} className={isMobileNavOpen ? 'navbar navbar-mobile h-auto' : 'navbar'}>
          <ul className={isMobileNavOpen ? 'h-50 ml-6 mr-6' : ''}>
            <Loggin/>
            <li><Link to="/" style={isMobileNavOpen ? { color: "##010483", fontSize: "1.4rem" } : null} className={isMobileNavOpen ? 'nav-link scrollto active' : ''}>Inicio</Link></li>
            <li><Link to="/classes" style={isMobileNavOpen ? { color: "##010483", fontSize: "1.4rem" } : null} className={isMobileNavOpen ? 'nav-link scrollto active' : ''}>Clases</Link></li>
            <li><Link to="/exercises" style={isMobileNavOpen ? { color: "##010483", fontSize: "1.4rem" } : null} className={isMobileNavOpen ? 'nav-link scrollto active' : ''}>Ejercicios</Link></li>
            {localStorage.getItem("access")?<>            <li><Link to="/github" style={isMobileNavOpen ? { color: "##010483", fontSize: "1.4rem" } : null} className={isMobileNavOpen ? 'nav-link scrollto active' : ''}>Github</Link></li>
            <li><Link to="/digitalPortfolio" style={isMobileNavOpen ? { color: "##010483", fontSize: "1.4rem" } : null} className={isMobileNavOpen ? 'nav-link scrollto active' : ''}>Django</Link></li>
            <li><Link to="/professionalCarrer" style={isMobileNavOpen ? { color: "##010483", fontSize: "1.4rem" } : null} className={isMobileNavOpen ? 'nav-link scrollto active' : ''}>Carrera Profesional</Link></li></>:null}
            <li><Link to="/" style={isMobileNavOpen ? { color: "##010483", fontSize: "1.4rem" } : null} className={isMobileNavOpen ? 'nav-link scrollto active' : ''}>Projectos</Link></li>
            <li><Link to="/contact" style={isMobileNavOpen ? { color: "##010483", fontSize: "1.4rem" } : null} className={isMobileNavOpen ? 'nav-link scrollto active' : ''}>Contacto</Link></li>
         </ul>
          <i className={`mobile-nav-toggle ${isMobileNavOpen ? 'bi-x' : 'bi-list'}`}
            onClick={handleMobileNavToggle}></i>
        </nav>
      </div>
    </header>
  )
}

export default Navbar