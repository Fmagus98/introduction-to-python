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
                                    <h3 className="text-break mx-auto w-75 mt-4">Descripción</h3>
                                    <p className="text break mx-auto mt-4 w-75">El Resumidor de Texto implementado en Python es una aplicación que utiliza la biblioteca Natural Language Toolkit (NLTK) para generar resúmenes concisos a partir de un texto de entrada proporcionado por el usuario. El código se encarga de procesar el texto, identificar oraciones clave y producir un resumen significativo que destaque la información más relevante.
                                    </p>
                                    <h3 className="text-break mx-auto w-75 mt-4">Pasos Clave del proyecto</h3>
                                    <ul className="w-75 mx-auto">
                                        <li><p><span className="fw-bold">Entrada de Texto del Usuario: </span> El usuario ingresa el texto que desea resumir mediante la consola.</p></li>
                                        <li><p><span className="fw-bold">Tokenización de Texto:</span> El texto ingresado se divide en oraciones y palabras utilizando las funciones de tokenización de NLTK.</p></li>
                                        <li><p><span className="fw-bold">Eliminación de Palabras Comunes:</span> Se filtran las palabras comunes y sin sentido (stopwords) en español para mejorar la calidad del resumen.</p></li>
                                        <li><p><span className="fw-bold">Cálculo de Frecuencia:</span> Se calcula la frecuencia de cada palabra en el texto procesado para identificar las palabras más relevantes.</p></li>
                                        <li><p><span className="fw-bold">Generación del Resumen:</span> El resumen final, compuesto por las oraciones más significativas, se imprime en la consola.</p></li>
                                    </ul>
                                    <h3 className="text-break mx-auto w-75 mt-4">Librerias</h3>
                                    <ul className="w-75 mx-auto">
                                        <li><p>Nltk.</p></li>
                                    </ul>
                                    <h3 className="text-break mx-auto w-75 mt-4">Instalación</h3>
                                    <p className="text-break mx-auto w-75"><span className="fw-bold">1_  </span> Descargá el archivo index.py desde este link -- <Link to="https://drive.google.com/drive/u/0/folders/1qejhNYRseHUqMBhQEwiQY9TLcel7QqEq" target='_blank' className="text-primary">Resumidor de texto</Link>.</p>
                                    <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/projects/text_summarizer.webp"></img>
                                    <p className="text-break mx-auto w-75"><span className="fw-bold">2_ </span> Después de abrir el archivo desde Visual Studio Code, abre la terminal desde "Terminal/New terminal.</p>
                                    <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/projects/text_summarizer2.webp"></img>
                                    <p className="text-break mx-auto w-75"><span className="fw-bold">3_ </span> Dentro de la terminal escribe: python index.py, en caso de no funcionar escribe: pip install nltk y luego python index.py</p>
                                    <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/projects/text_summarizer3.webp"></img>
                                </div>
                            </div>
                        </div>
                        <div id="element3" className={`mt-4 rounded-5 animated-left ${elementVisibility.element3 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
                            <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a2" aria-expanded="false" aria-controls="flush-collapseThree">
                                <h2 className="text-light">Analizador de texto</h2>
                            </button>
                            <div id="a2" className="accordion-collapse collapse bg-dark" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                                    <h3 className="text-break mx-auto w-75 mt-4">Descripción</h3>
                                    <p className="text break mx-auto mt-4 w-75">Este código es un programa simple que realiza algunas operaciones de análisis de texto. <br></br>Define varias funciones para contar palabras, contar frases, contar la frecuencia de una palabra específica y calcular la frecuencia de todas las palabras en un texto dado.</p>
                                    <h3 className="text-break mx-auto w-75 mt-4">Pasos Clave del proyecto - Funciones</h3>
                                    <ul className="w-75 mx-auto">
                                        <li><p><span className="fw-bold">Contar_palabras(texto): </span> Divide el texto en palabras usando el método split() y retorna la cantidad de palabras en el texto.</p></li>
                                        <li><p><span className="fw-bold">Contar_frases(texto):</span> Divide el texto en frases utilizando el punto ('.') como delimitador y retorna la cantidad de frases en el texto.</p></li>
                                        <li><p><span className="fw-bold">contar_palabra_especifica(texto, palabra):</span> Elimina la puntuación del texto usando str.translate, divide el texto en palabras, itera sobre las palabras para contar cuántas veces aparece una palabra específica (sin distinción entre mayúsculas y minúsculas) y retorna el número de veces que aparece la palabra especificada.</p></li>
                                        <li><p><span className="fw-bold">Contar_frecuencia_palabras(texto):</span> Elimina la puntuación del texto, Divide el texto en palabras, Crea un diccionario (frecuencia) para almacenar la frecuencia de cada palabra, Itera sobre las palabras para actualizar la frecuencia de cada palabra en el diccionario y retorna el diccionario de frecuencia de palabras.</p></li>
                                    </ul>
                                    <h3 className="text-break mx-auto w-75 mt-4">Librerias</h3>
                                    <ul className="w-75 mx-auto">
                                        <li><p>String.</p></li>
                                    </ul>
                                    <h3 className="text-break mx-auto w-75 mt-4">Ejemplo de uso</h3>
                                    <ul className="w-75 mx-auto">
                                        <li><p>Se solicita al usuario que ingrese un texto.</p></li>
                                        <li><p>Se realizan varias llamadas a las funciones definidas para imprimir estadísticas sobre el texto, como la cantidad de palabras, frases, la frecuencia de una palabra específica y la frecuencia de todas las palabras en el texto.</p></li>
                                    </ul>
                                    <h3 className="text-break mx-auto w-75 mt-4">Instalación</h3>
                                    <p className="text-break mx-auto w-75"><span className="fw-bold">1_  </span> Descargá el archivo index.py desde este link -- <Link to="https://drive.google.com/drive/folders/1y4bX9PQ5AlChh48ggrPF6EJul4SwkfCI?usp=drive_link" target='_blank' className="text-primary">Resumidor de texto</Link>.</p>
                                    <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/projects/text_analyzer.webp"></img>
                                    <p className="text-break mx-auto w-75"><span className="fw-bold">2_ </span> Después de abrir el archivo desde Visual Studio Code, abre la terminal desde "Terminal/New terminal.</p>
                                    <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/projects/text_analyzer2.webp"></img>
                                    <p className="text-break mx-auto w-75"><span className="fw-bold">3_ </span> Dentro de la terminal escribe: python index.py</p>
                                    <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/projects/text_analyzer3.webp"></img>
                                </div>
                            </div>
                        </div>
                        <div id="element4" className={`mt-4 rounded-5 animated-left ${elementVisibility.element4 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
                            <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a3" aria-expanded="false" aria-controls="flush-collapseThree">
                                <h2 className="text-light">Conversor de imágenes</h2>
                            </button>
                            <div id="a3" className="accordion-collapse collapse bg-dark" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                                    <h3 className="text-break mx-auto w-75 mt-4">Descripción</h3>
                                    <p className="text break mx-auto mt-4 w-75">Este programa utiliza la biblioteca PIL (Python Imaging Library) para convertir imágenes JPG,JPEG y PNG a un formato WebP.</p>
                                    <h3 className="text-break mx-auto w-75 mt-4">Pasos Clave del proyecto - Funciones</h3>
                                    <ul className="w-75 mx-auto">
                                        <li><p> Recorrer el directorio especificado.</p></li>
                                        <li><p> Verificar si es un archivo de imagen.</p></li>
                                        <li><p> Si es una imagen, convertirla al formato WebP.</p></li>
                                        <li><p> Guardar la imagen convertida en el mismo directorio con la extensión ".webp".</p></li>
                                    </ul>
                                    <h3 className="text-break mx-auto w-75 mt-4">Librerias</h3>
                                    <ul className="w-75 mx-auto">
                                        <li><p>Pil</p></li>
                                    </ul>
                                    <h3 className="text-break mx-auto w-75 mt-4">Instalación</h3>
                                    <p className="text-break mx-auto w-75"><span className="fw-bold">1_  </span> Descargá el archivo index.py desde este link -- <Link to="https://drive.google.com/drive/folders/1N7mxh_oHSv__DowSaaJa-4-_CvB8Nitf?usp=drive_link" target='_blank' className="text-primary">Conversor de imágenes</Link>.</p>
                                    <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/projects/img_converter.webp"></img>
                                    <p className="text-break mx-auto w-75"><span className="fw-bold">2_ </span> Después de abrir el archivo desde Visual Studio Code, abre la terminal desde "Terminal/New terminal.</p>
                                    <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/projects/img_converter2.webp"></img>
                                    <p className="text-break mx-auto w-75"><span className="fw-bold">3_ </span> Dentro de la terminal escribe: python index.py</p>
                                    <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/projects/img_converter3.webp"></img>
                                    <p className="text-break mx-auto w-75"><span className="fw-bold">4_ </span> Dentro de la terminal escribe: python index.py</p>
                                    <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/projects/img_converter4.webp"></img>
                                    <p className="text-break mx-auto w-75"><span className="fw-bold">5_ </span> Dentro de la terminal escribe: python index.py</p>
                                    <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/projects/img_converter5.webp"></img>
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
                                <h2 className="text-light">Buscador de celulares - Mercadolibre (web scraping)</h2>
                            </button>
                            <div id="a5" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                                    <p className="text break mx-auto w-75 mt-4">La herencia en Python es un concepto importante de la programación orientada a objetos (POO) que permite que una clase adquiera propiedades (atributos y métodos) de otra clase. La clase que hereda se denomina "clase hija" o "subclase", y la clase de la cual hereda se llama "clase padre" o "superclase". Esto permite la reutilización de código y la organización jerárquica de las clases.
                                        En Python, para definir una clase que herede de otra, se utiliza la siguiente sintaxis:</p>
                                    <img className="w-75 d-block mx-auto border-content" style={{ marginBottom: "7rem" }} alt="" src="../img/class8/heredity.webp"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects
