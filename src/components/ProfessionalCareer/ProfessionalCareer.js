import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const ProfessionalCarrer = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <>
            <section section id="hero">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
                            <div data-aos="zoom-out">
                                <h1>Orientación a carreras profesionales en python</h1>
                                <h2>Carreras</h2>
                                <h2>Camino a seguir en cada carrera</h2>
                                <h2>Complementos en python</h2>
                                <div className="text-center text-lg-start">
                                    <a href="#clase1" className="btn-get-started scrollto">Contenido Orientación a carreras</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 order-1 order-lg-2 hero-img" data-aos="zoom-out" data-aos-delay="300">
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
            <section id="faq" className="faq section-bg">
                <div className="container">
                    <div className="section-title" data-aos="fade-up">
                        <h2>Carreras Profesionales</h2>
                        <p>Contenido</p>
                    </div>
                    <div className="accordion accordion-flush w-100 mx-auto rounded-5" id="accordionFlushExample">
                        <div data-aos="fade-right" className="accordion-item rounded-5" style={{ background: "#010483" }} >
                            <button className="accordion-button collapsed bg-transparent text-light" pe="button" data-bs-toggle="collapse" data-bs-target="#a1" aria-expanded="false" aria-controls="flush-collapseOne">
                                <h2 data-aos="fade-right">Ciencias de datos</h2>
                            </button>
                            <div id="a1" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                                <h3 className="text-center mx-auto mt-4" style={{ fontSize: "25px", fontWeight: "700" }}>Aplicaciones en ciencias de datos</h3>
                                    <p className="text-center mx-auto w-75">Con una librería de visualización de datos de Python, puedes crear una variedad increíble de gráficos y representaciones visuales, tales como:</p>
                                    <p className="text-center mx-auto w-75">Análisis de sentimiento: La ciencia de datos se utiliza para analizar datos textuales, como comentarios de clientes o publicaciones en redes sociales, y determinar el sentimiento asociado (positivo, negativo o neutro). Esto es útil en la toma de decisiones comerciales y para comprender la percepción del público sobre productos o servicios.</p>
                                    <p className="text-center mx-auto w-75">Reconocimiento de patrones: La ciencia de datos emplea técnicas de aprendizaje automático y visión por computadora para reconocer patrones en datos, como reconocimiento facial, detección de objetos en imágenes y clasificación de documentos.</p>
                                    <p className="text-center mx-auto w-75">Bioinformática: En esta área, la ciencia de datos se aplica para analizar secuencias de ADN, proteínas y otros datos biológicos con el fin de entender la genómica, la evolución y el diagnóstico de enfermedades.</p>
                                    <p className="text-center mx-auto w-75">Pronóstico del tiempo: Los meteorólogos utilizan modelos matemáticos y estadísticos, basados en ciencia de datos, para pronosticar el clima y prever condiciones atmosféricas.</p>
                                    <p className="text-center mx-auto w-75">Optimización y toma de decisiones: La ciencia de datos se emplea para resolver problemas de optimización, como la asignación de recursos, la programación de tareas y la toma de decisiones estratégicas en la gestión de empresas.</p>
                                    <p className="text-center mx-auto w-75">Análisis de redes sociales: La ciencia de datos es útil para analizar redes sociales y determinar la influencia de usuarios, identificar comunidades y tendencias, y detectar noticias falsas o contenido inapropiado.</p>
                                    <p className="text-center mx-auto w-75">Seguridad cibernética: La ciencia de datos se emplea para detectar patrones de comportamiento malicioso en línea, identificar actividades sospechosas y prevenir ataques cibernéticos.</p>
                                    <p className="text-center mx-auto w-75">Análisis de datos geoespaciales: La ciencia de datos se aplica para analizar datos relacionados con ubicaciones geográficas, como GPS, mapas, sensores de ubicación, y así obtener información valiosa para la planificación urbana, logística, turismo y más.</p>
                                    <p className="text-center mx-auto w-75">Análisis de grandes volúmenes de datos (Big Data): La ciencia de datos es esencial para procesar, almacenar y analizar grandes conjuntos de datos que superan la capacidad de las herramientas tradicionales.</p>
                                    <p className="text-center mx-auto w-75">Diagnóstico médico y apoyo a la toma de decisiones clínicas: Se utilizan algoritmos de aprendizaje automático en la ciencia de datos para asistir en el diagnóstico de enfermedades, predecir riesgos y recomendar tratamientos médicos personalizados.</p>
                                    <p className="text-center mx-auto w-75">Aprendizaje automático (Machine Learning): Es una de las aplicaciones fundamentales de la ciencia de datos que permite a las máquinas aprender patrones a partir de datos y realizar tareas sin intervención humana, como clasificación, regresión, agrupamiento y más.</p>
                                    <h3 className="text-center mx-auto mt-4" style={{ fontSize: "25px", fontWeight: "700" }}>Librerías y paquetes</h3>
                                    <p className="text-center mx-auto w-75">Veamos algunos de los paquetes y librerías más populares para trabajar con Python en ciencia de datos:</p>
                                    <p className="text-center mx-auto w-75">NumPy: este paquete se describe como "el paquete fundamental para computación científica con Python." De acuerdo con el sitio web oficial de este paquete, "casi todos los científicos de datos que trabajan con Python aprovechan el poder de NumPy".</p>
                                    <p className="text-center mx-auto w-75">Pandas: es una "herramienta de código abierto rápida, poderosa, flexible y fácil de usar para analizar y manipular datos".</p>
                                    <p className="text-center mx-auto w-75">Matplotlib: es una "librería exhaustiva para crear visualizaciones estáticas, animadas e interactivas en Python". Si tienes curiosidad, puedes encontrar muestras de lo que puedes hacer con esta librería en su galería de ejemplos.</p>
                                    <p className="text-center mx-auto w-75">Seaborn: es "una librería de Python para visualización de datos basada en matplotlib". Si tienes curiosidad, puedes encontrar muestras de lo que puedes hacer con esta librería en su galería de ejemplos.</p>
                                    <p className="text-center mx-auto w-75">ggplot2: es "un sistema para crear gráficos declarativamente, basado en La Gramática de los Gráficos". De acuerdo a su sitio web oficial: "tú provees los datos y le dices a ggplot2 cómo transformar las variables a la presentación, qué primitivas de gráficos usar y él se encarga de los detalles".</p>
                                    <p className="text-center mx-auto w-75">Bokeh: es "una librería interactiva de visualización para navegadores web modernos".</p>
                                    <p className="text-center mx-auto w-75">Pandas: esta librería tiene muchas herramientas para visualización de datos.</p>
                                    <h3 className="text-center mx-auto mt-4" style={{ fontSize: "25px", fontWeight: "700" }}>Lenguages para aprender </h3>
                                    <p className="text-center mx-auto w-75">SQL: Si bien SQL no es un lenguaje de programación en sí, es esencial para interactuar con bases de datos y realizar consultas para extraer datos para su análisis.</p>
                                    <p className="text-center mx-auto w-75">Julia: Julia es un lenguaje de programación de alto rendimiento diseñado específicamente para el análisis numérico y científico. Es una opción cada vez más popular para el análisis de datos y el cómputo científico.</p>
                                    <p className="text-center mx-auto w-75">Scala: Scala es un lenguaje que se utiliza comúnmente en entornos de Big Data debido a su integración con Apache Spark, una plataforma de procesamiento de datos en tiempo real y procesamiento de grandes volúmenes de datos.</p>
                                    <p className="text-center mx-auto w-75">MATLAB: MATLAB es una herramienta ampliamente utilizada en la ingeniería y ciencias para el análisis numérico, la simulación y la visualización de datos.</p>
                                    <h3 className="text-center mx-auto mt-4" style={{ fontSize: "25px", fontWeight: "700" }}>Camino de aprendizaje - RoadMap</h3>
                                    <img className="d-block mx-auto w-75" alt="" src="../img/professionalCareer/roadmap.png"></img>
                                    </div>
                            </div>
                        </div>
                        <div data-aos="fade-right" className="accordion-item mt-4 rounded-5" style={{ background: "#010483" }}>
                            <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a2" aria-expanded="false" aria-controls="flush-collapseTwo">
                                <h2 data-aos="fade-right" className="text-light">Inteligencia artificial</h2>
                            </button>
                            <div id="a2" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                                    
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