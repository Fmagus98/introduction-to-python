import React from 'react'
import { useLocation, Link } from 'react-router-dom';
import { colorPrimaryPython} from '../../colors'
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
                                 <a href="#projects" className={`btn-get-started scrollto python-theme`}>Ver proyectos</a></div>
                            </div>
                        </div>
                        <div className="col-lg-4 order-1 order-lg-2 hero-img" >
                            <img src={`../img/${title}.png`} className="img-fluid animated vh-60" alt="" />
                        </div>
                    </div>
                </div>
                <svg className="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28 " preserveAspectRatio="none">
                    <defs>
                        <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                    </defs>
                    <g className="wave1">
                        <use xlinkHref="#wave-path" x="50" y="3" fill="rgba(255,255,255, .1)" />
                    </g>
                    <g id="projects" className="wave2">
                        <use xlinkHref="#wave-path" x="50" y="0" fill="rgba(255,255,255, .2)" />
                    </g>
                    <g className="wave3">
                        <use xlinkHref="#wave-path" x="50" y="9" fill="#fff" />
                    </g>
                </svg>
            </section>
            <section className="section-bg">
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
                                <div className="accordion-body text-light bg-dark ">
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
                                <div className="accordion-body text-light bg-dark ">
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
                                <div className="accordion-body text-light bg-dark ">
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
                                    <p className="text-break mx-auto w-75"><span className="fw-bold">3_ </span> Dentro de la terminal escribe: pip install pillow, esto instalará la libreria Pil.</p>
                                    <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/projects/img_converter3.webp"></img>
                                    <p className="text-break mx-auto w-75"><span className="fw-bold">4_ </span> En caso que te indique para actualizar el instalador de paquetes pip, dentro de la terminal escribe: python.exe m pip install --upgrade pip</p>
                                    <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/projects/img_converter4.webp"></img>
                                    <p className="text-break mx-auto w-75"><span className="fw-bold">5_ </span> Dentro de la terminal escribe: python index.py, esto ejecutará el programa. Recuerda que debes crear una carpeta llamada "img" en tu directoria, allí vas a dejar todas las imágenes que quieras convertir</p>
                                    <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/projects/img_converter5.webp"></img>
                                </div>
                            </div>
                        </div>
                        <div id="element5" className={`mt-4 rounded-5 animated-left ${elementVisibility.element5 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
                            <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a4" aria-expanded="false" aria-controls="flush-collapseFour">
                                <h2 className="text-light">Buscador de celulares - Mercadolibre (web scraping)</h2>
                            </button>
                            <div id="a4" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body text-light bg-dark ">
                                    <h3 className="text-break mx-auto w-75 mt-4">Descripción</h3>
                                    <p className="text break mx-auto mt-4 w-75">Este programa permite al usuario buscar productos en MercadoLibre ingresando el nombre del producto y seleccionando un criterio de filtrado de precios (de menor a mayor, de mayor a menor, o sin filtrar). Luego, muestra los resultados de la búsqueda ordenados según el criterio elegido.</p>
                                    <h3 className="text-break mx-auto w-75 mt-4">Pasos Clave del proyecto</h3>
                                    <ul className="w-75 mx-auto">
                                        <li><p><span className="fw-bold">Solicitud de entrada del usuario: </span> El usuario proporciona el nombre del producto que desea buscar y selecciona un criterio de filtrado de precios.</p></li>
                                        <li><p><span className="fw-bold">Construcción de la URL de búsqueda:</span> Se construye la URL de búsqueda utilizando el nombre del producto y el criterio de filtrado seleccionado.</p></li>
                                        <li><p><span className="fw-bold">Realización de la solicitud GET:</span> Se realiza una solicitud GET a la URL de búsqueda utilizando la biblioteca Requests.</p></li>
                                        <li><p><span className="fw-bold">Análisis del contenido HTML:</span> Se analiza el contenido HTML de la página utilizando BeautifulSoup.</p></li>
                                        <li><p><span className="fw-bold">Extracción de información:</span> Se extraen los nombres y precios de los productos de los elementos HTML analizados.</p></li>
                                        <li><p><span className="fw-bold">Ordenamiento de los resultados:</span> Los resultados se ordenan según el criterio seleccionado por el usuario.</p></li>
                                        <li><p><span className="fw-bold">Impresión de los resultados:</span> Se imprimen los nombres, precios y enlaces de los productos encontrados.</p></li>
                                    </ul>
                                    <h3 className="text-break mx-auto w-75 mt-4">Librerias</h3>
                                    <ul className="w-75 mx-auto">
                                        <li><p><span className="fw-bold">Requests:</span> Para realizar solicitudes HTTP.</p></li>
                                        <li><p><span className="fw-bold">BeautifulSoup:</span> Para analizar el contenido HTML de la página web y extraer información de ella.</p></li>
                                    </ul>
                                    <h3 className="text-break mx-auto w-75 mt-4">Instalación</h3>
                                    <p className="text-break mx-auto w-75"><span className="fw-bold">1_  </span> Descargá el archivo index.py desde este link -- <Link to="https://drive.google.com/drive/u/0/folders/1SHu1PgjdhmdTZUvsf2U0FF9yF9-yEZg6" target='_blank' className="text-primary">Web scraping</Link>.</p>
                                    <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/projects/web_scraping.webp"></img>
                                    <p className="text-break mx-auto w-75"><span className="fw-bold">2_ </span> Después de abrir el archivo desde Visual Studio Code, abre la terminal desde "Terminal/New terminal.</p>
                                    <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/projects/web_scraping2.webp"></img>
                                    <p className="text-break mx-auto w-75"><span className="fw-bold">3_ </span> Dentro de la terminal escribe: pip install request, esto instalará la libreria request.</p>
                                    <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/projects/web_scraping3.webp"></img>
                                    <p className="text-break mx-auto w-75"><span className="fw-bold">4_ </span> Luego de instalar request, escribe en la terminal: pip install beautifulsoup, esto instalará la libreria beautifulsoup</p>
                                    <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/projects/web_scraping4.webp"></img>
                                    <p className="text-break mx-auto w-75"><span className="fw-bold">5_ </span> Dentro de la terminal escribe: python index.py, esto ejecutará el programa.</p>
                                    <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/projects/web_scraping5.webp"></img>
                                    <h3 className="text-break mx-auto w-75 mt-4">Ejemplo de uso</h3>
                                    <ul className="w-75 mx-auto">
                                        <li><p>Escribe el nombre del producto que quieras buscar.</p></li>
                                        <li><p>Escribe un número de las opciones para ordenar los precios del producto.</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id="element6" className={`mt-4 rounded-5 animated-left ${elementVisibility.element6 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
                            <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a5" aria-expanded="false" aria-controls="flush-collapseFive">
                                <h2 className="text-light">Detección de dedos</h2>
                            </button>
                            <div id="a5" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body text-light bg-dark ">
                                    <h3 className="text-break mx-auto w-75 mt-4">Descripción</h3>
                                    <p className="text break mx-auto mt-4 w-75">Este programa reconoce y cuenta los dedos de una mano en tiempo real, se utilza la libreria mediapipe y openCv.</p>
                                    <h3 className="text-break mx-auto w-75 mt-4">Pasos Clave del proyecto</h3>
                                    <ul className="w-75 mx-auto">
                                        <li><p><span className="fw-bold">Cálculo de distancias de dedos: </span> la función palm_centroid calcula el centroide de la palma de la mano.</p></li>
                                        <li><p><span className="fw-bold">Captura de video: </span> Se utiliza la función cv2.VideoCapture().</p></li>
                                        <li><p><span className="fw-bold">Conteo de dedos: </span> Contar y visualizar los dedos levantados en el frame.</p></li>
                                        <li><p><span className="fw-bold">Procesar cada fotograma del video: </span> Se procesa cada fotograma del video para detectar la posición de la mano y realizar acciones en función de los gestos detectados.</p></li>
                                        <li><p><span className="fw-bold">Área de interacción: </span> Se dibuja un área de interacción en la pantalla del video.</p></li>
                                        <li><p><span className="fw-bold">Realizar acciones del mouse: </span> Se mueve el cursor del mouse y se simulan clics y desplazamientos de la rueda del mouse utilizando PyAutoGUI.</p></li>
                                    </ul>
                                    <h3 className="text-break mx-auto w-75 mt-4">Librerias</h3>
                                    <ul className="w-75 mx-auto">
                                        <li><p><span className="fw-bold">OpenCV (cv2):</span> Para la captura de video, procesamiento de imágenes y visualización.</p></li>
                                        <li><p><span className="fw-bold">MediaPipe (mediapipe):</span> Para la detección de manos y el seguimiento de puntos de referencia en la mano.</p></li>
                                        <li><p><span className="fw-bold">NumPy (np):</span> Para realizar operaciones numéricas, como cálculos de distancia.</p></li>
                                        <li><p><span className="fw-bold">math:</span> Para realizar operaciones matemáticas, como el cálculo de ángulos.</p></li>
                                    </ul>
                                    <h3 className="text-break mx-auto w-75 mt-4">Instalación</h3>
                                    <p className="text-break mx-auto w-75"><span className="fw-bold">1_  </span> Descargá la carpeta "Detección de dedos" desde este link -- <Link to="https://drive.google.com/drive/u/0/folders/1_bCxbxQRA9Nq2q3u-LGSrdW2NOavmCOg" target='_blank' className="text-primary">Detección de dedos</Link>.</p>
                                    <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/projects/fingerscan.webp"></img>
                                    <p className="text-break mx-auto w-75"><span className="fw-bold">2_ </span> Después de abrir el archivo desde Visual Studio Code, abre la terminal desde "Terminal/New terminal.</p>
                                    <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/projects/fingerscan2.webp"></img>
                                    <p className="text-break mx-auto w-75"><span className="fw-bold">3_ </span> Dentro de la terminal escribe: pip install virtualenv, esto instalará la libreria virtualenv, es la encargada de realizar el entorno virtual.</p>
                                    <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/projects/fingerscan3.webp"></img>
                                    <p className="text-break mx-auto w-75"><span className="fw-bold">4_ </span> Luego de instalar el entorno virtual, escribe en la terminal: fingerScan\Scripts\activate, esto hará que el entorno virtual este activo.</p>
                                    <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/projects/fingerscan4.webp"></img>
                                    <p className="text-break mx-auto w-75"><span className="fw-bold">5_ </span> Dentro de la terminal escribe: python scan.py, esto ejecutará el programa. En caso de no ejecutarse, debes instalar la version de python 3.8.3.0 y realizar de nuevo de proceso.</p>
                                    <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/projects/fingerscan5.webp"></img>
                                </div>
                            </div>
                        </div>
                        <div id="element7" className={`mt-4 rounded-5 animated-left ${elementVisibility.element6 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
                            <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a6" aria-expanded="false" aria-controls="flush-collapseFive">
                                <h2 className="text-light">Virtual mouse</h2>
                            </button>
                            <div id="a6" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body text-light bg-dark ">
                                    <h3 className="text-break mx-auto w-75 mt-4">Descripción</h3>
                                    <p className="text break mx-auto mt-4 w-75">Este programa utiliza la biblioteca OpenCV (cv2), MediaPipe (mediapipe), NumPy (np), PyAutoGUI (pyautogui) y time para detectar la posición de la mano y simular movimientos del mouse en función de los gestos de la mano detectados.</p>
                                    <h3 className="text-break mx-auto w-75 mt-4">Pasos Clave del proyecto</h3>
                                    <ul className="w-75 mx-auto">
                                        <li><p><span className="fw-bold">Ejecución del entorno virtual: </span> Este entorno vitual contiene la versión de python 3.8 y las librerias necesarias para ejecutarlo(carpeta "virtualmouse").</p></li>
                                        <li><p><span className="fw-bold">Detección de manos: </span> Se configura el modelo de detección de manos utilizando la clase Hands de MediaPipe.</p></li>
                                        <li><p><span className="fw-bold">Capturar el video de la cámara: </span> Se captura el video de la cámara utilizando OpenCV.</p></li>
                                        <li><p><span className="fw-bold">Procesar cada fotograma del video: </span> Se procesa cada fotograma del video para detectar la posición de la mano y realizar acciones en función de los gestos detectados.</p></li>
                                        <li><p><span className="fw-bold">Área de interacción: </span> Se dibuja un área de interacción en la pantalla del video.</p></li>
                                        <li><p><span className="fw-bold">Realizar acciones del mouse: </span> Se mueve el cursor del mouse y se simulan clics y desplazamientos de la rueda del mouse utilizando PyAutoGUI.</p></li>
                                    </ul>
                                    <h3 className="text-break mx-auto w-75 mt-4">Librerias</h3>
                                    <ul className="w-75 mx-auto">
                                        <li><p><span className="fw-bold">OpenCV (cv2):</span> Para la captura de video, procesamiento de imágenes y visualización.</p></li>
                                        <li><p><span className="fw-bold">MediaPipe (mediapipe):</span> Para la detección de manos y el seguimiento de puntos de referencia en la mano.</p></li>
                                        <li><p><span className="fw-bold">NumPy (np):</span> Para realizar operaciones numéricas, como cálculos de distancia.</p></li>
                                        <li><p><span className="fw-bold">PyAutoGUI (pyautogui):</span> Para controlar el cursor del mouse y simular acciones del mouse, como clics y desplazamientos de la rueda del mouse.</p></li>
                                        <li><p><span className="fw-bold">Time:</span> Para realizar pausas o esperas en el script.</p></li>
                                    </ul>
                                    <h3 className="text-break mx-auto w-75 mt-4">Instalación</h3>
                                    <p className="text-break mx-auto w-75"><span className="fw-bold">1_  </span> Descargá la carpeta "mouse" desde este link -- <Link to="https://drive.google.com/drive/u/0/folders/1q-lgvOBQV-xjJQ_tX2uzgnIP2BaJF1MB" target='_blank' className="text-primary">Virtual Mouse</Link>.</p>
                                    <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/projects/virtualmouse.webp"></img>
                                    <p className="text-break mx-auto w-75"><span className="fw-bold">2_ </span> Después de abrir el archivo desde Visual Studio Code, abre la terminal desde "Terminal/New terminal.</p>
                                    <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/projects/virtualmouse2.webp"></img>
                                    <p className="text-break mx-auto w-75"><span className="fw-bold">3_ </span> Dentro de la terminal escribe: pip install virtualenv, esto instalará la libreria virtualenv, es la encargada de realizar el entorno virtual.</p>
                                    <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/projects/virtualmouse3.webp"></img>
                                    <p className="text-break mx-auto w-75"><span className="fw-bold">4_ </span> Luego de instalar el entorno virtual, escribe en la terminal: virtualmouse\Scripts\activate, esto hará que el entorno virtual este activo.</p>
                                    <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/projects/virtualmouse4.webp"></img>
                                    <p className="text-break mx-auto w-75"><span className="fw-bold">5_ </span> Dentro de la terminal escribe: python mouse_control_game.py, esto ejecutará el programa. En caso de no ejecutarse, debes instalar la version de python 3.8.3.0 y realizar de nuevo de proceso.</p>
                                    <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/projects/virtualmouse5.webp"></img>
                                    <h3 className="text-break mx-auto w-75 mt-4">Instrucciones</h3>
                                    <ul className="w-75 mx-auto">
                                        <li><p>Si tu dedo pulgar lo acercas a la palma de la mano, la rueda del mouse se moverá.</p></li>
                                        <li><p>Si tu dedo indice lo acercas a la palma de la mano, hará click izquierda del mouse.</p></li>
                                        <li><p>Si tu dedo medio lo acercas a la palma de la mano, hará click derecho del mouse.</p></li>
                                    </ul>
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
