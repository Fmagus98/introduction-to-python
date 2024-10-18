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
            // (new Date(date) <= newDate) || 
            localStorage.getItem("passwordPython") ?
                <>
                    <section id="hero" style={{ background: colorPrimaryPython }}>
                        <div className="container">
                            <div className="row justify-content-between">
                                <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
                                    <div>
                                        <h1>Clase 1: Introducción a Git y GitHub</h1>
                                        <h2 className="mb-3 mt-4">Que es Git y GitHub?</h2>
                                        <h2 className="mb-3">Instalación de Git, configuración de nombre de usuario y correo electrónico.</h2>
                                        <h2>Creación y configuración inicial</h2>
                                        <div className="text-center text-lg-start">
                                            <a href="#class1Gitbub" className={`btn-get-started scrollto python-theme`}>Aprende algoritmos</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 order-1 order-lg-2 hero-img">
                                    <img src="../img/github.png" className="img-fluid animated vh-60" alt="github" />
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
                            <g id="class1Gitbub" className="wave2">
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
                                <div id="element2" className={`accordion-item animated-left ${elementVisibility.element2 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }} >
                                    <button className="accordion-button collapsed  bg-transparent text-light" type="button" data-bs-toggle="collapse" data-bs-target="#a1" aria-expanded="false" aria-controls="flush-collapseOne">
                                        <h2>¿Que es git?</h2>
                                    </button>
                                    <div id="a1" className="accordion-collapse collapse" >
                                        <div className=" accordion-body text-light bg-dark">
                                            <img className="mx-auto d-block w-25 border-content" alt="Git" src='../../img/classGithub/git.png' />
                                            <h3 className="mt-7 text-break mx-auto w-75 fw-bold">Definición de Git</h3>
                                            <p className="text-break mx-auto w-75">Git es un sistema de control de versiones distribuido que permite a los desarrolladores rastrear y gestionar los cambios en el código fuente de un proyecto a lo largo del tiempo. Fue creado por Linus Torvalds en 2005, principalmente para el desarrollo del kernel de Linux.</p>
                                            <h3 className="mt-4 text-break mx-auto w-75 fw-bold">Para que sirve?</h3>
                                            <p className="text-break mx-auto w-75">En términos simples, Git permite a los desarrolladores llevar un registro de los cambios realizados en el código fuente de un proyecto a lo largo del tiempo. Esto facilita el trabajo colaborativo, ya que múltiples personas pueden trabajar en el mismo proyecto simultáneamente sin pisarse los cambios. Además, Git ofrece herramientas para la gestión de ramas (branches), lo cual permite experimentar con nuevas características o realizar correcciones sin afectar la rama principal del proyecto (normalmente llamada "master" o "main").</p>
                                            <p className="text-break mx-auto w-75">En los inicios de las computadoras, el código binario era la única forma de representar la información, lo que requería que los programas fueran escritos
                                                en este sistema. Sin embargo, este proceso era lento y propenso a errores ya que los programadores tenían que convertir manualmente cada instrucción y dato en una serie de ceros y unos.</p>
                                            <img className="mx-auto d-block w-50 border-content" alt="Representación binaria en letras" src='../../img/classGithub/master.webp' />
                                            <h3 className="text-break mt-4 mb-4 mx-auto w-75 fw-bold">Caracteristicas de git</h3>
                                            <p className="text-break mx-auto w-75">Git tiene varias características distintivas que lo hacen extremadamente útil y popular en el desarrollo de software:</p>
                                            <ul className="text-break mx-auto w-75 list-unstyled">
                                                <li>
                                                    <p className="text-break mx-auto w-75"><span className="fw-bold">Distribuido:</span> Git es un sistema de control de versiones distribuido, lo que significa que cada desarrollador tiene una copia completa del repositorio de código en su máquina local. Esto permite trabajar de manera independiente y realizar operaciones como commit, branch, merge y revert sin necesidad de una conexión constante a un servidor central.</p>
                                                </li>
                                                <li>
                                                    <p className="text-break mx-auto w-75"><span className="fw-bold">Rápido y Eficiente:</span> Git está optimizado para manejar proyectos grandes y complejos de manera rápida y eficiente. Las operaciones como commit, branch y merge son generalmente muy rápidas, lo que mejora la productividad del desarrollo.</p>
                                                </li>
                                                <li>
                                                    <p className="text-break mx-auto w-75"><span className="fw-bold">Gestión eficiente de ramas (branching):</span> Git hace que sea fácil y eficiente trabajar con ramas (branches). Las ramas permiten a los desarrolladores trabajar en paralelo en nuevas características o correcciones sin interferir con el código en la rama principal. La capacidad de fusionar ramas de manera limpia y resolver conflictos automáticamente es una característica clave de Git.</p>
                                                </li>
                                                <li>
                                                    <p className="text-break mx-auto w-75"><span className="fw-bold">Seguimiento de cambios (tracking):</span> Git realiza un seguimiento de todos los cambios realizados en el código a lo largo del tiempo. Cada cambio se registra como un commit con un mensaje descriptivo, lo que permite a los desarrolladores entender qué cambios se realizaron, cuándo y por qué.</p>
                                                </li>
                                                <li>
                                                    <p className="text-break mx-auto w-75"><span className="fw-bold">Gestión robusta de historial:</span> Git mantiene un historial completo y detallado de todos los cambios realizados en el código. Esto facilita la revisión de cambios anteriores, la recuperación de versiones antiguas del código (mediante el uso de commits específicos) y la auditoría del desarrollo.</p>
                                                </li>
                                                <li>
                                                    <p className="text-break mx-auto w-75"><span className="fw-bold">Soporte para trabajo offline:</span> Como cada desarrollador tiene una copia completa del repositorio en su máquina local, Git permite trabajar sin conexión a internet. Los cambios pueden ser realizados y luego sincronizados con el repositorio central cuando se establece la conexión.</p>
                                                </li>
                                                <li>
                                                    <p className="text-break mx-auto w-75"><span className="fw-bold">Integridad de los datos:</span> Git utiliza un sistema de hashes criptográficos (SHA-1) para garantizar la integridad de los datos almacenados en el repositorio. Esto significa que cada archivo y cada versión del archivo están protegidos contra corrupción y modificaciones no autorizadas.</p>
                                                </li>
                                                <li>
                                                    <p className="text-break mx-auto w-75"><span className="fw-bold">Compatibilidad con flujos de trabajo diversos:</span> Git es muy flexible y puede adaptarse a una amplia variedad de flujos de trabajo de desarrollo, desde el modelo de ramificación simple hasta modelos más complejos como Gitflow. Esto hace que Git sea adecuado para proyectos pequeños y grandes, así como para equipos distribuidos.</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div id="element3" className={`accordion-item mt-4  animated-left ${elementVisibility.element3 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
                                    <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a2" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        <h2 className="text-light">Que es Github?</h2>
                                    </button>
                                    <div id="a2" className="accordion-collapse collapse" >
                                        <div className="accordion-body text-light bg-dark  ">
                                            <p className="text-break mx-auto mt-7 w-75">GitHub es una plataforma de desarrollo colaborativo para alojar proyectos utilizando el sistema de control de versiones Git. En términos simples, Git es un sistema que permite gestionar y rastrear cambios en el código fuente durante el desarrollo de software, facilitando el trabajo colaborativo entre programadores.
                                            </p>
                                            <h3 className="mt-4 text-break mx-auto w-75 fw-bold">Funciones y beneficios de github</h3>
                                            <p className="text-break mx-auto w-75">GitHub proporciona varias funciones y beneficios clave para desarrolladores y equipos de desarrollo de software:</p>
                                            <ul className="text-break mx-auto w-75 list-unstyled">
                                                <li>
                                                    <p className="text-break mx-auto w-75"><span className="fw-bold">Alojamiento de Repositorios:</span> GitHub permite almacenar y gestionar repositorios de código fuente utilizando Git, facilitando el control de versiones y la colaboración en proyectos.</p>
                                                </li>
                                                <li>
                                                    <p className="text-break mx-auto w-75"><span className="fw-bold">Colaboración:</span> Permite a múltiples desarrolladores trabajar juntos en el mismo proyecto de manera simultánea. Cada desarrollador puede clonar un repositorio, realizar cambios locales y luego enviar esos cambios de vuelta al repositorio central en GitHub.</p>
                                                </li>
                                                <li>
                                                    <p className="text-break mx-auto w-75"><span className="fw-bold">Control de Versiones:</span> Utiliza Git para controlar y gestionar versiones del código fuente. Esto permite realizar un seguimiento de los cambios realizados en el código, revertir a versiones anteriores si es necesario y colaborar de manera efectiva en el desarrollo de software.</p>
                                                </li>
                                                <li>
                                                    <p className="text-break mx-auto w-75"><span className="fw-bold">Seguimiento de Problemas y Tareas:</span> GitHub proporciona herramientas integradas para gestionar y hacer un seguimiento de problemas (bugs), solicitudes de funciones y otras tareas relacionadas con el desarrollo de software. Los equipos pueden comentar, asignar y priorizar problemas para facilitar la coordinación y la resolución eficiente de problemas.</p>
                                                </li>
                                                <li>
                                                    <p className="text-break mx-auto w-75"><span className="fw-bold">Despliegue e Integración Continua:</span> GitHub ofrece integración con servicios de integración continua (como GitHub Actions) que permiten automatizar pruebas, compilaciones y despliegues de código, lo cual es crucial para mantener la calidad del software y acelerar el ciclo de desarrollo.</p>
                                                </li>
                                                <li>
                                                    <p className="text-break mx-auto w-75"><span className="fw-bold">Revisión de Código:</span> Facilita la revisión de código mediante pull requests, donde los desarrolladores pueden solicitar la revisión de cambios específicos antes de fusionarlos con el repositorio principal. Esto fomenta la colaboración y mejora la calidad del código.</p>
                                                </li>
                                                <li>
                                                    <p className="text-break mx-auto w-75"><span className="fw-bold">Visibilidad y Comunidad:</span> GitHub es una plataforma social donde los desarrolladores pueden mostrar su trabajo, colaborar con otros en proyectos de código abierto y aprender de la comunidad global de desarrolladores.</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div id="element4" className={`accordion-item mt-4  animated-left ${elementVisibility.element4 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
                                    <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a3" aria-expanded="false" aria-controls="flush-collapseThree">
                                        <h2 className="text-light">Instalación de Git</h2>
                                    </button>
                                    <div id="a3" className="accordion-collapse collapse" >
                                        <div className="accordion-body text-light bg-dark  ">
                                            <div id="content">
                                                <h3 className="mt-7 text-break mx-auto w-75 fw-bold">Instalación en Windows</h3>
                                                <ol className="text-break mx-auto w-75">
                                                    <li>
                                                        <p>Dirigete a la página oficial de Git en <Link to="https://git-scm.com/downloads" target="_blank" className="text-info">https://git-scm.com/downloads</Link> y selecciona "Windows".</p>
                                                        <img className="w-100 mx-auto d-block border-content" alt="Paso 1 de instalación de github" src="../../img/class1Github/gitInstall.webp"></img>
                                                    </li>
                                                    <li className="mt-4">
                                                        <p>Elige el instalador de 32bit para computadoras más antiguas o 64bit para computadoras más recientes.</p>
                                                        <img className="w-100 mx-auto d-block border-content" alt="Paso 2 de instalación de github" src="../../img/class1Github/gitInstall2.webp"></img>
                                                    </li>
                                                    <li className="mt-4">
                                                        <p>Cuando ejecutes el instalador selecciona el botón "Install".</p>
                                                        <img className="w-75 mx-auto d-block border-content" alt="Paso 2 de instalación de github" src="../../img/class1Github/gitInstall3.webp"></img>
                                                    </li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="element5" className={`accordion-item mt-4  animated-left ${elementVisibility.element5 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
                                    <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a4" aria-expanded="false" aria-controls="flush-collapseFour">
                                        <h2 className="text-light">Crear una cuenta en github</h2>
                                    </button>
                                    <div id="a4" className="accordion-collapse collapse" >
                                        <div className="accordion-body text-light bg-dark  ">
                                            <ol className="text-break mx-auto w-75">
                                                <li>
                                                    <p>Dirigete a la página oficial de Github en <Link to="https://github.com/signup?source=login" target="_blank" className="text-info">https://github.com/signup?source=login</Link>, escribe tu correo y selecciona "Continuar".</p>
                                                    <img className="w-100 mx-auto d-block border-content" alt="Paso 1 de instalación de github" src="../../img/class1Github/githubAccount.webp"></img>
                                                </li>
                                                <li className="mt-4">
                                                    <p>Ingresa la contraseña y selecciona "Continuar".</p>
                                                    <img className="w-100 mx-auto d-block border-content" alt="Paso 2 de instalación de github" src="../../img/class1Github/githubAccount2.webp"></img>
                                                </li>
                                                <li className="mt-4">
                                                    <p>Ingresa el nombre de usuario y selecciona "Continuar".</p>
                                                    <img className="w-100 mx-auto d-block border-content" alt="Paso 2 de instalación de github" src="../../img/class1Github/githubAccount3.webp"></img>
                                                </li>
                                                <li className="mt-4">
                                                    <p>Es opcional pero podes seleccionar el check para recibir correos de actualizaciones y anuncios ocasionales de productos. Luego selecciona "Continuar".</p>
                                                    <img className="w-100 mx-auto d-block border-content" alt="Paso 2 de instalación de github" src="../../img/class1Github/githubAccount4.webp"></img>
                                                </li>
                                                <li className="mt-4">
                                                    <p>Completa el puzzle y selecciona "Enviar".</p>
                                                    <img className="w-100 mx-auto d-block border-content" alt="Paso 2 de instalación de github" src="../../img/class1Github/githubAccount5.webp"></img>
                                                </li>
                                                <li className="mt-4">
                                                    <p>Completa el puzzle y selecciona "Enviar".</p>
                                                    <img className="w-100 mx-auto d-block border-content" alt="Paso 2 de instalación de github" src="../../img/class1Github/githubAccount5.webp"></img>
                                                </li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                                <div id="element6" className={`accordion-item mt-4  animated-left ${elementVisibility.element6 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
                                    <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a5" aria-expanded="false" aria-controls="flush-collapseFive">
                                        <h2 className="text-light">Configuración de Git</h2>
                                    </button>
                                    <div id="a5" className="accordion-collapse collapse" >
                                        <div className="accordion-body text-light bg-dark  ">
                                            <p className="mt-4 mb-7 text-break mx-auto w-75">Ya habiendo instalado Git, vamos a verificar si realmente está instalado correctamente en nuestra maquina, para esto vamos a tener que utilizar la terminal que tenga tu sistema operativo.</p>
                                            <h5 className="mt-4 text-break mx-auto w-75 bold">Comprobar instalación de git dentro de la terminal</h5>
                                            <ol className="text-break mx-auto w-75">
                                                <li className="mt-4">
                                                    <p>Escribe en el buscador "CMD" y selecciona "Simbolo de sistema".</p>
                                                    <img className="w-100 mx-auto d-block border-content" alt="" src="../../img/class1Github/gitConfig1.webp"></img>
                                                </li>
                                                <li className="mt-4">
                                                    <p>Dentro de la terminal escribe "git", "git -h" ó "git --help", esto te debe mostrar todos los comandos que puedes hacer con git, si no te aparece es posible que no esté instalado correctamente Git, debes instalarlo nuevamente.</p>
                                                    <img className="w-100 mx-auto d-block border-content" alt="" src="../../img/class1Github/gitConfig2.webp"></img>
                                                </li>
                                            </ol>
                                            <h5 className="mt-4 text-break mx-auto w-75 bold">Crea una carpeta en el escritorio</h5>
                                            <ol className="text-break mx-auto w-75">
                                                <li className="mt-4">
                                                    <p>Para ubicarnos en el escritorio, vamos a tener que utilizar el comando "cd" seguido de "desktop".</p>
                                                    <img className="w-100 mx-auto d-block border-content" alt="" src="../../img/class1Github/gitConfig3.webp"></img>
                                                </li>
                                                <li className="mt-4">
                                                    <p>Escribe en la terminal: mkdir "Nuevo repositorio", al hacer esto creará una carpeta llamada "Nuevo repositorio" dentro de tu escritorio.</p>
                                                    <img className="w-100 mx-auto d-block border-content" alt="" src="../../img/class1Github/gitConfig4.webp"></img>
                                                </li>
                                                <li className="mt-4">
                                                    <p>Ahora para posicionarnos en la carpeta que creamos, debemos escribe en la terminal: cd Nuevo repositorio, al hacer esto creará una carpeta llamada "Nuevo repositorio" dentro de tu escritorio.</p>
                                                    <img className="w-100 mx-auto d-block border-content" alt="" src="../../img/class1Github/gitConfig5.webp"></img>
                                                </li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                                <div id="element7" className={`accordion-item mt-4  animated-left ${elementVisibility.element7 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
                                    <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a6" aria-expanded="false" aria-controls="flush-collapseFive">
                                        <h2 className="text-light">¿Que arquitectura tengo en mi pc?</h2>
                                    </button>
                                    <div id="a6" className="accordion-collapse collapse" >
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
                                    <div id="a7" className="accordion-collapse collapse" >
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
                                    <div id="a8" className="accordion-collapse collapse" >
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
                                    <div id="a9" className="accordion-collapse collapse" >
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
                                    <div id="a10" className="accordion-collapse collapse" >
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
                                    <div id="a11" className="accordion-collapse collapse" >
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
                                        <a href="#class1Github" className="btn-get-started scrollto python-theme">tendrás acceso al curso el {new Date(date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 order-1 order-lg-2 hero-img" >
                                <img src="../img/python.png" className="img-fluid animated vh-60" alt="" />
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
                        <g id="#class1Github" className="wave2">
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
