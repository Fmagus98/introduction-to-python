import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [backgroundColor, setBackgroundColor] = useState('');

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
    return (
        <header id="header" className="fixed-top d-flex align-items-center header-transparent" style={{background:backgroundColor}}>
            <div className="container d-flex align-items-center justify-content-between">
                <div className="logo">
                    <h1><a href="index.html"><span>Fablab - python</span></a></h1>
                    <a href="/"><img src="assets/img/logo.png" alt="" className="img-fluid" /></a>
                </div>

                <nav id="navbar" className="navbar">
                    <ul>
                        <li><Link to="/" className="nav-link scrollto active">Inicio</Link></li>
                        <li><Link to="/classes" className="nav-link scrollto">Clases</Link></li>
                        <li><Link to="/exercises" className="nav-link scrollto">Ejercicios</Link></li>
                        <li><Link to="/" className="nav-link scrollto">Projectos</Link></li>
                        <li><Link to="/contact" className="nav-link scrollto">Contacto</Link></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>

            </div>
        </header>

    )
}

export default Navbar