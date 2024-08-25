import React from 'react'
import { useLocation, Link } from 'react-router-dom';
import { colorPrimaryPython } from '../../colors';
import useScrollAnimation from '../../useScrollAnimation'

const ProfessionalCarrer = () => {

    const elementVisibility = useScrollAnimation()
    const location = useLocation()

    return (
        <>
            <section id="hero" style={{ background: location.pathname.includes("micropython") ? "#B34229" : colorPrimaryPython }} >
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
                            <div>
                                <h1>Orientación a carreras profesionales en python</h1>
                                <h2>Carreras</h2>
                                <h2>Camino a seguir en cada carrera</h2>
                                <h2>Complementos en python</h2>
                                <div className="text-center text-lg-start">
                                    <a href="#clase1" className="btn-get-started scrollto">Contenido Orientación a carreras</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 order-1 order-lg-2 hero-img">
                            <img src="../img/python.png" className="img-fluid animated vh-60" alt="" />
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
                    <div id="element1" className={`section-title animated-left ${elementVisibility.element1 ? 'slide-left' : ''}`} >
                        <h2>Carreras Profesionales</h2>
                        <p>Contenido</p>
                    </div>
                    <div className="accordion accordion-flush w-100 mx-auto rounded-5" id="accordionFlushExample">
                        <div id="element2" className={`accordion-item rounded-5 animated-left ${elementVisibility.element2 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }} >
                            <button className="accordion-button collapsed bg-transparent text-light" pe="button" data-bs-toggle="collapse" data-bs-target="#a1" aria-expanded="false" aria-controls="flush-collapseOne">
                                <h2>Ciencias de datos</h2>
                            </button>
                            <div id="a1" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body text-light bg-dark ">
                                    <h3 className="text-break mx-auto w-75 mt-4">Aplicaciones en ciencias de datos</h3>
                                    <p className="text-break mx-auto w-75">Con una librería de visualización de datos de Python, puedes crear una variedad increíble de gráficos y representaciones visuales, tales como:</p>
                                    <ul className= "list-unstyled w-75 mx-auto">
                                        <li>
                                            <h6 className="text-break fw-bold">Análisis de sentimiento</h6>
                                            <p>La ciencia de datos se utiliza para analizar datos textuales, como comentarios de clientes o publicaciones en redes sociales, y determinar el sentimiento asociado (positivo, negativo o neutro). Esto es útil en la toma de decisiones comerciales y para comprender la percepción del público sobre productos o servicios.</p>
                                        </li>
                                        <li>
                                            <h6 className="text-break fw-bold">Reconocimiento de patrones</h6>
                                            <p>Se emplean técnicas de aprendizaje automático y visión por computadora para reconocer patrones en datos, como reconocimiento facial, detección de objetos en imágenes y clasificación de documentos.</p>
                                        </li>
                                        <li>
                                            <h6 className="text-break fw-bold">Bioinformática</h6>
                                            <p>En esta área, la ciencia de datos se aplica para analizar secuencias de ADN, proteínas y otros datos biológicos con el fin de entender la genómica, la evolución y el diagnóstico de enfermedades.</p>
                                        </li>
                                        <li>
                                            <h6 className="text-break fw-bold">Pronóstico del tiempo</h6>
                                            <p>Los meteorólogos utilizan modelos matemáticos y estadísticos, basados en ciencia de datos, para pronosticar el clima y prever condiciones atmosféricas.</p>
                                        </li>
                                        <li>
                                            <h6 className="text-break fw-bold">Optimización y toma de decisiones</h6>
                                            <p>Se utiliza para resolver problemas de optimización, como la asignación de recursos, la programación de tareas y la toma de decisiones estratégicas en la gestión de empresas.</p>
                                        </li>
                                        <li>
                                            <h6 className="text-break fw-bold">Análisis de redes sociales</h6>
                                            <p>Se utiliza para determinar la influencia de usuarios, identificar comunidades y tendencias, y detectar noticias falsas o contenido inapropiado.</p>
                                        </li>
                                        <li>
                                            <h6 className="text-break fw-bold">Seguridad cibernética</h6>
                                            <p>La ciencia de datos se emplea para detectar patrones de comportamiento malicioso en línea, identificar actividades sospechosas y prevenir ataques cibernéticos.</p>
                                        </li>
                                        <li>
                                            <h6 className="text-break fw-bold">Análisis de datos geoespaciales</h6>
                                            <p>La ciencia de datos se aplica para analizar datos relacionados con ubicaciones geográficas, como GPS, mapas, sensores de ubicación, y así obtener información valiosa para la planificación urbana, logística, turismo y más.</p>
                                        </li>
                                        <li>
                                            <h6 className="text-break fw-bold">Análisis de grandes volúmenes de datos (Big Data)</h6>
                                            <p>La ciencia de datos es esencial para procesar, almacenar y analizar grandes conjuntos de datos que superan la capacidad de las herramientas tradicionales.</p>
                                        </li>
                                        <li>
                                            <h6 className="text-break fw-bold">Diagnóstico médico y apoyo a la toma de decisiones clínicas</h6>
                                            <p>Se utilizan algoritmos de aprendizaje automático en la ciencia de datos para asistir en el diagnóstico de enfermedades, predecir riesgos y recomendar tratamientos médicos personalizados.</p>
                                        </li>
                                        <li>
                                            <h6 className="text-break fw-bold">Aprendizaje automático (Machine Learning)</h6>
                                            <p>Es una de las aplicaciones fundamentales de la ciencia de datos que permite a las máquinas aprender patrones a partir de datos y realizar tareas sin intervención humana, como clasificación, regresión, agrupamiento y más.</p>
                                        </li>
                                    </ul>
                                    <h3 className="text-break mx-auto w-75 mt-4">Librerías y paquetes</h3>
                                    <p className="text-break mx-auto w-75">Veamos algunos de los paquetes y librerías más populares para trabajar con Python en ciencia de datos:</p>
                                    <ul className= "text-break mx-auto w-75 list-unstyled">
                                        <li>
                                            <h6 className="text-break fw-bold">NumPy</h6>
                                            <p>Este paquete se describe como "el paquete fundamental para computación científica con Python." De acuerdo con el sitio web oficial de este paquete, "casi todos los científicos de datos que trabajan con Python aprovechan el poder de NumPy".<br></br><Link to="https://numpy.org/" className="text-break mx-auto text-primary w-75">Acceder a la página oficial de Numpy</Link></p>
                                        </li>
                                        <li>
                                            <h6 className="text-break fw-bold">Pandas</h6>
                                            <p>Es una herramienta de código abierto rápida, poderosa, flexible y fácil de usar para analizar y manipular datos.<br></br><Link to="https://pandas.pydata.org/" className="text-break mx-auto text-primary w-75">Acceder a la página oficial de Pandas</Link></p>
                                        </li>
                                        <li>
                                            <h6 className="text-break fw-bold">Matplotlib</h6>
                                            <p>Es una librería exhaustiva para crear visualizaciones estáticas, animadas e interactivas en Python". Si tienes curiosidad, puedes encontrar muestras de lo que puedes hacer con esta librería en su galería de ejemplos.<br></br><Link to="https://matplotlib.org/" className="text-break mx-auto text-primary w-75">Acceder a la página oficial de Matplotlib</Link></p>
                                        </li>
                                        <li>
                                            <h6 className="text-break fw-bold">Seaborn</h6>
                                            <p>Es "una librería de Python para visualización de datos basada en matplotlib". Si tienes curiosidad, puedes encontrar muestras de lo que puedes hacer con esta librería en su galería de ejemplos.<br></br><Link to="https://seaborn.pydata.org/" className="text-break mx-auto text-primary w-75">Acceder a la página oficial de Seaborn</Link></p>
                                        </li>
                                        <li>
                                            <h6 className="text-break fw-bold">Ggplot2</h6>
                                            <p>Es "un sistema para crear gráficos declarativamente, basado en La Gramática de los Gráficos". De acuerdo a su sitio web oficial: "tú provees los datos y le dices a ggplot2 cómo transformar las variables a la presentación, qué primitivas de gráficos usar y él se encarga de los detalles".<br></br><Link to="https://www.rdocumentation.org/packages/ggplot2" className="text-break mx-auto text-primary w-75">Acceder a la documentacion de ggplot2</Link></p>
                                        </li>
                                        <li>
                                            <h6 className="text-break fw-bold">Bokeh</h6>
                                            <p>Es una librería interactiva de visualización para navegadores web modernos.<br></br><Link to="https://docs.bokeh.org/en/latest/" className="text-break mx-auto text-primary w-75">Acceder a la documentacion de bokeh</Link></p>
                                        </li>
                                    </ul>
                                    <h3 className="text-break mx-auto w-75 mt-4">Lenguages para aprender </h3>
                                    <p className="text-break mx-auto w-75">hay varios lenguajes de programación y herramientas que son ampliamente utilizados para realizar análisis, manipulación y visualización de datos, así como para implementar algoritmos de aprendizaje automático.</p>
                                    <ul className= "text-break mx-auto w-75 list-unstyled">
                                        <li>
                                            <h6 className="text-break fw-bold">SQL</h6>
                                            <p>Si bien SQL no es un lenguaje de programación en sí, es esencial para interactuar con bases de datos y realizar consultas para extraer datos para su análisis.</p>
                                        </li>
                                        <li>
                                            <h6 className="text-break fw-bold">R</h6>
                                            <p>R es conocido por su capacidad estadística y visualización de datos. Es especialmente popular en entornos académicos y en la comunidad estadística.<br></br><Link to="https://www.r-project.org/" className="text-break mx-auto text-primary w-75">Acceder a la página oficial de R</Link></p>
                                        </li>
                                        <li>
                                            <h6 className="text-break fw-bold">Julia</h6>
                                            <p>Julia es un lenguaje de programación de alto rendimiento diseñado específicamente para el análisis numérico y científico. Es una opción cada vez más popular para el análisis de datos y el cómputo científico.<br></br><Link to="https://julialang.org/" className="text-break mx-auto text-primary w-75">Acceder a la página oficial de Julia</Link></p>
                                        </li>
                                        <li>
                                            <h6 className="text-break fw-bold">Scala</h6>
                                            <p>Scala es un lenguaje que se utiliza comúnmente en entornos de Big Data debido a su integración con Apache Spark, una plataforma de procesamiento de datos en tiempo real y procesamiento de grandes volúmenes de datos.<br></br><Link to="https://www.scala-lang.org/" className="text-break mx-auto text-primary w-75">Acceder a la página oficial de Scala</Link></p>
                                        </li>
                                        <li>
                                            <h6 className="text-break fw-bold">MATLAB</h6>
                                            <p>MATLAB es una herramienta ampliamente utilizada en la ingeniería y ciencias para el análisis numérico, la simulación y la visualización de datos.<br></br><Link to="https://la.mathworks.com/help/matlab/index.html?s_tid=hc_panel" className="text-break mx-auto text-primary w-75">Acceder a la página oficial de MATLAB</Link></p>
                                        </li>
                                    </ul>
                                    <h3 className="text-center mx-auto w-75 mt-4">Camino de aprendizaje - RoadMap</h3>
                                    <img className="d-block mx-auto w-75" style={{ marginBottom: "7rem" }} alt="" src="../img/professionalCareer/roadmap.png"></img>
                                </div>
                            </div>
                        </div>
                        <div id="element3" className={`accordion-item mt-4 rounded-5 animated-left ${elementVisibility.element3 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
                            <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a2" aria-expanded="false" aria-controls="flush-collapseTwo">
                                <h2 className="text-light">Inteligencia artificial</h2>
                            </button>
                            <div id="a2" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body text-light bg-dark ">
                                    <h3 className="text-break mx-auto w-75 mt-4">Aplicaciones en ciencias de datos</h3>
                                    <p className="text-break mx-auto w-75">La inteligencia artificial (IA) se ha convertido en un campo crucial y en constante evolución con diversas aplicaciones que impactan en diversas áreas de la sociedad y la industria. Aquí hay algunas aplicaciones destacadas de la inteligencia artificial:</p>
                                    <ul className= "text-break mx-auto w-75 list-unstyled">
                                        <li>
                                            <h6 className="text-break fw-bold">Reconocimiento de Patrones y Visión por Computadora</h6>
                                            <p>Reconocimiento facial, reconocimiento de objetos, clasificación de imágenes, diagnóstico médico a través de imágenes, vehículos autónomos.</p>
                                            <p>Tecnologías clave: Redes neuronales convolucionales (CNN), detección de objetos, segmentación de imágenes.</p>
                                        </li>
                                        <li>
                                            <h6 className="text-break fw-bold">Procesamiento del Lenguaje Natural (NLP)</h6>
                                            <p>Asistentes virtuales (como Siri y Alexa), traducción automática, análisis de sentimientos, chatbots, resumidores de texto.</p>
                                            <p>Tecnologías clave: Modelos de lenguaje, procesamiento de texto, embeddings de palabras, transformers.</p>
                                        </li>
                                        <li>
                                            <h6 className="text-break fw-bold">Aprendizaje Automático (Machine Learning)</h6>
                                            <p>Predicción de series temporales, clasificación y regresión, recomendaciones personalizadas, fraudes financieros, diagnóstico médico.</p>
                                            <p>Tecnologías clave: Algoritmos de aprendizaje supervisado y no supervisado, regresión, árboles de decisión, máquinas de soporte vectorial (SVM), redes neuronales.</p>
                                        </li>
                                        <li>
                                            <h6 className="text-break fw-bold">Robótica</h6>
                                            <p>Robots autónomos, asistentes robóticos en el hogar, cirugía asistida por robots, fabricación automatizada.</p>
                                            <p>Tecnologías clave: Visión por computadora, planificación de trayectorias, aprendizaje por refuerzo.</p>
                                        </li>
                                        <li>
                                            <h6 className="text-break fw-bold">Sistemas de Recomendación</h6>
                                            <p>Plataformas de streaming (Netflix, Spotify), recomendaciones de productos en línea, sistemas de recomendación de noticias.</p>
                                            <p>Tecnologías clave: Filtros colaborativos, sistemas basados en contenido, aprendizaje profundo para recomendaciones.</p>
                                        </li>
                                        <li>
                                            <h6 className="text-break fw-bold">Sistemas de Diagnóstico Médico</h6>
                                            <p>Interpretación de imágenes médicas, predicción de enfermedades, análisis de datos clínicos.</p>
                                            <p>Tecnologías clave: Redes neuronales, aprendizaje profundo, procesamiento de imágenes médicas.</p>
                                        </li>
                                        <li>
                                            <h6 className="text-break fw-bold">Procesamiento de Datos masivos (Big Data):</h6>
                                            <p>Análisis de datos masivos, optimización de procesos empresariales, toma de decisiones basada en datos.</p>
                                            <p>Tecnologías clave: Apache Hadoop, Apache Spark, técnicas de análisis de datos a gran escala.</p>
                                        </li>
                                        <li>
                                            <h6 className="text-break fw-bold">IA Ética y Gobernanza:</h6>
                                            <p>Desarrollo de políticas de IA ética, evaluación de sesgos en algoritmos, transparencia en la toma de decisiones automáticas.</p>
                                            <p>Tecnologías clave: Marco ético para IA, auditoría de algoritmos, explicabilidad de modelos</p>
                                        </li>
                                        <li>
                                            <h6 className="text-break fw-bold">Análisis de grandes volúmenes de datos (Big Data)</h6>
                                            <p>La ciencia de datos es esencial para procesar, almacenar y analizar grandes conjuntos de datos que superan la capacidad de las herramientas tradicionales.</p>
                                        </li>
                                        <li>
                                            <h6 className="text-break fw-bold">Diagnóstico médico y apoyo a la toma de decisiones clínicas</h6>
                                            <p>Se utilizan algoritmos de aprendizaje automático en la ciencia de datos para asistir en el diagnóstico de enfermedades, predecir riesgos y recomendar tratamientos médicos personalizados.</p>
                                        </li>
                                        <li>
                                            <h6 className="text-break fw-bold">Aprendizaje automático (Machine Learning)</h6>
                                            <p>Es una de las aplicaciones fundamentales de la ciencia de datos que permite a las máquinas aprender patrones a partir de datos y realizar tareas sin intervención humana, como clasificación, regresión, agrupamiento y más.</p>
                                        </li>
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

export default ProfessionalCarrer