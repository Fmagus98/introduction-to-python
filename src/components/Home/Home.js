import React, { useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { colorPrimaryPython, colorPrimaryMicropython, colorPrimaryPythonKids, colorSecondaryPythonKids, colorPrimaryFlet } from '../../colors'
import useScrollAnimation from '../../useScrollAnimation'


const Home = () => {

  const elementVisibility = useScrollAnimation();
  const location = useLocation();
  const color = location.pathname === "/micropython" ? colorPrimaryMicropython : location.pathname.includes("pythonKids") || location.pathname.includes("flet") ? colorSecondaryPythonKids : colorPrimaryPython
  const title = location.pathname.includes("micropython") ? "micropython" : location.pathname.includes("flet") ? "flet" : "python"
  const kids = location.pathname.includes("pythonKids") ? " para jovenes de 8 a 12 años" : ""
  const listPython = ["Introducción a la programación.", "Variables", "Tipos de datos.", "Métodos de tipos de datos.", "Funciones.", "Bucles.", "Módulos.", "Manipulación de datos (Listas y tuplas)", "Programación orientado a objectos (POO)."]
  const listPythonKids = ["Introducción a la programación.", "Variables", "Tipos de datos.", "Métodos de tipos de datos.", "Bucles.", "Manipulación de datos (Listas y diccionarios)"]
  const listMicroPython = ["Introducción a MicroPython", "Fundamentos de Python en MicroPython", "Entrada y Salida en MicroPython", "Comunicación Serial y Periféricos", "Conectividad Wi-Fi con MicroPython", "MicroPython en Pantallas y Gráficos", "Almacenamiento y Sistemas de Archivos", "Desarrollo de Proyectos Avanzados"]
  const listFlet = ["Introducción a Flet", "Diseño de la interfaz", "Manejo de Estados y Eventos", "Almacenamiento de Datos (Firebase o SQLite)", "Autenticación de Usuarios", "OPtimizaciones y notificaciones", "Creación de un Panel de Configuración", "Despliegue y Publicación de la Aplicación"]
  const listDescription = location.pathname.includes("micropython") ? listMicroPython.map(text => <li key={text}><i className="bi bi-check"></i>{text}</li>) : location.pathname.includes("pythonKids") ? listPythonKids.map(text => <li key={text}><i className="bi bi-check"></i>{text}</li>) : location.pathname.includes("flet") ? listFlet.map(text => <li key={text}><i className="bi bi-check"></i>{text}</li>) : listPython.map(text => <li key={text}><i className="bi bi-check"></i>{text}</li>)

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <section id="hero" style={{ background: location.pathname === "/micropython" ? colorPrimaryMicropython : location.pathname === "/pythonKids" ? colorPrimaryPythonKids : location.pathname === "/flet" ? colorPrimaryFlet:colorPrimaryPython }}>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
              <div >
                {location.pathname.includes("flet") ?
                  <>
                    <h1> Crea aplicaciones con Flet</h1>
                    <h2>Este curso está diseñado para introducir a los estudiantes al
                      desarrollo de aplicaciones con Flet.<br></br><br></br> Flet es un framework de Python 
                      que permite construir aplicaciones web y de escritorio con una sintaxis 
                      sencilla y sin necesidad de usar tecnologías como React o Flutter.</h2>
                  </> :
                  <>
                    <h1> Introducción a la programacion en {title}{kids}</h1>
                    <h2>Este curso está diseñado para introducir a los estudiantes al
                      lenguaje de programación {title}, desde los conceptos básicos hasta
                      habilidades más avanzadas. Los estudiantes aprenderán a diseñar,
                      escribir y depurar programas simples y complejos utilizando {title},
                      y se les presentará a las principales estructuras de datos y
                      algoritmos utilizados en la programación.</h2>
                  </>}
                <Link to="#index" className={`btn-get-started scrollto ${title === "micropython" ? "micropython-theme" : "python-theme"}`} style={{ background: location.pathname === "/pythonKids" || location.pathname === "/flet" ? colorSecondaryPythonKids : null }}>¿Que voy aprender?</Link>
              </div>
            </div>
            <div className="col-lg-4 order-1 order-lg-2 hero-img"  >
              <img src={`./img/${title}.png`} className="img-fluid animated vh-60" alt="" />
            </div>
          </div>
        </div>
        <svg id="index" className="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28 " preserveAspectRatio="none">
          <defs>
            <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="wave1">
            <use xlinkHref="#wave-path" x="50" y="3" fill="rgba(255,255,255, .1)" />
          </g>
          <g className="wave2">
            <use xlinkHref="#wave-path" x="50" y="0" fill="rgba(255,255,255, .2)" />
          </g>
          <g className="wave3">
            <use xlinkHref="#wave-path" x="50" y="9" fill="#fff" />
          </g>
        </svg>
      </section >
      <section id="details" className="details">
        <div className="container">
          <div id="element1" className={`welcome row mt-2 animated-left ${elementVisibility.element1 ? 'slide-left' : ''}`}>
            <div className="col-md-4" >
              <img src={`img/${title}2.jpg`} className="img-fluid" alt="" />
            </div>
            <div className="col-md-8 pt-4">
              <h3 style={{ color: color }}>Bienvenido al curso de introducción de {title}{kids}</h3>
              <p className="fst-italic">
                Los contenidos básicos que vas aprender en el curso son:
              </p>
              <ul>
                {listDescription}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="testimonials" className="testimonials" style={{ backgroundColor: location.pathname.includes("micropython") ? "rgb(238, 112, 83)" : "rgba(1, 3, 111, 0.8)" }}>
        <div className="container">
          <div className="testimonials-slider swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <img src="img/about.png" className="testimonial-img" alt="" />
                  <h3>Federico Martearena</h3>
                  <h4>Docente de Python</h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    “El trabajo del maestro no es tanto enseñar todo lo que se puede aprender, sino producir en el alumno amor y estima por el conocimiento”
                  </p>
                </div>
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
