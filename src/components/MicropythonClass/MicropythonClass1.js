import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../../Utils/firebase'
import { collection, getDocs } from 'firebase/firestore'
import { colorPrimaryMicropython } from '../../colors'
import useScrollAnimation from '../../useScrollAnimation'
import { CopyButton } from '../CopyButton/CopyButton'
import { class1MCode, class2MCode } from './MicropythonClassCode'

const MicropythonClass1 = () => {

    const elementVisibility = useScrollAnimation()
    const [date, setDate] = useState(null)
    const newDate = new Date()

    useEffect(() => {
        if (localStorage.getItem("dataCourseMicropython") === null) {
            console.log("llamado")
            getDocs(collection(db, "courseMicropython")).then(response => {
                response.docs.map(doc => {
                    if (doc.id === "DGNVKaHVIjv8RsBsi1yD") {
                        return setDate(doc.data().date.toDate())
                    }
                    return null
                })
            })
        }
        else {
            const dateCourse = JSON.parse(localStorage.getItem("dataCourseMicropython"))
            setDate(dateCourse)
        }
    }, [])

    return (
        <>{
            (new Date(date?.[0]?.date) <= newDate) || localStorage.getItem("access - micropython") ?
                <>
                    <section id="hero" style={{ background: colorPrimaryMicropython }} >
                        <div className="container">
                            <div className="row justify-content-between">
                                <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
                                    <div >
                                        <h1>Clase 1</h1>
                                        <h2>Ventajas de MicroPython para sistemas embebidos.</h2>
                                        <h2>Plataformas de hardware compatibles con MicroPython.</h2>
                                        <h2>Configuración del entorno de desarrollo.</h2>
                                        <div className="text-center text-lg-start">
                                            <a href="#clase1" className="btn-get-started scrollto" style={{ backgroundColor: "#EE7053" }}>Contenido de la clase 1</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 order-1 order-lg-2 hero-img"  >
                                    <img src="../../img/micropython.png" className="img-fluid animated vh-60" alt="" />
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
                                <div id="element2" className={`accordion-item animated-left ${elementVisibility.element2 ? 'slide-left' : ''}`} style={{ background: colorPrimaryMicropython, borderRadius: "40px" }} >
                                    <button className="accordion-button collapsed  bg-transparent text-light" type="button" data-bs-toggle="collapse" data-bs-target="#a1" aria-expanded="false" aria-controls="flush-collapseOne">
                                        <h2 >¿Que es micropython?</h2>
                                    </button>
                                    <div id="a1" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body text-light bg-dark ">
                                            <img className="mx-auto d-block w-25 border-content" alt="" src="../../img/class1Micropython/damien.jpg"></img>
                                            <p className="text-break mx-auto w-75 mt-4">MicroPython es una implementación del lenguaje de programación Python 3 diseñada específicamente para ser ejecutada en microcontroladores y sistemas embebidos. Fue creado por Damien George en 2013 y desde entonces ha ganado una gran popularidad en la comunidad de desarrollo de hardware y proyectos electrónicos.</p>
                                            <h3 className="mt-7 text-break mx-auto w-75 fw-bold">Objetivos principales de Micropython</h3>
                                            <ul className="text-break mx-auto w-75 list-unstyled">
                                                <li>
                                                    <p className="text-break mx-auto w-100"><span className="fw-bold">Facilitar la programación de sistemas embebidos</span> Hacer que la programación de hardware sea más accesible para personas que ya conocen Python, eliminando la necesidad de aprender lenguajes más complicados como C o ensamblador.</p>
                                                </li>
                                                <li>
                                                    <p className="text-break mx-auto w-100"><span className="fw-bold">Prototipado rápido</span> Permitir el desarrollo rápido de prototipos y proyectos en sistemas embebidos, como IoT, al aprovechar la flexibilidad y facilidad de uso de Python.</p>
                                                </li>
                                                <li>
                                                    <p className="text-break mx-auto w-100"><span className="fw-bold">Ampliar la adopción de Python</span> Extender el uso de Python, un lenguaje muy popular en desarrollo de software, ciencia de datos, y automatización, al mundo de los sistemas embebidos y dispositivos de baja potencia.</p>
                                                </li>
                                                <li>
                                                    <p className="text-break mx-auto w-100"><span className="fw-bold">Optimización para dispositivos con recursos limitados</span> Crear una versión eficiente de Python que pudiera ejecutarse en dispositivos con poca memoria y capacidad de procesamiento, asegurando que los proyectos embebidos puedan mantenerse ligeros y ágiles.</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div id="element3" className={`accordion-item animated-left mt-4 ${elementVisibility.element3 ? 'slide-left' : ''}`} style={{ background: colorPrimaryMicropython, borderRadius: "40px" }} >
                                    <button className="accordion-button collapsed  bg-transparent text-light" type="button" data-bs-toggle="collapse" data-bs-target="#a2" aria-expanded="false" aria-controls="flush-collapseOne">
                                        <h2 >Caracteristicas de Micropython</h2>
                                    </button>
                                    <div id="a2" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body text-light bg-dark ">
                                            <h3 className="mt-7 text-break mx-auto w-75 fw-bold">Lenguaje Python</h3>
                                            <p className="text-break mx-auto w-75">MicroPython es compatible con el lenguaje de programación Python 3, lo que significa que puedes escribir código en Python estándar para controlar hardware y dispositivos embebidos.</p>
                                            <h3 className="mt-4 text-break mx-auto w-75 fw-bold">Eficiencia en recursos</h3>
                                            <p className="text-break mx-auto w-75">Está diseñado para funcionar en sistemas con recursos limitados, como microcontroladores con poca memoria y potencia de procesamiento. Esto permite que Python se ejecute en dispositivos que normalmente no podrían manejar un lenguaje de alto nivel como Python.</p>
                                            <h3 className="mt-4 text-break mx-auto w-75 fw-bold">Interacción con hardware</h3>
                                            <p className="text-break mx-auto w-75">MicroPython proporciona una serie de módulos y bibliotecas que permiten la interacción con hardware, como sensores, actuadores y periféricos, a través de pines GPIO, comunicación serie (UART, SPI, I2C) y más.</p>
                                            <h3 className="mt-4 text-break mx-auto w-75 fw-bold">Facilidad de uso</h3>
                                            <p className="text-break mx-auto w-75">Es una opción popular para principiantes y personas que ya están familiarizadas con Python, ya que les permite aplicar su conocimiento de Python en el desarrollo de sistemas embebidos.</p>
                                            <h3 className="mt-4 text-break mx-auto w-75 fw-bold">Comunidad activa</h3>
                                            <p className="text-break mx-auto w-75">MicroPython tiene una comunidad activa de desarrolladores y usuarios que contribuyen con bibliotecas y ejemplos de código, lo que facilita el desarrollo de proyectos y la solución de problemas.</p>
                                            <h3 className="mt-4 text-break mx-auto w-75 fw-bold">Soporte para múltiples plataformas</h3>
                                            <p className="text-break mx-auto w-75">Aunque MicroPython se originó en el microcontrolador Pyboard, ahora es compatible con una amplia gama de microcontroladores y placas de desarrollo, lo que permite a los usuarios elegir la plataforma que mejor se adapte a sus necesidades.</p>
                                        </div>
                                    </div>
                                </div>
                                <div id="element4" className={`accordion-item mt-4 rounded-5 animated-left ${elementVisibility.element4 ? 'slide-left' : ''}`} style={{ background: colorPrimaryMicropython, borderRadius: "40px" }} >
                                    <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a3" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        <h2 className="text-light">Aplicaciones en el ámbito laboral</h2>
                                    </button>
                                    <div id="a3" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body text-light bg-dark ">
                                            <p className="text-break mx-auto w-75">MicroPython tiene aplicaciones en una variedad de campos y desempeña un papel importante en el mundo laboral en varias áreas. A continuación, se presentan algunas de las aplicaciones y casos de uso más comunes de MicroPython en el mundo laboral:</p>
                                            <h3 className="mt-7 mb-4 fw-bold text-center">Desarrollo de dispositivos IoT (Internet de las cosas)</h3>
                                            <img className="mx-auto d-block w-50 border-content" alt="" src="../../img/class1Micropython/IOT.webp"></img>
                                            <p className="mt-4 mb-7 text-break mx-auto w-50">MicroPython es ampliamente utilizado en el desarrollo de dispositivos IoT debido a su capacidad para ejecutarse en microcontroladores y placas de desarrollo de bajo costo. Los dispositivos IoT pueden recopilar datos de sensores, comunicarse a través de Wi-Fi o Bluetooth, y enviar datos a la nube o a otras aplicaciones para su procesamiento. Esto se aplica a campos como la agricultura inteligente, la monitorización de la salud, la automatización del hogar y más.</p>
                                            <h3 className="mt-7 mb-4 fw-bold text-center">Automatización industrial</h3>
                                            <img className="mx-auto d-block w-50 border-content" alt="" src="../../img/class1Micropython/auto.webp"></img>
                                            <p className="mt-4 mb-7 text-break mx-auto w-50">En entornos industriales, MicroPython se utiliza para controlar y supervisar maquinaria y procesos de fabricación. Puede ser parte de sistemas de automatización y control que garantizan la eficiencia y la seguridad en la producción.</p>
                                            <h3 className="mt-7 mb-4 fw-bold text-center">Robótica educativa</h3>
                                            <img className="mx-auto d-block w-50 border-content" alt="" src="../../img/class1Micropython/robot.webp"></img>
                                            <p className="mt-4 mb-7 text-break mx-auto w-50">En la educación y la formación técnica, MicroPython se utiliza para enseñar a estudiantes los conceptos de programación y robótica. Placas de desarrollo como el micro:bit y el ESP8266/ESP32, que admiten MicroPython, se utilizan en programas de robótica educativa.</p>
                                            <h3 className="mt-7 mb-4 fw-bold text-center">Sistemas de monitoreo y control en tiempo real</h3>
                                            <img className="w-50 mx-auto d-block border-content" alt="" src="../../img/class1Micropython/real-time.avif"></img>
                                            <p className="mt-4 mb-7 text-break mx-auto w-50">En aplicaciones que requieren una respuesta en tiempo real, como el control de sistemas de climatización, sistemas de alarma, monitoreo de calidad del aire y más, MicroPython puede ser una solución eficiente.</p>
                                            <h3 className="mt-7 mb-4 fw-bold text-center">Investigación y desarrollo</h3>
                                            <img className="w-50 mx-auto d-block border-content" alt="" src="../../img/class1Micropython/science.webp"></img>
                                            <p className="mt-4 mb-7 text-break mx-auto w-50">Los investigadores y científicos utilizan MicroPython para desarrollar prototipos de instrumentación científica y sistemas de adquisición de datos. Pueden utilizarlo para automatizar experimentos, recopilar datos y realizar análisis.</p>
                                            <h3 className="mt-7 mb-4 fw-bold text-center">Automatización del hogar</h3>
                                            <img className="w-50 mx-auto d-block border-content" alt="" src="../../img/class1Micropython/house.webp"></img>
                                            <p className="mt-4 mb-7 text-break mx-auto w-50">En el ámbito doméstico, MicroPython se utiliza en proyectos de automatización del hogar, como controlar luces, sistemas de seguridad, termostatos y más, mediante dispositivos DIY (hazlo tú mismo) o comerciales.</p>
                                            <h3 className="mt-7 mb-4 fw-bold text-center">Desarrollo de productos comerciales</h3>
                                            <img className="w-50 mx-auto d-block border-content" alt="" src="../../img/class1Micropython/product.webp"></img>
                                            <p className="mt-4 mb-7 text-break mx-auto w-50">Muchas empresas han adoptado MicroPython como parte de sus productos comerciales, especialmente en el campo de los dispositivos embebidos y las soluciones IoT.</p>
                                        </div>
                                    </div>
                                </div>
                                <div id="element5" className={`accordion-item mt-4 rounded-5 animated-left ${elementVisibility.element5 ? 'slide-left' : ''}`} style={{ background: colorPrimaryMicropython, borderRadius: "40px" }} >
                                    <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a4" aria-expanded="false" aria-controls="flush-collapseThree">
                                        <h2 className="text-light">Plataformas de hardware compatibles con MicroPython</h2>
                                    </button>
                                    <div id="a4" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body text-light bg-dark ">
                                            <div id="content">
                                                <p className="text-break mx-auto w-75"> MicroPython es compatible con una amplia variedad de plataformas de hardware, especialmente aquellas que utilizan microcontroladores y microprocesadores. Algunas de las plataformas de hardware compatibles con MicroPython más populares incluyen:</p>
                                                <ol className="list-group  w-75 mx-auto mb-4 text-xl text-center">
                                                    <li className="list-group  w-100 mx-auto">
                                                        <h3 className="mt-7 mb-4 fw-bold text-center">ESP8266 y ESP32</h3>
                                                        <img className="mx-auto d-block w-50 border-content" alt="" src="../../img/class1Micropython/esp32.webp"></img>
                                                        <p className="text-break mt-4">Estos son microcontroladores muy populares fabricados por Espressif Systems. Son ampliamente utilizados en proyectos IoT y son compatibles con MicroPython. Las placas de desarrollo como NodeMCU y Wemos D1 Mini son ejemplos comunes.</p>
                                                    </li>
                                                    <li className="list-group  w-100 mx-auto">
                                                        <h3 className="mt-7 mb-4 fw-bold text-center">Micro:bit</h3>
                                                        <img className="mx-auto d-block w-50 border-content" alt="" src="../../img/class1Micropython/microbit.webp"></img>
                                                        <p className="text-break mt-4">El BBC micro:bit es una pequeña placa de desarrollo ampliamente utilizada en la educación y la robótica educativa. También es compatible con MicroPython.</p>
                                                    </li>
                                                    <li className="list-group  w-100 mx-auto">
                                                        <h3 className="mt-7 mb-4 fw-bold text-center">Pyboard</h3>
                                                        <img className="mx-auto d-block w-50 border-content" alt="" src="../../img/class1Micropython/pyboard.jpg"></img>
                                                        <p className="text-break mt-4">PyBoard es una placa de desarrollo diseñada específicamente para MicroPython. Es una opción popular para proyectos que requieren un rendimiento más alto.</p>
                                                    </li>
                                                    <li className="list-group  w-100 mx-auto">
                                                        <h3 className="mt-7 mb-4 fw-bold text-center">Raspberry Pi Pico</h3>
                                                        <img className="mx-auto d-block w-50 border-content" alt="" src="../../img/class1Micropython/raspberryPiPico.webp"></img>
                                                        <p className="text-break mt-4">La Raspberry Pi Pico es una placa de desarrollo basada en el microcontrolador RP2040 de Raspberry Pi Foundation. Es compatible con MicroPython y ofrece una potente plataforma para proyectos embebidos.</p>
                                                    </li>
                                                    <li className="list-group  w-100 mx-auto">
                                                        <h3 className="mt-7 mb-4 fw-bold text-center">Arduino</h3>
                                                        <img className="mx-auto d-block w-50 border-content" alt="" src="../../img/class1Micropython/arduino.webp"></img>
                                                        <p className="text-break mt-4">Aunque MicroPython es más comúnmente asociado con los microcontroladores mencionados anteriormente, también hay versiones de MicroPython que pueden ejecutarse en algunas placas de Arduino, como el Adafruit Circuit Playground Express y algunas placas basadas en el microcontrolador SAMD21.</p>
                                                    </li>
                                                    <li className="list-group  w-100 mx-auto">
                                                        <h3 className="mt-7 mb-4 fw-bold text-center">STM32</h3>
                                                        <img className="mx-auto d-block w-50 border-content" alt="" src="../../img/class1Micropython/stm32.webp"></img>
                                                        <p className="text-break mt-4">Algunas placas de desarrollo basadas en microcontroladores STM32 son compatibles con MicroPython.</p>
                                                    </li>
                                                    <li className="list-group  w-100 mx-auto">
                                                        <h3 className="mt-7 mb-4 fw-bold text-center">BeagleBone Black</h3>
                                                        <img className="mx-auto d-block w-50 border-content" alt="" src="../../img/class1Micropython/beaglebone.webp"></img>
                                                        <p className="text-break mt-4"> Aunque no es tan común como otras plataformas mencionadas anteriormente, BeagleBone Black también tiene soporte para MicroPython.</p>
                                                    </li>
                                                    <li className="list-group  w-100 mx-auto">
                                                        <h3 className="mt-7 mb-4 fw-bold text-center">Wio Terminal y Seeeduino XIAO</h3>
                                                        <img className="mx-auto d-block w-50 border-content" alt="" src="../../img/class1Micropython/Seeeduino.jpg"></img>
                                                        <p className="text-break mt-4">Estas son otras placas de desarrollo que son compatibles con MicroPython y son utilizadas en proyectos embebidos.</p>
                                                    </li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="element6" className={`accordion-item mt-4 rounded-5 animated-left ${elementVisibility.element6 ? 'slide-left' : ''}`} style={{ background: colorPrimaryMicropython, borderRadius: "40px" }} >
                                    <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a5" aria-expanded="false" aria-controls="flush-collapseFour">
                                        <h2 className="text-light">Raspberry pi pico</h2>
                                    </button>
                                    <div id="a5" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body text-light bg-dark ">
                                            <h3 className="text-center mx-auto mt-4" style={{ fontSize: "25px", fontWeight: "700" }}>Familia de raspberry pi pico</h3>
                                            <p className="text-break mx-auto w-75">La familia Raspberry Pi Pico consta actualmente de cuatro placas; Raspberry Pi Pico (extremo izquierdo), Pico H (centro izquierda), Pico W (centro derecha) y Pico WH (extremo derecho).<br></br>Raspberry Pi Pico es una placa microcontroladora de alto rendimiento y bajo costo con interfaces digitales flexibles.</p>
                                            <img className="d-block mx-auto w-75" alt="" src="../../img/class1Micropython/picos.png"></img>
                                            <h3 className="text-center mx-auto mt-4" style={{ fontSize: "25px", fontWeight: "700" }}>Raspberry Pi Pico and Pico H</h3>
                                            <p className="text-break mx-auto w-75" style={{ marginBottom: "0.2rem" }}>Las caracteristicas que tienen estos 2 microcontradores son:</p>
                                            <ul className="w-75 mx-auto mb-4">
                                                <li><p>Chip microcontrolador RP2040 diseñado por Raspberry Pi</p></li>
                                                <li><p>USB 1.1 con soporte para dispositivos y hosts</p></li>
                                                <li><p >Modos inactivos y de suspensión de bajo consumo de energía</p></li>
                                                <li><p>Programación de arrastrar y soltar usando almacenamiento masivo a través de USB</p></li>
                                                <li><p >26 × pines GPIO multifunción</p></li>
                                                <li><p >2 × SPI, 2 × I2C, 2 × UART, 3 × ADC de 12 bits, 16 × canales PWM controlables</p></li>
                                                <li><p >Sensor de temperatura</p></li>
                                                <li><p >8 × máquinas de estado de E/S programables (PIO) para soporte periférico personalizado</p></li>
                                            </ul>
                                            <img className="d-block mx-auto w-75" alt="" src="../../img/class1Micropython/pico_pinout.jpg"></img>
                                            <h3 className="text-center mx-auto mt-4" style={{ fontSize: "25px", fontWeight: "700" }}>Raspberry Pi Pico W and Pico WH</h3>
                                            <p className="text-break mx-auto w-75">Raspberry Pi Pico W agrega interfaces inalámbricas integradas de banda única de 2,4 GHz (802.11n) utilizando el Infineon CYW43439 manteniendo el factor de forma Pico. La interfaz inalámbrica integrada de 2,4 GHz tiene las siguientes características:</p>
                                            <ul className="w-75 mx-auto mb-4">
                                                <li><p>Wireless (802.11n), single-band (2.4 GHz) - WPA3</p></li>
                                                <li><p >Punto de acceso hasta cuatro clientes</p></li>
                                                <li><p >Bluetooth 5.2</p></li>
                                                <li><p >Modos inactivos y de suspensión de bajo consumo de energía</p></li>
                                                <li><p >Programación de arrastrar y soltar usando almacenamiento masivo a través de USB</p></li>
                                                <li><p >26 × pines GPIO multifunción</p></li>
                                                <li><p >2 × SPI, 2 × I2C, 2 × UART, 3 × ADC de 12 bits, 16 × canales PWM controlables</p></li>
                                                <li><p >Sensor de temperatura</p></li>
                                                <li><p >8 × máquinas de estado de E/S programables (PIO) para soporte periférico personalizado</p></li>
                                            </ul>
                                            <img className="d-block mx-auto w-75" alt="" src="../../img/class1Micropython/picow_pinout.jpg"></img>
                                        </div>
                                    </div>
                                </div>
                                <div id="element7" className={`accordion-item mt-4  animated-left ${elementVisibility.element7 ? 'slide-left' : ''}`} style={{ background: colorPrimaryMicropython, borderRadius: "40px" }}>
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
                                <div id="element8" className={`accordion-item mt-4  animated-left ${elementVisibility.element8 ? 'slide-left' : ''}`} style={{ background: colorPrimaryMicropython, borderRadius: "40px" }}>
                                    <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a7" aria-expanded="false" aria-controls="flush-collapseFive">
                                        <h2 className="text-light">Instalación de python</h2>
                                    </button>
                                    <div id="a7" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
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
                                <div id="element9" className={`accordion-item mt-4 rounded-5 animated-left ${elementVisibility.element9 ? 'slide-left' : ''}`} style={{ background: colorPrimaryMicropython, borderRadius: "40px" }} >
                                    <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a8" aria-expanded="false" aria-controls="flush-collapseFive">
                                        <h2 className="text-light">IDE - thonny</h2>
                                    </button>
                                    <div id="a8" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body text-light bg-dark ">
                                            <h3 className="text-center mx-auto mt-4" style={{ fontWeight: "700" }}>Instalación de thonny</h3>
                                            <p className="mt-4 mb-4 text-center mx-auto w-50">1_ Dirígete a <Link to="https://thonny.org/" target="_blank" className="text-info">https://thonny.org/</Link> e instala el programa dependiendo tu sistema operativo.</p>
                                            <img className="mx-auto d-block w-75 border-content" alt="" src="../../img/class1Micropython/IDE1.jpg"></img>
                                            <p className="mt-4 mb-4 text-center mx-auto">2_Al ejecutar el instalador oprime el botón "next"</p>
                                            <img className="mx-auto d-block w-75 border-content" alt="" src="../../img/class1Micropython/IDE2.jpg"></img>
                                            <p className="mt-4 mb-4 text-center mx-auto">3_Acepta el acuerdo y oprime el botón "next"</p>
                                            <img className="mx-auto d-block w-75 border-content" alt="" src="../../img/class1Micropython/IDE3.jpg"></img>
                                            <p className="mt-4 mb-4 text-center mx-auto">4_oprime el botón "next"</p>
                                            <img className="mx-auto d-block w-75 border-content" alt="" src="../../img/class1Micropython/IDE4.jpg"></img>
                                            <p className="mt-4 mb-4 text-center mx-auto">5_Nuevamente oprime el botón "next"</p>
                                            <img className="mx-auto d-block w-75 border-content" alt="" src="../../img/class1Micropython/IDE5.jpg"></img>
                                            <p className="mt-4 mb-4 text-center mx-auto">6_Selecciona "create desktop icon" para tener esta aplicación en tu escritorio y oprime el botón "next</p>
                                            <img className="mx-auto d-block w-75 border-content" alt="" src="../../img/class1Micropython/IDE6.jpg"></img>
                                            <p className="mt-4 mb-4 text-center mx-auto">7_Seleccionamos el botón "install"</p>
                                            <img className="mx-auto d-block w-75 border-content" alt="" src="../../img/class1Micropython/IDE7.jpg"></img>
                                            <p className="mt-4 mb-4 text-center mx-auto">8_Seleccionamos el botón "finish"</p>
                                            <img className="mx-auto d-block w-75 border-content" alt="" src="../../img/class1Micropython/IDE8.jpg"></img>
                                            <h3 className="text-center mx-auto mt-4" style={{ fontWeight: "700" }}>Configuración de thonny</h3>
                                            <p className="mt-4 mb-4 text-center mx-auto">1_Seleccionamos el lenguaje, dejamos en configuración "standard" y seleccionamos el botón "Lets go!"</p>
                                            <img className="mx-auto d-block w-75 border-content" alt="" src="../../img/class1Micropython/IDE9.jpg"></img>
                                            <p className="mt-4 mb-4 text-center mx-auto">2_Al estar dentro del programa accede a Ejecutar/configurar intérprete</p>
                                            <img className="mx-auto d-block w-75 border-content" alt="" src="../../img/class1Micropython/IDE10.jpg"></img>
                                            <p className="mt-4 mb-4 text-center mx-auto">3_Elige "micropython (raspberry pi pico)" y presiona "instala o actualiza micropython"</p>
                                            <img className="mx-auto d-block w-75 border-content" alt="" src="../../img/class1Micropython/IDE11.jpg"></img>
                                            <p className="mt-4 mb-4 text-center mx-auto">4_Debemos conectar nuestro microcontrolador y presionar el botón blanco</p>
                                            <img className="w-25 mx-auto d-block" alt="" src="../../img/class1Micropython/IDE12.jpg"></img>
                                            <p className="mt-4 mb-4 w-75 text-center mx-auto">5_Automáticamente nos aparecerá el microcontrolador que conectamos, en este caso vamos a configurarlo de la siguiente manera y le damos a "instalar"</p>
                                            <img className="mx-auto d-block w-75 border-content" alt="" src="../../img/class1Micropython/IDE13.jpg"></img>
                                            <p className="mt-4 mb-4 text-center mx-auto">Si en la consola te muestra el nombre del microcontrolador, está bien configurado</p>
                                            <img className="mx-auto d-block w-75 border-content" style={{ marginBottom: "4rem" }} alt="" src="../../img/class1Micropython/IDE14.jpg"></img>
                                        </div>
                                    </div>
                                </div>
                                <div id="element10" className={`accordion-item mt-4 rounded-5 animated-left ${elementVisibility.element10 ? 'slide-left' : ''}`} style={{ background: colorPrimaryMicropython, borderRadius: "40px" }} >
                                    <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a9" aria-expanded="false" aria-controls="flush-collapseThree">
                                        <h2 className="text-light">Entrada y salida en terminal</h2>
                                    </button>
                                    <div id="a9" className="accordion-collapse collapse bg-dark" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body text-light bg-dark ">
                                            <h2 className=" text-center">Salida de datos - print()</h2>
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
                                            <p className="mt-4 mb-2 text-break mx-auto w-75">Para ejecutar el programa debemos tocar f5. Al ejecutar nos mostrará en la terminal lo que escribimos en el input.</p>
                                            <CopyButton code={class2MCode[0]} />
                                            <img className="w-75 d-block mx-auto border-content" style={{ marginBottom: "7rem" }} alt="" src="../../img/class2Micropython/print.webp"></img>
                                            <h2 className=" text-center">Comentarios - #, """ """</h2>
                                            <p className="mt-4 mb-2 text-break mx-auto w-75">Un comentario es una porción de texto que se incluye en el código fuente, pero que no se ejecuta como parte del programa, estos comentarios se utilizan para documentar el código y proporcionar información adicional sobre lo que hace cada línea o sección de código.<br></br>
                                                Cuando Python encuentra un símbolo "#" en el código fuente, ignora todo lo que sigue en esa línea, incluido el propio "#" y cualquier texto que lo siga. Por lo tanto, el uso de "#" permite a los programadores incluir notas y explicaciones en el código fuente sin afectar el funcionamiento del programa, tambiém si querés escribir en varias lineas de codigo podes encerrar el mensaje entre 3 comillas simples o dobles (""" """,''' ''').
                                            </p>
                                            <CopyButton code={class2MCode[1]} />
                                            <img className="w-75 d-block mx-auto border-content" style={{ marginBottom: "7rem" }} alt="" src="../../img/class2Micropython/comment.webp"></img>
                                            <h2 className=" text-center">Entrada de datos - input()</h2>
                                            <p className="mt-4 mb-4 text-break mx-auto w-75">La función input() permite obtener información
                                                en la terminal desde el teclado, al momento de ejecutarse esta línea en la consola esperara
                                                que ingresemos el texto que necesitemos y demos un enter para continuar y guardar el valor
                                                capturado en una variable de programa.
                                            </p>
                                            <CopyButton code={class2MCode[2]} />
                                            <img className="w-75 d-block mx-auto border-content" style={{ marginBottom: "7rem" }} alt="" src="../../img/class2Micropython/input.webp"></img>
                                        </div>
                                    </div>
                                </div>
                                <div id="element11" className={`accordion-item mt-4 rounded-5 animated-left ${elementVisibility.element11 ? 'slide-left' : ''}`} style={{ background: colorPrimaryMicropython, borderRadius: "40px" }} >
                                    <button className="accordion-button collapsed bg-transparent text-light" type="button" data-bs-toggle="collapse" data-bs-target="#a10" aria-expanded="false" aria-controls="flush-collapseOne">
                                        <h2>Variables</h2>
                                    </button>
                                    <div id="a10" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body text-light bg-dark ">
                                            <div className="accordion-body text-light">
                                                <h3 className="text-break mx-auto w-75 mt-4">¿Que es una variable?</h3>
                                                <p className="text-break mx-auto w-75">En el contexto de la programación, una variable es un contenedor para almacenar y manipular datos. Imagina una variable como una caja etiquetada en la memoria del equipo, donde puedes guardar diferentes tipos de información, como números, texto o valores booleanos. En un programa, puedes declarar una variable y asignarle un valor para luego utilizarlo en diferentes partes del código.</p>
                                                <p className="text-break mb-4 mx-auto w-75">Cuando declaras una variable en un lenguaje de programación, se reserva un espacio en la memoria para almacenar su valor. La ubicación exacta en la memoria puede variar dependiendo del lenguaje y del entorno de ejecución. Sin embargo, el proceso general para acceder al valor de una variable implica el uso de la CPU y la RAM del equipo.</p>
                                                <h3 className="text-break mt-4 mx-auto w-75">Funcionamiento de hardware</h3>
                                                <p className="text-break mx-auto w-75">CPU (Unidad Central de Procesamiento): La CPU es el componente principal del hardware que ejecuta las instrucciones de un programa. Cuando accedes a una variable, la CPU utiliza registros internos para almacenar temporalmente el valor de la variable que se va a procesar. Los registros son ubicaciones de memoria extremadamente rápidas y cercanas a la CPU, lo que permite un acceso más rápido a los datos.</p>
                                                <p className="text-break mx-auto w-75">RAM (Memoria de Acceso Aleatorio): La RAM es un tipo de memoria de almacenamiento temporal que almacena tanto el programa en ejecución como los datos necesarios para el programa. Cuando se necesita el valor de una variable, la CPU busca en la RAM la ubicación de memoria reservada para esa variable y recupera el valor almacenado allí. Esto implica acceder a la dirección de memoria correspondiente a la variable y obtener los datos almacenados en esa ubicación.</p>
                                                <img className="w-75 d-block mx-auto border-content" style={{ marginBottom: "7rem" }} alt="" src="../../img/class2/variable.webp"></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="element12" className={`accordion-item mt-4 rounded-5 animated-left ${elementVisibility.element12 ? 'slide-left' : ''}`} style={{ background: colorPrimaryMicropython, borderRadius: "40px" }} >
                                    <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a11" aria-expanded="false" aria-controls="flush-collapseSeven">
                                        <h2 className="text-light">Ejecución del primer programa</h2>
                                    </button>
                                    <div id="a11" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body text-light bg-dark ">
                                            <h3 className="text-center mx-auto mt-4" style={{ fontWeight: "700" }}>Primer programa: parpadeo en LED incorporado</h3>
                                            <p className="mt-4 mb-2 text-center mx-auto w-75">Para crear un archivo nuevo debemos tocar en el "+"</p>
                                            <img className="mx-auto d-block w-75 border-content" style={{ marginBottom: "4rem" }} alt="" src="../../img/class1Micropython/eject1.jpg"></img>
                                            <h3 className="text-center mx-auto mt-4" style={{ fontWeight: "700" }}>Machine - Pin</h3>
                                            <p className="mt-4 mb-4 text-center mx-auto w-75">"machine" es un módulo que proporciona una interfaz para interactuar con hardware en dispositivos que ejecutan MicroPython, como placas de desarrollo basadas en microcontroladores o microprocesadores. <br></br> Este módulo "machine" facilita el control y la configuración de hardware, como pines GPIO, comunicación serial, temporizadores y otros periféricos.</p>
                                            <p className="mt-4 mb-2 text-center mx-auto w-75">En este primer programa utilizaremos la función "Pin" del módulo "machine", este será el encargado de controlar los pines de nuestro controlador, para utilizarlo debemos escribir "from machine import Pin".</p>
                                            <CopyButton code={class1MCode[0]} />
                                            <img className="mx-auto d-block w-75 border-content" style={{ marginBottom: "4rem" }} alt="" src="../../img/class1Micropython/eject2.jpg"></img>
                                            <h3 className="text-center mx-auto mt-4" style={{ fontWeight: "700" }}>Time</h3>
                                            <p className="mt-4 mb-4 text-center mx-auto w-75">"time" es un módulo estándar que proporciona funciones relacionadas con la gestión del tiempo y la medición del tiempo en microsegundos, milisegundos y segundos. Este módulo es útil para trabajar con temporizadores, realizar mediciones de tiempo y programar tareas basadas en el tiempo en dispositivos que ejecutan MicroPython.</p>
                                            <p className="mt-4 mb-2 text-center mx-auto w-75">Para empezar a usar este módulo debemos escribir "import time".</p>
                                            <CopyButton code={class1MCode[1]} />
                                            <img className="mx-auto d-block w-75 border-content" style={{ marginBottom: "4rem" }} alt="" src="../../img/Class1Micropython/eject3.jpg"></img>
                                            <h3 className="text-center mx-auto mt-4" style={{ fontWeight: "700" }}>Print()</h3>
                                            <p className="mt-4 mb-4 text-center mx-auto w-75">"Print" es una función para mostrar por consola como mensajes, números o valores de una variable. para su uso solo le pasamos en los argumentos lo que deseamos mostrar en consola.</p>
                                            <p className="mt-4 mb-2 text-center mx-auto w-75">Esta función la usaremos para informar al usuario que el led está encendido o apagado, para ello debemos escribir en el argumento del print el mensaje entre comillas.</p>
                                            <CopyButton code={class1MCode[2]} />
                                            <img className="mx-auto d-block w-75 border-content" style={{ marginBottom: "7rem" }} alt="" src="../../img/class1Micropython/eject4.jpg"></img>
                                            <p className="mt-4 mb-2 text-center mx-auto w-75">Para indicar que vamos a usar el LED incorporado que nos provee el raspberry Pi Pico W debemos escribir "Pin("LED",Pin.OUT)".</p>
                                            <CopyButton code={class1MCode[3]} />
                                            <img className="mx-auto d-block w-75 border-content" style={{ marginBottom: "7rem" }} alt="" src="../../img/class1Micropython/eject5.jpg"></img>
                                            <p className="mt-4 mb-2 text-center mx-auto w-75">Para indicar que vamos a usar el LED incorporado que nos provee el raspberry Pi Pico W debemos escribir "Pin("LED",Pin.OUT)".</p>
                                            <CopyButton code={class1MCode[4]} />
                                            <img className="mx-auto d-block w-75 border-content" style={{ marginBottom: "7rem" }} alt="" src="../../img/class1Micropython/eject6.jpg"></img>
                                            <p className="mt-4 mb-2 text-center mx-auto w-75">Escribiremos las veces que queramos apagar y encender nuestro led y ejecutaremos el codigo en el microcontrolador con el botón verde (play), en el caso de querer parar el codigo debemos tocar el botón rojo (stop).</p>
                                            <CopyButton code={class1MCode[5]} />
                                            <img className="mx-auto d-block w-75 border-content" style={{ marginBottom: "7rem" }} alt="" src="../../img/class1Micropython/eject7.jpg"></img>
                                        </div>
                                    </div>
                                </div>
                                <div id="element13" className={`accordion-item mt-4 rounded-5 animated-left ${elementVisibility.element13 ? 'slide-left' : ''}`} style={{ background: colorPrimaryMicropython, borderRadius: "40px" }} >
                                    <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a12" aria-expanded="false" aria-controls="flush-collapseSeven">
                                        <h2 className="text-light">Simulador de Raspberry pi pico</h2>
                                    </button>
                                    <div id="a12" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body text-light bg-dark ">
                                            <h3 className="text-center mx-auto mt-4" style={{ fontWeight: "700" }}>WOKWI - Simulador de raspberry pi pico</h3>
                                            <p className="mt-4 mb-2 text-break mx-auto w-75">En el caso que no dispongan de un microcontrolador Raspberry pi pico, pueden crear una simulación del microcontrolador desde la página Wokwi</p>
                                            <p className="mt-4 mb-2 text-break mx-auto w-75">Para acceder a la página ingresa acá -- <a href="https://wokwi.com/projects/new/micropython-pi-pico" className="text-primary">https://wokwi.com/projects/new/micropython-pi-pico</a></p>
                                            <img className="mx-auto d-block w-75 border-content" style={{ marginBottom: "4rem" }} alt="" src="../../img/class1Micropython/simulator.webp"></img>
                                        </div>
                                    </div>
                                </div>
                                <div id="element14" className={`accordion-item mt-4 rounded-5 animated-left ${elementVisibility.element14 ? 'slide-left' : ''}`} style={{ background: colorPrimaryMicropython, borderRadius: "40px" }} >
                                    <Link to="/micropythonClassFile/class1.py"
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
                <section id="hero" style={{ background: colorPrimaryMicropython }} >
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
                                <div >
                                    <h1>Clase 1</h1>
                                    <h2>Ventajas de MicroPython para sistemas embebidos.</h2>
                                    <h2>Plataformas de hardware compatibles con MicroPython.</h2>
                                    <h2>Configuración del entorno de desarrollo.</h2>
                                    <div className="text-center text-lg-start">
                                        <a href="#clase1" className="btn-get-started scrollto">tendrás acceso al curso el {new Date(date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 order-1 order-lg-2 hero-img" style={{ backgroundColor: "#EE7053" }}  >
                                <img src="../img/micropython.png" className="img-fluid animated vh-60" alt="" />
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

export default MicropythonClass1
