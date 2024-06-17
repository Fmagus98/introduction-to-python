import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../../Utils/firebase'
import { collection, getDocs } from 'firebase/firestore'
import { colorPrimaryMicropython, colorSecondaryMicropython } from '../../colors'
import useScrollAnimation from '../../useScrollAnimation'

const MicropythonClass1 = () => {

    const elementVisibility = useScrollAnimation()
    const [date, setDate] = useState()
    const newDate = new Date()
    useEffect(() => {
        getDocs(collection(db, "courseMicropython")).then(response => {
            response.docs.map(doc => {
                if (doc.id === "DGNVKaHVIjv8RsBsi1yD") {
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
                    <section section id="hero" style={{ background: colorPrimaryMicropython }} >
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
                    <section id="faq" className="faq section-bg">
                        <div className="container">
                            <div id="element1" className={`section-title animated-left ${elementVisibility.element1 ? 'slide-left' : ''}`} style={{ color: colorSecondaryMicropython }} >
                                <h2>Clase 1</h2>
                                <p>Contenido</p>
                            </div>
                            <div className="accordion accordion-flush w-100 mx-auto rounded-5" id="accordionFlushExample">
                                <div id="element2" className={`accordion-item rounded-5 animated-left ${elementVisibility.element2 ? 'slide-left' : ''}`} style={{ background: colorPrimaryMicropython }} >
                                    <button className="accordion-button collapsed bg-transparent text-light"type="button" data-bs-toggle="collapse" data-bs-target="#a1" aria-expanded="false" aria-controls="flush-collapseOne">
                                        <h2 >¿Que es micropython?</h2>
                                    </button>
                                    <div id="a1" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                                            <img className="d-block mx-auto w-25" alt="" src="../../img/class1Micropython/damien.jpg"></img>
                                            <p className="text-center">MicroPython es una implementación del lenguaje de programación Python 3 diseñada específicamente para ser ejecutada en microcontroladores y sistemas embebidos. Fue creado por Damien George en 2013 y desde entonces ha ganado una gran popularidad en la comunidad de desarrollo de hardware y proyectos electrónicos.</p>
                                            <ol className="list-group list-group-numbered w-75 mx-auto mb-4 text-xl text-center">
                                                <p className="text-center mx-auto">Las características clave de MicroPython incluyen:</p>
                                                <li className="list-group list-group-numbered w-100 mx-auto "> <h3 className="text-center mx-auto mt-4" style={{ fontSize: "25px", fontWeight: "700" }}>Lenguaje Python</h3><p className="text-center">MicroPython es compatible con el lenguaje de programación Python 3, lo que significa que puedes escribir código en Python estándar para controlar hardware y dispositivos embebidos.</p></li>
                                                <li className="list-group list-group-numbered w-100 mx-auto ">
                                                    <h3 className="text-center mx-auto mt-4" style={{ fontSize: "25px", fontWeight: "700" }}>Eficiencia en recursos:</h3>
                                                    <p className="text-center"> Está diseñado para funcionar en sistemas con recursos limitados, como microcontroladores con poca memoria y potencia de procesamiento. Esto permite que Python se ejecute en dispositivos que normalmente no podrían manejar un lenguaje de alto nivel como Python.</p></li>
                                                <li className="list-group list-group-numbered w-100 mx-auto ">
                                                    <h3 className="text-center mx-auto mt-4" style={{ fontSize: "25px", fontWeight: "700" }}>Interacción con hardware</h3>
                                                    <p className="text-center">MicroPython proporciona una serie de módulos y bibliotecas que permiten la interacción con hardware, como sensores, actuadores y periféricos, a través de pines GPIO, comunicación serie (UART, SPI, I2C) y más.</p></li>
                                                <li className="list-group list-group-numbered w-100 mx-auto ">
                                                    <h3 className="text-center mx-auto mt-4" style={{ fontSize: "25px", fontWeight: "700" }}>Facilidad de uso</h3>
                                                    <p className="text-center"> Es una opción popular para principiantes y personas que ya están familiarizadas con Python, ya que les permite aplicar su conocimiento de Python en el desarrollo de sistemas embebidos.</p></li>
                                                <li className="list-group list-group-numbered w-100 mx-auto ">
                                                    <h3 className="text-center mx-auto mt-4" style={{ fontSize: "25px", fontWeight: "700" }}>Comunidad activa</h3><p className="text-center">MicroPython tiene una comunidad activa de desarrolladores y usuarios que contribuyen con bibliotecas y ejemplos de código, lo que facilita el desarrollo de proyectos y la solución de problemas.</p></li>
                                                <li className="list-group list-group-numbered w-100 mx-auto ">
                                                    <h3 className="text-center mx-auto mt-4" style={{ fontSize: "25px", fontWeight: "700" }}>Soporte para múltiples plataformas</h3><p className="text-center">Aunque MicroPython se originó en el microcontrolador Pyboard, ahora es compatible con una amplia gama de microcontroladores y placas de desarrollo, lo que permite a los usuarios elegir la plataforma que mejor se adapte a sus necesidades.</p></li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                                <div id="element3" className={`accordion-item mt-4 rounded-5 animated-left ${elementVisibility.element3 ? 'slide-left' : ''}`} style={{ background: colorPrimaryMicropython }} >
                                    <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a2" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        <h2 className="text-light">Aplicaciones en el ámbito laboral</h2>
                                    </button>
                                    <div id="a2" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                                            <p className="text-center mx-auto w-75">MicroPython tiene aplicaciones en una variedad de campos y desempeña un papel importante en el mundo laboral en varias áreas. A continuación, se presentan algunas de las aplicaciones y casos de uso más comunes de MicroPython en el mundo laboral:
                                            </p>
                                            <ol className="list-group list-group-numbered w-75 mx-auto mb-4 text-xl text-center">
                                                <h3 className="text-center mx-auto mt-4" style={{ fontSize: "25px", fontWeight: "700" }}>Desarrollo de dispositivos IoT (Internet de las cosas)</h3>
                                                <li className="list-group list-group-numbered w-100 mx-auto "><p className="text-center">MicroPython es ampliamente utilizado en el desarrollo de dispositivos IoT debido a su capacidad para ejecutarse en microcontroladores y placas de desarrollo de bajo costo. Los dispositivos IoT pueden recopilar datos de sensores, comunicarse a través de Wi-Fi o Bluetooth, y enviar datos a la nube o a otras aplicaciones para su procesamiento. Esto se aplica a campos como la agricultura inteligente, la monitorización de la salud, la automatización del hogar y más.</p></li>
                                                <h3 className="text-center mx-auto mt-4" style={{ fontSize: "25px", fontWeight: "700" }}>Automatización industrial</h3>
                                                <li className="list-group list-group-numbered w-100 mx-auto "><p className="text-center">En entornos industriales, MicroPython se utiliza para controlar y supervisar maquinaria y procesos de fabricación. Puede ser parte de sistemas de automatización y control que garantizan la eficiencia y la seguridad en la producción.</p></li>
                                                <h3 className="text-center mx-auto mt-4" style={{ fontSize: "25px", fontWeight: "700" }}>Robótica educativa</h3>
                                                <li className="list-group list-group-numbered w-100 mx-auto "><p className="text-center">En la educación y la formación técnica, MicroPython se utiliza para enseñar a estudiantes los conceptos de programación y robótica. Placas de desarrollo como el micro:bit y el ESP8266/ESP32, que admiten MicroPython, se utilizan en programas de robótica educativa.</p></li>
                                                <h3 className="text-center mx-auto mt-4" style={{ fontSize: "25px", fontWeight: "700" }}>Prototipado rápido</h3>
                                                <li className="list-group list-group-numbered w-100 mx-auto "><p className="text-center">MicroPython permite a los ingenieros y desarrolladores crear prototipos de hardware y software de manera rápida y eficiente. Esto es útil para probar conceptos antes de pasar a implementaciones más costosas y a gran escala.</p></li>
                                                <h3 className="text-center mx-auto mt-4" style={{ fontSize: "25px", fontWeight: "700" }}>Sistemas de monitoreo y control en tiempo real</h3>
                                                <li className="list-group list-group-numbered w-100 mx-auto "><p className="text-center">En aplicaciones que requieren una respuesta en tiempo real, como el control de sistemas de climatización, sistemas de alarma, monitoreo de calidad del aire y más, MicroPython puede ser una solución eficiente.</p></li>
                                                <h3 className="text-center mx-auto mt-4" style={{ fontSize: "25px", fontWeight: "700" }}>Investigación y desarrollo</h3>
                                                <li className="list-group list-group-numbered w-100 mx-auto "><p className="text-center">Los investigadores y científicos utilizan MicroPython para desarrollar prototipos de instrumentación científica y sistemas de adquisición de datos. Pueden utilizarlo para automatizar experimentos, recopilar datos y realizar análisis.</p></li>
                                                <h3 className="text-center mx-auto mt-4" style={{ fontSize: "25px", fontWeight: "700" }}>Automatización del hogar</h3>
                                                <li className="list-group list-group-numbered w-100 mx-auto "><p className="text-center">En el ámbito doméstico, MicroPython se utiliza en proyectos de automatización del hogar, como controlar luces, sistemas de seguridad, termostatos y más, mediante dispositivos DIY (hazlo tú mismo) o comerciales.</p></li>
                                                <h3 className="text-center mx-auto mt-4" style={{ fontSize: "25px", fontWeight: "700" }}>Desarrollo de productos comerciales</h3>
                                                <li className="list-group list-group-numbered w-100 mx-auto "><p className="text-center">Muchas empresas han adoptado MicroPython como parte de sus productos comerciales, especialmente en el campo de los dispositivos embebidos y las soluciones IoT.</p></li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                                <div id="element4" className={`accordion-item mt-4 rounded-5 animated-left ${elementVisibility.element4 ? 'slide-left' : ''}`} style={{ background: colorPrimaryMicropython }} >
                                    <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a3" aria-expanded="false" aria-controls="flush-collapseThree">
                                        <h2 className="text-light">Plataformas de hardware compatibles con MicroPython</h2>
                                    </button>
                                    <div id="a3" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                                            <div id="content">
                                                <p className="text-center mx-auto"> MicroPython es compatible con una amplia variedad de plataformas de hardware, especialmente aquellas que utilizan microcontroladores y microprocesadores. Algunas de las plataformas de hardware compatibles con MicroPython más populares incluyen:</p>
                                                <ol className="list-group list-group-numbered w-75 mx-auto mb-4 text-xl text-center">
                                                    <li className="list-group list-group-numbered w-100 mx-auto ">
                                                        <img className="d-block mx-auto w-25" alt="" src="../../img/class1Micropython/esp32.webp"></img>
                                                        <h3 className="text-center mx-auto mt-4" style={{ fontSize: "25px", fontWeight: "700" }}>ESP8266 y ESP32</h3><p className="text-center">Estos son microcontroladores muy populares fabricados por Espressif Systems. Son ampliamente utilizados en proyectos IoT y son compatibles con MicroPython. Las placas de desarrollo como NodeMCU y Wemos D1 Mini son ejemplos comunes.</p>
                                                    </li>
                                                    <li className="list-group list-group-numbered w-100 mx-auto ">
                                                        <img className="d-block mx-auto w-25" alt="" src="../../img/class1Micropython/microbit.webp"></img>
                                                        <h3 className="text-center mx-auto mt-4" style={{ fontSize: "25px", fontWeight: "700" }}>Micro:bit</h3>
                                                        <p className="text-center">El BBC micro:bit es una pequeña placa de desarrollo ampliamente utilizada en la educación y la robótica educativa. También es compatible con MicroPython.</p>
                                                    </li>
                                                    <li className="list-group list-group-numbered w-100 mx-auto ">
                                                        <img className="d-block mx-auto w-25" alt="" src="../../img/class1Micropython/pyboard.jpg"></img>
                                                        <h3 className="text-center mx-auto mt-4" style={{ fontSize: "25px", fontWeight: "700" }}>PyBoard</h3>
                                                        <p className="text-center">PyBoard es una placa de desarrollo diseñada específicamente para MicroPython. Es una opción popular para proyectos que requieren un rendimiento más alto.</p>
                                                    </li>
                                                    <li className="list-group list-group-numbered w-100 mx-auto ">
                                                        <img className="d-block mx-auto w-25" alt="" src="../../img/class1Micropython/raspberryPiPico.webp"></img>
                                                        <h3 className="text-center mx-auto mt-4" style={{ fontSize: "25px", fontWeight: "700" }}>Raspberry Pi Pico</h3>
                                                        <p className="text-center">La Raspberry Pi Pico es una placa de desarrollo basada en el microcontrolador RP2040 de Raspberry Pi Foundation. Es compatible con MicroPython y ofrece una potente plataforma para proyectos embebidos.</p>
                                                    </li>
                                                    <li className="list-group list-group-numbered w-100 mx-auto ">
                                                        <img className="d-block mx-auto w-25" alt="" src="../../img/class1Micropython/arduino.webp"></img>
                                                        <h3 className="text-center mx-auto mt-4" style={{ fontSize: "25px", fontWeight: "700" }}>Arduino</h3>
                                                        <p className="text-center">Aunque MicroPython es más comúnmente asociado con los microcontroladores mencionados anteriormente, también hay versiones de MicroPython que pueden ejecutarse en algunas placas de Arduino, como el Adafruit Circuit Playground Express y algunas placas basadas en el microcontrolador SAMD21.</p>
                                                    </li>
                                                    <li className="list-group list-group-numbered w-100 mx-auto ">
                                                        <img className="d-block mx-auto w-25" alt="" src="../../img/class1Micropython/stm32.webp"></img>
                                                        <h3 className="text-center mx-auto mt-4" style={{ fontSize: "25px", fontWeight: "700" }}>STM32</h3>
                                                        <p className="text-center">Algunas placas de desarrollo basadas en microcontroladores STM32 son compatibles con MicroPython.</p>
                                                    </li>
                                                    <li className="list-group list-group-numbered w-100 mx-auto ">
                                                        <img className="d-block mx-auto w-25" alt="" src="../../img/class1Micropython/beaglebone.webp"></img>
                                                        <h3 className="text-center mx-auto mt-4" style={{ fontSize: "25px", fontWeight: "700" }}>BeagleBone Black</h3>
                                                        <p className="text-center"> Aunque no es tan común como otras plataformas mencionadas anteriormente, BeagleBone Black también tiene soporte para MicroPython.</p>
                                                    </li>
                                                    <li className="list-group list-group-numbered w-100 mx-auto ">
                                                        <img className="d-block mx-auto w-25" alt="" src="../../img/class1Micropython/Seeeduino.jpg"></img>
                                                        <h3 className="text-center mx-auto mt-4" style={{ fontSize: "25px", fontWeight: "700" }}>Wio Terminal y Seeeduino XIAO</h3>
                                                        <p className="text-center">Estas son otras placas de desarrollo que son compatibles con MicroPython y son utilizadas en proyectos embebidos.</p>
                                                    </li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="element5" className={`accordion-item mt-4 rounded-5 animated-left ${elementVisibility.element5 ? 'slide-left' : ''}`} style={{ background: colorPrimaryMicropython }} >
                                    <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a4" aria-expanded="false" aria-controls="flush-collapseFour">
                                        <h2  className="text-light">Raspberry pi pico</h2>
                                    </button>
                                    <div id="a4" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                                            <h3 className="text-center mx-auto mt-4" style={{ fontSize: "25px", fontWeight: "700" }}>Familia de raspberry pi pico</h3>
                                            <p className="text-center mx-auto">La familia Raspberry Pi Pico consta actualmente de cuatro placas; Raspberry Pi Pico (extremo izquierdo), Pico H (centro izquierda), Pico W (centro derecha) y Pico WH (extremo derecho).<br></br>Raspberry Pi Pico es una placa microcontroladora de alto rendimiento y bajo costo con interfaces digitales flexibles.</p>
                                            <img className="d-block mx-auto w-75" alt="" src="../../img/class1Micropython/picos.png"></img>
                                            <h3 className="text-center mx-auto mt-4" style={{ fontSize: "25px", fontWeight: "700" }}>Raspberry Pi Pico and Pico H</h3>
                                            <p className="text-center mx-auto" style={{ marginBottom: "0.2rem" }}>Las caracteristicas que tienen estos 2 microcontradores son:</p>
                                            <ul className="list-group list-group-numbered w-75 mx-auto mb-4 text-xl text-center">
                                                <li className="list-group list-group-numbered w-100 mx-auto " ><p style={{ marginBottom: "0px" }}>Chip microcontrolador RP2040 diseñado por Raspberry Pi</p></li>
                                                <li className="list-group list-group-numbered w-100 mx-auto " ><p style={{ marginTop: "0px", marginBottom: "0px" }}>Procesador Arm Cortex M0+ de doble núcleo, reloj flexible que funciona hasta 133 MHz</p></li>
                                                <li className="list-group list-group-numbered w-100 mx-auto "><p style={{ marginTop: "0px", marginBottom: "0px" }}>USB 1.1 con soporte para dispositivos y hosts</p></li>
                                                <li className="list-group list-group-numbered w-100 mx-auto "><p style={{ marginTop: "0px", marginBottom: "0px" }}>Modos inactivos y de suspensión de bajo consumo de energía</p></li>
                                                <li className="list-group list-group-numbered w-100 mx-auto "><p style={{ marginTop: "0px", marginBottom: "0px" }}>Programación de arrastrar y soltar usando almacenamiento masivo a través de USB</p></li>
                                                <li className="list-group list-group-numbered w-100 mx-auto "><p style={{ marginTop: "0px", marginBottom: "0px" }}>26 × pines GPIO multifunción</p></li>
                                                <li className="list-group list-group-numbered w-100 mx-auto "><p style={{ marginTop: "0px", marginBottom: "0px" }}>2 × SPI, 2 × I2C, 2 × UART, 3 × ADC de 12 bits, 16 × canales PWM controlables</p></li>
                                                <li className="list-group list-group-numbered w-100 mx-auto "><p style={{ marginTop: "0px", marginBottom: "0px" }}>Sensor de temperatura</p></li>
                                                <li className="list-group list-group-numbered w-100 mx-auto "><p style={{ marginTop: "0px", marginBottom: "0px" }}>8 × máquinas de estado de E/S programables (PIO) para soporte periférico personalizado</p></li>
                                            </ul>
                                            <img className="d-block mx-auto w-75" alt="" src="../../img/class1Micropython/pico_pinout.jpg"></img>
                                            <h3 className="text-center mx-auto mt-4" style={{ fontSize: "25px", fontWeight: "700" }}>Raspberry Pi Pico W and Pico WH</h3>
                                            <p className="text-center mx-auto" style={{ marginBottom: "0.2rem" }}>Raspberry Pi Pico W agrega interfaces inalámbricas integradas de banda única de 2,4 GHz (802.11n) utilizando el Infineon CYW43439 manteniendo el factor de forma Pico. La interfaz inalámbrica integrada de 2,4 GHz tiene las siguientes características:</p>
                                            <ul className="list-group list-group-numbered w-75 mx-auto mb-4 text-xl text-center">
                                                <li className="list-group list-group-numbered w-100 mx-auto " ><p style={{ marginBottom: "0px" }}>Wireless (802.11n), single-band (2.4 GHz) - WPA3</p></li>
                                                <li className="list-group list-group-numbered w-100 mx-auto " ><p style={{ marginTop: "0px", marginBottom: "0px" }}>Punto de acceso hasta cuatro clientes</p></li>
                                                <li className="list-group list-group-numbered w-100 mx-auto "><p style={{ marginTop: "0px", marginBottom: "0px" }}>Bluetooth 5.2</p></li>
                                                <li className="list-group list-group-numbered w-100 mx-auto "><p style={{ marginTop: "0px", marginBottom: "0px" }}>Modos inactivos y de suspensión de bajo consumo de energía</p></li>
                                                <li className="list-group list-group-numbered w-100 mx-auto "><p style={{ marginTop: "0px", marginBottom: "0px" }}>Programación de arrastrar y soltar usando almacenamiento masivo a través de USB</p></li>
                                                <li className="list-group list-group-numbered w-100 mx-auto "><p style={{ marginTop: "0px", marginBottom: "0px" }}>26 × pines GPIO multifunción</p></li>
                                                <li className="list-group list-group-numbered w-100 mx-auto "><p style={{ marginTop: "0px", marginBottom: "0px" }}>2 × SPI, 2 × I2C, 2 × UART, 3 × ADC de 12 bits, 16 × canales PWM controlables</p></li>
                                                <li className="list-group list-group-numbered w-100 mx-auto "><p style={{ marginTop: "0px", marginBottom: "0px" }}>Sensor de temperatura</p></li>
                                                <li className="list-group list-group-numbered w-100 mx-auto "><p style={{ marginTop: "0px", marginBottom: "0px" }}>8 × máquinas de estado de E/S programables (PIO) para soporte periférico personalizado</p></li>
                                            </ul>
                                            <img className="d-block mx-auto w-75" alt="" src="../../img/class1Micropython/picow_pinout.jpg"></img>
                                        </div>
                                    </div>
                                </div>
                                <div id="element6" className={`accordion-item mt-4 rounded-5 animated-left ${elementVisibility.element6 ? 'slide-left' : ''}`} style={{ background: colorPrimaryMicropython }} >
                                    <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a5" aria-expanded="false" aria-controls="flush-collapseFive">
                                        <h2 className="text-light">IDE - thonny</h2>
                                    </button>
                                    <div id="a5" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                                            <h3 className="text-center mx-auto mt-4" style={{ fontWeight: "700" }}>Instalación de thonny</h3>
                                            <p className="mt-4 mb-4 text-center mx-auto w-50">Dirígete a <Link to="https://thonny.org/" target="_blank" className="text-info">https://thonny.org/</Link> e instala el programa dependiendo tu sistema operativo.</p>
                                            <img className="w-75 mx-auto d-block" alt="" src="../../img/class1Micropython/IDE1.jpg"></img>
                                            <p className="mt-4 mb-4 text-center mx-auto">Al ejecutar el instalador oprime el botón "next"</p>
                                            <img className="w-75 mx-auto d-block" alt="" src="../../img/class1Micropython/IDE2.jpg"></img>
                                            <p className="mt-4 mb-4 text-center mx-auto">Acepta el acuerdo y oprime el botón "next"</p>
                                            <img className="w-75 mx-auto d-block" alt="" src="../../img/class1Micropython/IDE3.jpg"></img>
                                            <p className="mt-4 mb-4 text-center mx-auto">oprime el botón "next"</p>
                                            <img className="w-75 mx-auto d-block" alt="" src="../../img/class1Micropython/IDE4.jpg"></img>
                                            <p className="mt-4 mb-4 text-center mx-auto">Nuevamente oprime el botón "next"</p>
                                            <img className="w-75 mx-auto d-block" alt="" src="../../img/class1Micropython/IDE5.jpg"></img>
                                            <p className="mt-4 mb-4 text-center mx-auto">Selecciona "create desktop icon" para tener esta aplicación en tu escritorio y oprime el botón "next</p>
                                            <img className="w-75 mx-auto d-block" alt="" src="../../img/class1Micropython/IDE6.jpg"></img>
                                            <p className="mt-4 mb-4 text-center mx-auto">Seleccionamos el botón "install"</p>
                                            <img className="w-75 mx-auto d-block" alt="" src="../../img/class1Micropython/IDE7.jpg"></img>
                                            <p className="mt-4 mb-4 text-center mx-auto">Seleccionamos el botón "finish"</p>
                                            <img className="w-75 mx-auto d-block" alt="" src="../../img/class1Micropython/IDE8.jpg"></img>
                                            <h3 className="text-center mx-auto mt-4" style={{ fontWeight: "700" }}>Configuración de thonny</h3>
                                            <p className="mt-4 mb-4 text-center mx-auto">Seleccionamos el lenguaje, dejamos en configuración "standard" y seleccionamos el botón "Lets go!"</p>
                                            <img className="w-75 mx-auto d-block" alt="" src="../../img/class1Micropython/IDE9.jpg"></img>
                                            <p className="mt-4 mb-4 text-center mx-auto">Al estar dentro del programa accede a Ejecutar/configurar intérprete</p>
                                            <img className="w-75 mx-auto d-block" alt="" src="../../img/class1Micropython/IDE10.jpg"></img>
                                            <p className="mt-4 mb-4 text-center mx-auto">Elige "micropython (raspberry pi pico)" y presiona "instala o actualiza micropython"</p>
                                            <img className="w-75 mx-auto d-block" alt="" src="../../img/class1Micropython/IDE11.jpg"></img>
                                            <p className="mt-4 mb-4 text-center mx-auto">Debemos conectar nuestro microcontrolador y presionar el botón blanco</p>
                                            <img className="w-25 mx-auto d-block" alt="" src="../../img/class1Micropython/IDE12.jpg"></img>
                                            <p className="mt-4 mb-4 text-center mx-auto">Automáticamente nos aparecerá el microcontrolador que conectamos, en este caso vamos a configurarlo de la siguiente manera y le damos a "instalar"</p>
                                            <img className="w-75 mx-auto d-block" alt="" src="../../img/class1Micropython/IDE13.jpg"></img>
                                            <p className="mt-4 mb-4 text-center mx-auto">Si en la consola te muestra el nombre del microcontrolador, está bien configurado</p>
                                            <img className="w-75 mx-auto d-block" style={{ marginBottom: "4rem" }} alt="" src="../../img/class1Micropython/IDE14.jpg"></img>
                                        </div>
                                    </div>
                                </div>
                                <div id="element7" className={`accordion-item mt-4 rounded-5 animated-left ${elementVisibility.element7 ? 'slide-left' : ''}`} style={{ background: colorPrimaryMicropython }} >
                                    <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a7" aria-expanded="false" aria-controls="flush-collapseSeven">
                                        <h2  className="text-light">Ejecución del primer programa</h2>
                                    </button>
                                    <div id="a7" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                                            <h3 className="text-center mx-auto mt-4" style={{ fontWeight: "700" }}>Primer programa: parpadeo en LED incorporado</h3>
                                            <p className="mt-4 mb-2 text-center mx-auto w-75">Para crear un archivo nuevo debemos tocar en el "+"</p>
                                            <img className="w-75 d-block mx-auto" style={{ marginBottom: "4rem" }} alt="" src="../../img/Class1Micropython/eject1.jpg"></img>
                                            <h3 className="text-center mx-auto mt-4" style={{ fontWeight: "700" }}>Machine - Pin</h3>
                                            <p className="mt-4 mb-4 text-center mx-auto w-75">"machine" es un módulo que proporciona una interfaz para interactuar con hardware en dispositivos que ejecutan MicroPython, como placas de desarrollo basadas en microcontroladores o microprocesadores. <br></br> Este módulo "machine" facilita el control y la configuración de hardware, como pines GPIO, comunicación serial, temporizadores y otros periféricos.</p>
                                            <p className="mt-4 mb-2 text-center mx-auto w-75">En este primer programa utilizaremos la función "Pin" del módulo "machine", este será el encargado de controlar los pines de nuestro controlador, para utilizarlo debemos escribir "from machine import Pin".</p>
                                            <img className="w-75 d-block mx-auto" style={{ marginBottom: "4rem" }} alt="" src="../../img/Class1Micropython/eject2.jpg"></img>
                                            <h3 className="text-center mx-auto mt-4" style={{ fontWeight: "700" }}>Time</h3>
                                            <p className="mt-4 mb-4 text-center mx-auto w-75">"time" es un módulo estándar que proporciona funciones relacionadas con la gestión del tiempo y la medición del tiempo en microsegundos, milisegundos y segundos. Este módulo es útil para trabajar con temporizadores, realizar mediciones de tiempo y programar tareas basadas en el tiempo en dispositivos que ejecutan MicroPython.</p>
                                            <p className="mt-4 mb-2 text-center mx-auto w-75">Para empezar a usar este módulo debemos escribir "import time".</p>
                                            <img className="w-75 d-block mx-auto" style={{ marginBottom: "4rem" }} alt="" src="../../img/Class1Micropython/eject3.jpg"></img>
                                            <h3 className="text-center mx-auto mt-4" style={{ fontWeight: "700" }}>Print()</h3>
                                            <p className="mt-4 mb-4 text-center mx-auto w-75">"Print" es una función para mostrar por consola como mensajes, números o valores de una variable. para su uso solo le pasamos en los argumentos lo que deseamos mostrar en consola.</p>
                                            <p className="mt-4 mb-2 text-center mx-auto w-75">Esta función la usaremos para informar al usuario que el led está encendido o apagado, para ello debemos escribir en el argumento del print el mensaje entre comillas.</p>
                                            <img className="w-75 d-block mx-auto" style={{ marginBottom: "7rem" }} alt="" src="../../img/Class1Micropython/eject4.jpg"></img>
                                            <p className="mt-4 mb-2 text-center mx-auto w-75">Para indicar que vamos a usar el LED incorporado que nos provee el raspberry Pi Pico W debemos escribir "Pin("LED",Pin.OUT)".</p>
                                            <img className="w-75 d-block mx-auto" style={{ marginBottom: "7rem" }} alt="" src="../../img/Class1Micropython/eject5.jpg"></img>
                                            <p className="mt-4 mb-2 text-center mx-auto w-75">Para indicar que vamos a usar el LED incorporado que nos provee el raspberry Pi Pico W debemos escribir "Pin("LED",Pin.OUT)".</p>
                                            <img className="w-75 d-block mx-auto" style={{ marginBottom: "7rem" }} alt="" src="../../img/Class1Micropython/eject6.jpg"></img>
                                            <p className="mt-4 mb-2 text-center mx-auto w-75">Escribiremos las veces que queramos apagar y encender nuestro led y ejecutaremos el codigo en el microcontrolador con el botón verde (play), en el caso de querer parar el codigo debemos tocar el botón rojo (stop).</p>
                                            <img className="w-75 d-block mx-auto" style={{ marginBottom: "7rem" }} alt="" src="../../img/Class1Micropython/eject7.jpg"></img>
                                        </div>
                                    </div>
                                </div>
                                <div id="element8" className={`accordion-item mt-4 rounded-5 animated-left ${elementVisibility.element8 ? 'slide-left' : ''}`} style={{ background: colorPrimaryMicropython }} >
                                    <Link to="/micropythonClassFile/class1.py"
                                        target={"_blank"}
                                        download={"class1.py"}>
                                        <button className="accordion-button collapsed bg-transparent" type="button">
                                            <h2  className="text-light">Descarga el archivo de la clase 1</h2>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </> :
                <section section id="hero" style={{ background: colorPrimaryMicropython }} >
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
