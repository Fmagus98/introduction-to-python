import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Class1 = () => {
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
                                <h1>Clase 1</h1>
                                <h2>Introducción a Python y su sintaxis básica, Instalación y configuración del entorno de programación</h2>
                                <h2>Instalación y configuración del entorno de programación</h2>
                                <h2>Ejecución del primer programa en Python</h2>
                                <div className="text-center text-lg-start">
                                    <a href="#clase1" className="btn-get-started scrollto">Contenido de la clase 1</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 order-1 order-lg-2 hero-img" data-aos="zoom-out" data-aos-delay="300">
                            <img src="../img/python.webp" className="img-fluid animated vh-60" alt="" />
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
                        <h2>Clase 1</h2>
                        <p>Contenido</p>
                    </div>
                    <div className="accordion accordion-flush w-100 mx-auto rounded-5" id="accordionFlushExample">
                        <div className="accordion-item rounded-5" style={{ background: "#010483" }} >
                            <button className="accordion-button collapsed bg-transparent text-light" pe="button" data-bs-toggle="collapse" data-bs-target="#a1" aria-expanded="false" aria-controls="flush-collapseOne">
                                <h2 data-aos="fade-right">Historia de la programación</h2>
                            </button>
                            <div id="a1" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                                    <p className="text-center">A medida que avanzó la historia de la programación, la forma de programar ha ido evolucionando. En los comienzos de la programación,
                                        los programadores se veían obligados a escribir en código binario, lo que resultaba en una gran cantidad de código para lograr incluso las funcionalidades más simples.
                                        Con el paso de los años, las computadoras, los lenguajes de programación y los métodos se han ido desarrollando, permitiendo simplificar el proceso de programación.</p>
                                    <p className="text-center mx-auto">El código binario es un sistema de representación de información que utiliza solamente dos dígitos: 0 y 1. Cada dígito se llama bit y puede ser 0 o 1.
                                        La cantidad de bits en un código binario varía según la información que se necesita representar, siendo los múltiplos de 8 (8, 16, 32, 64 y 128) los números más comunes.
                                        Por ejemplo, un byte onsta de 8 bits y puede representar 256 valores únicos (2^8).</p>
                                    <p className="text-center mx-auto">En los inicios de las computadoras, el código binario era la única forma de representar la información, lo que requería que los programas fueran escritos
                                        en este sistema. Sin embargo, este proceso era lento y propenso a errores ya que los programadores tenían que convertir manualmente cada instrucción y dato en una serie de ceros y unos.</p>
                                    <h4 className="text-center mx-auto mt-4" style={{ fontSize: "25px", fontWeight: "700" }}>REPRESENTACION DE NÚMEROS EN CÓDIGO BINARIO</h4>
                                    <img className="mx-auto d-block w-75" alt="" src='../img/clase1/btot.webp' />
                                    <h3 className="text-center mx-auto mt-4" style={{ fontSize: "25px", fontWeight: "700" }}>REPRESENTACIÓN DE TEXTO EN CÓDIGO BINARIO</h3>
                                    <img className="mx-auto d-block w-75" alt="" src='../img/clase1/btot2.webp' />
                                    <p className="text-center mx-auto w-75"> En las primeras computadoras, el código binario era la única forma de representar la información. Los datos se almacenaban y se procesaban en forma de bits,
                                        lo que significaba que los programas debían ser escritos en código binario. Esto requería que los programadores convirtieran cada instrucción y dato en una
                                        serie de ceros y unos, lo que era un proceso lento y propenso a errores.
                                    </p>
                                    <p className="text-center mx-auto w-75">Más adelante se empezó a utilizar programas como Ensamblador, este lenguaje empezaba a utilizar letras y números en vez de 0 y 1, esto ocasionó que sea un poco
                                        más legible y fácil de recordar aunque estaba muy alejado aún del lenguage humano.</p>
                                    <p className="text-center mx-auto w-75">Dato curioso, a mediado de los 80 las consolas estaban hechas en 8-bits como la NES de Nintendo y la Master System de SEGA a la cabeza. En el juego "Pac-man" existe un error por estas limitaciones de bits,
                                        en la programación del juego existe una variable encargada de ser el contador de los niveles del juego, al llegar al nivel 256 el procesador no es capaz de calcularlo y aparece en pantalla este error. </p>
                                    <img className="w-75 mx-auto d-block" alt="" src='../img/clase1/PMg.webp' />
                                    <p className="text-center mx-auto">Finalmente, surgen los llamados lenguages de alto nivel. Estos van a ser un proceso intermedio entre el lenguaje máquina(binario) y el lenguaje humano (proceso por compilador o intérprete).</p>
                                    <img className="w-75 mx-auto d-block" style={{ marginBottom: "7rem" }} alt="" src='../img/clase1/cvsi.webp' />
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mt-4 rounded-5" style={{ background: "#010483" }}>
                            <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a2" aria-expanded="false" aria-controls="flush-collapseTwo">
                                <h2 data-aos="fade-right" className="text-light">Perfil de un programador</h2>
                            </button>
                            <div id="a2" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                                    <p className="text-center mx-auto w-100">El perfil de un programador puede variar dependiendo de sus habilidades, experiencia y especialización. Sin embargo, hay algunas características y habilidades comunes que suelen definir a un programador y son:
                                    </p>
                                    <ol className="list-group list-group-numbered w-75 mx-auto mb-4 text-xl text-center">
                                        <h3 className="text-center mx-auto mt-4" style={{ fontSize: "25px", fontWeight: "700" }}>CONOCIMIENTO DE PROGRAMACIÓN</h3>
                                        <li className="list-group list-group-numbered w-100 mx-auto "><p className="text-center">Los programadores tienen un conocimiento sólido de al menos un lenguaje de programación y están familiarizados con los conceptos fundamentales de la programación, como variables, estructuras de control, funciones, algoritmos, etc.</p></li>
                                        <h3 className="text-center mx-auto mt-4" style={{ fontSize: "25px", fontWeight: "700" }}>RESOLUCIÓN DE PROBLEMAS</h3>
                                        <li className="list-group list-group-numbered w-100 mx-auto "><p className="text-center">Los programadores son buenos para analizar problemas, identificar soluciones y desarrollar algoritmos eficientes para resolverlos. Tienen habilidades de pensamiento lógico y capacidad para descomponer problemas complejos en partes más pequeñas y manejables.</p></li>
                                        <h3 className="text-center mx-auto mt-4" style={{ fontSize: "25px", fontWeight: "700" }}>APRENDIZAJE CONTINUO</h3>
                                        <li className="list-group list-group-numbered w-100 mx-auto "><p className="text-center">Los programadores están dispuestos a aprender nuevas tecnologías, lenguajes de programación y herramientas para mantenerse actualizados en un campo en constante evolución. Están abiertos a la mejora continua y se adaptan rápidamente a nuevos desafíos.</p></li>
                                        <h3 className="text-center mx-auto mt-4" style={{ fontSize: "25px", fontWeight: "700" }}>ATENCIÓN AL DETALLE</h3>
                                        <li className="list-group list-group-numbered w-100 mx-auto "><p className="text-center">Los programadores prestan atención a los detalles y son precisos en su trabajo. Un pequeño error en el código puede tener un gran impacto, por lo que son cuidadosos al escribir, probar y depurar su código.</p></li>
                                        <h3 className="text-center mx-auto mt-4" style={{ fontSize: "25px", fontWeight: "700" }}>TRABAJO EN EQUIPO</h3>
                                        <li className="list-group list-group-numbered w-100 mx-auto "><p className="text-center">Los programadores suelen trabajar en equipo, colaborando con otros desarrolladores, diseñadores y profesionales de TI. Tienen habilidades de comunicación efectivas y pueden trabajar en proyectos colaborativos.</p></li>
                                        <h3 className="text-center mx-auto mt-4" style={{ fontSize: "25px", fontWeight: "700" }}>RESILIENCIA Y SOLUCIÓN DE PROBLEMAS</h3>
                                        <li className="list-group list-group-numbered w-100 mx-auto "><p className="text-center">Los programadores enfrentan desafíos y problemas técnicos de manera regular. La capacidad de resolver problemas de manera efectiva y persistir en la búsqueda de soluciones es una habilidad valiosa.</p></li>
                                        <h3 className="text-center mx-auto mt-4" style={{ fontSize: "25px", fontWeight: "700" }}>PENSAMIENTO ANALÍTICO</h3>
                                        <li className="list-group list-group-numbered w-100 mx-auto "><p className="text-center">Los programadores tienen la capacidad de analizar y comprender problemas complejos, descomponerlos en partes más pequeñas y aplicar soluciones lógicas y estructuradas.</p></li>
                                        <h3 className="text-center mx-auto mt-4" style={{ fontSize: "25px", fontWeight: "700" }}>CREATIVIDAD</h3>
                                        <li className="list-group list-group-numbered w-100 mx-auto "><p className="text-center">La programación también requiere creatividad para encontrar soluciones innovadoras y eficientes. Los programadores pueden encontrar diferentes enfoques y perspectivas para resolver problemas.</p></li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mt-4 rounded-5" style={{ background: "#010483" }}>
                            <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a3" aria-expanded="false" aria-controls="flush-collapseThree">
                                <h2 data-aos="fade-right" className="text-light">¿Que es python?</h2>
                            </button>
                            <div id="a3" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                                    <div id="content">
                                        <img className="d-block mx-auto w-25" alt="" src="../img/clase1/guido.webp"></img>
                                        <p className="text-center mx-auto">Python es un lenguaje de programación de alto nivel basado en C.
                                            Fue creado en 1989 por Guido Van Rossum, un programador holandés, mientras trabajaba en el Centro de
                                            Investigación para la Informática (CWI) en los Países Bajos. </p>
                                        <p className="text-center mx-auto">La idea detrás de Python era crear un lenguaje de programación que fuera fácil de aprender, legible
                                            y que permitiera a los programadores escribir código rápidamente.
                                        </p>
                                        <p className="text-center mx-auto">Van Rossum quería un lenguaje que fuera más poderoso que el lenguaje de script Unix shell, pero que
                                            fuera más fácil de usar que otros lenguajes de programación de la época, como C++ y Perl.
                                        </p>
                                        <p className="text-center mx-auto">El nombre "Python" fue inspirado por el grupo de comedia británico Monty Python, y muchos de
                                            los términos en el lenguaje, como "spam" y "egg", también se tomaron de los sketches de Monty Python.
                                            Desde su lanzamiento inicial, Python ha evolucionado y se ha utilizado en una amplia variedad de aplicaciones.
                                        </p>
                                        <p className="text-center mx-auto">Python es muy popular en la comunidad de programación debido a su sintaxis simple y legible, así como
                                            a su enfoque en la legibilidad del código. En 2008, Python 3 fue lanzado, lo que mejoró aún más el
                                            lenguaje y lo hizo más consistente y fácil de aprender. Actualmente, Python es uno de los lenguajes de
                                            programación más populares en todo el mundo y las empresas de alto nivel los están utilizando .
                                        </p>
                                        <img className="d-block mx-auto w-100" alt="" src="../img/clase1/ep.webp"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mt-4 rounded-5" style={{ background: "#010483" }}>
                            <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a4" aria-expanded="false" aria-controls="flush-collapseFour">
                                <h2 data-aos="fade-right" className="text-light">Caracteristicas de python</h2>
                            </button>
                            <div id="a4" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                                    <h3 className="text-center mx-auto mt-4" style={{ fontSize: "25px", fontWeight: "700" }}>NIVEL ALTO</h3>
                                    <p className="text-center mx-auto">Dentro de la programación hay tipos niveles, estos niveles determinan la complejidad en la podemos programar
                                        en dicho lenguaje. Si el nivel es más bajo, este se acercará más al lenguage máquina(código binario) y facilitará a la maquina a interpretar más rápido
                                        pero a la vez es más complejo para los programadores programar en este lenguaje ya que se aleja del lenguage humano.</p>
                                    <img className="w-75 mx-auto d-block" alt="" src="../img/clase1/level.webp"></img>
                                    <h3 className="text-center mx-auto mt-4" style={{ fontSize: "25px", fontWeight: "700" }}>CASE SENSITIVE</h3>
                                    <p className="mt-4 mb-4 text-center mx-auto"> Lo que significa que distingue entre mayúsculas y minúsculas en los nombres de variables, funciones, clases, módulos y otros identificadores. Esto significa que
                                        dos identificadores que se diferencian solo en su uso de mayúsculas y minúsculas se consideran diferentes en Python.</p>
                                    <h3 className="text-center mx-auto mt-4" style={{ fontSize: "25px", fontWeight: "700" }}>IMPLEMENTACIÓN</h3>
                                    <p className="text-center mx-auto">La implementación de Python se refiere a la forma en que se ejecuta el código de Python. Hay varias implementaciones de Python disponibles, aquí hay algunas de las más populares:</p>
                                    <ul>
                                        <p className="text-center mx-auto w-75" >CPython: Es la implementación más común de Python y está escrita en C. CPython es la implementación predeterminada de Python y es utilizada por la mayoría de los programadores de Python. CPython es muy rápido y eficiente, y tiene una gran cantidad de librerías y frameworks disponibles.</p>
                                        <p className="text-center mx-auto w-75">Jython: Es una implementación de Python escrita en Java. Jython permite a los programadores utilizar Python en una máquina virtual Java y acceder a las librerías y frameworks de Java.</p>
                                        <p className="text-center mx-auto w-75">IronPython: Es una implementación de Python escrita en C# y diseñada para el entorno .NET. IronPython permite a los programadores utilizar Python en el entorno .NET y acceder a las librerías y frameworks de .NET.</p>
                                        <p className="text-center mx-auto w-75">PyPy: Es una implementación de Python escrita en Python. PyPy es conocido por ser mucho más rápido que CPython, especialmente en aplicaciones que requieren mucho cálculo.</p>
                                        <p className="text-center mx-auto w-75">MicroPython: Es una implementación de Python diseñada para ser utilizada en microcontroladores y dispositivos de baja potencia. MicroPython es una versión reducida de Python que incluye un conjunto limitado de librerías y frameworks.</p>
                                    </ul>
                                    <h3 className="text-center mx-auto mt-4" style={{ fontSize: "25px", fontWeight: "700" }}>MULTIPLATAFORMA</h3>
                                    <p className="text-center mx-auto">Python se puede utilizar en una amplia variedad de plataformas, incluyendo Windows, macOS y Linux, lo que lo hace muy versátil y útil en diferentes entornos de trabajo.</p>
                                    <img className="w-75 mx-auto d-block" alt="" src="../img/clase1/os.webp"></img>
                                    <h3 className="text-center mx-auto mt-4" style={{ fontSize: "25px", fontWeight: "700" }}>APLICACIONES EN MERCADO LABORAL</h3>
                                    <img className="w-50 mx-auto d-block" alt="" src="../img/clase1/bd.webp"></img>
                                    <h3 className="text-center mx-auto mt-4" style={{ fontSize: "25px", fontWeight: "600" }}>BIG DATA</h3>
                                    <p className="mt-4 mb-4 text-center mx-auto w-50">El uso de Python está muy extendido en dos áreas:
                                        el análisis de datos y el big data. Su sencillez y su gran número de bibliotecas de procesamiento
                                        de datos hacen que Python sea ideal a la hora de analizar y gestionar una gran cantidad de
                                        datos en tiempo real. Python está siendo utilizado en la actualidad por muchísimas
                                        empresas, tanto de forma directa, como indirecta, ya que detrás de los distintos
                                        software de data analytics, está este lenguaje interpretado de alto nivel, puesto que
                                        Python está especializado en analizar una gran cantidad de datos para transformarlos en
                                        información útil para el big data.</p>
                                    <img className="w-50 mx-auto d-block" alt="" src="../img/clase1/dm.webp"></img>
                                    <h3 className="text-center mx-auto mt-4" style={{ fontSize: "25px", fontWeight: "600" }}>DATA MINING</h3>
                                    <p className="mt-4 mb-4 text-center mx-auto w-50"> La minería de datos o data mining es un
                                        proceso que permite analizar grandes bases de datos con el objetivo de predecir futuras
                                        tendencias. Se trata de un proceso complejo al que Python puede ayudar, a través de la
                                        limpieza, organización de datos y del uso de algoritmos de aprendizaje automático que
                                        simplifica el análisis de datos.</p>
                                    <img className="w-50 mx-auto d-block" alt="" src="../img/clase1/ds.webp"></img>
                                    <h3 className="text-center mx-auto mt-4" style={{ fontSize: "25px", fontWeight: "600" }}>DATA SCIENCE</h3>
                                    <p className="mt-4 mb-4 text-center mx-auto w-50"> Los nuevos motores numéricos como “Pandas”
                                        o “NumPy”, Python están dejando atrás a  MATLAB, lenguaje usado por científicos para trabajar
                                        con un gran número de datos. Python vuelve a destacar por su simplicidad y  potencial para trabajar
                                        con un gran número de datos,  el gran número de bibliotecas existentes, hacen que Python sea ideal
                                        para este tipo de tareas.</p>
                                    <img className="w-50 mx-auto d-block" alt="" src="../img/clase1/ia.webp"></img>
                                    <h3 className="text-center mx-auto mt-4" style={{ fontSize: "25px", fontWeight: "600" }}>INTELIGENCIA ARTIFICIAL</h3>
                                    <p className="mt-4 mb-4 text-center mx-auto w-50"> Cada vez se habla más de la inteligencia artificial
                                        (IA). Gran parte de su avance se debe a Python. Su facilidad de escritura y su robustez han convertido
                                        a Python en el aliado perfecto de la IA. Su capacidad de plasmar ideas complejas en pocas líneas, unidas
                                        al gran número de frameworks existentes, han hecho que Python sea uno de los lenguajes de programación
                                        que están impulsando a la IA.</p>
                                    <img className="w-50 mx-auto d-block" alt="" src="../img/clase1/bc.webp"></img>
                                    <h3 className="text-center mx-auto mt-4" style={{ fontSize: "25px", fontWeight: "600" }}>BLOCKCHAIN</h3>
                                    <p className="mt-4 mb-4 text-center mx-auto w-50">
                                        Blockchain es una tecnología de registro distribuido que se utiliza para registrar transacciones de manera segura y verificable.
                                        Consiste en un registro en línea que se actualiza de manera permanente y que está protegido mediante técnicas criptográficas.</p>
                                    <img className="w-50 mx-auto d-block" alt="" src="../img/clase1/ml.webp"></img>
                                    <h3 className="text-center mx-auto mt-4" style={{ fontSize: "25px", fontWeight: "600" }}>MACHINE LEARNING</h3>
                                    <p className="mt-4 mb-4 text-center mx-auto w-50">El machine learning o aprendizaje automático es otra de
                                        las tecnologías que está cambiando el mundo tal y como lo conocemos. La robótica y la IA son ahora capaces
                                        de aprender por sí mismas a medida que van procesando datos. De esta forma, obtienen información relevante
                                        que le permite tomar las decisiones adecuadas. Por supuesto, Python es también muy eficaz en este campo,
                                        en el tratamiento de datos eficaz es esencial.</p>
                                    <img className="w-50 mx-auto d-block" alt="" src="../img/clase1/dw.webp"></img>
                                    <h3 className="text-center mx-auto mt-4" style={{ fontSize: "25px", fontWeight: "600" }}>DESARROLLO WEB</h3>
                                    <p className="mt-4 mb-4 text-center mx-auto w-50">Python permite desarrollar webs complejas con menos líneas de
                                        código, haciéndolas más ligeras y optimizadas. Django es uno de los frameworks de Python más populares de la actualidad,
                                        que puede ser utilizado para crear webs dinámicas y muy seguras. Python es empleado para hacer scraping, es decir,
                                        extraer información de sitios web, como hacen Netflix o Instagram.</p>
                                    <img className="w-50 mx-auto d-block" alt="" src="../img/clase1/g&g3d.webp"></img>
                                    <h3 className="text-center mx-auto mt-4" style={{ fontSize: "25px", fontWeight: "600" }}>DESARROLLO DE VIDEOJUEGOS</h3>
                                    <p className="mt-4 text-center mx-auto w-50" style={{ marginBottom: "7rem" }}>Juegos como Battelfield 2 o los Sims 4, parte de su código está escrito en este lenguaje de programación. <br></br>
                                        A través de librerías como Pygame o Panda 3D, podrás enfocar tu desempeño profesional aparte desarrollo gaming, pero hay otras tantas que están recogidas en wiki python.
                                        Pero Python no tiene la posibilidad de realizarlos al completo, por lo que te animamos a que descubras otros lenguajes para programar videojuegos, como Java o Lua.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mt-4 rounded-5" style={{ background: "#010483" }}>
                            <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a5" aria-expanded="false" aria-controls="flush-collapseFive">
                                <h2 data-aos="fade-right" className="text-light">Instalación de python</h2>
                            </button>
                            <div id="a5" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                                    <p className="mt-4 mb-4 text-center mx-auto w-50">Dirígete a <Link to="https://www.python.org/downloads" target="_blank" className="text-info">https://www.python.org/downloads</Link>.<br></br>
                                        En este curso usaremos la version 3.8.3, para descargar una version diferente a la actual dirigete a downloads.</p>
                                    <img className="w-75 mx-auto d-block" alt="" src="../img/clase1/python1.webp"></img>
                                    <p className="mt-4 mb-4 text-center mx-auto"> Luego iremos a "All release" </p>
                                    <img className="w-75 mx-auto d-block" alt="" src="../img/clase1/python2.webp"></img>
                                    <p className="mt-4 mb-4 text-center mx-auto">Buscamos la versión  3.8.3 y tocamos "download"</p>
                                    <img className="w-75 mx-auto d-block" alt="" src="../img/clase1/python3.webp"></img>
                                    <p className="mt-4 mb-4 text-center mx-auto">Elegimos el sistema operativo que utilizamos en nuestro dispositivo</p>
                                    <img className="w-75 mx-auto d-block" alt="" src="../img/clase1/python4.webp"></img>
                                    <p className="mt-4 mb-4 text-center mx-auto">Cuando ejecutamos el instalador tocaremos "add python 3.8 to PATH" y luego tocamos "install now"</p>
                                    <img className="w-75 mx-auto d-block" alt="" src="../img/clase1/python5.webp" style={{ marginBottom: "7rem" }}></img>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mt-4 rounded-5" style={{ background: "#010483" }}>
                            <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a6" aria-expanded="false" aria-controls="flush-collapseSix">
                                <h2 data-aos="fade-right" className="text-light">Entorno de desarrollo integrado (IDE)</h2>
                            </button>
                            <div id="a6" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                                    <p className="mt-4 mb-4 text-center mx-auto w-75">Para programar en un lenguaje de programación debemos tener en nuestro ordenador un entorno de desarrollo integrado, más conocido como IDE,
                                        Un IDE combina un editor de código, un compilador o intérprete, herramientas de depuración, un sistema de gestión de versiones,
                                        entre otras funcionalidades, en una sola aplicación integrada.
                                        Esta integración facilita el trabajo de los programadores al permitirles desarrollar y probar aplicaciones de software en un solo entorno.
                                    </p>
                                    <p className="text-center mx-auto">Estos son unos de los IDEs más comunes que se utilizan para el lenguaje de programación python:</p>
                                    <img className="w-50 d-block mx-auto" alt="" src="../img/clase1/IDE.webp"></img>
                                    <ul className="intr-ul">
                                        <li><p className="mt-4 mb-4 text-center mx-auto w-50">JupiterLab: Es una interfaz de usuario web interactiva para el entorno de programación Jupyter. Permite la edición de código en varios lenguajes de programación, incluido Python, y proporciona una variedad de características y extensiones útiles. </p></li>
                                        <li><p className="mt-4 mb-4 text-center mx-auto w-50">Pycharm: Es un entorno de desarrollo integrado para Python desarrollado por JetBrains. Proporciona una amplia gama de características y herramientas para facilitar el desarrollo de aplicaciones Python.</p></li>
                                        <li><p className="mt-4 mb-4 text-center mx-auto w-50">Spyder: Es un entorno de desarrollo integrado especialmente diseñado para trabajar con Python en el ámbito científico y de análisis de datos. Está orientado a la programación científica y ofrece una serie de características y herramientas específicas para facilitar el desarrollo de proyectos relacionados con ciencia, matemáticas y análisis de datos.</p></li>
                                        <li><p className="mt-4 mb-4 text-center mx-auto w-50">Visual Studio Code: Es un entorno de desarrollo de código fuente abierto y gratuito desarrollado por Microsoft. Es un editor de código ligero pero potente que se ha vuelto muy popular entre los desarrolladores por su facilidad de poder programar en diferentes lenguajes de programación, incluido Python.</p></li>
                                    </ul>
                                    <p className="text-center mx-auto w-75 mt-4" style={{ marginBottom: "7rem" }}>
                                        En este curso utilizaremos Visual Studio code pero cabe destacar que la elección del IDE dependerá de tus necesidades y preferencias personales.
                                    </p>
                                    <h2 className=" text-center">Instalación de Visual Studio Code</h2>
                                    <p className="mt-4 mb-4 text-center mx-auto w-75">1 - Ve al sitio web oficial de Visual Studio Code en <Link to="https://code.visualstudio.com" target="_blank" className="text-info">https://code.visualstudio.com</Link>.<br></br><br></br>En el inicio de la página web van a ver directamente que dice "Donwload for Windows", si su sistema operativo es Windows van hacer click derecho directamante ahi y se les va a descargar el programa.<br></br> Si en su ordenador tienen otro sistema operativo van a la palomita que esta al lado derecho y van a ver los diferentes sistemas operativos en el que pueden descargarlo, lo más importante es que descarguen la version estable, para hacerlo deben hacer click derecho en la columna "stable" de su sistema operativo </p>
                                    <img className="w-75 d-block mx-auto" alt="" src="../img/clase1/ide1.webp"></img>
                                    <p className="mt-4 mb-4 text-center mx-auto w-75">2 - Al ejecutar el instalador deben aceptar los terminos y condiciones del programa haciendo click derecho en "Acepto el acuerdo" y lugo hacer click derecho en el botón "siguiente" para seguir con la instalación.</p>
                                    <img className="w-75 d-block mx-auto" alt="" src="../img/clase1/ide2.webp"></img>
                                    <p className="mt-4 mb-4 text-center mx-auto w-75">3 - Activa todas las opciones haciendo click derecho en los checkbox y haz click derecho en el botón "siguiente"</p>
                                    <img className="w-75 d-block mx-auto" alt="" src="../img/clase1/ide3.webp"></img>
                                    <p className="mt-4 mb-4 text-center mx-auto w-75">4 - Haz click derecho en el boton "siguiente" </p>
                                    <img className="w-75 d-block mx-auto" alt="" src="../img/clase1/ide4.webp"></img>
                                    <p className="mt-4 mb-4 text-center mx-auto w-75">5 - Al terminar la instalación haz click en "finalizar" para abrir automáticamente el programa Visual Studio Code para empezar a programar! </p>
                                    <img className="w-75 d-block mx-auto" style={{ marginBottom: "7rem" }} alt="" src="../img/clase1/ide5.webp"></img>
                                    <h2 className=" text-center">Extensiones en Visual Studio Code</h2>
                                    <p className="mt-4 mb-4 text-center mx-auto w-75">En nuestro Visual Studio Code tenemos bastantes herramientas que nos falicitará a la hora de
                                        programar en python, unas de ellas son las extensiones descargables que se nos va a proporcionar en el programa</p>
                                    <p className="mt-4 mb-4 text-center mx-auto w-75">Para descargar extensiones tendremos que ir a la barra que está en la parte superior izquierda y tocamos el logo indicado en la imagen</p>
                                    <img className="w-75 d-block mx-auto" alt="" src="../img/clase1/ext1.webp"></img>
                                    <p className="mt-4 mb-4 text-center mx-auto w-75">Al tocar el logo veremos que tenemos un buscador para buscar extensiones, un apartado llamado "installed" donde tendrémos todas las extensiones que instalamos y un apartado llamado "recommended" donde vamos a tener extensiones que podría servirnos al utilizar un lenguage en especial</p>
                                    <img className="w-75 d-block mx-auto" alt="" src="../img/clase1/ext2.webp"></img>
                                    <ul className="intr-ul" style={{ marginBottom: "7rem" }}><h3 className="mt-4 mb-4 text-center mx-auto w-75">lista de extensiones que utilizaremos en python:</h3>
                                        <li><p className="mt-4 mb-4 text-center mx-auto w-50">Spanish Language Pack for Visual Studio Code: Esta extensión nos facilitará toda la interfaz de usuario de visual studio code a español</p></li>
                                        <li><p className="mt-4 mb-4 text-center mx-auto w-50">Python: les proporcionará autocompletado avanzado,Análisis estático de código y detección de errores.</p></li>
                                        <li><p className="mt-4 mb-4 text-center mx-auto w-50">Python Environment Manager: Gestiona entornos virtuales de Python y seleccionar qué entorno virtual se va a utilizar en un proyecto de Python en particular.</p></li>
                                        <li><p className="mt-4 mb-4 text-center mx-auto w-50">Python indent: Indentación automática para facilitar la lectura del códigoUna mala indentación puede hacer que el código sea difícil de leer y entender, lo que a su vez puede llevar a errores y problemas en el código.</p></li>
                                    </ul>
                                    <h2 className="mx-auto text-center">Terminal - Python y pip</h2>
                                    <p className="mt-4 mb-4 text-center mx-auto w-75">Empecemos a utilizar visual studio code para verificar que se instaló correctamente python, si nos vamos a la parte superior del programa veremos unos "...", presionalo con click derecho y ve a Terminal/New terminal ó simplemente presiona ctrl+shift+ñ </p>
                                    <img className="w-75 d-block mx-auto" alt="" src="../img/clase1/t1.webp"></img>
                                    <p className="mt-4 mb-4 text-center mx-auto w-75">Observamos que se abrirá la terminal en la parte inferior del programa, dentro de la terminal te mostrará la dirección en donde se está ejecutando la terminal. </p>
                                    <img className="w-75 d-block mx-auto" alt="" src="../img/clase1/t2.webp"></img>
                                    <p className="mt-4 mb-4 text-center mx-auto w-75">Si escribimos en la terminal "python", nos mostrará la versión que estamos utilizando si está instalado.</p>
                                    <img className="w-75 d-block mx-auto" alt="" src="../img/clase1/t3.webp"></img>
                                    <p className="mt-4 mb-4 text-center mx-auto w-75">Para finalizar el proceso de ejecución que muestra la version de python escribiremos "exit()".</p>
                                    <img className="w-75 d-block mx-auto" alt="" src="../img/clase1/t4.webp"></img>
                                    <p className="mt-4 mb-4 text-center mx-auto w-75">Ya vimos que podemos ver la version de python escribiendo python, ahora empezaremos a ver pip.<br></br>Pip es un sistema de gestión de paquetes utilizado en Python para instalar y administrar bibliotecas y paquetes de terceros que no están incluidos en la biblioteca estándar de Python.
                                        <br></br>El nombre "pip" se deriva de la frase "Pip Installs Packages" (Pip instala paquetes) y se utiliza para instalar, actualizar y desinstalar paquetes Python y sus dependencias, si escribimos "pip --version" en la terminal nos mostrará la versión del administrador de paquetes.</p>
                                    <img className="w-75 d-block mx-auto" style={{ marginBottom: "7rem" }} alt="" src="../img/clase1/t5.webp"></img>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mt-4 rounded-5" style={{ background: "#010483" }}>
                            <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a7" aria-expanded="false" aria-controls="flush-collapseSeven">
                                <h2 data-aos="fade-right" className="text-light">Ejecución del primer programa</h2>
                            </button>
                            <div id="a7" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                                    <p className="mt-4 mb-2 text-center mx-auto w-75">Para ejecutar nuestro primer programa primero debemos ubicarnos en la carpeta en donde queremos tener nuestro programa, para esto debemos ir a "open folder" </p>
                                    <img className="w-75 d-block mx-auto" style={{ marginBottom: "4rem" }} alt="" src="../img/clase1/p1.webp"></img>
                                    <p className="mt-4 mb-2 text-center mx-auto w-75">Nos aparecerá una pantalla en donde podemos indicarle en que carpeta queremos crear nuestro programa, luego irnos a la carpeta deseada vamos a tocar "seleccionar carpeta"</p>
                                    <img className="w-75 d-block mx-auto" style={{ marginBottom: "4rem" }} alt="" src="../img/clase1/p2.webp"></img>
                                    <p className="mt-4 mb-2 text-center mx-auto w-75">Luego de seleccionar la carpeta veremos que en la parte superior izquierda nos aparecerá el nombre de la carpeta seleccionada y en el lado derecho tendremos varios items, el primer item nos dejará que podamos crear un archivo, el segundo nos dejará que podamos crear una carpeta,
                                        el tercero refrescará la carpeta, el cuarto item nos dejará contraer o plegar una carpeta. en este caso usaremos el primer item para crear un archivo.</p>
                                    <img className="w-75 d-block mx-auto" style={{ marginBottom: "4rem" }} alt="" src="../img/clase1/p3.webp"></img>
                                    <p className="mt-4 mb-2 text-center mx-auto w-75">Al crear el archivo le debemos escribir el nombre deseado para el archivo seguido de un ".py" para indicar al programa de que es un archivo de python, por ejemplo: index.py </p>
                                    <img className="w-75 d-block mx-auto" style={{ marginBottom: "7rem" }} alt="" src="../img/clase1/p4.webp"></img>
                                    <h2 className=" text-center">Salida de datos - print()</h2>
                                    <p className="mt-4 mb-2 text-center mx-auto w-75">Existen diferentes formas de comunicarnos con nuestros scripts de Python
                                        con el objetivo de poder representar la información que el script nos quiere
                                        mostrar o poder ingresar alguna acción al programa por medio del teclado u otra entrada,
                                        en este contenido veremos las instrucciones de entradas y salidas de python más comunes
                                        que usaremos a lo largo del curso.
                                    </p>
                                    <p className="mt-4 mb-4 text-center mx-auto w-75">Salida de datos: La función print() es sin duda una de las instrucciones más sencillas y que usaremos en el curso,
                                        ya que nos permite mostrar información por consola como mensajes, números o valores de una
                                        variable. para su uso solo le pasamos en los argumentos lo que deseamos mostrar en consola.
                                    </p>
                                    <p className="mt-4 mb-2 text-center mx-auto w-75">Al seleccionar el archivo de python, se nos va abrir una pestaña en donde vamos a poder empezar a escribir código.<br></br> Para empezar a probar la función "input" escribiremos por ejemplo: input("Bienvenido al curso de introducción de python"), al escribir esto veremos un punto blanco al lado de la pestaña, esto nos indica que escribimos en el archivo de python pero no está guardado, para guardarlo debemos presionar Ctrl + S</p>
                                    <img className="w-75 d-block mx-auto" style={{ marginBottom: "4rem" }} alt="" src="../img/clase1/p5.webp"></img>
                                    <p className="mt-4 mb-2 text-center mx-auto w-75">Para ejecutar el programa debemos escribir en la terminal "python" seguido del nombre del archivo que queramos ejecutar, por ejemplo: python index.py. Al ejecutar nos mostrará en la terminal lo que escribimos en el input.</p>
                                    <img className="w-75 d-block mx-auto" style={{ marginBottom: "7rem" }} alt="" src="../img/clase1/p6.webp"></img>
                                    <h2 className=" text-center">Comentarios - #, """ """</h2>
                                    <p className="mt-4 mb-2 text-center mx-auto w-75">Un comentario es una porción de texto que se incluye en el código fuente, pero que no se ejecuta como parte del programa, estos comentarios se utilizan para documentar el código y proporcionar información adicional sobre lo que hace cada línea o sección de código.<br></br>
                                        Cuando Python encuentra un símbolo "#" en el código fuente, ignora todo lo que sigue en esa línea, incluido el propio "#" y cualquier texto que lo siga. Por lo tanto, el uso de "#" permite a los programadores incluir notas y explicaciones en el código fuente sin afectar el funcionamiento del programa, tambiém si querés escribir en varias lineas de codigo podes encerrar el mensaje entre 3 comillas simples o dobles (""" """,''' ''').
                                    </p>
                                    <img className="w-75 d-block mx-auto" style={{ marginBottom: "7rem" }} alt="" src="../img/clase1/p7.webp"></img>
                                    <h2 className=" text-center">Entrada de datos - input()</h2>
                                    <p className="mt-4 mb-4 text-center mx-auto w-75">La función input() permite obtener información
                                        en la terminal desde el teclado, al momento de ejecutarse esta línea en la consola esperara
                                        que ingresemos el texto que necesitemos y demos un enter para continuar y guardar el valor
                                        capturado en una variable de programa.
                                    </p>
                                    <p className="mt-4 mb-2 text-center mx-auto w-75">En este ejemplo vamos a indicarle al usuario que escriba su nombre escribiendo: input("Escribe tu nombre: "). Veremos que cuando ejecutamos el programa nos aparecerá este mismo mensaje en la terminal, dejándonos poder escribir el nombre.
                                    </p>
                                    <img className="w-75 d-block mx-auto" style={{ marginBottom: "4rem" }} alt="" src="../img/clase1/p8.webp"></img>
                                    <p className="mt-4 mb-2 text-center mx-auto w-75">En este ejemplo vamos a indicarle al usuario que escriba su nombre escribiendo: input("Escribe tu nombre: "). Veremos que cuando ejecutamos el programa nos aparecerá este mismo mensaje en la terminal, dejándonos poder escribir el nombre.
                                    </p>
                                    <img className="w-75 d-block mx-auto" style={{ marginBottom: "7rem" }} alt="" src="../img/clase1/p9.webp"></img>
                                    <h2 className=" text-center">función len()</h2>
                                    <p className="mt-4 mb-4 text-center mx-auto w-75">La función len() permite obtener la longitud de caracteres que existen dentro del paréntesis.
                                    </p>
                                    <p className="mt-4 mb-2 text-center mx-auto w-75">Por ejemplo si queremos mostrar en pantalla cuántos caracteres tiene la palabra "programación", debemos usar un input y dentro la funcion len(): input(len("Programación")), esto nos retornará la cantidad de caracteres que hay.
                                    </p>
                                    <img className="w-75 d-block mx-auto" style={{ marginBottom: "7rem" }} alt="" src="../img/clase1/p10.webp"></img>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mt-4 rounded-5" style={{ background: "#010483" }}>
                            <button className="accordion-button collapsed bg-transparent" type="button">
                                <Link to="/pythonClassFile/class1.py"
                                    target={"_blank"}
                                    download={"class1.py"}>
                                    <h2 data-aos="fade-right" className="text-light">Descarga el archivo de la clase 1</h2>
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Class1