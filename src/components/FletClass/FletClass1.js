import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../../Utils/firebase'
import { collection, getDocs } from 'firebase/firestore'
import { colorPrimaryFlet, colorSecondaryPythonKids } from '../../colors'
import useScrollAnimation from '../../useScrollAnimation'
import { CopyButton } from '../CopyButton/CopyButton'
import { class1FCode } from '../FletClass/fletClassCode'
const FletClass1 = () => {

  const elementVisibility = useScrollAnimation()
  const [date, setDate] = useState(null)
  const newDate = new Date()

  useEffect(() => {
    if (localStorage.getItem("dataCourseFlet") === null) {
      getDocs(collection(db, "courseFlet")).then(response => {
        response.docs.map(doc => {
          if (doc.id === "RT0KReFWNkYESPThSwHc") {
            return setDate(doc.data().date.toDate())
          }
          return null
        })
      })
    }
    else {
      const dateCourse = JSON.parse(localStorage.getItem("dataCourseFlet"))
      setDate(dateCourse)
    }
  }, [])

  return (
    <>{
      (new Date(date?.[0]?.date) <= newDate) || localStorage.getItem("access - micropython") ?
        <>
          <section id="hero" style={{ background: colorPrimaryFlet }} >
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
                  <div >
                    <h1>Clase 1</h1>
                    <h2>Que es python y flet?</h2>
                    <h2>Instalación y configuración del entorno</h2>
                    <h2>Primeros pasos con Flet: estructura de un proyecto</h2>
                    <div className="text-center text-lg-start">
                      <a href="#clase1" className="btn-get-started scrollto" style={{ backgroundColor: colorSecondaryPythonKids }}>Contenido de la clase 1</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 order-1 order-lg-2 hero-img"  >
                  <img src="../../img/flet.png" className="img-fluid animated vh-60" alt="" />
                </div>
              </div>
            </div>
            <svg id="clase1" className="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28 " preserveAspectRatio="none">
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
          <section className="section-bg">
            <div className="container">
              <div id="element1" className={`section-title animated-down ${elementVisibility.element1 ? 'slide-down' : ''}`}>
                <h2>Clase 1</h2>
                <p>Contenido</p>
              </div>
              <div className="accordion accordion-flush w-100 mx-auto" id="accordionFlushExample">
                <div id="element2" className={`accordion-item mt-4  animated-left ${elementVisibility.element2 ? 'slide-left' : ''}`} style={{ background: colorPrimaryFlet, borderRadius: "40px" }}>
                  <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a1" aria-expanded="false" aria-controls="flush-collapseThree">
                    <h2 className="text-light">¿Que es Python?</h2>
                  </button>
                  <div id="a1" className="accordion-collapse collapse" >
                    <div className="accordion-body text-light bg-dark  ">
                      <div id="content">
                        <h3 className="mt-7 text-break mx-auto w-75 fw-bold">Guido Van Rossum</h3>
                        <img className="d-block mx-auto w-25 border-content" alt="" src="../../img/class1/guido.webp"></img>
                        <p className="text-break mx-auto w-75">Python es un lenguaje de programación de alto nivel basado en C.
                          Fue creado en 1989 por Guido Van Rossum, un programador holandés, mientras trabajaba en el Centro de
                          Investigación para la Informática (CWI) en los Países Bajos. </p>
                        <h3 className="mt-4 text-break mx-auto w-75 fw-bold">El objetivo de python</h3>
                        <p className="text-break mx-auto w-75">La idea detrás de Python era crear un lenguaje de programación que fuera fácil de aprender, legible
                          y que permitiera a los programadores escribir código rápidamente.
                        </p>
                        <p className="text-break mx-auto w-75">Van Rossum quería un lenguaje que fuera más poderoso que el lenguaje de script Unix shell, pero que
                          fuera más fácil de usar que otros lenguajes de programación de la época, como C++ y Perl.
                        </p>
                        <h3 className="mt-4 text-break mx-auto w-75 fw-bold">Origen de su nombre</h3>
                        <p className="text-break mx-auto w-75">El nombre "Python" fue inspirado por el grupo de comedia británico Monty Python, y muchos de
                          los términos en el lenguaje, como "spam" y "egg", también se tomaron de los sketches de Monty Python.
                          Desde su lanzamiento inicial, Python ha evolucionado y se ha utilizado en una amplia variedad de aplicaciones.
                        </p>
                        <h3 className="mt-4 text-break mx-auto w-75 fw-bold">Python actualmente</h3>
                        <p className="text-break mx-auto w-75">Este lenguaje es muy popular en la comunidad de programación debido a su sintaxis simple y legible, así como
                          a su enfoque en la legibilidad del código. En 2008, Python 3 fue lanzado, lo que mejoró aún más el
                          lenguaje y lo hizo más consistente y fácil de aprender. Actualmente, Python es uno de los lenguajes de
                          programación más populares en todo el mundo y las empresas de alto nivel los están utilizando .
                        </p>
                        <img className="d-block mx-auto w-75 border-content mb-7" alt="" src="../../img/class1/ep.webp"></img>
                        <h3 className="mt-4 mb-4 fw-bold text-center">Mercado Laboral con python</h3>
                        <h3 className="mt-7 mb-4 fw-bold text-center">BIG DATA</h3>
                        <img className="w-50 mx-auto d-block border-content" alt="" src="../../img/class1/bd.webp"></img>
                        <p className="mt-4 mb-7 text-break mx-auto w-50">El uso de Python está muy extendido en dos áreas:
                          el análisis de datos y el big data. Su sencillez y su gran número de bibliotecas de procesamiento
                          de datos hacen que Python sea ideal a la hora de analizar y gestionar una gran cantidad de
                          datos en tiempo real.</p>
                        <h3 className="mt-4 mb-4 fw-bold text-center">DATA MINING</h3>
                        <img className="w-50 mx-auto d-block border-content" alt="" src="../../img/class1/dm.webp"></img>
                        <p className="mt-4 mb-7 text-break mx-auto w-50"> La minería de datos o data mining es un
                          proceso que permite analizar grandes bases de datos con el objetivo de predecir futuras
                          tendencias. Se trata de un proceso complejo al que Python puede ayudar, a través de la
                          limpieza, organización de datos y del uso de algoritmos de aprendizaje automático que
                          simplifica el análisis de datos.</p>
                        <h3 className="mt-4 mb-4 fw-bold text-center">DATA SCIENCIE</h3>
                        <img className="w-50 mx-auto d-block border-content" alt="" src="../../img/class1/ds.webp"></img>
                        <p className="mt-4 mb-7 text-break mx-auto w-50">Los nuevos motores numéricos como “Pandas”
                          o “NumPy”, Python están dejando atrás a  MATLAB, lenguaje usado por científicos para trabajar
                          con un gran número de datos. Python vuelve a destacar por su simplicidad y  potencial para trabajar
                          con un gran número de datos,  el gran número de bibliotecas existentes, hacen que Python sea ideal
                          para este tipo de tareas.</p>
                        <h3 className="mt-4 mb-4 fw-bold text-center">INTELIGENCIA ARTIFICIAL</h3>
                        <img className="w-50 mx-auto d-block border-content" alt="" src="../../img/class1/ia.webp"></img>
                        <p className="mt-4 mb-7 text-break mx-auto w-50">Cada vez se habla más de la inteligencia artificial
                          (IA). Gran parte de su avance se debe a Python. Su facilidad de escritura y su robustez han convertido
                          a Python en el aliado perfecto de la IA. Su capacidad de plasmar ideas complejas en pocas líneas, unidas
                          al gran número de frameworks existentes, han hecho que Python sea uno de los lenguajes de programación
                          que están impulsando a la IA.</p>
                        <h3 className="mt-4 mb-4 fw-bold text-center">BLOCKCHAIN</h3>
                        <img className="w-50 mx-auto d-block border-content" alt="" src="../../img/class1/bc.webp"></img>
                        <p className="mt-4 mb-7 text-break mx-auto w-50">
                          Blockchain es una tecnología de registro distribuido que se utiliza para registrar transacciones de manera segura y verificable.
                          Consiste en un registro en línea que se actualiza de manera permanente y que está protegido mediante técnicas criptográficas.</p>
                        <h3 className="mt-4 mb-4 fw-bold text-center">MACHINE LEARNING</h3>
                        <img className="w-50 mx-auto d-block border-content" alt="" src="../../img/class1/ml.webp"></img>
                        <p className="mt-4 mb-7 text-break mx-auto w-50">El machine learning o aprendizaje automático es otra de
                          las tecnologías que está cambiando el mundo tal y como lo conocemos. La robótica y la IA son ahora capaces
                          de aprender por sí mismas a medida que van procesando datos. De esta forma, obtienen información relevante
                          que le permite tomar las decisiones adecuadas. Por supuesto, Python es también muy eficaz en este campo,
                          en el tratamiento de datos eficaz es esencial.</p>
                        <h3 className="mt-4 mb-4 fw-bold text-center">DESARROLLO DE VIDEOJUEGOS</h3>
                        <img className="w-50 mx-auto d-block border-content" alt="" src="../../img/class1/g&g3d.webp"></img>
                        <p className="mt-4 mb-7 text-break mx-auto w-50" style={{ marginBottom: "7rem" }}>Juegos como Battelfield 2 o los Sims 4, parte de su código está escrito en este lenguaje de programación. <br></br>
                          A través de librerías como Pygame o Panda 3D, podrás enfocar tu desempeño profesional aparte desarrollo gaming, pero hay otras tantas que están recogidas en wiki python.
                          Pero Python no tiene la posibilidad de realizarlos al completo, por lo que te animamos a que descubras otros lenguajes para programar videojuegos, como Java o Lua.
                        </p>
                        <h3 className="mt-4 mb-4 fw-bold text-center">DESARROLLO WEB/ESCRITORIO/MOBILE</h3>
                        <img className="w-50 mx-auto d-block border-content" alt="" src="../../img/class1/dw.webp"></img>
                        <p className="mt-4 mb-7 text-break mx-auto w-50">Python permite desarrollar webs complejas con menos líneas de
                          código, haciéndolas más ligeras y optimizadas. Django es uno de los frameworks de Python más populares de la actualidad,
                          que puede ser utilizado para crear webs dinámicas y muy seguras.<br></br>Recientemente se ha lanzado Flet para desarrollar Aplicaciones de escritorio y mobile</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="element3" className={`accordion-item animated-left mt-4 ${elementVisibility.element3 ? 'slide-left' : ''}`} style={{ background: colorPrimaryFlet, borderRadius: "40px" }} >
                  <button className="accordion-button collapsed  bg-transparent text-light" type="button" data-bs-toggle="collapse" data-bs-target="#a2" aria-expanded="false" aria-controls="flush-collapseOne">
                    <h2 >¿Que es Flet?</h2>
                  </button>
                  <div id="a2" className="accordion-collapse collapse" >
                    <div className="accordion-body text-light bg-dark ">
                      <p className="text-break mx-auto w-75 mt-4">Flet es un framework de Python que te permite crear aplicaciones web, de escritorio y móviles de forma rápida y sencilla, sin necesidad de usar HTML, CSS o JavaScript.</p>
                      <p className="text-break mx-auto w-75 mt-4">Está basado en Flutter, pero en lugar de programar en Dart, usas Python para definir la interfaz y la lógica de la aplicación.</p>
                      <h3 className="mt-4 text-break mx-auto w-75 fw-bold">¿Para que sirve Flet?</h3>
                      <ul className="w-75 mx-auto mb-4 text-xl">
                        <li className="w-100 mx-auto">
                          <p className="text-break"> Crear interfaces gráficas en Python sin necesidad de librerías como Tkinter o PyQt.</p>
                        </li>
                        <li className="w-100 mx-auto">
                          <p className="text-break">Desarrollar apps web, móviles (PWA) y de escritorio con un solo código.</p>
                        </li>
                        <li className="w-100 mx-auto">
                          <p className="text-break">Integrar APIs, bases de datos y servicios como Firebase.</p>
                        </li>
                        <li className="w-100 mx-auto">
                          <p className="text-break">Prototipar aplicaciones rápidamente sin aprender tecnologías web complejas.</p>
                        </li>
                      </ul>
                      <h3 className="mt-4 text-break mx-auto w-75 fw-bold">Características Principales de Flet</h3>
                      <ul className="w-75 mx-auto mb-4 text-xl">
                        <li className="w-100 mx-auto">
                          <p className="text-break"> Multiplataforma: 📱 Móvil (Progresive Web Apps y nativo en Android/iOS ) - 🖥 Escritorio (Windows, macOS, Linux) - 🌎 Web (sin necesidad de frameworks adicionales)</p>
                        </li>
                        <li className="w-100 mx-auto">
                          <p className="text-break">Widgets Modernos: Incluye botones, formularios, listas, tablas, gráficos, entre otros.</p>
                        </li>
                        <li className="w-100 mx-auto">
                          <p className="text-break">Integración con APIs y Bases de Datos: Puedes conectar tu app con Firebase, PostgreSQL, MySQL y otros servicios.</p>
                        </li>
                        <li className="w-100 mx-auto">
                          <p className="text-break">No necesitas aprender JavaScript o Dart: Todo se hace en Python, pero con la potencia de Flutter.</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div id="element4" className={`accordion-item mt-4  animated-left ${elementVisibility.element4 ? 'slide-left' : ''}`} style={{ background: colorPrimaryFlet, borderRadius: "40px" }}>
                  <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a3" aria-expanded="false" aria-controls="flush-collapseFive">
                    <h2 className="text-light">¿Que arquitectura tengo en mi pc?</h2>
                  </button>
                  <div id="a3" className="accordion-collapse collapse" >
                    <div className="accordion-body text-light bg-dark">
                      <p className="mt-7 mb-4 text-break mx-auto w-75">La arquitectura de 32 bits y 64 bits se refiere a cómo un procesador maneja la información. Estos términos se refieren a la cantidad de datos que un procesador puede procesar en un solo ciclo de reloj y la cantidad máxima de memoria que puede direccionar el procesador.</p>
                      <p className="mt-7 mb-4 text-break mx-auto w-75">Es importante saberlo ya que vamos a instalar una versión diferente de python e IDE para cada caso. Para saber que tipo de arquitectura tengo en mi pc debemos hacer lo siguiente:</p>
                      <ul className="intr-ul"><p className='mx-auto w-75'><b>En Windows</b></p>
                        <li>
                          <p className="mt-4 mb-4 text-break mx-auto w-75"><span className="fw-bold">1_</span>Toca la tecla windows, escribe en el buscador "sistema" y selecciona el primero que aparezca.</p>
                          <img className="w-75 mx-auto d-block border-content" alt="" src="../../img/class1/w1.webp"></img>
                        </li>
                        <li>
                          <p className="mt-4 mb-4 text-break mx-auto w-75"><span className="fw-bold">2_ </span>Dentro del sistema verás la información de tu computadora, allí encontrarás que tipo de arquitectura tiene tu pc.</p>
                          <img className="w-75 mx-auto d-block border-content" alt="" src="../../img/class1/w2.webp"></img>
                        </li>
                      </ul>
                      <ul className="intr-ul"><p className='mx-auto w-75'><b>En MacOS</b></p>
                        <li>
                          <p className="mt-4 mb-4 text-break mx-auto w-75"><span className="fw-bold">1_ </span>Pulsamos el icono de la manzana y seleccionamos en "Sobre este Mac".</p>
                          <img className="w-75 mx-auto d-block border-content" alt="" src="../../img/class1/m1.webp"></img>
                        </li>
                        <li>
                          <p className="mt-4 mb-4 text-break mx-auto w-75"><span className="fw-bold">2_ </span>Dentro de la pantalla que se abrió, seleccionamos "informe del sistema".</p>
                          <img className="w-75 mx-auto d-block border-content" alt="" src="../../img/class1/m2.webp"></img>
                        </li>
                        <li>
                          <p className="mt-4 mb-4 text-break mx-auto w-75"><span className="fw-bold">3_ </span>Ingresa a "Extensiones" y dentro verás la información de tu procesador, en el caso que diga "x86_64" en arquitectura y "Si" en 64 bits(intel) será de 64 bits, en caso contrario es de 32 bits.</p>
                          <img className="w-75 mx-auto d-block border-content" alt="" src="../../img/class1/m3.webp"></img>
                        </li>
                      </ul>
                      <ul className="intr-ul"><p className='mx-auto w-75'><b>En Linux</b></p>
                        <li>
                          <p className="mt-4 mb-4 text-break mx-auto w-75"><span className="fw-bold">1_ </span>Abre el terminal con las teclas Ctrl + Alt + T, o desde Aplicaciones/Accesorios/Terminal (Estos atajos se basan en Linux/Ubuntu) y luego escribe "lscpu", ejecutalo y te mostrará que tipo de arquitectura es. Si esta marca “32-bits, 64-bits” es de 64 bits, por el contrario si te marca solo 32-bits, tu ordenador es de 32 bits.</p>
                          <img className="w-75 mx-auto d-block border-content" style={{ marginBottom: "7rem" }} alt="" src="../../img/class1/l1.webp"></img>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div id="element5" className={`accordion-item mt-4  animated-left ${elementVisibility.element5 ? 'slide-left' : ''}`} style={{ background: colorPrimaryFlet, borderRadius: "40px" }}>
                  <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a4" aria-expanded="false" aria-controls="flush-collapseFive">
                    <h2 className="text-light">Instalación de python</h2>
                  </button>
                  <div id="a4" className="accordion-collapse collapse" >
                    <div className="accordion-body text-light bg-dark">
                      <p className="mt-7 mb-4 text-break mx-auto w-75">1. Dirígete a <Link to="https://www.python.org/downloads" target="_blank" className="text-info">https://www.python.org/downloads</Link> y selecciona "Downloads"</p>
                      <img className="w-75 mx-auto d-block border-content " alt="" src="../../img/class1/python1.webp"></img>
                      <p className="mt-7 mb-4 text-break mx-auto w-75">2. Luego iremos a "All releases" </p>
                      <img className="w-75 mx-auto d-block border-content" alt="" src="../../img/class1/python2.webp"></img>
                      <p className="mt-7 mb-4 text-break mx-auto w-75">3. Buscamos la versión más reciente o alguna versión superior o igual a 3.8, aunque lo más recomendable es que instalen 3.10 en adelante y tocamos "download"</p>
                      <img className="w-75 mx-auto d-block border-content" alt="" src="../../img/class1/python3.webp"></img>
                      <p className="mt-7 mb-4 text-break mx-auto w-75">4. Elegimos el sistema operativo que utilizamos en nuestro dispositivo y la arquitectura que tengamos sea 64 bits(86x_64 / x64) ó 32 bits(86x). <br />Si no sabes cual descargar, estan los pasos a seguir en esta página para saber cual. Sube hacia arriba y toca el botón "¿Que arquitectura tengo en mi pc?"</p>
                      <img className="w-75 mx-auto d-block border-content" alt="" src="../../img/class1/python4.webp"></img>
                      <p className="mt-7 mb-4 text-break mx-auto w-75">5. Al instalar selecciona "add python 3.8 to PATH" y "install now"</p>
                      <img className="w-75 mx-auto d-block border-content" style={{ marginBottom: "7rem" }} alt="" src="../../img/class1/python5.webp"></img>
                    </div>
                  </div>
                </div>
                <div id="element6" className={`accordion-item mt-4  animated-left ${elementVisibility.element6 ? 'slide-left' : ''}`} style={{ background: colorPrimaryFlet, borderRadius: "40px" }}>
                  <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a5" aria-expanded="false" aria-controls="flush-collapseSix">
                    <h2 className="text-light">Entorno de desarrollo integrado (IDE)</h2>
                  </button>
                  <div id="a5" className="accordion-collapse collapse" >
                    <div className="accordion-body text-light bg-dark  ">
                      <p className="mt-4 mb-4 text-break mx-auto w-75">Para programar en un lenguaje de programación debemos tener en nuestro ordenador un entorno de desarrollo integrado, más conocido como IDE,
                        Un IDE combina un editor de código, un compilador o intérprete, herramientas de depuración, un sistema de gestión de versiones,
                        entre otras funcionalidades, en una sola aplicación integrada.
                        Esta integración facilita el trabajo de los programadores al permitirles desarrollar y probar aplicaciones de software en un solo entorno.
                      </p>
                      <p className="text-break mx-auto w-75">Estos son unos de los IDEs más comunes que se utilizan para el lenguaje de programación python:</p>
                      <img className="w-50 d-block mx-auto border-content" alt="" src="../../img/class1/IDE.webp"></img>
                      <ul className="intr-ul">
                        <li><p className="mt-4 mb-4 text-break mx-auto w-50"><span className="fw-bold">JupiterLab:</span> Es una interfaz de usuario web interactiva para el entorno de programación Jupyter. Permite la edición de código en varios lenguajes de programación, incluido Python, y proporciona una variedad de características y extensiones útiles. </p></li>
                        <li><p className="mt-4 mb-4 text-break mx-auto w-50"><span className="fw-bold">Pycharm:</span>Pycharm: Es un entorno de desarrollo integrado para Python desarrollado por JetBrains. Proporciona una amplia gama de características y herramientas para facilitar el desarrollo de aplicaciones Python.</p></li>
                        <li><p className="mt-4 mb-4 text-break mx-auto w-50"><span className="fw-bold">Spyder:</span> Es un entorno de desarrollo integrado especialmente diseñado para trabajar con Python en el ámbito científico y de análisis de datos. Está orientado a la programación científica y ofrece una serie de características y herramientas específicas para facilitar el desarrollo de proyectos relacionados con ciencia, matemáticas y análisis de datos.</p></li>
                        <li><p className="mt-4 mb-4 text-break mx-auto w-50"><span className="fw-bold">Visual Studio Code:</span> Es un entorno de desarrollo de código fuente abierto y gratuito desarrollado por Microsoft. Es un editor de código ligero pero potente que se ha vuelto muy popular entre los desarrolladores por su facilidad de poder programar en diferentes lenguajes de programación, incluido Python.</p></li>
                      </ul>
                      <p className="text-break mx-auto w-75 mt-4" style={{ marginBottom: "7rem" }}>
                        En este curso utilizaremos Visual Studio code, en el caso que tengas 32 bits podes usar Pycharm 2018.1.6 pero cabe destacar que la elección del IDE dependerá de tus necesidades y preferencias personales.
                      </p>
                    </div>
                  </div>
                </div>
                <div id="element7" className={`accordion-item mt-4  animated-left ${elementVisibility.element7 ? 'slide-left' : ''}`} style={{ background: colorPrimaryFlet, borderRadius: "40px" }}>
                  <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a6" aria-expanded="false" aria-controls="flush-collapseSeven">
                    <h2 className="text-light">Instalación de IDE</h2>
                  </button>
                  <div id="a6" className="accordion-collapse collapse" >
                    <div className="accordion-body text-light bg-dark  ">
                      <h3 className="mt-4 text-break w-75 mx-auto">Instalación de IDE para sistema operativo de 64 bits</h3>
                      <p className="mt-4 mb-4 text-break mx-auto w-75">En este curso utilizaremos Visual Studio Code, es un editor de código ligero pero potente que se ha vuelto muy popular entre los desarrolladores por su facilidad de poder programar en diferentes lenguajes de programación, incluido Python.</p>
                      <p className="mt-4 mb-4 text-break mx-auto w-75">1 - Para instalarlo ve al sitio web oficial de Visual Studio Code en <Link to="https://code.visualstudio.com" target="_blank" className="text-info">https://code.visualstudio.com</Link>.<br></br>En "Download for Windows"  van a la palomita que esta al lado derecho y van a ver los diferentes sistemas operativos en el que pueden descargarlo</p>
                      <img className="w-75 mx-auto d-block border-content" alt="" src="../../img/class1/ide1.webp"></img>
                      <p className="mt-4 mb-4 text-break mx-auto w-75">2 - Selecciona "Acepto el acuerdo" y luego "siguiente" para seguir con la instalación.</p>
                      <img className="w-75 mx-auto d-block border-content" alt="" src="../../img/class1/ide2.webp"></img>
                      <p className="mt-4 mb-4 text-break mx-auto w-75">3 - Selecciona todos los checkbox y haz click derecho en el botón "siguiente".</p>
                      <img className="w-75 mx-auto d-block border-content" alt="" src="../../img/class1/ide3.webp"></img>
                      <p className="mt-4 mb-4 text-break mx-auto w-75">4 - Haz click derecho en el boton "siguiente".</p>
                      <img className="w-75 mx-auto d-block border-content" alt="" src="../../img/class1/ide4.webp"></img>
                      <p className="mt-4 mb-4 text-break mx-auto w-75">5 - Al terminar la instalación haz click en "finalizar" y abrirá Visual Studio Code!.</p>
                      <img className="w-75 mx-auto d-block border-content" alt="" src="../../img/class1/ide5.webp"></img>
                      <h3 className="mt-4 text-break w-75 mx-auto">Instalación de IDE para sistema operativo de 32 bits</h3>
                      <p className="mt-4 mb-4 text-break mx-auto w-75">En el caso que dispongas de una arquitectura de 32 bits, Visual Studio Code no es compatible y deberás ver otras alternativas, en este caso te daré una guía de como instalar Pycharm 2018.1.6(última version compatible con 32 bits).</p>
                      <p className="mt-4 mb-4 text-break mx-auto w-75">1 - Para instalarlo ve al sitio web oficial de Pycharm en <Link to="https://www.jetbrains.com/pycharm/download/other.html" target="_blank" className="text-info">https://www.jetbrains.com/pycharm/download/other.html</Link> y selecciona el sistema operativo que utilizas.</p>
                      <img className="w-75 mx-auto d-block border-content" alt="" src="../../img/class1/pych1.webp"></img>
                      <p className="mt-4 mb-4 text-break mx-auto w-75">2 - Ejecuta el instalador que descargaste y selecciona "Next".</p>
                      <img className="w-75 mx-auto d-block border-content" alt="" src="../../img/class1/pych2.webp"></img>
                      <p className="mt-4 mb-4 text-break mx-auto w-75">3 - Selecciona "Next".</p>
                      <img className="w-75 mx-auto d-block border-content" alt="" src="../../img/class1/pych3.webp"></img>
                      <p className="mt-4 mb-4 text-break mx-auto w-75">4 - Presiona en "32-bit launcher", ".py" y selecciona "Next".</p>
                      <img className="w-75 mx-auto d-block border-content" alt="" src="../../img/class1/pych4.webp"></img>
                      <p className="mt-4 mb-4 text-break mx-auto w-75">5 - Selecciona "Install" y espera a que se instale.</p>
                      <img className="w-75 mx-auto d-block border-content" alt="" src="../../img/class1/pych5.webp"></img>
                      <p className="mt-4 mb-4 text-break mx-auto w-75">4 - Selecciona "Finish". </p>
                      <img className="w-75 mx-auto d-block border-content" style={{ marginBottom: "7rem" }} alt="" src="../../img/class1/pych6.webp"></img>
                    </div>
                  </div>
                </div>
                <div id="element8" className={`accordion-item mt-4  animated-left ${elementVisibility.element8 ? 'slide-left' : ''}`} style={{ background: colorPrimaryFlet, borderRadius: "40px" }}>
                  <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a7" aria-expanded="false" aria-controls="flush-collapseSeven">
                    <h2 className="text-light">Herramientas de Visual Studio Code (IDE)</h2>
                  </button>
                  <div id="a7" className="accordion-collapse collapse" >
                    <div className="accordion-body text-light bg-dark  ">
                      <h3 className="mt-4 text-break w-75 mx-auto">Extensiones en Visual Studio Code</h3>
                      <p className="mt-4 mb-4 text-break mx-auto w-75">En nuestro Visual Studio Code tenemos bastantes herramientas que nos falicitará a la hora de
                        programar en python, unas de ellas son las extensiones descargables que se nos va a proporcionar en el programa</p>
                      <p className="mt-4 mb-4 text-break mx-auto w-75">Para descargar extensiones tendremos que ir a la barra que está en la parte superior izquierda y tocamos el logo indicado en la imagen</p>
                      <img className="w-75 d-block mx-auto border-content" alt="" src="../../img/class1/ext1.webp"></img>
                      <p className="mt-4 mb-4 text-break mx-auto w-75">Al tocar el logo veremos que tenemos un buscador para buscar extensiones, un apartado llamado "installed" donde tendrémos todas las extensiones que instalamos y un apartado llamado "recommended" donde vamos a tener extensiones que podría servirnos al utilizar un lenguaje en especial</p>
                      <img className="w-75 d-block mx-auto border-content" alt="" src="../../img/class1/ext2.webp"></img>
                      <h3 className="mt-4 mb-4 text-break mx-auto w-75">Lista de extensiones que utilizaremos en python</h3>
                      <ul className="intr-ul">
                        <li><p className="mt-4 mb-4 text-break mx-auto w-75">Spanish Language Pack for Visual Studio Code: Esta extensión nos facilitará toda la interfaz de usuario de visual studio code a español</p></li>
                        <li><p className="mt-4 mb-4 text-break mx-auto w-75">Python: les proporcionará autocompletado avanzado,Análisis estático de código y detección de errores.</p></li>
                        <li><p className="mt-4 mb-4 text-break mx-auto w-75">Python Environment Manager: Gestiona entornos virtuales de Python y seleccionar qué entorno virtual se va a utilizar en un proyecto de Python en particular.</p></li>
                        <li><p className="mt-4 mb-4 text-break mx-auto w-75">Python indent: Indentación automática para facilitar la lectura del códigoUna mala indentación puede hacer que el código sea difícil de leer y entender, lo que a su vez puede llevar a errores y problemas en el código.</p></li>
                      </ul>
                      <h3 className="mt-4 mx-auto w-75 text-break">Terminal - Python y pip</h3>
                      <p className="mt-4 mb-4 text-break mx-auto w-75">Empecemos a utilizar visual studio code para verificar que se instaló correctamente python, si nos vamos a la parte superior del programa veremos unos "...", presionalo con click derecho y ve a Terminal/New terminal ó simplemente presiona ctrl+shift+ñ </p>
                      <img className="w-75 d-block mx-auto border-content" alt="" src="../../img/class1/t1.webp"></img>
                      <p className="mt-4 mb-4 text-break mx-auto w-75">Observamos que se abrirá la terminal en la parte inferior del programa, dentro de la terminal te mostrará la dirección en donde se está ejecutando la terminal.</p>
                      <img className="w-75 d-block mx-auto border-content" alt="" src="../../img/class1/t2.webp"></img>
                      <p className="mt-4 mb-4 text-break mx-auto w-75">Si escribimos en la terminal "python", nos mostrará la versión que estamos utilizando si está instalado.</p>
                      <img className="w-75 d-block mx-auto border-content" alt="" src="../../img/class1/t3.webp"></img>
                      <p className="mt-4 mb-4 text-break mx-auto w-75">Para finalizar el proceso de ejecución que muestra la version de python escribiremos "exit()".</p>
                      <img className="w-75 d-block mx-auto border-content" alt="" src="../../img/class1/t4.webp"></img>
                      <p className="mt-4 mb-4 text-break mx-auto w-75">Ya vimos que podemos ver la version de python escribiendo python, ahora empezaremos a ver pip.<br></br>Pip es un sistema de gestión de paquetes utilizado en Python para instalar y administrar bibliotecas y paquetes de terceros que no están incluidos en la biblioteca estándar de Python.
                        <br></br><br></br>El nombre "pip" se deriva de la frase "Pip Installs Packages" (Pip instala paquetes) y se utiliza para instalar, actualizar y desinstalar paquetes Python y sus dependencias, si escribimos "pip --version" en la terminal nos mostrará la versión del administrador de paquetes.</p>
                      <img className="w-75 d-block mx-auto border-content" style={{ marginBottom: "7rem" }} alt="" src="../../img/class1/t5.webp"></img>
                    </div>
                  </div>
                </div>
                <div id="element9" className={`accordion-item mt-4 rounded-5 animated-left ${elementVisibility.element9 ? 'slide-left' : ''}`} style={{ background: colorPrimaryFlet, borderRadius: "40px" }} >
                  <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a8" aria-expanded="false" aria-controls="flush-collapseFive">
                    <h2 className="text-light">Configuración de entorno virtual y instalacion de flet</h2>
                  </button>
                  <div id="a8" className="accordion-collapse collapse" >
                    <div className="accordion-body text-light bg-dark ">
                      <h3 className="mt-4 mb-4 text-break mx-auto w-75">Crear una Carpeta para el Proyecto</h3>
                      <p className="mt-4 mb-4 text-break mx-auto w-75">Ingresa a "file/open folder..."(ingles) - "Archivo/Abrir carpeta"(Español).</p>
                      <img className="mx-auto d-block w-75 border-content" alt="" src="../../img/class1Flet/flet1.png"></img>
                      <p className="mt-4 mb-4 text-break mx-auto w-75">Ingresa a "Escritorio"(Español) - Desktop(Ingles).</p>
                      <img className="mx-auto d-block w-75 border-content" alt="" src="../../img/class1Flet/flet2.png"></img>
                      <p className="mt-4 mb-4 text-break mx-auto w-75">Haz click derecho dentro del escritorio y selecciona "Nuevo/carpeta" y crea una carpeta llamada "Curso_de_Flet", no separes las palabras con espacios porque tendrás problemas más adelante al querer instalar el entorno virtual.</p>
                      <img className="mx-auto d-block w-75 border-content" alt="" src="../../img/class1Flet/flet3.png"></img>
                      <p className="mt-4 mb-4 text-break mx-auto w-75">Haz doble click en la carpeta "Curso_de_Flet".</p>
                      <img className="mx-auto d-block w-75 border-content" alt="" src="../../img/class1Flet/flet4.png"></img>
                      <p className="mt-4 mb-4 text-break mx-auto w-75">Selecciona el botón "Seleccionar carpeta".</p>
                      <img className="mx-auto d-block w-75 border-content" alt="" src="../../img/class1Flet/flet5.png"></img>
                      <p className="mt-4 mb-4 text-break mx-auto w-75">Selecciona el primer logo que está cerca del nombre de la carpeta(les va aparecer cuando pasen el mouse por el nombre).</p>
                      <img className="mx-auto d-block w-75 border-content" alt="" src="../../img/class1Flet/flet6.png"></img>
                      <p className="mt-4 mb-4 text-break mx-auto w-75">Escribe el nombre del archivo(por lo general cuando es el primer archivo se nombra como "main") seguido del formato de archivo python(.py).</p>
                      <img className="mx-auto d-block w-75 border-content" alt="" src="../../img/class1Flet/flet7.png"></img>
                      <h3 className="mt-4 mb-4 text-break mx-auto w-75">Instalación y creación de entorno virtual</h3>
                      <p className="mt-4 mb-4 text-break mx-auto w-75">Seleccionar Terminal/New Terminal desde el lado superior izquierdo del menú en VSCode.</p>
                      <img className="mx-auto d-block w-75 border-content" alt="" src="../../img/class1Flet/env1.png"></img>
                      <p className="mt-4 mb-4 text-break mx-auto w-75">Escribe dentro de la terminal "pip install virtualenv" y presiona la tecla Enter para instalar el entorno virtual.</p>
                      <CopyButton code={class1FCode[0]} />
                      <img className="mx-auto d-block w-75 border-content" alt="" src="../../img/class1Flet/env2.png"></img>
                      <p className="mt-4 mb-4 text-break mx-auto w-75">Hay ocasiones en donde se te pida que actualices "pip" y te va a indicar como actualizarlo, escribe en la terminaal lo que se escribe de color verde y al presionar Enter se instalará la versión más actual de pip, luego de esto escribe en la terminal nuevamente "pip install virtualenv" para instalarlo.</p>
                      <CopyButton code={class1FCode[1]} />
                      <CopyButton code={class1FCode[0]} />
                      <img className="mx-auto d-block w-75 border-content" alt="" src="../../img/class1Flet/env3.png"></img>
                      <p className="mt-4 mb-4 text-break mx-auto w-75">Para crear un entorno Virtual debemos escribir en la terminal "python -m venv (nombre del entorno virtual)", el nombre del entorno virtual puede ser el que prefieras pero debe ser solamente una palabra o usar _ en vez de un espacio para separar las palabras.</p>
                      <p className="mt-4 mb-4 text-break mx-auto w-75">Hay veces que puede haber problemas con esa linea por temas de que tenemos instalado varias versiones de python, si esto te pasa, debemos escribir "C:\Users\(nombre de usuario)\AppData\Local\Programs\Python\Python(n° de version)\python.exe python -m venv (nombre del entorno virtual), el nombre del entorno virtual puede ser el que prefieras pero debe ser solamente una palabra o usar _ en vez de un espacio para separar las palabras y el numero de version es depende de que version instalaste, ej: si instalaste la version 3.13 deberias poner Python313(como en la imagen).</p>
                      <CopyButton code={class1FCode[2]} />
                      <CopyButton code={class1FCode[3]} />
                      <img className="mx-auto d-block w-75 border-content" alt="" src="../../img/class1Flet/env4.png"></img>
                      <p className="mt-4 mb-4 text-break mx-auto w-75">Ahora debes ingresar al entorno virtual, para esto debes escribir "(nombre del entorno virtual)\Scripts\activate", en este caso se llama "prueba" y al ingresar te debe aparecer en la siguiente linea (prueba), esto te indicará que estás dentro de un entorno virtual, esta linea debemos hacerlo siempre que queramos ingresar al entorno virtual</p>
                      <img className="mx-auto d-block w-75 border-content" alt="" src="../../img/class1Flet/env5.png"></img>
                      <h3 className="mt-4 mb-4 text-break mx-auto w-75">Guardar dependencias del entorno virtual</h3>
                      <p className="mt-4 mb-4 text-break mx-auto w-75">Hay veces que queramos utilizar este entorno virtual en otra computadora, pero esa computadora no va tener instalada las dependecias que tengamos en nuestra computadora, para no tener problemas con esto se utiliza un archivo llamado "requirements.txt" en donde se almacenan los nombres y versiones de todas las dependencias que estamos utilizando en nuestro entorno virtual.</p>
                      <p className="mt-4 mb-4 text-break mx-auto w-75">Para hacer esto debemos escribir en la terminal "pip freeze &gt requirements.txt" y se creará el archivo junto con las dependencias</p>
                      <img className="mx-auto d-block w-75 border-content" alt="" src="../../img/class1Flet/env6.png"></img>
                      <p className="mt-4 mb-4 text-break mx-auto w-75">Para instalar las dependencias de nuestro entorno virtual en otra computadora, escribiremos en la terminal "pip install -r requirements.txt"</p>
                      <img className="mx-auto d-block w-75 border-content" alt="" src="../../img/class1Flet/env7.png"></img>
                      <h3 className="mt-4 mb-4 text-break mx-auto w-75">Instalación de Flet</h3>
                      <p className="mt-4 mb-4 text-break mx-auto w-75">Dentro del entorno virtual debemos ahora si instalar flet, para esto debemos escribir "pip install flet", en el caso de que te diga que pip no está instalado escribe "python -m ensurepip --default-pip" y luego "pip install flet"</p>
                      <img className="mx-auto d-block w-75 border-content" alt="" src="../../img/class1Flet/envFlet1.png"></img>
                    </div>
                  </div>
                </div>
                <div id="element10" className={`accordion-item mt-4 rounded-5 animated-left ${elementVisibility.element10 ? 'slide-left' : ''}`} style={{ background: colorPrimaryFlet, borderRadius: "40px" }} >
                  <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a9" aria-expanded="false" aria-controls="flush-collapseThree">
                    <h2 className="text-light">Primeros pasos en Flet</h2>
                  </button>
                  <div id="a9" className="accordion-collapse collapse bg-dark" >
                    <div className="accordion-body text-light bg-dark ">
                    <p className="mt-4 mb-4 text-break mx-auto w-75">Antes de empezar a ver Flet, para poder entender algunos conceptos como variables, propiedades y funciones debemos repasar el contenido del curso de python.</p>
                    <p className="mt-4 mb-4 text-break mx-auto w-75">Puedes ir a la clase 1 de python desde acá --    <Link to="/classes/2KLc4SOyBBSsZ3MvrydE" target="_blank" className="text-info">Clase 2 Python - Variables</Link>.</p>
                    <p className="mt-4 mb-4 text-break mx-auto w-75">Puedes ir a la clase 4 de python desde acá --    <Link to="/classes/atVa7k6EyWDn7tZV7v1b" target="_blank" className="text-info">Clase 4 Python - Funciones y modulos</Link>.</p>
                       <h3 className="text-break mx-auto w-75">Importación de Flet</h3>
                      <p className="mt-4 mb-2 text-break mx-auto w-75">Una vez instalado Flet para poder utilizarlo tenemos que importar el módulo al archivo en donde vamos a utilizarlo, para eso vamos a poner "import flet as ft"</p>
                      <CopyButton code={class1FCode[4]} />
                      <img className="w-75 d-block mx-auto border-content" style={{ marginBottom: "7rem" }} alt="" src="../../img/class1Flet/fletp1.png"></img>
                      <h3 className="text-break mx-auto w-75">Mostrar mi primer pantalla</h3>
                      <p className="mt-4 mb-2 text-break mx-auto w-75">Para hacer nuestra primer pantalla vamos a tener que utilizar una función principal en donde contendrá:</p>
                      <ul className="intr-ul">
                        <li><p className="mt-4 mb-4 text-break mx-auto w-75"><span className="fw-bold">def main(...): </span> Define una función llamada main, que será el punto de entrada de la aplicación Flet.</p></li>
                        <li><p className="mt-4 mb-4 text-break mx-auto w-75"><span className="fw-bold">page: ft.Page</span> page es un parámetro que representa la página principal de la aplicación.</p><p className="mt-4 mb-4 text-break mx-auto w-75">ft.Page es el tipo de dato (una clase de Flet) que maneja la interfaz gráfica y contiene elementos como botones, textos, imágenes, etc.</p></li>
                      </ul>
                      <CopyButton code={class1FCode[5]} />
                      <img className="w-75 d-block mx-auto border-content" style={{ marginBottom: "7rem" }} alt="" src="../../img/class1Flet/fletp2.png"></img>
                      <h3 className="text-break mx-auto w-75">Titulo de aplicación</h3>
                      <p className="mt-4 mb-2 text-break mx-auto w-75">Para crear el título de mi aplicación debo utilizar el parametro "page" seguido de la propiedad "title" (page.title) y indicamos el nombre del titulo.</p>
                      <CopyButton code={class1FCode[6]} />
                      <img className="w-75 d-block mx-auto border-content" style={{ marginBottom: "7rem" }} alt="" src="../../img/class1Flet/fletp3.png"></img>
                      <h3 className="text-break mx-auto w-75">Añadir Texto en aplicación</h3>
                      <p className="mt-4 mb-2 text-break mx-auto w-75">Para añadir un elemento en nuestra aplicación debemos utilizar "page.add()" y dentro del paréntesis escribir "ft.Text("texto que queramos agregar")</p>
                      <CopyButton code={class1FCode[7]} />
                      <img className="w-75 d-block mx-auto border-content" style={{ marginBottom: "7rem" }} alt="" src="../../img/class1Flet/fletp4.png"></img>
                      <h3 className=" text-center">Ejecución de aplicacion Flet </h3>
                      <p className="mt-4 mb-2 text-break mx-auto w-75">Para ejecutar nuestra aplicación debemos ejecutar la función main, para hacer esto debemos escribir por fuera de la función "ft.app(target=main)"</p>
                      <CopyButton code={class1FCode[8]} />
                      <img className="w-75 d-block mx-auto border-content" style={{ marginBottom: "7rem" }} alt="" src="../../img/class1Flet/fletp5.png"></img>
                      <p className="mt-4 mb-2 text-break mx-auto w-75">Esto dependerá si VSCode tiene autoguardado o no pero si te aparece un circulo blanco en la parte superior de tu archivo quiere decir que no está guardado, para guardarlo debemos tocar en el teclado CTRL + S.</p>
                      <p className="mt-4 mb-2 text-break mx-auto w-75">Para saber si se guardaron los cambios en tu archivo no debería aparecer ese circulo</p>
                      <img className="w-75 d-block mx-auto border-content" style={{ marginBottom: "7rem" }} alt="" src="../../img/class1Flet/fletp6.png"></img>
                      <p className="mt-4 mb-2 text-break mx-auto w-75">Para ejecutar el archivo debemos escribir en la terminal "python" seguido del nombre del archivo junto con su tipo de formato (.py), en este caso es "python main.py"</p>
                      <CopyButton code={class1FCode[9]} />
                      <img className="w-75 d-block mx-auto border-content" style={{ marginBottom: "7rem" }} alt="" src="../../img/class1Flet/fletp7.png"></img>
                      <h3 className="text-break mx-auto w-75">Ejecución de aplicacion Flet en Navegador </h3>
                      <p className="mt-4 mb-2 text-break mx-auto w-75">Para ejecutar el archivo debemos escribir en la terminal "flet run --web" seguido del nombre del archivo junto con su tipo de formato (.py), en este caso es "flet run --web main.py"</p>
                      <CopyButton code={class1FCode[10]} />
                      <img className="w-75 d-block mx-auto border-content" style={{ marginBottom: "7rem" }} alt="" src="../../img/class1Flet/fletp8.png"></img>
                    </div>
                  </div>
                </div>
                <div id="element14" className={`accordion-item mt-4 rounded-5 animated-left ${elementVisibility.element14 ? 'slide-left' : ''}`} style={{ background: colorPrimaryFlet, borderRadius: "40px" }} >
                  <Link to="/fletClassFile/class1.py"
                    target={"_blank"}
                    download={"class1Flet.py"}>
                    <button className="accordion-button collapsed bg-transparent" type="button">
                      <h2 className="text-light">Descarga el archivo de la clase 1</h2>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </> :
        <section id="hero" style={{ background: colorPrimaryFlet }} >
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
                <div >
                  <h1>Clase 1</h1>
                  <h2>Que es python y flet?.</h2>
                  <h2>Instalación y configuración del entorno..</h2>
                  <h2>Primeros pasos con Flet: estructura de un proyecto..</h2>
                  <div className="text-center text-lg-start">
                    <a href="#clase1" className="btn-get-started scrollto" style={{ backgroundColor: colorSecondaryPythonKids }}>Contenido de la clase 1</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 order-1 order-lg-2 hero-img">
                <img src="../../img/flet.png" className="img-fluid animated vh-60" alt="" />
              </div>
            </div>
          </div>
          <svg id="clase1" className="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28 " preserveAspectRatio="none">
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
    }
    </>
  )
}

export default FletClass1