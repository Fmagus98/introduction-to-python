import React, { useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
        <>
          <section id="hero">
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
                  <div data-aos="zoom-out">
                    <h1> Introducción a la programacion en python</h1>
                    <h2>Este curso está diseñado para introducir a los estudiantes al
                      lenguaje de programación Python, desde los conceptos básicos hasta
                      habilidades más avanzadas. Los estudiantes aprenderán a diseñar,
                      escribir y depurar programas simples y complejos utilizando Python,
                      y se les presentará a las principales estructuras de datos y
                      algoritmos utilizados en la programación.</h2>
                    <div className="text-center text-lg-start">
                      <a href="#index" className="btn-get-started scrollto">¿Que voy aprender?</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 order-1 order-lg-2 hero-img" data-aos="zoom-out" data-aos-delay="300">
                  <img src="img/python.png" className="img-fluid animated vh-60" alt="" />
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
          </section>
          <section id="details" className="details">
            <div className="container">
              <div className="row content">
                <div className="col-md-4" data-aos="fade-right">
                  <img src="img/python2.jpg" className="img-fluid" alt="" />
                </div>
                <div className="col-md-8 pt-4" data-aos="fade-up">
                  <h3>Bienvenido al curso de introducción de python</h3>
                  <p className="fst-italic">
                    Los contenidos básicos que vas aprender en el curso son:
                  </p>
                  <ul>
                    <li><i className="bi bi-check"></i> Introducción a la programación.</li>
                    <li><i className="bi bi-check"></i> Variables</li>
                    <li><i className="bi bi-check"></i> Tipos de datos.</li>
                    <li><i className="bi bi-check"></i> Métodos de tipos de datos.</li>
                    <li><i className="bi bi-check"></i> Funciones.</li>
                    <li><i className="bi bi-check"></i> Bucles.</li>
                    <li><i className="bi bi-check"></i> Módulos.</li>
                    <li><i className="bi bi-check"></i> Manipulación de datos (Listas y tuplas).</li>
                    <li><i className="bi bi-check"></i> Programación orientado a objectos (POO).</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section id="testimonials" className="testimonials">
            <div className="container">
              <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <img src="img/about.png" className="testimonial-img" alt="" />
                      <h3>Federico Martearena</h3>
                      <h4>Docente de Python</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                        “El trabajo del maestro no es tanto enseñar todo lo que se puede aprender, sino producir en el alumno amor y estima por el conocimiento”
                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
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