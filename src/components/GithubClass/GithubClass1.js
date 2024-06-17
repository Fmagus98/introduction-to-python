import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../../Utils/firebase'
import { collection, getDocs } from 'firebase/firestore'
import { colorPrimaryPython } from '../../colors'
import useScrollAnimation from '../../useScrollAnimation'
// import { CopyButton } from '../CopyButton/CopyButton'



const GithubClass1 = () => {

    const elementVisibility = useScrollAnimation();
    const [date, setDate] = useState()
    const newDate = new Date()
    useEffect(() => {
        getDocs(collection(db, "classGithub")).then(response => {
            response.docs.map(doc => {
                if (doc.id === "26FRYWt99U3HPuaCfGky") {
                    return setDate(doc.data().date.toDate())
                }
                return null
            })
        })
    }, [])

    return (
        <>{
            (new Date(date) <= newDate) || localStorage.getItem("access") ?
                <>
                    <section id="hero" style={{ background: colorPrimaryPython }}>
                        <div className="container">
                            <div className="row justify-content-between">
                                <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
                                    <div>
                                        <h1>Clase 1: Introducción a Git y GitHub</h1>
                                        <h2>Diferencia entre Git y GitHub, importancia del control de versiones.</h2>
                                        <h2>Instalación de Git, configuración de nombre de usuario y correo electrónico.</h2>
                                        <h2>Creación y configuración inicial</h2>
                                        <div className="text-center text-lg-start">
                                            <a href="/#clase1" className="btn-get-started scrollto">Contenido de la clase 1</a>
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
                    <section id="faq" className="faq section-bg">
                        <div className="container">
                            <div id="element1" className={`section-title animated-down ${elementVisibility.element1 ? 'slide-down' : ''}`}>
                                <h2>Clase 1</h2>
                                <p>Contenido</p>
                            </div>
                            <div className="accordion accordion-flush w-100 mx-auto" id="accordionFlushExample">
                                <div id="element2" className={`accordion-item animated-left ${elementVisibility.element2 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }} >
                                    <button className="accordion-button collapsed  bg-transparent text-light" type="button" data-bs-toggle="collapse" data-bs-target="#a1" aria-expanded="false" aria-controls="flush-collapseOne">
                                        <h2>¿Que es git?</h2>
                                    </button>
                                    <div id="a1" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className=" accordion-body text-light bg-dark">
                                            <img className="mx-auto d-block w-25 border-content" alt="Representación binaria en letras" src='../../img/classGithub/github1.png' />
                                            <h3 className="mt-7 text-break mx-auto w-75 fw-bold">Definición de Git</h3>
                                            <p className="text-break mx-auto w-75">Git es un sistema de control de versiones distribuido que permite a los desarrolladores rastrear y gestionar los cambios en el código fuente de un proyecto a lo largo del tiempo. Fue creado por Linus Torvalds en 2005, principalmente para el desarrollo del kernel de Linux.</p>
                                            <h3 className="mt-4 text-break mx-auto w-75 fw-bold">Código binario</h3>
                                            <p className="text-break mx-auto w-75">El código binario es un sistema de representación de información que utiliza solamente dos dígitos: 0 y 1. Cada dígito se llama bit y puede ser 0 o 1.
                                                La cantidad de bits en un código binario varía según la información que se necesita representar, siendo los múltiplos de 8 (8, 16, 32, 64 y 128) los números más comunes.
                                                Por ejemplo, un byte consta de 8 bits y puede representar 256 valores únicos (2^8).</p>
                                            <p className="text-break mx-auto w-75">En los inicios de las computadoras, el código binario era la única forma de representar la información, lo que requería que los programas fueran escritos
                                                en este sistema. Sin embargo, este proceso era lento y propenso a errores ya que los programadores tenían que convertir manualmente cada instrucción y dato en una serie de ceros y unos.</p>
                                            <h3 className="text-center mt-4 mb-4 mx-auto w-75 fw-bold">Representación de números en código binario</h3>
                                            <img className="text-center mx-auto d-block w-75 border-content" alt="Representación binaria en números" src='../img/class1/btot.webp' />
                                            <h3 className="text-center mt-4 mb-4 mx-auto w-75 fw-bold">Representación de letras en código binario</h3>
                                            <img className="mx-auto d-block w-75 border-content" alt="Representación binaria en letras" src='../img/class1/btot2.webp' />
                                            <h3 className="mt-4 text-break mx-auto w-75 fw-bold">Comienzos de la computación</h3>
                                            <p className="text-break mx-auto w-75">En las primeras computadoras, el código binario era la única forma de representar la información. Los datos se almacenaban y se procesaban en forma de bits,
                                                lo que significaba que los programas debían ser escritos en código binario. Esto requería que los programadores convirtieran cada instrucción y dato en una
                                                serie de ceros y unos, lo que era un proceso lento y propenso a errores.
                                            </p>
                                            <p className="text-break mx-auto w-75">Más adelante se empezó a utilizar programas como Ensamblador, este lenguaje empezaba a utilizar letras y números en vez de 0 y 1, esto ocasionó que sea un poco
                                                más legible y fácil de recordar aunque estaba muy alejado aún del lenguaje humano.</p>
                                            <h3 className="mt-4 text-break mx-auto w-75 fw-bold">Limitaciones de los 8 bits</h3>
                                            <p className="text-break mx-auto w-75">A mediado de los 80' las consolas estaban hechas en 8-bits como la NES de Nintendo y la Master System de SEGA a la cabeza. En el juego "Pac-man" existe un error por estas limitaciones de bits,
                                                en la programación del juego existe una variable encargada de ser el contador de los niveles del juego, al llegar al nivel 256 el procesador no es capaz de calcularlo y aparece en pantalla este error. </p>
                                            <img className="w-75 mx-auto d-block border-content" alt="" src='../img/class1/PMg.webp' />
                                            <h3 className="mt-4 text-break mx-auto w-75 fw-bold">Programación actual</h3>
                                            <p className="text-break mx-auto w-75">Finalmente, surgen los llamados lenguajes de alto nivel. Estos van a ser un proceso intermedio entre el lenguaje máquina(binario) y el lenguaje humano (proceso por compilador o intérprete).</p>
                                            <img className="w-75 mx-auto d-block border-content" style={{ marginBottom: "7rem" }} alt="" src='../img/class1/cvsi.webp' />
                                        </div>
                                    </div>
                                </div>
                                <div id="element3" className={`accordion-item mt-4  animated-left ${elementVisibility.element3 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
                                    <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a2" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        <h2 className="text-light">Perfil de un programador</h2>
                                    </button>
                                    <div id="a2" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body text-light bg-dark  ">
                                            <p className="text-break mx-auto mt-7 w-75">El perfil de un programador puede variar dependiendo de sus habilidades, experiencia y especialización. Sin embargo, hay algunas características y habilidades comunes que suelen definir a un programador.
                                            </p>
                                            <h3 className="mt-4 text-break mx-auto w-75 fw-bold">Tener conocimientos básicos de programación</h3>
                                            <p className="text-break mx-auto w-75">Los programadores tienen un conocimiento sólido de al menos un lenguaje de programación y están familiarizados con los conceptos fundamentales de la programación, como variables, estructuras de control, funciones, algoritmos, etc.</p>
                                            <h3 className="mt-4 text-break mx-auto w-75 fw-bold">Ser resolutivo a los problemas</h3>
                                            <p className="text-break mx-auto w-75">Los programadores son buenos para analizar problemas, identificar soluciones y desarrollar algoritmos eficientes para resolverlos. Tienen habilidades de pensamiento lógico y capacidad para descomponer problemas complejos en partes más pequeñas y manejables.</p>
                                            <h3 className="mt-4 text-break mx-auto w-75 fw-bold">Estar activamente aprendiendo</h3>
                                            <p className="text-break mx-auto w-75">Los programadores están dispuestos a aprender nuevas tecnologías, lenguajes de programación y herramientas para mantenerse actualizados en un campo en constante evolución. Están abiertos a la mejora continua y se adaptan rápidamente a nuevos desafíos.</p>
                                            <h3 className="mt-4 text-break mx-auto w-75 fw-bold">Prestar atención a los detalles</h3>
                                            <p className="text-break mx-auto w-75">Los programadores prestan atención a los detalles y son precisos en su trabajo. Un pequeño error en el código puede tener un gran impacto, por lo que son cuidadosos al escribir, probar y depurar su código.</p>
                                            <h3 className="mt-4 text-break mx-auto w-75 fw-bold">Tener buena comunicación con el equipo</h3>
                                            <p className="text-break mx-auto w-75">Los programadores suelen trabajar en equipo, colaborando con otros desarrolladores, diseñadores y profesionales de TI. Tienen habilidades de comunicación efectivas y pueden trabajar en proyectos colaborativos.</p>
                                            <h3 className="mt-4 text-break mx-auto w-75 fw-bold">Tener pensamiento analítico</h3>
                                            <p className="text-break mx-auto w-75">Los programadores tienen la capacidad de analizar y comprender problemas complejos, descomponerlos en partes más pequeñas y aplicar soluciones lógicas y estructuradas.</p>
                                            <h3 className="mt-4 text-break mx-auto w-75 fw-bold">Ser creativo</h3>
                                            <p className="text-break mx-auto w-75" style={{ marginBottom: "7rem" }}>La programación también requiere creatividad para encontrar soluciones innovadoras y eficientes. Los programadores pueden encontrar diferentes enfoques y perspectivas para resolver problemas.</p>
                                        </div>
                                    </div>
                                </div>
                                <div id="element4" className={`accordion-item mt-4  animated-left ${elementVisibility.element4 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
                                    <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a3" aria-expanded="false" aria-controls="flush-collapseThree">
                                        <h2 className="text-light">¿Que es python?</h2>
                                    </button>
                                    <div id="a3" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body text-light bg-dark  ">
                                            <div id="content">
                                                <h3 className="mt-7 text-break mx-auto w-75 fw-bold">Guido Van Rossum</h3>
                                                <img className="d-block mx-auto w-25 border-content" alt="" src="../img/class1/guido.webp"></img>
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
                                                <img className="d-block mx-auto w-75 border-content mb-7" alt="" src="../img/class1/ep.webp"></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="element5" className={`accordion-item mt-4  animated-left ${elementVisibility.element5 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
                                    <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a4" aria-expanded="false" aria-controls="flush-collapseFour">
                                        <h2 className="text-light">Caracteristicas de python</h2>
                                    </button>
                                    <div id="a4" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body text-light bg-dark  ">
                                            <h3 className="mt-7 text-break mx-auto w-75 fw-bold">lenguaje de alto nivel</h3>
                                            <p className="text-break mx-auto w-75">Dentro de la programación hay tipos niveles, estos niveles determinan la complejidad en la podemos programar
                                                en dicho lenguaje. Si el nivel es más bajo, este se acercará más al lenguaje máquina(código binario) y facilitará a la maquina a interpretar más rápido
                                                pero a la vez es más complejo para los programadores programar en este lenguaje ya que se aleja del lenguaje humano.</p>
                                            <img className="w-75 mx-auto d-block border-content" alt="" src="../img/class1/level.webp"></img>
                                            <h3 className="mt-4 text-break mx-auto w-75 fw-bold">Case sensitive</h3>
                                            <p className="text-break mx-auto w-75"> Lo que significa que distingue entre mayúsculas y minúsculas en los nombres de variables, funciones, clases, módulos y otros identificadores. Esto significa que
                                                dos identificadores que se diferencian solo en su uso de mayúsculas y minúsculas se consideran diferentes en Python.</p>
                                            <h3 className="mt-4 text-break mx-auto w-75 fw-bold">Implementación</h3>
                                            <p className="text-break mx-auto w-75">La implementación de Python se refiere a la forma en que se ejecuta el código de Python. Hay varias implementaciones de Python disponibles, aquí hay algunas de las más populares:</p>
                                            <ul>
                                                <ol>
                                                    <p className="text-break mx-auto w-75"><span className="fw-bold">CPython</span> Es la implementación más común de Python y está escrita en C. CPython es la implementación predeterminada de Python y es utilizada por la mayoría de los programadores de Python.</p>
                                                </ol>
                                                <ol>
                                                    <p className="text-break mx-auto w-75"><span className="fw-bold">Jython</span> Es una implementación de Python escrita en Java. Jython permite a los programadores utilizar Python en una máquina virtual Java y acceder a las librerías y frameworks de Java.</p>
                                                </ol>
                                                <ol>
                                                    <p className="text-break mx-auto w-75"><span className="fw-bold">IronPython</span> Es una implementación de Python escrita en C# y diseñada para el entorno .NET. IronPython permite a los programadores utilizar Python en el entorno .NET y acceder a las librerías y frameworks de .NET.</p>
                                                </ol>
                                                <ol>
                                                    <p className="text-break mx-auto w-75"><span className="fw-bold">PyPy</span> Es una implementación de Python escrita en Python. PyPy es conocido por ser mucho más rápido que CPython, especialmente en aplicaciones que requieren mucho cálculo.</p>
                                                </ol>
                                                <ol>
                                                    <p className="text-break mx-auto w-75"><span className="fw-bold">MicroPython</span> Es una implementación de Python diseñada para ser utilizada en microcontroladores y dispositivos de baja potencia. MicroPython es una versión reducida de Python que incluye un conjunto limitado de librerías y frameworks.</p>
                                                </ol>
                                            </ul>
                                            <h3 className="mt-4 text-break mx-auto w-75 fw-bold">MULTIPLATAFORMA</h3>
                                            <p className="text-break mx-auto w-75">Python se puede utilizar en una amplia variedad de plataformas, incluyendo Windows, macOS y Linux, lo que lo hace muy versátil y útil en diferentes entornos de trabajo.</p>
                                            <img className="w-75 mx-auto mb-7 d-block border-content" alt="" src="../img/class1/os.webp"></img>
                                        </div>
                                    </div>
                                </div>
                                <div id="element6" className={`accordion-item mt-4  animated-left ${elementVisibility.element6 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
                                    <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a5" aria-expanded="false" aria-controls="flush-collapseFive">
                                        <h2 className="text-light">Python en el mercado laboral</h2>
                                    </button>
                                    <div id="a5" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body text-light bg-dark  ">
                                            <h3 className="mt-7 mb-4 fw-bold text-center">BIG DATA</h3>
                                            <img className="w-50 mx-auto d-block border-content" alt="" src="../img/class1/bd.webp"></img>
                                            <p className="mt-4 mb-7 text-break mx-auto w-50">El uso de Python está muy extendido en dos áreas:
                                                el análisis de datos y el big data. Su sencillez y su gran número de bibliotecas de procesamiento
                                                de datos hacen que Python sea ideal a la hora de analizar y gestionar una gran cantidad de
                                                datos en tiempo real.</p>
                                            <h3 className="mt-4 mb-4 fw-bold text-center">DATA MINING</h3>
                                            <img className="w-50 mx-auto d-block border-content" alt="" src="../img/class1/dm.webp"></img>
                                            <p className="mt-4 mb-7 text-break mx-auto w-50"> La minería de datos o data mining es un
                                                proceso que permite analizar grandes bases de datos con el objetivo de predecir futuras
                                                tendencias. Se trata de un proceso complejo al que Python puede ayudar, a través de la
                                                limpieza, organización de datos y del uso de algoritmos de aprendizaje automático que
                                                simplifica el análisis de datos.</p>
                                            <h3 className="mt-4 mb-4 fw-bold text-center">DATA SCIENCIE</h3>
                                            <img className="w-50 mx-auto d-block border-content" alt="" src="../img/class1/ds.webp"></img>
                                            <p className="mt-4 mb-7 text-break mx-auto w-50">Los nuevos motores numéricos como “Pandas”
                                                o “NumPy”, Python están dejando atrás a  MATLAB, lenguaje usado por científicos para trabajar
                                                con un gran número de datos. Python vuelve a destacar por su simplicidad y  potencial para trabajar
                                                con un gran número de datos,  el gran número de bibliotecas existentes, hacen que Python sea ideal
                                                para este tipo de tareas.</p>
                                            <h3 className="mt-4 mb-4 fw-bold text-center">INTELIGENCIA ARTIFICIAL</h3>
                                            <img className="w-50 mx-auto d-block border-content" alt="" src="../img/class1/ia.webp"></img>
                                            <p className="mt-4 mb-7 text-break mx-auto w-50">Cada vez se habla más de la inteligencia artificial
                                                (IA). Gran parte de su avance se debe a Python. Su facilidad de escritura y su robustez han convertido
                                                a Python en el aliado perfecto de la IA. Su capacidad de plasmar ideas complejas en pocas líneas, unidas
                                                al gran número de frameworks existentes, han hecho que Python sea uno de los lenguajes de programación
                                                que están impulsando a la IA.</p>
                                            <h3 className="mt-4 mb-4 fw-bold text-center">BLOCKCHAIN</h3>
                                            <img className="w-50 mx-auto d-block border-content" alt="" src="../img/class1/bc.webp"></img>
                                            <p className="mt-4 mb-7 text-break mx-auto w-50">
                                                Blockchain es una tecnología de registro distribuido que se utiliza para registrar transacciones de manera segura y verificable.
                                                Consiste en un registro en línea que se actualiza de manera permanente y que está protegido mediante técnicas criptográficas.</p>
                                            <h3 className="mt-4 mb-4 fw-bold text-center">MACHINE LEARNING</h3>
                                            <img className="w-50 mx-auto d-block border-content" alt="" src="../img/class1/ml.webp"></img>
                                            <p className="mt-4 mb-7 text-break mx-auto w-50">El machine learning o aprendizaje automático es otra de
                                                las tecnologías que está cambiando el mundo tal y como lo conocemos. La robótica y la IA son ahora capaces
                                                de aprender por sí mismas a medida que van procesando datos. De esta forma, obtienen información relevante
                                                que le permite tomar las decisiones adecuadas. Por supuesto, Python es también muy eficaz en este campo,
                                                en el tratamiento de datos eficaz es esencial.</p>
                                            <h3 className="mt-4 mb-4 fw-bold text-center">DESARROLLO WEB</h3>
                                            <img className="w-50 mx-auto d-block border-content" alt="" src="../img/class1/dw.webp"></img>
                                            <p className="mt-4 mb-7 text-break mx-auto w-50">Python permite desarrollar webs complejas con menos líneas de
                                                código, haciéndolas más ligeras y optimizadas. Django es uno de los frameworks de Python más populares de la actualidad,
                                                que puede ser utilizado para crear webs dinámicas y muy seguras. Python es empleado para hacer scraping, es decir,
                                                extraer información de sitios web, como hacen Netflix o Instagram.</p>
                                            <h3 className="mt-4 mb-4 fw-bold text-center">DESARROLLO DE VIDEOJUEGOS</h3>
                                            <img className="w-50 mx-auto d-block border-content" alt="" src="../img/class1/g&g3d.webp"></img>
                                            <p className="mt-4 mb-7 text-break mx-auto w-50" style={{ marginBottom: "7rem" }}>Juegos como Battelfield 2 o los Sims 4, parte de su código está escrito en este lenguaje de programación. <br></br>
                                                A través de librerías como Pygame o Panda 3D, podrás enfocar tu desempeño profesional aparte desarrollo gaming, pero hay otras tantas que están recogidas en wiki python.
                                                Pero Python no tiene la posibilidad de realizarlos al completo, por lo que te animamos a que descubras otros lenguajes para programar videojuegos, como Java o Lua.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div id="element7" className={`accordion-item mt-4  animated-left ${elementVisibility.element7 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
                                    <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a6" aria-expanded="false" aria-controls="flush-collapseFive">
                                        <h2 className="text-light">¿Que arquitectura tengo en mi pc?</h2>
                                    </button>
                                    <div id="a6" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body text-light bg-dark">
                                            <p className="mt-7 mb-4 text-break mx-auto w-75">La arquitectura de 32 bits y 64 bits se refiere a cómo un procesador maneja la información. Estos términos se refieren a la cantidad de datos que un procesador puede procesar en un solo ciclo de reloj y la cantidad máxima de memoria que puede direccionar el procesador.</p>
                                            <p className="mt-7 mb-4 text-break mx-auto w-75">Es importante saberlo ya que vamos a instalar una versión diferente de python e IDE para cada caso. Para saber que tipo de arquitectura tengo en mi pc debemos hacer lo siguiente:</p>
                                            <ul className="intr-ul"><p className='mx-auto w-75'><b>En Windows</b></p>
                                                <li>
                                                    <p className="mt-4 mb-4 text-break mx-auto w-75"><span className="fw-bold">1_</span>Toca la tecla windows, escribe en el buscador "sistema" y selecciona el primero que aparezca.</p>
                                                    <img className="w-75 mx-auto d-block border-content" alt="" src="../img/class1/w1.webp"></img>
                                                </li>
                                                <li>
                                                    <p className="mt-4 mb-4 text-break mx-auto w-75"><span className="fw-bold">2_ </span>Dentro del sistema verás la información de tu computadora, allí encontrarás que tipo de arquitectura tiene tu pc.</p>
                                                    <img className="w-75 mx-auto d-block border-content" alt="" src="../img/class1/w2.webp"></img>
                                                </li>
                                            </ul>
                                            <ul className="intr-ul"><p className='mx-auto w-75'><b>En MacOS</b></p>
                                                <li>
                                                    <p className="mt-4 mb-4 text-break mx-auto w-75"><span className="fw-bold">1_ </span>Pulsamos el icono de la manzana y seleccionamos en "Sobre este Mac".</p>
                                                    <img className="w-75 mx-auto d-block border-content" alt="" src="../img/class1/m1.webp"></img>
                                                </li>
                                                <li>
                                                    <p className="mt-4 mb-4 text-break mx-auto w-75"><span className="fw-bold">2_ </span>Dentro de la pantalla que se abrió, seleccionamos "informe del sistema".</p>
                                                    <img className="w-75 mx-auto d-block border-content" alt="" src="../img/class1/m2.webp"></img>
                                                </li>
                                                <li>
                                                    <p className="mt-4 mb-4 text-break mx-auto w-75"><span className="fw-bold">3_ </span>Ingresa a "Extensiones" y dentro verás la información de tu procesador, en el caso que diga "x86_64" en arquitectura y "Si" en 64 bits(intel) será de 64 bits, en caso contrario es de 32 bits.</p>
                                                    <img className="w-75 mx-auto d-block border-content" alt="" src="../img/class1/m3.webp"></img>
                                                </li>
                                            </ul>
                                            <ul className="intr-ul"><p className='mx-auto w-75'><b>En Linux</b></p>
                                                <li>
                                                    <p className="mt-4 mb-4 text-break mx-auto w-75"><span className="fw-bold">1_ </span>Abre el terminal con las teclas Ctrl + Alt + T, o desde Aplicaciones/Accesorios/Terminal (Estos atajos se basan en Linux/Ubuntu) y luego escribe "lscpu", ejecutalo y te mostrará que tipo de arquitectura es. Si esta marca “32-bits, 64-bits” es de 64 bits, por el contrario si te marca solo 32-bits, tu ordenador es de 32 bits.</p>
                                                    <img className="w-75 mx-auto d-block border-content" style={{ marginBottom: "7rem" }} alt="" src="../img/class1/l1.webp"></img>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div id="element8" className={`accordion-item mt-4  animated-left ${elementVisibility.element8 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
                                    <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a7" aria-expanded="false" aria-controls="flush-collapseFive">
                                        <h2 className="text-light">Instalación de python</h2>
                                    </button>
                                    <div id="a7" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body text-light bg-dark">
                                            <p className="mt-7 mb-4 text-break mx-auto w-75">1. Dirígete a <Link to="https://www.python.org/downloads" target="_blank" className="text-info">https://www.python.org/downloads</Link> y selecciona "Downloads"</p>
                                            <img className="w-75 mx-auto d-block border-content " alt="" src="../img/class1/python1.webp"></img>
                                            <p className="mt-7 mb-4 text-break mx-auto w-75">2. Luego iremos a "All releases" </p>
                                            <img className="w-75 mx-auto d-block border-content" alt="" src="../img/class1/python2.webp"></img>
                                            <p className="mt-7 mb-4 text-break mx-auto w-75">3. Buscamos la versión  3.8.3 y tocamos "download"</p>
                                            <img className="w-75 mx-auto d-block border-content" alt="" src="../img/class1/python3.webp"></img>
                                            <p className="mt-7 mb-4 text-break mx-auto w-75">4. Elegimos el sistema operativo que utilizamos en nuestro dispositivo y la arquitectura que tengamos sea 64 bits(86x_64 / x64) ó 32 bits(86x).</p>
                                            <img className="w-75 mx-auto d-block border-content" alt="" src="../img/class1/python4.webp"></img>
                                            <p className="mt-7 mb-4 text-break mx-auto w-75">5. Al instalar selecciona "add python 3.8 to PATH" y "install now"</p>
                                            <img className="w-75 mx-auto d-block border-content" style={{ marginBottom: "7rem" }} alt="" src="../img/class1/python5.webp"></img>
                                        </div>
                                    </div>
                                </div>
                                <div id="element9" className={`accordion-item mt-4  animated-left ${elementVisibility.element9 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
                                    <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a8" aria-expanded="false" aria-controls="flush-collapseSix">
                                        <h2 className="text-light">Entorno de desarrollo integrado (IDE)</h2>
                                    </button>
                                    <div id="a8" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body text-light bg-dark  ">
                                            <p className="mt-4 mb-4 text-break mx-auto w-75">Para programar en un lenguaje de programación debemos tener en nuestro ordenador un entorno de desarrollo integrado, más conocido como IDE,
                                                Un IDE combina un editor de código, un compilador o intérprete, herramientas de depuración, un sistema de gestión de versiones,
                                                entre otras funcionalidades, en una sola aplicación integrada.
                                                Esta integración facilita el trabajo de los programadores al permitirles desarrollar y probar aplicaciones de software en un solo entorno.
                                            </p>
                                            <p className="text-break mx-auto w-75">Estos son unos de los IDEs más comunes que se utilizan para el lenguaje de programación python:</p>
                                            <img className="w-50 d-block mx-auto border-content" alt="" src="../img/class1/IDE.webp"></img>
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
                                <div id="element10" className={`accordion-item mt-4  animated-left ${elementVisibility.element10 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
                                    <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a9" aria-expanded="false" aria-controls="flush-collapseSeven">
                                        <h2 className="text-light">Instalación de IDE</h2>
                                    </button>
                                    <div id="a9" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body text-light bg-dark  ">
                                            <h3 className="mt-4 text-break w-75 mx-auto">Instalación de IDE para sistema operativo de 64 bits</h3>
                                            <p className="mt-4 mb-4 text-break mx-auto w-75">En este curso utilizaremos Visual Studio Code, es un editor de código ligero pero potente que se ha vuelto muy popular entre los desarrolladores por su facilidad de poder programar en diferentes lenguajes de programación, incluido Python.</p>
                                            <p className="mt-4 mb-4 text-break mx-auto w-75">1 - Para instalarlo ve al sitio web oficial de Visual Studio Code en <Link to="https://code.visualstudio.com" target="_blank" className="text-info">https://code.visualstudio.com</Link>.<br></br>En "Download for Windows"  van a la palomita que esta al lado derecho y van a ver los diferentes sistemas operativos en el que pueden descargarlo</p>
                                            <img className="w-75 mx-auto d-block border-content" alt="" src="../img/class1/ide1.webp"></img>
                                            <p className="mt-4 mb-4 text-break mx-auto w-75">2 - Selecciona "Acepto el acuerdo" y luego "siguiente" para seguir con la instalación.</p>
                                            <img className="w-75 mx-auto d-block border-content" alt="" src="../img/class1/ide2.webp"></img>
                                            <p className="mt-4 mb-4 text-break mx-auto w-75">3 - Selecciona todos los checkbox y haz click derecho en el botón "siguiente".</p>
                                            <img className="w-75 mx-auto d-block border-content" alt="" src="../img/class1/ide3.webp"></img>
                                            <p className="mt-4 mb-4 text-break mx-auto w-75">4 - Haz click derecho en el boton "siguiente".</p>
                                            <img className="w-75 mx-auto d-block border-content" alt="" src="../img/class1/ide4.webp"></img>
                                            <p className="mt-4 mb-4 text-break mx-auto w-75">5 - Al terminar la instalación haz click en "finalizar" y abrirá Visual Studio Code!.</p>
                                            <img className="w-75 mx-auto d-block border-content" alt="" src="../img/class1/ide5.webp"></img>
                                            <h3 className="mt-4 text-break w-75 mx-auto">Instalación de IDE para sistema operativo de 32 bits</h3>
                                            <p className="mt-4 mb-4 text-break mx-auto w-75">En el caso que dispongas de una arquitectura de 32 bits, Visual Studio Code no es compatible y deberás ver otras alternativas, en este caso te daré una guía de como instalar Pycharm 2018.1.6(última version compatible con 32 bits).</p>
                                            <p className="mt-4 mb-4 text-break mx-auto w-75">1 - Para instalarlo ve al sitio web oficial de Pycharm en <Link to="https://www.jetbrains.com/pycharm/download/other.html" target="_blank" className="text-info">https://www.jetbrains.com/pycharm/download/other.html</Link> y selecciona el sistema operativo que utilizas.</p>
                                            <img className="w-75 mx-auto d-block border-content" alt="" src="../img/class1/pych1.webp"></img>
                                            <p className="mt-4 mb-4 text-break mx-auto w-75">2 - Ejecuta el instalador que descargaste y selecciona "Next".</p>
                                            <img className="w-75 mx-auto d-block border-content" alt="" src="../img/class1/pych2.webp"></img>
                                            <p className="mt-4 mb-4 text-break mx-auto w-75">3 - Selecciona "Next".</p>
                                            <img className="w-75 mx-auto d-block border-content" alt="" src="../img/class1/pych3.webp"></img>
                                            <p className="mt-4 mb-4 text-break mx-auto w-75">4 - Presiona en "32-bit launcher", ".py" y selecciona "Next".</p>
                                            <img className="w-75 mx-auto d-block border-content" alt="" src="../img/class1/pych4.webp"></img>
                                            <p className="mt-4 mb-4 text-break mx-auto w-75">5 - Selecciona "Install" y espera a que se instale.</p>
                                            <img className="w-75 mx-auto d-block border-content" alt="" src="../img/class1/pych5.webp"></img>
                                            <p className="mt-4 mb-4 text-break mx-auto w-75">4 - Selecciona "Finish". </p>
                                            <img className="w-75 mx-auto d-block border-content" style={{ marginBottom: "7rem" }} alt="" src="../img/class1/pych6.webp"></img>
                                        </div>
                                    </div>
                                </div>
                                <div id="element11" className={`accordion-item mt-4  animated-left ${elementVisibility.element11 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
                                    <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a10" aria-expanded="false" aria-controls="flush-collapseSeven">
                                        <h2 className="text-light">Herramientas de Visual Studio Code (IDE)</h2>
                                    </button>
                                    <div id="a10" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body text-light bg-dark  ">
                                            <h3 className="mt-4 text-break w-75 mx-auto">Extensiones en Visual Studio Code</h3>
                                            <p className="mt-4 mb-4 text-break mx-auto w-75">En nuestro Visual Studio Code tenemos bastantes herramientas que nos falicitará a la hora de
                                                programar en python, unas de ellas son las extensiones descargables que se nos va a proporcionar en el programa</p>
                                            <p className="mt-4 mb-4 text-break mx-auto w-75">Para descargar extensiones tendremos que ir a la barra que está en la parte superior izquierda y tocamos el logo indicado en la imagen</p>
                                            <img className="w-75 d-block mx-auto border-content" alt="" src="../img/class1/ext1.webp"></img>
                                            <p className="mt-4 mb-4 text-break mx-auto w-75">Al tocar el logo veremos que tenemos un buscador para buscar extensiones, un apartado llamado "installed" donde tendrémos todas las extensiones que instalamos y un apartado llamado "recommended" donde vamos a tener extensiones que podría servirnos al utilizar un lenguaje en especial</p>
                                            <img className="w-75 d-block mx-auto border-content" alt="" src="../img/class1/ext2.webp"></img>
                                            <h3 className="mt-4 mb-4 text-break mx-auto w-75">Lista de extensiones que utilizaremos en python</h3>
                                            <ul className="intr-ul">
                                                <li><p className="mt-4 mb-4 text-break mx-auto w-75">Spanish Language Pack for Visual Studio Code: Esta extensión nos facilitará toda la interfaz de usuario de visual studio code a español</p></li>
                                                <li><p className="mt-4 mb-4 text-break mx-auto w-75">Python: les proporcionará autocompletado avanzado,Análisis estático de código y detección de errores.</p></li>
                                                <li><p className="mt-4 mb-4 text-break mx-auto w-75">Python Environment Manager: Gestiona entornos virtuales de Python y seleccionar qué entorno virtual se va a utilizar en un proyecto de Python en particular.</p></li>
                                                <li><p className="mt-4 mb-4 text-break mx-auto w-75">Python indent: Indentación automática para facilitar la lectura del códigoUna mala indentación puede hacer que el código sea difícil de leer y entender, lo que a su vez puede llevar a errores y problemas en el código.</p></li>
                                            </ul>
                                            <h3 className="mt-4 mx-auto w-75 text-break">Terminal - Python y pip</h3>
                                            <p className="mt-4 mb-4 text-break mx-auto w-75">Empecemos a utilizar visual studio code para verificar que se instaló correctamente python, si nos vamos a la parte superior del programa veremos unos "...", presionalo con click derecho y ve a Terminal/New terminal ó simplemente presiona ctrl+shift+ñ </p>
                                            <img className="w-75 d-block mx-auto border-content" alt="" src="../img/class1/t1.webp"></img>
                                            <p className="mt-4 mb-4 text-break mx-auto w-75">Observamos que se abrirá la terminal en la parte inferior del programa, dentro de la terminal te mostrará la dirección en donde se está ejecutando la terminal. </p>
                                            <img className="w-75 d-block mx-auto border-content" alt="" src="../img/class1/t2.webp"></img>
                                            <p className="mt-4 mb-4 text-break mx-auto w-75">Si escribimos en la terminal "python", nos mostrará la versión que estamos utilizando si está instalado.</p>
                                            <img className="w-75 d-block mx-auto border-content" alt="" src="../img/class1/t3.webp"></img>
                                            <p className="mt-4 mb-4 text-break mx-auto w-75">Para finalizar el proceso de ejecución que muestra la version de python escribiremos "exit()".</p>
                                            <img className="w-75 d-block mx-auto border-content" alt="" src="../img/class1/t4.webp"></img>
                                            <p className="mt-4 mb-4 text-break mx-auto w-75">Ya vimos que podemos ver la version de python escribiendo python, ahora empezaremos a ver pip.<br></br>Pip es un sistema de gestión de paquetes utilizado en Python para instalar y administrar bibliotecas y paquetes de terceros que no están incluidos en la biblioteca estándar de Python.
                                                <br></br><br></br>El nombre "pip" se deriva de la frase "Pip Installs Packages" (Pip instala paquetes) y se utiliza para instalar, actualizar y desinstalar paquetes Python y sus dependencias, si escribimos "pip --version" en la terminal nos mostrará la versión del administrador de paquetes.</p>
                                            <img className="w-75 d-block mx-auto border-content" style={{ marginBottom: "7rem" }} alt="" src="../img/class1/t5.webp"></img>
                                        </div>
                                    </div>
                                </div>
                                <div id="element12" className={`accordion-item mt-4  animated-left ${elementVisibility.element12 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
                                    <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a11" aria-expanded="false" aria-controls="flush-collapseSeven">
                                        <h2 className="text-light">Ejecución del primer programa</h2>
                                    </button>
                                    <div id="a11" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body text-light bg-dark  ">
                                            <h3 className="mt-4 text-break mx-auto w-75">Crea un proyecto en Visual Studio Code</h3>
                                            <p className="mt-4 mb-2 text-break mx-auto w-75">1_ Para ejecutar nuestro primer programa primero debemos ubicarnos en la carpeta en donde queremos tener nuestro programa, para esto debemos ir a "open folder" </p>
                                            <img className="w-75 mt-4 d-block mx-auto border-content" alt="" src="../img/class1/p1.webp"></img>
                                            <p className="mt-4 mb-2 text-break mx-auto w-75">2_ Nos aparecerá una pantalla en donde podemos indicarle en que carpeta queremos crear nuestro programa, luego irnos a la carpeta deseada vamos a tocar "seleccionar carpeta"</p>
                                            <img className="w-75 mt-4 d-block mx-auto border-content" alt="" src="../img/class1/p2.webp"></img>
                                            <p className="mt-4 mb-2 text-break mx-auto w-75">3_ Luego de seleccionar la carpeta veremos que en la parte superior izquierda nos aparecerá el nombre de la carpeta seleccionada y en el lado derecho tendremos varios items, el primer item nos dejará que podamos crear un archivo, el segundo nos dejará que podamos crear una carpeta,
                                                el tercero refrescará la carpeta, el cuarto item nos dejará contraer o plegar una carpeta. en este caso usaremos el primer item para crear un archivo.</p>
                                            <img className="w-75 mt-4 d-block mx-auto border-content" alt="" src="../img/class1/p3.webp"></img>
                                            <p className="mt-4 mb-4 text-break mx-auto w-75">4_ Al crear el archivo le debemos escribir el nombre deseado para el archivo seguido de un ".py" para indicar al programa de que es un archivo de python, por ejemplo: index.py </p>
                                            <img className="w-75 d-block mx-auto border-content" alt="" src="../img/class1/p4.webp"></img>
                                            <h3 className="mt-4 text-break mx-auto w-75">Crea proyecto en Pycharm</h3>
                                            <p className="mt-4 mb-2 text-break mx-auto w-75">1_ Abre Pycharm y selecciona "Open".</p>
                                            <img className="w-75 mt-4 d-block mx-auto border-content" alt="" src="../img/class1/pych7.webp"></img>
                                            <p className="mt-4 mb-2 text-break mx-auto w-75">2_ Selecciona la carpeta de tu escritorio (Desktop) y selecciona el logo de una carpeta.</p>
                                            <img className="w-75 mt-4 d-block mx-auto border-content" alt="" src="../img/class1/pych8.webp"></img>
                                            <p className="mt-4 mb-2 text-break mx-auto w-75">3_ Escribí el nombre de la carpeta que deseas crear en en escritorio(en este caso es "Clase1") y selecciona "OK".</p>
                                            <img className="w-75 mt-4 d-block mx-auto border-content" alt="" src="../img/class1/pych9.webp"></img>
                                            <p className="mt-4 mb-4 text-break mx-auto w-75">4_ Selecciona "OK".</p>
                                            <img className="w-75 d-block d-block mx-auto border-content" alt="" src="../img/class1/pych10.webp"></img>
                                            <p className="mt-4 mb-2 text-break mx-auto w-75">5_ Selecciona "Close".</p>
                                            <img className="w-75 mt-4 d-block mx-auto border-content" alt="" src="../img/class1/pych11.webp"></img>
                                            <p className="mt-4 mb-2 text-break mx-auto w-75">6_ Ahora debemos crear el archivo de python, para hacerlo haz click derecho con el mouse a la carpeta que creaste(Clase1) y dirigete a New/Pyhon File.</p>
                                            <img className="w-75 mt-4 d-block mx-auto border-content" alt="" src="../img/class1/pych12.webp"></img>
                                            <p className="mt-4 mb-4 text-break mx-auto w-75">7_ Escribe el nombre del archivo de python(en este caso es "programa1") y selecciona "OK".</p>
                                            <img className="w-75 d-block d-block mx-auto border-content" alt="" src="../img/class1/pych13.webp"></img>
                                            <p className="mt-4 mb-4 text-break mx-auto w-75">Cuando quieras ejecutar el programa debes abrir la terminal y ejecutar, para esto debes hacer click derecho con el mouse al archivo de python que creaste y dirigirte a "open to terminal".</p>
                                            <img className="w-75 d-block d-block mx-auto border-content" alt="" src="../img/class1/pych14.webp"></img>
                                            <p className="mt-4 mb-4 text-break mx-auto w-75">Al abrir la terminal escribe dentro "python" seguido del nombre del archivo, en este caso es "python programa1.py".</p>
                                            <img className="w-75 d-block d-block mx-auto border-content" alt="" src="../img/class1/pych15.webp"></img>
                                            <h3 className="mt-4 text-break mx-auto w-75">Salida de datos - print()</h3>
                                            <p className="mt-4 mb-2 text-break mx-auto w-75">Existen diferentes formas de comunicarnos con nuestros scripts de Python
                                                con el objetivo de poder representar la información que el script nos quiere
                                                mostrar o poder ingresar alguna acción al programa por medio del teclado u otra entrada,
                                                en este contenido veremos las instrucciones de entradas y salidas de python más comunes
                                                que usaremos a lo largo del curso.
                                            </p>
                                            <p className="mt-4 mb-4 text-break mx-auto w-75">Salida de datos: La función print() es sin duda una de las instrucciones más sencillas y que usaremos en el curso,
                                                ya que nos permite mostrar información por consola como mensajes, números o valores de una
                                                variable. para su uso solo le pasamos en los argumentos lo que deseamos mostrar en consola.
                                            </p>
                                            <p className="mt-4 mb-4 text-break mx-auto w-75">Al seleccionar el archivo de python, se nos va abrir una pestaña en donde vamos a poder empezar a escribir código.<br></br> Para empezar a probar la función "print" escribiremos por ejemplo: print("Bienvenido al curso de introducción de python"), al escribir esto veremos un punto blanco al lado de la pestaña, esto nos indica que escribimos en el archivo de python pero no está guardado, para guardarlo debemos presionar Ctrl + S</p>
                                         
                                            <img className="w-75 d-block mx-auto border-content" alt="" src="../img/class1/p5.webp"></img>
                                            <p className="mt-4 mb-4 text-break mx-auto w-75">Para ejecutar el programa debemos escribir en la terminal "python" seguido del nombre del archivo que queramos ejecutar, por ejemplo: python index.py. Al ejecutar nos mostrará en la terminal lo que escribimos en el input.</p>
                                            <img className="w-75 d-block mx-auto border-content" alt="" src="../img/class1/p6.webp"></img>
                                            <h3 className="mt-4 text-break mx-auto w-75">Comentarios - #, """ """</h3>
                                            <p className="mt-4 mb-4 text-break mx-auto w-75">Un comentario es una porción de texto que se incluye en el código fuente, pero que no se ejecuta como parte del programa, estos comentarios se utilizan para documentar el código y proporcionar información adicional sobre lo que hace cada línea o sección de código.<br></br>
                                                Cuando Python encuentra un símbolo "#" en el código fuente, ignora todo lo que sigue en esa línea, incluido el propio "#" y cualquier texto que lo siga. Por lo tanto, el uso de "#" permite a los programadores incluir notas y explicaciones en el código fuente sin afectar el funcionamiento del programa, tambiém si querés escribir en varias lineas de codigo podes encerrar el mensaje entre 3 comillas simples o dobles (""" """,''' ''').
                                            </p>

                                            <img className="w-75 d-block mx-auto border-content" alt="" src="../img/class1/p7.webp"></img>
                                            <h3 className="mt-4 text-break mx-auto w-75">Entrada de datos - input()</h3>
                                            <p className="mt-4 mb-4 text-break mx-auto w-75">La función input() permite obtener información
                                                en la terminal desde el teclado, al momento de ejecutarse esta línea en la consola esperara
                                                que ingresemos el texto que necesitemos y demos un enter para continuar y guardar el valor
                                                capturado en una variable de programa.
                                            </p>
                                            <p className="mt-4 mb-2 text-break mx-auto w-75">En este ejemplo vamos a indicarle al usuario que escriba su nombre escribiendo: input("Escribe tu nombre: "). Veremos que cuando ejecutamos el programa nos aparecerá este mismo mensaje en la terminal, dejándonos poder escribir el nombre.
                                            </p>
                                            {/* <CopyButton code={class1Code[2]} /> */}
                                            <img className="w-75 d-block mx-auto border-content" alt="" src="../img/class1/p8.webp"></img>
                                            <p className="mt-4 mb-2 text-break mx-auto w-75">En este ejemplo vamos a indicarle al usuario que escriba su nombre escribiendo: input("Escribe tu nombre: "). Veremos que cuando ejecutamos el programa nos aparecerá este mismo mensaje en la terminal, dejándonos poder escribir el nombre.
                                            </p>
                                            <img className="w-75 d-block mx-auto border-content" alt="" src="../img/class1/p9.webp"></img>
                                            <h3 className="mt-4 text-break mx-auto w-75">Función len()</h3>
                                            <p className="mt-4 text-break mx-auto w-75">La función len() permite obtener la longitud de caracteres que existen dentro del paréntesis.
                                            </p>
                                            <p className="mb-2 text-break mx-auto w-75">Por ejemplo si queremos mostrar en pantalla cuántos caracteres tiene la palabra "programación", debemos usar un input y dentro la funcion len(): input(len("Programación")), esto nos retornará la cantidad de caracteres que hay.
                                            </p>

                                            <img className="w-75 d-block mx-auto  border-content" style={{ marginBottom: "7rem" }} alt="" src="../img/class1/p10.webp"></img>
                                        </div>
                                    </div>
                                </div>
                                <div id="element13" className={`accordion-item mt-4  animated-left ${elementVisibility.element13 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
                                    <Link to="/pythonClassFile/class1.py"
                                        target={"_blank"}
                                        download={"class1.py"}>
                                        <button className="accordion-button collapsed bg-transparent" type="button">
                                            <h2 className="text-light">Descarga el archivo de la clase 1</h2>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </> :
                <section id="hero" style={{ background: colorPrimaryPython }}>
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
                                <div >
                                    <h1>Clase 1: Explorando Python</h1>
                                    <h2>Introducción a Python y su sintaxis básica</h2>
                                    <h2>Instalación y configuración de IDE</h2>
                                    <h2>Ejecución del primer programa</h2>
                                    <div className="text-center text-lg-start">
                                        <a href="#clase1" className="btn-get-started scrollto">tendrás acceso al curso el {new Date(date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 order-1 order-lg-2 hero-img" >
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
        }
        </>

    )
}

export default GithubClass1
