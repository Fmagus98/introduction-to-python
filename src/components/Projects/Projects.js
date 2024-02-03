import React from 'react'
import { useLocation, Link } from 'react-router-dom';
import { colorPrimaryPython } from '../../colors'
import useScrollAnimation from '../../useScrollAnimation'

const Projects = () => {

    const elementVisibility = useScrollAnimation()
    const location = useLocation()
    const title = location.pathname.includes("micropython") ? "micropython" : "python"

    return (
        <>
            <section id="hero" style={{ background: location.pathname.includes("micropython") ? "#B34229" : colorPrimaryPython }} >
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
                            <div>
                                <h1>Proyectos</h1>
                                <h2>En este apartado encontrarás projectos desarrollados por alumnos de forma individual, en equipo o junto al profesor.</h2>
                                <h2>Actualmente no existen proyectos finalizados.</h2>
                                <div className="text-center text-lg-start">
                                    <a href="#clase1" className="btn-get-started scrollto">Ver Proyectos</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 order-1 order-lg-2 hero-img" >
                            <img src={`../img/${title}.png`} className="img-fluid animated vh-60" alt="" />
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
            <section id="faq" className="faq section-bg">
                <div className="container">
                    <div id="element1" className={`section-title animated-down ${elementVisibility.element1 ? 'slide-down' : ''}`} >
                        <h2>Proyectos</h2>
                        <p>Contenido</p>
                    </div>
                    <div className="accordion accordion-flush w-100 mx-auto rounded-5" id="accordionFlushExample">
                        <div id="element2" className={`rounded-5 animated-left ${elementVisibility.element2 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }} >
                            <button className="accordion-button collapsed bg-transparent text-light" type="button" data-bs-toggle="collapse" data-bs-target="#a1" aria-expanded="false" aria-controls="flush-collapseOne">
                                <h2>Resumidor de texto</h2>
                            </button>
                            <div id="a1" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                                    <div className="accordion-body text-light">
                                        <h3 className="text-break mx-auto w-75 mt-4">Descripción</h3>
                                        <p className="text break mx-auto mt-4 w-75">El Resumidor de Texto implementado en Python es una aplicación que utiliza la biblioteca Natural Language Toolkit (NLTK) para generar resúmenes concisos a partir de un texto de entrada proporcionado por el usuario. El código se encarga de procesar el texto, identificar oraciones clave y producir un resumen significativo que destaque la información más relevante.
                                        </p>
                                        <h3 className="text-break mx-auto w-75 mt-4">Pasos Clave del proyecto</h3>
                                        <ul>
                                            <ol>
                                                <p className="text-break mx-auto w-75"><span className="fw-bold">Entrada de Texto del Usuario: </span> El usuario ingresa el texto que desea resumir mediante la consola.</p>
                                            </ol>
                                            <ol>
                                                <p className="text-break mx-auto w-75"><span className="fw-bold">Tokenización de Texto:</span> El texto ingresado se divide en oraciones y palabras utilizando las funciones de tokenización de NLTK.</p>
                                            </ol>
                                            <ol>
                                                <p className="text-break mx-auto w-75"><span className="fw-bold">Eliminación de Palabras Comunes:</span> Se filtran las palabras comunes y sin sentido (stopwords) en español para mejorar la calidad del resumen.</p>
                                            </ol>
                                            <ol>
                                                <p className="text-break mx-auto w-75"><span className="fw-bold">Cálculo de Frecuencia:</span> Se calcula la frecuencia de cada palabra en el texto procesado para identificar las palabras más relevantes.</p>
                                            </ol>
                                            <ol>
                                                <p className="text-break mx-auto w-75"><span className="fw-bold">Selección de Oraciones Importantes:</span> Utilizando un enfoque basado en frecuencia, se seleccionan las oraciones más importantes que contienen las palabras clave identificadas.</p>
                                            </ol>
                                            <ol>
                                                <p className="text-break mx-auto w-75"><span className="fw-bold">Generación del Resumen:</span> El resumen final, compuesto por las oraciones más significativas, se imprime en la consola.</p>
                                            </ol>
                                        </ul>
                                        <h3 className="text-break mx-auto w-75 mt-4">Instalación</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="element3" className={`mt-4 rounded-5 animated-left ${elementVisibility.element3 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
                            <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a2" aria-expanded="false" aria-controls="flush-collapseThree">
                                <h2 className="text-light">Clases y objetos </h2>
                            </button>
                            <div id="a2" className="accordion-collapse collapse bg-dark" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                                    <p className="text break mx-auto mt-4 w-75">Clases y objetos: Una clase es una estructura que define las propiedades y comportamientos comunes a un conjunto de objetos. Para crear un objeto, necesitas instanciar una clase.</p>
                                    <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/class8/class.webp"></img>
                                    <p className="text break mx-auto w-75" style={{ marginBottom: "7rem" }}>En este ejemplo, se define la clase Perro con un atributo nombre y un método ladrar(). Luego, se crea un objeto mi_perro a partir de la clase Perro y se invoca el método ladrar() del objeto.</p>
                                </div>
                            </div>
                        </div>
                        <div id="element4" className={`mt-4 rounded-5 animated-left ${elementVisibility.element4 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
                            <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a3" aria-expanded="false" aria-controls="flush-collapseThree">
                                <h2 className="text-light">Atributos</h2>
                            </button>
                            <div id="a3" className="accordion-collapse collapse bg-dark" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                                    <p className="text break mx-auto mt-4 w-75">
                                        Los atributos son variables asociadas a un objeto. Pueden ser variables de instancia (asociadas a cada objeto individualmente) o variables de clase (compartidas por todos los objetos de la clase). Puedes acceder a los atributos utilizando la notación de punto. Por ejemplo:
                                    </p>
                                    <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/class8/attributes.webp"></img>
                                    <p className="text break mx-auto w-75" style={{ marginBottom: "7rem" }}>En este ejemplo, la clase Persona tiene atributos nombre y edad. Estos atributos se asignan cuando se crea un objeto y se acceden utilizando la notación de punto.</p>
                                </div>
                            </div>
                        </div>
                        <div id="element5" className={`mt-4 rounded-5 animated-left ${elementVisibility.element5 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
                            <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a4" aria-expanded="false" aria-controls="flush-collapseFour">
                                <h2 className="text-light">Métodos</h2>
                            </button>
                            <div id="a4" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                                    <p className="text break mx-auto w-75 mt-4">
                                        Los métodos son funciones asociadas a un objeto. Pueden acceder y manipular los atributos del objeto. Los métodos pueden ser definidos dentro de la clase y se invocan en los objetos utilizando la notación de punto. Por ejemplo:</p>
                                    <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/class8/methods.webp"></img>
                                    <p className="text break mx-auto w-75">En este ejemplo, la clase Rectangulo tiene un método area() que calcula el área del rectángulo basado en los atributos ancho y altura. El método se invoca en el objeto mi_rectangulo.</p>
                                    <p className="text break mx-auto w-75" style={{ marginBottom: "7rem" }}>La programación orientada a objetos en Python ofrece una forma estructurada y modular de diseñar y desarrollar programas. Permite la reutilización de código, la abstracción de conceptos y la organización de la lógica en entidades coherentes. Esta es solo una introducción básica, pero la POO en Python tiene muchas más características y conceptos avanzados que puedes explorar para construir aplicaciones más complejas y eficientes.</p>
                                </div>
                            </div>
                        </div>
                        <div id="element6" className={`mt-4 rounded-5 animated-left ${elementVisibility.element6 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
                            <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a5" aria-expanded="false" aria-controls="flush-collapseFive">
                                <h2 className="text-light">Herencia</h2>
                            </button>
                            <div id="a5" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                                    <p className="text break mx-auto w-75 mt-4">La herencia en Python es un concepto importante de la programación orientada a objetos (POO) que permite que una clase adquiera propiedades (atributos y métodos) de otra clase. La clase que hereda se denomina "clase hija" o "subclase", y la clase de la cual hereda se llama "clase padre" o "superclase". Esto permite la reutilización de código y la organización jerárquica de las clases.
                                        En Python, para definir una clase que herede de otra, se utiliza la siguiente sintaxis:</p>
                                    <img className="w-75 d-block mx-auto border-content" style={{ marginBottom: "7rem" }} alt="" src="../img/class8/heredity.webp"></img>
                                </div>
                            </div>
                        </div>
                        <div id="element7" className={`mt-4 rounded-5 animated-left ${elementVisibility.element7 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
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
    )
}

export default Projects
