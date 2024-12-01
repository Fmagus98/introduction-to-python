import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../../Utils/firebase'
import { collection, getDocs } from 'firebase/firestore'
import { colorPrimaryMicropython } from '../../colors'
import useScrollAnimation from '../../useScrollAnimation'
import { CopyButton } from '../CopyButton/CopyButton'
import { class4MCode, class6MCode } from './MicropythonClassCode'
import { class4Code } from '../Class/classCode'


const MicropythonClass6 = () => {

    const elementVisibility = useScrollAnimation()
    const [date, setDate] = useState()
    const newDate = new Date()
    useEffect(() => {
        if (!localStorage.getItem("dataCourseMicropython")) {
            getDocs(collection(db, "courseMicropython")).then(response => {
                response.docs.map(doc => {
                    if (doc.id === "PkxJof23pZmY2DOzvDZk") {
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
            (new Date(date?.[5]?.date) <= newDate) || localStorage.getItem("access - micropython") ?
                <>
                    <section id="hero" style={{ background: colorPrimaryMicropython }} >
                        <div className="container">
                            <div className="row justify-content-between">
                                <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
                                    <div >
                                        <h1>Clase 6</h1>
                                        <h2>Configuración de redes Wi-Fi.</h2>
                                        <h2>Acceso a Internet y servicios web.</h2>
                                        <h2>Ejemplos de proyectos conectados a la web.</h2>
                                        <div className="text-center text-lg-start">
                                            <a href="#clase4" className="btn-get-started scrollto" style={{ backgroundColor: "#EE7053" }}>Contenido de la clase 6</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 order-1 order-lg-2 hero-img"  >
                                    <img src="../../img/micropython.png" className="img-fluid animated vh-60" alt="" />
                                </div>
                            </div>
                        </div>
                        <svg id="clase4" className="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28 " preserveAspectRatio="none">
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
                                <h2>Clase 6</h2>
                                <p>Contenido</p>
                            </div>
                            <div id="element2" className={`rounded-5 animated-left ${elementVisibility.element2 ? 'slide-left' : ''}`} style={{ background: colorPrimaryMicropython, borderRadius: "40px" }} >
                                <button className="accordion-button collapsed bg-transparent text-light" type="button" data-bs-toggle="collapse" data-bs-target="#a1" aria-expanded="false" aria-controls="flush-collapseOne">
                                    <h2>¿Que es una función?</h2>
                                </button>
                                <div id="a1" className="accordion-collapse collapse" >
                                    <div className="accordion-body text-light bg-dark ">
                                        <p className="text-break w-75 mx-auto mt-4">Una función en programación es un conjunto de lineas de código agrupadas ( bloque de código ) que funcionan como una unidad realizando una tarea específica.
                                        </p>
                                        <p className="text-break w-75 mx-auto mt-4">
                                            Estas funciones en Python pueden devolver o no valores, también pueden tener o no parámetros/argumentos.
                                            A las funciones también se las denomina "métodos" cuando se encuentran definidas dentro de una clase.
                                        </p>
                                        <h3 className="text-break mx-auto w-75">Para que se utiliza una función?</h3>
                                        <h4 className="text-break mx-auto w-75">Reutilización de código</h4>
                                        <p className="text-break mx-auto w-75">Una vez que se define una función, puede ser llamada desde diferentes partes del programa tantas veces como sea necesario. Esto evita la repetición de código y promueve la eficiencia, ya que no es necesario volver a escribir el mismo código una y otra vez. La reutilización de funciones también facilita las actualizaciones y modificaciones, ya que solo se necesita hacer el cambio en un solo lugar.<br></br>En la comunidad de programadores se difundió la abreviacion "DRY" ("don't release yoursef") que significa "no te repitas a ti mismo".</p>
                                        <h4 className="text-break mx-auto w-75">Modularidad</h4>
                                        <p className="text-break mx-auto w-75">Las funciones permiten dividir un programa en módulos más pequeños y autónomos. Cada función se centra en una tarea específica y puede ser desarrollada, probada y depurada de manera independiente. Esto facilita el desarrollo colaborativo y el trabajo en equipo, ya que diferentes programadores pueden trabajar en funciones diferentes al mismo tiempo.</p>
                                        <h4 className="text-break mx-auto w-75">Abstracción</h4>
                                        <p className="text-break mx-auto w-75">Las funciones pueden ocultar los detalles internos de su implementación y proporcionar una interfaz más simple y fácil de usar. Esto permite que los programadores se centren en el uso de la función sin preocuparse por cómo se implementa. La abstracción reduce la complejidad y facilita el diseño y mantenimiento del programa</p>
                                        <h4 className="text-break mx-auto w-75">Legibilidad y mantenimiento</h4>
                                        <p className="text-break mx-auto w-75">Al dividir un programa en funciones más pequeñas y enfocadas, se mejora la legibilidad del código. Las funciones bien nombradas y bien definidas hacen que el código sea más fácil de entender y de dar seguimiento. Además, si se encuentra un error o se necesita hacer una mejora, solo se necesita realizar el cambio en la función correspondiente, lo que facilita el mantenimiento del programa en el futuro.</p>
                                        <h2 className="text-break mx-auto w-75 mt-4">Sintaxis básica de una función</h2>
                                        <CopyButton code={class4Code[0]} />
                                        <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class4/function.webp"></img>
                                        <h2 className="text-break mx-auto w-75">Explicación de los elementos en una función</h2>
                                        <p className="text-break mx-auto w-75">def: La palabra clave "def" se utiliza para definir una función en Python.</p>
                                        <p className="text-break mx-auto w-75">nombre_de_la_funcion: Es el nombre que eliges para tu función. Debes seguir las convenciones de nombrado de Python y elegir un nombre descriptivo que indique la tarea que realiza la función.</p>
                                        <p className="text-break mx-auto w-75">parámetros: Son los valores que la función puede recibir como entrada. Estos son opcionales y puedes tener cero, uno o más parámetros separados por comas. Si no hay parámetros, se dejan los paréntesis vacíos.</p>
                                        <p className="text-break mx-auto w-75">indentación: El cuerpo de la función está indentado y contiene el código que define las acciones que la función realizará cuando sea llamada. Puede consistir en cualquier número de declaraciones, operaciones y estructuras de control (como condicionales y bucles).</p>
                                        <p className="text-break mx-auto w-75">return: La declaración return se utiliza para especificar el valor que la función devuelve como resultado. Es opcional y puede haber múltiples declaraciones de retorno dentro de una función. Si no se especifica un valor de retorno, la función devuelve None de forma predeterminada.</p>
                                        <p className="text-break mx-auto w-75" style={{ marginBottom: "7rem" }}>nombre_de_la_funcion(): Una función no se ejecuta por si solo, cuando queramos ejecutar una función debemos escribir el nombre asignado a la función seguido de un paréntesis, a este paréntesis se lo denomina zona de parámetros/argumentos, si tu función tiene parámetros deberás escribir adentro de los paréntesis tus parámetros.</p>
                                    </div>
                                </div>
                            </div>
                            <div id="element3" className={`rounded-5 animated-left mt-4 ${elementVisibility.element3 ? 'slide-left' : ''}`} style={{ background: colorPrimaryMicropython, borderRadius: "40px" }} >
                                <button className="accordion-button collapsed bg-transparent text-light" type="button" data-bs-toggle="collapse" data-bs-target="#a2" aria-expanded="false" aria-controls="flush-collapseOne">
                                    <h2>Servidor web - HTTP</h2>
                                </button>
                                <div id="a2" className="accordion-collapse collapse" >
                                    <div className="accordion-body text-light bg-dark ">
                                        <div className="accordion-body text-light">
                                            <h3 className="text-break w-75 mx-auto mt-4">¿Qué es un servidor web o HTTP?</h3>
                                            <p className="text-break mx-auto mt-4 w-75">Un servidor web (server) es un ordenador de gran potencia que se encarga de “prestar el servicio” de transmitir la información pedida por sus clientes (otros ordenadores, dispositivos móviles, impresoras, personas, etc.)<br></br>Los servidores web (web server) son un componente de los servidores que tienen como principal función almacenar, en web hosting, todos los archivos propios de una página web (imágenes, textos, videos, etc.) y transmitirlos a los usuarios a través de los navegadores mediante el protocolo HTTP (Hipertext Transfer Protocol).</p>
                                            <h3 className="text-break w-75 mx-auto mt-4">¿Para qué sirve un servidor web en Internet?</h3>
                                            <p className="text-break mx-auto mt-4 w-75">El rol principal de un servidor web es almacenar y transmitir el contenido solicitado de un sitio web al navegador del usuario.<br></br>Este proceso, para los internautas no dura más que un segundo, sin embargo, a nivel del web server es una secuencia más complicada de lo que parece.<br></br>Para cumplir con sus funciones el servidor deberá tener la capacidad de estar siempre encendido para evitar interrumpir el servicio que le ofrece a sus clientes. Si dicho servidor falla o se apaga, los internautas tendrán problemas al ingresar al sitio web.</p>
                                            <h3 className="text-break w-75 mx-auto mt-4">¿Cómo funciona un servidor web?</h3>
                                            <p className="text-break mx-auto mt-4 w-75">La comunicación entre un servidor y sus clientes se basa en HTTP, es decir, en el protocolo de transferencia de hipertexto o en su variante codificada HTTPS.<br></br>Para saber cómo funciona, primero es necesario conocer que el web server está permanentemente en espera de una solicitud de información.<br></br>Además, ten en cuenta que toda computadora, smartphone o tablet tiene una dirección IP única e irrepetible que lo identifica de otro dispositivo en la red, así es como el servidor web envía la información exacta que el internauta está esperando.<br></br>Ahora bien, para que el web server pueda cumplir con su función es necesario que reciba la petición por parte de un navegador, en otras palabras, se envía un pedido desde una dirección IP hacia la dirección IP del servidor que aloja los archivos del sitio en cuestión.<br></br>A continuación, el servidor web busca en sus archivos la información que se le está solicitando, procede a interpretar las líneas de código y a enviar el resultado al navegador cuya dirección IP fue la solicitante.<br></br>Este resultado se le muestra a los internautas y es lo que siempre sucede cuando se navega en sitios de Internet. Cuando este proceso se completa podemos decir que el web server ha cumplido con su función.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="element4" className={`mt-4 rounded-5 animated-left ${elementVisibility.element4 ? 'slide-left' : ''}`} style={{ background: colorPrimaryMicropython, borderRadius: "40px" }}>
                                <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a3" aria-expanded="false" aria-controls="flush-collapseThree">
                                    <h2 className="text-light">Modulo wifi</h2>
                                </button>
                                <div id="a3" className="accordion-collapse collapse bg-dark" >
                                    <div className="accordion-body text-light bg-dark ">
                                        <h3 className="text-break w-75 mx-auto">Activación del módulo wifi</h3>
                                        <p className="text-break mx-auto w-75">Primero principal debemos importar la libreria "network" para poder conectarnos a redes wifi</p>
                                        <CopyButton code={class6MCode[0]} />
                                        <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class5Micropython/wifi1.webp"></img>
                                        <p className="text-break mx-auto w-75">Luego para inicializar la interfaz de la red wifi debemos utilizar network.WLAN(network.STA_IF) y luego indicarle que lo queremos activar(active(true))</p>
                                        <CopyButton code={class6MCode[1]} />
                                        <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class5Micropython/wifi2.webp"></img>
                                        <p className="text-break mx-auto w-75">Con el método scan() podemos escanear las redes wifi disponibles en nuestro perímetro.</p>
                                        <CopyButton code={class6MCode[2]} />
                                        <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class5Micropython/wifi3.webp"></img>
                                        <p className="text-break mx-auto w-75">Por último recorremos con un for la lista con tuplas que devuelve el escaneado.</p>
                                        <p className="text-break mx-auto w-75">Indicamos en el for que solamente queremos el primer dato y lo demás lo omitimos, para hacer esto debemos usar *_.</p>
                                        <p className="text-break mx-auto w-75">Además de esto pondremos un metodo llamado .decode() para que interprete los caracteres especiales de latinoamerica en los nombres de las redes wifi, en este caso el encode latino es utf-8.</p>
                                        <CopyButton code={class6MCode[3]} />
                                        <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class5Micropython/wifi4.webp"></img>
                                    </div>
                                </div>
                            </div>
                            <div id="element5" className={`mt-4 rounded-5 animated-left ${elementVisibility.element5 ? 'slide-left' : ''}`} style={{ background: colorPrimaryMicropython, borderRadius: "40px" }}>
                                <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a4" aria-expanded="false" aria-controls="flush-collapseThree">
                                    <h2 className="text-light">Conexión a una red wifi</h2>
                                </button>
                                <div id="a4" className="accordion-collapse collapse bg-dark" >
                                    <div className="accordion-body text-light bg-dark ">
                                        <h3 className="text-break w-75 mx-auto">Paso 1 - Importación de Librerias</h3>
                                        <ul className="text-break mx-auto w-75 list-unstyled">
                                            <li><p className="text-break mx-auto w-75"><span className="fw-bold">import network: </span>Permite gestionar la conexión WiFi de la Raspberry Pi Pico W.</p></li>
                                        </ul>
                                        <CopyButton code={class6MCode[0]} />
                                        <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class5Micropython/wifi1.webp"></img>
                                        <h3 className="text-break w-75 mx-auto">Paso 2 - Activación del módulo wifi</h3>
                                        <p className="text-break mx-auto w-75">Luego para inicializar la interfaz de la red wifi debemos utilizar network.WLAN(network.STA_IF) y luego indicarle que lo queremos activar(active(true))</p>
                                        <CopyButton code={class6MCode[1]} />
                                        <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class5Micropython/wifi2.webp"></img>
                                        <h3 className="text-break w-75 mx-auto">Paso 3 - Conexión de red wifi</h3>
                                        <p className="text-break mx-auto w-75">Debemos hacer la conexión de la red wifi indicandole el nombre de la red wifi junto a la contraseña con el método connect().</p>
                                        <CopyButton code={class6MCode[4]} />
                                        <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class5Micropython/wificonect6.webp"></img>
                                        <h3 className="text-break w-75 mx-auto">Paso 4 - Verificación de conección a red wifi(IP)</h3>
                                        <p className="text-break mx-auto w-75">Para saber si realmente hizo una conexion válida debemos crear un bucle while utilizando el método isconnected() para saber si está conectado o no, podemos utilizar la libreria time para esperar 1 segundo y volver a consultar la conexión.</p>
                                        <p className="text-break mx-auto w-75">Si queremos saber la IP de nuestro dispositivo, debemos utilizar el método ifconfig()[0].</p>
                                        <CopyButton code={class6MCode[5]} />
                                        <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class5Micropython/wificonect7.webp"></img>
                                    </div>
                                </div>
                            </div>
                            <div id="element6" className={`mt-4 rounded-5 animated-left ${elementVisibility.element6 ? 'slide-left' : ''}`} style={{ background: colorPrimaryMicropython, borderRadius: "40px" }}>
                                <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a5" aria-expanded="false" aria-controls="flush-collapseFive">
                                    <h2 className="text-light">Manipulación de Rasberry Pi Pico W desde Sitio web</h2>
                                </button>
                                <div id="a5" className="accordion-collapse collapse" >
                                    <div className="accordion-body text-light bg-dark ">
                                        <p className="text-break mx-auto w-75 mt-4">Para realizar manipulaciones de nuestra Raspberry Pi Pico W por medio de un sitio web es algo más complejo ya que debes tener conocimientos en desarrollo web, en este caso lo haremos de una manera simplificada.</p>
                                        <h3 className="text-break w-75 mx-auto">Paso 1 - Importación de Librerias</h3>
                                        <ul className="text-break mx-auto w-75 list-unstyled"><span>Veremos principalmente las librerias que debemos importar</span>
                                            <li><p className="text-break mx-auto w-75"><span className="fw-bold">import network: </span>Permite gestionar la conexión WiFi de la Raspberry Pi Pico W.</p></li>
                                            <li><p className="text-break mx-auto w-75"><span className="fw-bold">import socket: </span>Proporciona herramientas para la creación de un servidor web que escucha y responde a las solicitudes de clientes (navegadores web).</p></li>
                                            <li><p className="text-break mx-auto w-75"><span className="fw-bold">import time: </span>Permite realizar pausas en el código.</p></li>
                                            <li><p className="text-break mx-auto w-75"><span className="fw-bold">from machine import Pin: </span>Permite controlar los pines GPIO de la Raspberry Pi Pico W, como el LED.</p></li>
                                        </ul>
                                        <CopyButton code={class6MCode[6]} />
                                        <img className="w-75 d-block mx-auto mt-4 border-content" alt="" src="../../img/class5Micropython/wifipage.webp"></img>
                                        <h3 className="text-break mx-auto w-75 mt-4">Paso 2 - Configuración de puerto de entrada/salida(Raspberry pi pico)</h3>
                                        <p className="text-break mx-auto w-75 mt-4">En este caso simple voy a utilizar el Led interno de la raspberry pi pico para manipularlo.</p>
                                        <CopyButton code={class6MCode[7]} />
                                        <img className="w-75 d-block mx-auto mt-4 border-content" alt="" src="../../img/class5Micropython/wifipage2.webp"></img>
                                        <h3 className="text-break mx-auto w-75 mt-4">Paso 3 - Conexion WIFI</h3>
                                        <CopyButton code={class6MCode[8]} />
                                        <img className="w-75 d-block mx-auto mt-4 border-content" alt="" src="../../img/class5Micropython/wifipage3.webp"></img>
                                        <h3 className="text-break mx-auto w-75 mt-4">Paso 4 - Crear página web de control</h3>
                                        <ul className="text-break mx-auto w-75 list-unstyled">
                                            <li><p className="text-break mx-auto w-75"><span className="fw-bold">led_state = "ENCENDIDO" if led.value() else "APAGADO": </span>Determina el estado actual del LED (1 para encendido y 0 para apagado) y lo asigna a led_state.</p></li>
                                            <li><p className="text-break mx-auto w-75"><span className="fw-bold">Etiquetas h1 y p: </span>La etiqueta 'h1' Se utiliza para indicar titulos y la etiqueta 'p' se utiliza para párrafos.</p></li>
                                            <li><p className="text-break mx-auto w-75"><span className="fw-bold">Etiqueta a: </span>La etiqueta 'a' se utiliza para redireccionar a una ruta http.</p></li>
                                            <li><p className="text-break mx-auto w-75"><span className="fw-bold">Etiqueta Button: </span>Permite realizar la acción de un botón.</p></li>
                                        </ul>
                                        <CopyButton code={class6MCode[9]} />
                                        <img className="w-75 d-block mx-auto mt-4 border-content" alt="" src="../../img/class5Micropython/wifipage4.webp"></img>
                                        <h3 className="text-break mx-auto w-75 mt-4">Paso 5 - Configuración del servidor</h3>
                                        <p className="text-break mx-auto w-75 mt-4">En este caso simple voy a utilizar el Led interno de la raspberry pi pico para manipularlo.</p>
                                        <CopyButton code={class6MCode[10]} />
                                        <img className="w-75 d-block mx-auto mt-4 border-content" alt="" src="../../img/class5Micropython/wifipage5.webp"></img>
                                        <h3 className="text-break mx-auto w-75 mt-4">Paso 6 - Bucle principal para manejar solicitudes HTTP</h3>
                                        <p className="text-break mx-auto w-75 mt-4">En este caso simple voy a utilizar el Led interno de la raspberry pi pico para manipularlo.</p>
                                        <CopyButton code={class6MCode[11]} />
                                        <img className="w-75 d-block mx-auto mt-4 border-content" alt="" src="../../img/class5Micropython/wifipage6.webp"></img>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion accordion-flush w-100 mx-auto mt-4" id="accordionFlushExample">
                                <div id="element7" className={`accordion-item animated-left ${elementVisibility.element7 ? 'slide-left' : ''}`} style={{ background: colorPrimaryMicropython, borderRadius: "40px" }} >
                                    <button className="accordion-button collapsed  bg-transparent text-light" type="button" data-bs-toggle="collapse" data-bs-target="#a6" aria-expanded="false" aria-controls="flush-collapseOne">
                                        <h2>Utilización de Apis en raspberry pi pico w</h2>
                                    </button>
                                    <div id="a6" className="accordion-collapse collapse" >
                                        <div className="accordion-body text-light bg-dark ">
                                            <h3 className="mt-7 text-break mx-auto w-75 fw-bold">Paso 1 conexión a la red wifi</h3>
                                            <p className="text-break mx-auto w-75 mt-4">Como hicimos en los temas anteriores tenemos que activar el módulo WIFI de la raspberry pi pico y luego conectarnos a la red wifi</p>
                                            <CopyButton code={class6MCode[5]} />
                                            <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class5Micropython/wificonect7.webp"></img>
                                            <h3 className="mt-7 text-break mx-auto w-75 fw-bold">Paso 2 importar urequests</h3>
                                            <p className="text-break mx-auto w-75 mt-4">La importación de la libreria urequests nos servirá para poder hacer una solicitud HTTP</p>
                                            <CopyButton code={class6MCode[12]} />
                                            <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class5Micropython/apiweather.webp"></img>
                                            <h3 className="mt-7 text-break mx-auto w-75 fw-bold">Paso 3 Realizar solicitud HTTP</h3>
                                            <p className="text-break mx-auto w-75 mt-4">Para poder hacer una solicitud HTTP debemos utilizar el método .get() dentro del parámetro ingresar la URL que queramos solicitar.</p>
                                            <p className="text-break mx-auto w-75 mt-4">Dentro de la URL ("https://api.open-meteo.com/v1/forecast?latitude=35.68&longitude=139.69&current_weather=true") en "latitude" y "Longitude" debemos indicar la ubicación especifica donde queramos saber la t°.</p>
                                            <CopyButton code={class6MCode[13]} />
                                            <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class5Micropython/apiweather2.webp"></img>
                                            <h3 className="mt-7 text-break mx-auto w-75 fw-bold">Paso 4 Consumo de Api</h3>
                                            <p className="text-break mx-auto w-75 mt-4">Para saber si la solicitud fué exitosa, debemos utilizar el método .status_code(), si este método devuelve 200, quiere indicar que el pedido fué exitoso.</p>
                                            <p className="text-break mx-auto w-75 mt-4">Luego este pedido lo debemos transformar en un formato que podamos manipular, en este caso es un formato JSON, para transformarlo debemos utilizar el método .JSON()</p>
                                            <p className="text-break mx-auto w-75 mt-4">Esta solicitud queda abierto cuando se llama una solicitud, para finalizar el llamado debemos utilizar el método .close()</p>
                                            <CopyButton code={class6MCode[14]} />
                                            <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class5Micropython/apiweather3.webp"></img>
                                        </div>
                                    </div>
                                </div>
                                <div id="element8" className={`accordion-item animated-left mt-4 ${elementVisibility.element8 ? 'slide-left' : ''}`} style={{ background: colorPrimaryMicropython, borderRadius: "40px" }} >
                                    <button className="accordion-button collapsed  bg-transparent text-light" type="button" data-bs-toggle="collapse" data-bs-target="#a7" aria-expanded="false" aria-controls="flush-collapseOne">
                                        <h2>Comunicación entre raspberry pi pico w</h2>
                                    </button>
                                    <div id="a7" className="accordion-collapse collapse" >
                                        <div className="accordion-body text-light bg-dark ">
                                            <h3 className="mt-7 text-break mx-auto w-75 fw-bold">Servidor y cliente</h3>
                                            <p className="text-break mx-auto w-75 mt-4">El servidor es el dispositivo que espera conexiones de otros dispositivos y, generalmente, proporciona un servicio o recurso. En este caso, una Raspberry Pi Pico actúa como el servidor.</p>
                                            <ul className="text-break mx-auto w-75 list-unstyled"><span className="fw-bold">Características del servidor:</span>
                                                <li><p className="text-break mx-auto w-75">- Escucha en un puerto específico (como el puerto 8080) para conexiones entrantes.</p></li>
                                                <li><p className="text-break mx-auto w-75">- Responde a solicitudes de los clientes.</p></li>
                                                <li><p className="text-break mx-auto w-75">- Puede manejar múltiples clientes si está configurado para ello.</p></li>
                                                <li><p className="text-break mx-auto w-75">- Se mantiene disponible mientras espera conexiones.</p></li>
                                            </ul>
                                            <p className="text-break mx-auto w-75 mt-4">El cliente es el dispositivo que inicia la conexión hacia el servidor. En este caso, la otra Raspberry Pi Pico actúa como el cliente.</p>
                                            <ul className="text-break mx-auto w-75 list-unstyled"><span className="fw-bold">Características del cliente:</span>
                                                <li><p className="text-break mx-auto w-75">- Se conecta al servidor utilizando su dirección IP y un puerto específico.</p></li>
                                                <li><p className="text-break mx-auto w-75">- Envía solicitudes o mensajes al servidor.</p></li>
                                                <li><p className="text-break mx-auto w-75">- Recibe respuestas o datos del servidor.</p></li>
                                            </ul>
                                            <img className="w-50 mx-auto d-block border-content" alt="" src="../../img/class5Micropython/server.webp"></img>
                                            <h4 className="mt-7 text-break mx-auto w-75 fw-bold">Servidor - RP pico W(1) - Paso 1 conexión a la red wifi</h4>
                                            <p className="text-break mx-auto w-75 mt-4">Como hicimos anteriormente, debemos hacer la conexión a la red wifi.</p>
                                            <p className="text-break mx-auto w-75 mt-4">importaremos la libreria Socket, network y time y utilizaremos los métods WLAN, active y connect de la libreria network para realizar la conexión.</p>
                                            <CopyButton code={class6MCode[15]} />
                                            <img className="w-75 mx-auto d-block border-content" alt="" src="../../img/class5Micropython/conect2rpw.webp"></img>
                                            <h4 className="mt-7 text-break mx-auto w-75 fw-bold">Servidor - RP pico W(1) - Paso 2 configuración para recibir solicitudes del cliente</h4>
                                            <p className="text-break mx-auto w-75 mt-4">Primero debemos guardar en una variable socket.socket(socket.AF_INET, socket.SOCK_STREAM) y luego utilizar el método bind(('', 8080))en donde el primer dato va a estar vacio y el segundo será el número del puerto de nuestro servidor</p>
                                            <p className="text-break mx-auto w-75 mt-4">Luego de saber esto, tenemos que utilizar un bucle while para consultar constantemente si el cliente nos ha enviado una solicitud.</p>
                                            <p className="text-break mx-auto w-75 mt-4">para saber si nos envío una solicitud el cliente, debemos utilizar el método acept() en la conexión de nuestra red wifi y servidor para saber si nos llegó una solicitud</p>
                                            <p className="text-break mx-auto w-75 mt-4">Luego este dato que nos llegó debemos hacer una conversión para que lo pueda entender, para esto utilizamos recv() junto con decode() para formatear los caracteres especiales latinoamericanos</p>
                                            <p className="text-break mx-auto w-75 mt-4">También podemos enviar un mensaje al cliente, para indicarle que llegó correctamente el mensaje, para esto debemos utilizar send() junto con el enconde('utf-8')</p>
                                            <CopyButton code={class6MCode[16]} />
                                            <img className="w-75 mx-auto d-block border-content" alt="" src="../../img/class5Micropython/conect2rpw3.webp"></img>
                                            <h4 className="mt-7 text-break mx-auto w-75 fw-bold">Cliente - RP pico W(2) - Paso 1 conexión a la red wifi</h4>
                                            <p className="text-break mx-auto w-75 mt-4">Como hicimos anteriormente, debemos hacer la conexión a la red wifi.</p>
                                            <p className="text-break mx-auto w-75 mt-4">importaremos la libreria Socket, network y time y utilizaremos los métods WLAN, active y connect de la libreria network para realizar la conexión.</p>
                                            <CopyButton code={class6MCode[15]} />
                                            <img className="w-75 mx-auto d-block border-content" alt="" src="../../img/class5Micropython/conect2rpw.webp"></img>
                                            <h4 className="mt-7 text-break mx-auto w-75 fw-bold">Cliente - RP pico W(2) - Paso 2 configuración para la conexión al servidor</h4>
                                            <p className="text-break mx-auto w-75 mt-4">Primero debemos saber que ip y puerto debemos conectarnos, para eso veremos la conexión del servidor primero.</p>
                                            <p className="text-break mx-auto w-75 mt-4">Luego de saber esto, tenemos que utilizar un bucle while para poder enviar solicitudes al servidor las veces que queramos.</p>
                                            <p className="text-break mx-auto w-75 mt-4">para hacer la conexión al servidor debemos utilizar en una variable esto: socket.socket(socket.AF_INET, socket.SOCK_STREAM) y luego llamar a la variable y dentro del método connect() indicar el ip y puerto del servidor.</p>
                                            <p className="text-break mx-auto w-75 mt-4">Ya estando conectado al servidor, podemos enviar una solicitud, para esto debemos utilizar la variable que contiene la conexión del servidor seguido del método send(), dentro del método send introduce el texto que quieras enviar, en este caso utilicé también un encode para que interprete correctamente los caracteres especiales latinoamericanos(.encode('utf-8'))</p>
                                            <p className="text-break mx-auto w-75 mt-4">Para saber si realmente le llegó un mensaje, podemos hacer que el servidor nos devuelve una solicitud también, para esto utilizamos client.recv(), dependiendo del número que indiques dentro de los parámetros, podemos recibir un mensaje u otro(dependiendo de como esté configurado el servidor)</p>
                                            <CopyButton code={class6MCode[17]} />
                                            <img className="w-75 mx-auto d-block border-content" alt="" src="../../img/class5Micropython/conect2rpw2.webp"></img>
                                    
                                        </div>
                                    </div>
                                </div>
                                <div id="element11" className={`accordion-item mt-4 rounded-5 animated-left ${elementVisibility.element11 ? 'slide-left' : ''}`} style={{ background: colorPrimaryMicropython, borderRadius: "40px" }} >
                                    <Link to="/micropythonClassFile/class5.py"
                                        target={"_blank"}
                                        download={"class5.py"}>
                                        <button className="accordion-button collapsed bg-transparent" type="button">
                                            <h2 className="text-light">Descarga el archivo de la clase 6</h2>
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
                                    <h1>Clase 6</h1>
                                    <h2>Configuración de redes Wi-Fi.</h2>
                                    <h2>Acceso a Internet y servicios web.</h2>
                                    <h2>Ejemplos de proyectos conectados a la web.</h2>
                                    <div className="text-center text-lg-start">
                                        <a href="#clase1" className="btn-get-started scrollto">tendrás acceso al curso el {new Date(date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 order-1 order-lg-2 hero-img" style={{ backgroundColor: "#EE7053" }}  >
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
        }
        </>
    )
}

export default MicropythonClass6
