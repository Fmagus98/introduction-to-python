import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { db } from '../../Utils/firebase'
import { collection, getDocs } from 'firebase/firestore'
import {colorPrimaryPython} from '../../colors'
import useScrollAnimation from '../../useScrollAnimation'

const Class8 = () => {

  const elementVisibility = useScrollAnimation()
  const [date, setDate] = useState()
  const newDate = new Date()
  useEffect(() => {
    getDocs(collection(db, "course")).then(response => {
      response.docs.map(doc => {
        if (doc.id === "vxbP355jq6oSL1knWI6d") {
          return setDate(doc.data().date.toDate())
        }
        return null
      })
    })
  }, [])

  return (
    <>
      {(new Date(date) <= newDate) || localStorage.getItem("access") ?
        <>
          <section id="hero" style={{ background: colorPrimaryPython }}>
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
                  <div>
                    <h1>Clase 8: Introducción a la programación orientada a objetos</h1>
                    <h2>Conceptos básicos de la programación orientada a objetos</h2>
                    <h2>Definición de clases y objetos en python</h2>
                    <h2>Métodos y atributos de clases y objetos en python</h2>
                    <div className="text-center text-lg-start">
                      <a href="#clase6" className="btn-get-started scrollto">Contenido de la clase 8</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 order-1 order-lg-2 hero-img" >
                  <img src="../img/python.png" className="img-fluid animated vh-60" alt="" />
                </div>
              </div>
            </div>
            <svg id="clase6" className="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28 " preserveAspectRatio="none">
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
          <section id="faq" className="faq section-bg">
            <div className="container">
              <div id="element1" className={`section-title animated-down ${elementVisibility.element1 ? 'slide-down' : ''}`} >
                <h2>Clase 8</h2>
                <p>Contenido</p>
              </div>
              <div className="accordion accordion-flush w-100 mx-auto rounded-5" id="accordionFlushExample">
                <div id="element2" className={`rounded-5 animated-left ${elementVisibility.element2 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython , borderRadius: "40px" }} >
                  <button className="accordion-button collapsed bg-transparent text-light" type="button" data-bs-toggle="collapse" data-bs-target="#a1" aria-expanded="false" aria-controls="flush-collapseOne">
                    <h2>Introduccion a POO</h2>
                  </button>
                  <div id="a1" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                      <div className="accordion-body text-light">
                        <p className="text-center mx-auto w-75">La programación orientada a objetos (POO) es un paradigma de programación que permite organizar y estructurar el código de manera modular, basándose en la idea de objetos que interactúan entre sí. Python es un lenguaje de programación que admite completamente la programación orientada a objetos y proporciona herramientas y sintaxis especiales para trabajar con ella.
                        </p>
                        <img className="w-75 d-block mx-auto mb-4" alt="" src="../img/class8/poo.jpg"></img>
                        <p className="text-center mx-auto w-75">En la programación orientada a objetos, los objetos son instancias de clases. Una clase es una plantilla o un modelo que define las propiedades y comportamientos que tienen los objetos de ese tipo. Las propiedades se conocen como atributos y los comportamientos se conocen como métodos.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="element3" className={`mt-4 rounded-5 animated-left ${elementVisibility.element3 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython , borderRadius: "40px" }}>
                  <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a2" aria-expanded="false" aria-controls="flush-collapseThree">
                    <h2 className="text-light">Clases y objetos </h2>
                  </button>
                  <div id="a2" className="accordion-collapse collapse bg-dark" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                      <p className="text-center mx-auto w-75">Clases y objetos: Una clase es una estructura que define las propiedades y comportamientos comunes a un conjunto de objetos. Para crear un objeto, necesitas instanciar una clase.</p>
                      <img className="w-75 d-block mx-auto" alt="" src="../img/class8/class.JPG"></img>
                      <p className="text-center mx-auto w-75">En este ejemplo, se define la clase Perro con un atributo nombre y un método ladrar(). Luego, se crea un objeto mi_perro a partir de la clase Perro y se invoca el método ladrar() del objeto.</p>
                    </div>
                  </div>
                </div>
                <div id="element4" className={`mt-4 rounded-5 animated-left ${elementVisibility.element4 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython , borderRadius: "40px" }}>
                  <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a3" aria-expanded="false" aria-controls="flush-collapseThree">
                    <h2 className="text-light">Atributos</h2>
                  </button>
                  <div id="a3" className="accordion-collapse collapse bg-dark" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                      <p className="text-center mx-auto w-75">
                        Los atributos son variables asociadas a un objeto. Pueden ser variables de instancia (asociadas a cada objeto individualmente) o variables de clase (compartidas por todos los objetos de la clase). Puedes acceder a los atributos utilizando la notación de punto. Por ejemplo:
                      </p>
                      <img className="w-75 d-block mx-auto" alt="" src="../img/class8/attributes.JPG"></img>
                      <p className="text-center mx-auto w-75">En este ejemplo, la clase Persona tiene atributos nombre y edad. Estos atributos se asignan cuando se crea un objeto y se acceden utilizando la notación de punto.</p>
                    </div>
                  </div>
                </div>
                <div id="element5" className={`mt-4 rounded-5 animated-left ${elementVisibility.element5 ? 'slide-left' : ''}`}style={{ background: colorPrimaryPython , borderRadius: "40px" }}>
                  <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a4" aria-expanded="false" aria-controls="flush-collapseFour">
                    <h2 className="text-light">Métodos</h2>
                  </button>
                  <div id="a4" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                      <p className="text-center mx-auto w-75">
                        Los métodos son funciones asociadas a un objeto. Pueden acceder y manipular los atributos del objeto. Los métodos pueden ser definidos dentro de la clase y se invocan en los objetos utilizando la notación de punto. Por ejemplo:</p>
                      <img className="w-75 d-block mx-auto" alt="" src="../img/class8/methods.jpg"></img>
                      <p className="text-center mx-auto w-75">En este ejemplo, la clase Rectangulo tiene un método area() que calcula el área del rectángulo basado en los atributos ancho y altura. El método se invoca en el objeto mi_rectangulo.</p>
                      <p className="text-center mx-auto w-75">La programación orientada a objetos en Python ofrece una forma estructurada y modular de diseñar y desarrollar programas. Permite la reutilización de código, la abstracción de conceptos y la organización de la lógica en entidades coherentes. Esta es solo una introducción básica, pero la POO en Python tiene muchas más características y conceptos avanzados que puedes explorar para construir aplicaciones más complejas y eficientes.</p>
                    </div>
                  </div>
                </div>
                <div id="element6" className={`mt-4 rounded-5 animated-left ${elementVisibility.element6 ? 'slide-left' : ''}`}style={{ background: colorPrimaryPython , borderRadius: "40px" }}>
                  <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a5" aria-expanded="false" aria-controls="flush-collapseFive">
                    <h2 className="text-light">Herencia</h2>
                  </button>
                  <div id="a5" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                      <p className="text-center mx-auto w-75" style={{ marginBottom: "7rem" }} >La herencia en Python es un concepto importante de la programación orientada a objetos (POO) que permite que una clase adquiera propiedades (atributos y métodos) de otra clase. La clase que hereda se denomina "clase hija" o "subclase", y la clase de la cual hereda se llama "clase padre" o "superclase". Esto permite la reutilización de código y la organización jerárquica de las clases.
                        En Python, para definir una clase que herede de otra, se utiliza la siguiente sintaxis:</p>
                      <img className="w-75 d-block mx-auto mb-4 pb-4" alt="" src="../img/class8/heredity.JPG"></img>
                    </div>
                  </div>
                </div>
                <div id="element7" className={`mt-4 rounded-5 animated-left ${elementVisibility.element7 ? 'slide-left' : ''}`}style={{ background: colorPrimaryPython , borderRadius: "40px" }}>
                  <Link to="/pythonClassFile/class8.py"
                    target={"_blank"}
                    download={"class8.py"}>
                    <button className="accordion-button collapsed bg-transparent" type="button">
                      <h2 className="text-light">Descarga el archivo de la clase 8</h2>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </>
        :
        <section id="hero">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
                <div >
                  <h1>Clase 8: Introducción a la programación orientada a objetos</h1>
                  <h2>Conceptos básicos de la programación orientada a objetos</h2>
                  <h2>Definición de clases y objetos en python</h2>
                  <h2>Métodos y atributos de clases y objetos en python</h2>
                  <div className="text-center text-lg-start">
                    <a href="#clase1" className="btn-get-started scrollto">tendrás acceso al curso el {new Date(date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 order-1 order-lg-2 hero-img"  data-aos-delay="300">
                <img src="../img/python.png" className="img-fluid animated vh-60" alt="" />
              </div>
            </div>
          </div>
          <svg id="clase6" className="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28 " preserveAspectRatio="none">
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
        </section>}
    </>
  )
}

export default Class8
