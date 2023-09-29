import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { db } from '../../Utils/firebase'
import { collection, getDocs } from 'firebase/firestore'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Class7 = () => {
  const [date, setDate] = useState()
  const newDate = new Date()
  useEffect(() => {
    getDocs(collection(db, "course")).then(response => {
      response.docs.map(doc => {
        if (doc.id === "kgTSxaASCl9vPGuCGC7t") {
          return setDate(doc.data().date.toDate())
        }
        return null
      })
    })
  }, [])

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      {(new Date(date) <= newDate) || localStorage.getItem("access") ?
        <>
          <section id="hero">
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
                  <div data-aos="zoom-out">
                    <h1>Clase 7: Archivos y excepciones</h1>
                    <h2>Métodos de archivos en python</h2>
                    <h2>Manejo de excepciones en python</h2>
                    <h2>Práctica con archivos y excepciones</h2>
                    <div className="text-center text-lg-start">
                      <a href="#clase6" className="btn-get-started scrollto">Contenido de la clase 7</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 order-1 order-lg-2 hero-img" data-aos="zoom-out" data-aos-delay="300">
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
              <div className="section-title" data-aos="fade-up">
                <h2>Clase 7</h2>
                <p>Contenido</p>
              </div>
              <div className="accordion accordion-flush w-100 mx-auto rounded-5" id="accordionFlushExample">
                <div data-aos="fade-right" className="accordion-item mt-4 rounded-5" style={{ background: "#010483" }}>
                  <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a3" aria-expanded="false" aria-controls="flush-collapseThree">
                    <h2 data-aos="fade-right" className="text-light">Tipos de excepciones</h2>
                  </button>
                  <div id="a3" className="accordion-collapse collapse bg-dark" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                      <p className="text-center mx-auto w-75">
                        Python tiene una amplia variedad de tipos de excepciones incorporados que cubren diferentes situaciones de error. Algunos ejemplos comunes de tipos de excepciones son:
                      </p>
                      <h2 className="text-center mx-auto mt-4 ">SintaxError</h2>
                      <p className="text-center mx-auto w-75">Ocurre cuando la manera de escribir código no sigue las reglas de sintaxis en Python .</p>
                      <img className="w-75 d-block mx-auto" alt="" src="../img/class7/indexError.jpg"></img>
                      <h2 className="text-center mx-auto mt-4 ">NameError</h2>
                      <p className="text-center mx-auto w-75">Ocurre cuando se realiza una operación en un objeto de un tipo incorrecto.</p>
                      <img className="w-75 d-block mx-auto" alt="" src="../img/class7/nameError.jpg"></img>
                      <h2 className="text-center mx-auto mt-4 ">TypeError</h2>
                      <p className="text-center mx-auto w-75">Ocurre cuando se realiza una operación en un objeto de un tipo incorrecto.</p>
                      <img className="w-75 d-block mx-auto" alt="" src="../img/class7/typeError.JPG"></img>
                      <h2 className="text-center mx-auto mt-4 ">ValueError</h2>
                      <p className="text-center mx-auto w-75">Ocurre cuando una función recibe un argumento con un valor inapropiado.</p>
                      <img className="w-75 d-block mx-auto" alt="" src="../img/class7/valueError.JPG"></img>
                      <h2 className="text-center mx-auto mt-4 ">IndentationError</h2>
                      <p className="text-center mx-auto w-75">Ocurre cuando la indentación (espacios o tabulaciones) no está correctamente alineada.</p>
                      <img className="w-75 d-block mx-auto" alt="" src="../img/class7/indentationError.JPG"></img>
                      <h2 className="text-center mx-auto mt-4 ">AttributeError</h2>
                      <p className="text-center mx-auto w-75">Ocurre cuando se intenta acceder a un atributo o método que no existe en un objeto.</p>
                      <img className="w-75 d-block mx-auto" alt="" src="../img/class7/attributeError.JPG"></img>
                      <h2 className="text-center mx-auto mt-4 ">keyError</h2>
                      <p className="text-center mx-auto w-75">Ocurre cuando se intenta acceder a una clave que no existe en un diccionario.</p>
                      <img className="w-75 d-block mx-auto" alt="" src="../img/class7/keyError.JPG"></img>
                      <h2 className="text-center mx-auto mt-4 ">ZeroDivisionError</h2>
                      <p className="text-center mx-auto w-75">Ocurre cuando se intenta dividir un número entre cero.</p>
                      <img className="w-75 d-block mx-auto" alt="" src="../img/class7/zeroDivisionError.JPG"></img>
                      <h2 className="text-center mx-auto mt-4 ">FileNotFoundError</h2>
                      <p className="text-center mx-auto w-75">Ocurre cuando se intenta abrir un archivo que no existe.</p>
                      <img className="w-75 d-block mx-auto" alt="" src="../img/class7/fileNotFound.JPG"></img>
                    </div>
                  </div>
                </div>
                <div data-aos="fade-right" className="accordion-item mt-4 rounded-5" style={{ background: "#010483" }}>
                  <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a2" aria-expanded="false" aria-controls="flush-collapseThree">
                    <h2 data-aos="fade-right" className="text-light">Manejo de excepciones</h2>
                  </button>
                  <div id="a2" className="accordion-collapse collapse bg-dark" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                      <p className="text-center mx-auto w-75">una excepción es un evento que ocurre durante la ejecución de un programa y puede interrumpir su flujo normal. Cuando ocurre una excepción, el programa se desvía del flujo normal de ejecución y busca un bloque de código especial diseñado para manejar dicha excepción. Este proceso se conoce como "lanzar" (raise) una excepción.</p>
                      <h2 className="text-center mx-auto mt-4 ">Bloque try - except</h2>
                      <p className="text-center mx-auto w-75">El bloque try-except es utilizado para manejar excepciones en Python. Dentro del bloque try, se coloca el código que podría generar una excepción. Si ocurre una excepción en este bloque, el flujo del programa se desvía al bloque except, donde podemos manejar la excepción de manera adecuada.</p>
                      <img className="w-75 d-block mx-auto" alt="" src="../img/class7/tryExcept.JPG"></img>
                      <h2 className="text-center mx-auto mt-4 ">Bloque else</h2>
                      <p className="text-center mx-auto w-75">El bloque else es opcional y se ejecuta solo si no se ha producido ninguna excepción en el bloque try. Podemos colocar aquí el código que debe ejecutarse si no hay excepciones.</p>
                      <img className="w-75 d-block mx-auto" alt="" src="../img/class7/else.JPG"></img>
                      <h2 className="text-center mx-auto mt-4 ">bloque finally</h2>
                      <p className="text-center mx-auto w-75">El bloque finally también es opcional y se ejecuta siempre, independientemente de si se ha producido una excepción o no. Se utiliza para realizar tareas de limpieza o liberación de recursos, como cerrar archivos abiertos, conexiones de bases de datos, etc.</p>
                      <img className="w-75 d-block mx-auto" alt="" src="../img/class7/finally.JPG"></img>
                    </div>
                  </div>
                </div>
                <div data-aos="fade-right" className="accordion-item mt-4 rounded-5" style={{ background: "#010483" }}>
                  <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a4" aria-expanded="false" aria-controls="flush-collapseFour">
                    <h2 data-aos="fade-right" className="text-light">Metodos de archivos en python</h2>
                  </button>
                  <div id="a4" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                      <p className="text-center mx-auto w-75">En Python, puedes realizar operaciones de lectura y escritura de archivos utilizando las funciones y métodos proporcionados por el lenguaje.</p>
                      <h2 data-aos="fade-right" className="text-light text-center">open() - Abrir archivos </h2>
                      <p className="text-center mx-auto w-75"> Este método se utiliza para abrir un archivo. Toma dos parámetros principales: el nombre del archivo y el modo en el que se abrirá (por ejemplo, lectura, escritura, agregado, etc.).</p>
                      <img className="w-75 d-block mx-auto mb-4" alt="" src="../img/class7/open.JPG"></img>
                      <h2 data-aos="fade-right" className="text-light text-center mt-4">read() - lee archivos</h2>
                      <p className="text-center mx-auto w-75">Este método se utiliza para leer el contenido de un archivo. Puede leer todo el contenido o una cantidad específica de caracteres.</p>
                      <img className="w-75 d-block mx-auto" alt="" src="../img/class7/read.JPG"></img>
                      <h2 data-aos="fade-right" className="text-light text-center mt-4">write() - escribe archivos</h2>
                      <p className="text-center mx-auto w-75">Este método se utiliza para escribir datos en un archivo. Puede escribir una cadena de texto o datos formateados en el archivo.</p>
                      <img className="w-75 d-block mx-auto" alt="" src="../img/class7/write.JPG"></img>
                      <h2 data-aos="fade-right" className="text-light text-center mt-4">adjunto - adjunta archivos</h2>
                      <p className="text-center mx-auto w-75">Este método se utiliza para Agregar contenido a un archivo existente.</p>
                      <img className="w-75 d-block mx-auto" alt="" src="../img/class7/adjunto.JPG"></img>
                      <h2 data-aos="fade-right" className="text-light text-center mt-4">close() - cierra archivos</h2>
                      <p className="text-center mx-auto w-75">Este método se utiliza para cerrar un archivo después de que hayamos terminado de trabajar con él. Es importante cerrar los archivos para liberar los recursos del sistema.</p>
                      <img className="w-75 d-block mx-auto" alt="" src="../img/class7/close.JPG"></img>
                      <h2 data-aos="fade-right" className="text-light text-center mt-4">rename(nombre_actual, nombre_nuevo) - renombrar archivos</h2>
                      <p className="text-center mx-auto w-75">Para renombrar archivos debemos utilizar el módulo "os" y con el método rename podremos cambiar el nombre del archivo.</p>
                      <img className="w-75 d-block mx-auto" alt="" src="../img/class7/rename.JPG"></img>
                      <h2 data-aos="fade-right" className="text-light text-center mt-4">remove(nombre_achivo) - eliminar archivos</h2>
                      <p className="text-center mx-auto w-75">Para eliminar archivos debemos utilizar el módulo "os" y con el método remove podremos eliminar el archivo.</p>
                      <img className="w-75 d-block mx-auto" alt="" src="../img/class7/remove.JPG"></img>
                    </div>
                  </div>
                </div>
                <div data-aos="fade-right" className="accordion-item mt-4 rounded-5" style={{ background: "#010483" }}>
                 <Link to="/pythonClassFile/class7.py"
                      target={"_blank"}
                      download={"class7.py"}>
                  <button className="accordion-button collapsed bg-transparent" type="button">
                      <h2 data-aos="fade-right" className="text-light">Descarga el archivo de la clase 7</h2>
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
                <div data-aos="zoom-out">
                  <h1>Clase 7: Archivos y excepciones</h1>
                  <h2>Métodos de archivos en python</h2>
                  <h2>Manejo de excepciones en python</h2>
                  <h2>Práctica con archivos y excepciones</h2>
                  <div className="text-center text-lg-start">
                    <a href="#clase1" className="btn-get-started scrollto">tendrás acceso al curso el {new Date(date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 order-1 order-lg-2 hero-img" data-aos="zoom-out" data-aos-delay="300">
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

export default Class7
