import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../../Utils/firebase'
import { collection, getDocs } from 'firebase/firestore'
import { colorPrimaryMicropython } from '../../colors'
import useScrollAnimation from '../../useScrollAnimation'
import { CopyButton } from '../CopyButton/CopyButton'
import { class4MCode, class5MCode } from './MicropythonClassCode'
import { class3Code, class4Code, class5Code } from '../Class/classCode'

const MicropythonClass5 = () => {

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
            (new Date(date?.[3]?.date) <= newDate) || localStorage.getItem("access - micropython") ?
                <>
                    <section id="hero" style={{ background: colorPrimaryMicropython }} >
                        <div className="container">
                            <div className="row justify-content-between">
                                <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
                                    <div >
                                        <h1>Clase 5</h1>
                                        <h2>Configuración de redes Wi-Fi.</h2>
                                        <h2>Acceso a Internet y servicios web.</h2>
                                        <h2>Ejemplos de proyectos conectados a la web.</h2>
                                        <div className="text-center text-lg-start">
                                            <a href="#clase4" className="btn-get-started scrollto" style={{ backgroundColor: "#EE7053" }}>Contenido de la clase 5</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 order-1 order-lg-2 hero-img"  >
                                    <img src="../img/micropython.png" className="img-fluid animated vh-60" alt="" />
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
                                <h2>Clase 5</h2>
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
                                        <CopyButton code={class5MCode[0]} />
                                        <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class5Micropython/wifi1.webp"></img>
                                        <p className="text-break mx-auto w-75">Luego para inicializar la interfaz de la red wifi debemos utilizar network.WLAN(network.STA_IF) y luego indicarle que lo queremos activar(active(true))</p>
                                        <CopyButton code={class5MCode[1]} />
                                        <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class5Micropython/wifi2.webp"></img>
                                        <p className="text-break mx-auto w-75">Con el método scan() podemos escanear las redes wifi disponibles en nuestro perímetro.</p>
                                        <CopyButton code={class5MCode[2]} />
                                        <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class5Micropython/wifi3.webp"></img>
                                        <p className="text-break mx-auto w-75">Por último recorremos con un for la lista con tuplas que devuelve el escaneado.</p>
                                        <p className="text-break mx-auto w-75">Indicamos en el for que solamente queremos el primer dato y lo demás lo omitimos, para hacer esto debemos usar *_.</p>
                                        <p className="text-break mx-auto w-75">Además de esto pondremos un metodo llamado .decode() para que interprete los caracteres especiales de latinoamerica en los nombres de las redes wifi, en este caso el encode latino es utf-8.</p>
                                        <CopyButton code={class5MCode[3]} />
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
                                        <p className="text-break mx-auto w-75">
                                            Además de tener métodos para utilizar en listas, también tenemos funciones que nos ayudan a la hora de manipular datos.:
                                        </p>
                                        <h3 className="text-break w-75 mx-auto">len()</h3>
                                        <p className="text-break mx-auto w-75">len() te devuelve la cantidad de elementos que contiene la lista.</p>
                                        <CopyButton code={class5Code[12]} />
                                        <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class5/list13.webp"></img>
                                    </div>
                                </div>
                            </div>
                            <div id="element6" className={`mt-4 rounded-5 animated-left ${elementVisibility.element6 ? 'slide-left' : ''}`} style={{ background: colorPrimaryMicropython, borderRadius: "40px" }}>
                                <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a5" aria-expanded="false" aria-controls="flush-collapseFive">
                                    <h2 className="text-light">For</h2>
                                </button>
                                <div id="a5" className="accordion-collapse collapse" >
                                    <div className="accordion-body text-light bg-dark ">
                                        <p className="text-break mx-auto w-75 mt-4"> El bucle for se utiliza para iterar sobre una secuencia de elementos, como una lista, una cadena de texto, un rango de números, entre otros. En cada iteración, el bucle for asigna el siguiente elemento de la secuencia a una variable y ejecuta el bloque de código. Aquí tienes unos ejemplos:</p>
                                        <CopyButton code={class3Code[9]} />
                                        <img className="w-75 d-block mx-auto mt-4 border-content" alt="" src="../../img/class3/range.webp"></img>
                                        <h3 className="text-break mx-auto w-75 mt-4">Bucle for en listas</h3>
                                        <CopyButton code={class3Code[10]} />
                                        <img className="w-75 d-block mx-auto mt-4 border-content" alt="" src="../../img/class3/for4.webp"></img>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion accordion-flush w-100 mx-auto mt-4" id="accordionFlushExample">
                                <div id="element7" className={`accordion-item animated-left ${elementVisibility.element7 ? 'slide-left' : ''}`} style={{ background: colorPrimaryMicropython, borderRadius: "40px" }} >
                                    <button className="accordion-button collapsed  bg-transparent text-light" type="button" data-bs-toggle="collapse" data-bs-target="#a6" aria-expanded="false" aria-controls="flush-collapseOne">
                                        <h2>PWM</h2>
                                    </button>
                                    <div id="a6" className="accordion-collapse collapse" >
                                        <div className="accordion-body text-light bg-dark ">
                                            <h3 className="mt-7 text-break mx-auto w-75 fw-bold">¿Qué es PWM?</h3>
                                            <p className="text-break mx-auto w-75 mt-4">PWM (Modulación por Ancho de Pulso) es una técnica utilizada para controlar la potencia entregada a dispositivos electrónicos. En lugar de aplicar un voltaje constante, PWM alterna rápidamente entre encendido y apagado, lo que permite simular un voltaje variable.</p>
                                            <p className="text-break mx-auto w-75 mt-4">En PWM solo tenemos 2 estados, HIGH(3.3V - alto) y LOW(0V - bajo).</p>
                                            <p className="text-break mx-auto w-75 mt-4">Dentro del gráfico veremos también "ciclo de trabajo"(duty cycle), es un concepto fundamental en PWM (modulación por ancho de pulso), que se refiere al porcentaje de tiempo que una señal está en estado alto (encendida) durante un ciclo completo de la señal.</p>
                                            <p className="text-break mx-auto w-75 mt-4">El valor máximo del ciclo de trabajo(duty cycle) que tiene internamente un potenciometro es de "65535", esto es porque está en 16bits y la cantidad de valores que puede procesar son 65536(es uno más porque se incluye el 0 como valor)</p>
                                            <p className="text-break mx-auto w-75 mt-4">Ejemplo: Si una señal PWM tiene un duty cycle del 50%(65535/2 = 32768), significa que la señal está activa (en alto) el 50% del tiempo y en bajo el otro 50%, Si el duty cycle es del 25% (65535/4 = 16383), la señal estará activa solo el 25% del tiempo y en bajo el 75%.</p>
                                            <img className="w-75 mx-auto d-block border-content" alt="" src="../../img/class4Micropython/PWM.webp"></img>
                                            <h3 className="mt-7 text-break mx-auto w-75 fw-bold">Frecuencia</h3>
                                            <p className="text-break mx-auto w-75 mt-4">La frecuencia en el contexto de PWM (modulación por ancho de pulso) se refiere a la cantidad de ciclos completos que ocurren en un segundo. Se mide en hercios (Hz), donde 1 Hz equivale a un ciclo completo por segundo.</p>
                                            <p className="text-break mx-auto w-75 mt-4">Ejemplo: Si la frecuencia es 1 Hz, entonces el ciclo completo (tiempo en alto más tiempo en bajo) ocurre una vez por segundo, Si la frecuencia es 1000 Hz (1 kHz), el ciclo completo ocurre 1000 veces en un segundo.</p>
                                            <img className="w-75 mx-auto d-block border-content" alt="" src="../../img/class4Micropython/Hz.webp"></img>
                                            <h3 className="mt-7 text-break mx-auto w-75 fw-bold">Relación entre Frecuencia y Duty Cycle</h3>
                                            <ul className="text-break mx-auto w-75 list-unstyled"><span>Es importante entender que, aunque el duty cycle y la frecuencia son conceptos distintos, ambos determinan el comportamiento de la señal PWM:</span>
                                                <li><p className="text-break mx-auto w-75"><span className="fw-bold">Duty cycle: </span>controla el tiempo que la señal está activa dentro de cada ciclo.</p></li>
                                                <li><p className="text-break mx-auto w-75"><span className="fw-bold">Frecuencia: </span>determina cuántos ciclos ocurren por segundo.</p></li>
                                            </ul>
                                            <p className="text-break mx-auto w-75 mt-4">Por ejemplo, si tienes una señal PWM con una frecuencia de 1 kHz (1000 ciclos por segundo) y un duty cycle del 50%, la señal estará en estado alto durante 0.5 ms (milisegundos) y en estado bajo durante otros 0.5 ms en cada ciclo. Si aumentas la frecuencia, los ciclos serán más rápidos, pero el tiempo que la señal permanece en alto y bajo por ciclo también será menor.</p>
                                            <h3 className="mt-7 text-break mx-auto w-75 fw-bold">Importancia de la frecuencia en PWM</h3>
                                            <ul className="text-break mx-auto w-75 list-unstyled"><span>La frecuencia del PWM es clave en aplicaciones como el control de motores y el brillo de LEDs:</span>
                                                <li><p className="text-break mx-auto w-75"><span className="fw-bold">Motores eléctricos: </span>Si la frecuencia es demasiado baja, el motor puede vibrar o producir un zumbido debido a la conmutación lenta. Por eso, frecuencias más altas (a menudo en el rango de kHz) se usan para controlar motores de manera más suave.</p></li>
                                                <li><p className="text-break mx-auto w-75"><span className="fw-bold">Control de brillo de LEDs: </span> Si la frecuencia es baja, el LED puede parpadear perceptiblemente, lo que es indeseable. A frecuencias más altas, el parpadeo se vuelve imperceptible, logrando una variación suave en el brillo.</p></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div id="element8" className={`accordion-item animated-left mt-4 ${elementVisibility.element8 ? 'slide-left' : ''}`} style={{ background: colorPrimaryMicropython, borderRadius: "40px" }} >
                                    <button className="accordion-button collapsed  bg-transparent text-light" type="button" data-bs-toggle="collapse" data-bs-target="#a7" aria-expanded="false" aria-controls="flush-collapseOne">
                                        <h2>Potenciometro</h2>
                                    </button>
                                    <div id="a7" className="accordion-collapse collapse" >
                                        <div className="accordion-body text-light bg-dark ">
                                            <h3 className="mt-7 text-break mx-auto w-75 fw-bold">Potenciometro en Raspberry pi pico w (potenciometro)</h3>
                                            <p className="text-break mx-auto w-75 mt-4">Para poder utilizar un Potenciometro debemos utilizar desde la libreria "machine" la clase "ADC"</p>
                                            <CopyButton code={class4MCode[0]} />
                                            <img className="w-75 mx-auto d-block border-content" alt="" src="../../img/class4Micropython/PWM2paso1.webp"></img>
                                            <p className="text-break mx-auto w-75 mt-4">Luego debemos crear una variable y almacenar la clase ADC junto al pin donde se quiere recibir la señal, en este caso es en el GP28</p>
                                            <p className="text-break mx-auto w-75 mt-4">Además de esto debemos conectar nuestro potenciómetro a la raspberry pi pico w de la siguiente manera:</p>
                                            <ul className="text-break mx-auto w-75 list-unstyled">
                                                <li><p className="text-break mx-auto w-75"><span className="fw-bold">VCC :</span> La debemos conectar al puerto 3V3 para que nos proporcione el voltaje de 3V (+)</p></li>
                                                <li><p className="text-break mx-auto w-75"><span className="fw-bold">SIG : </span> La debemos conectar al Pin GP28 para que podamos comunicar la señal de nuestro potenciometro</p></li>
                                                <li><p className="text-break mx-auto w-75"><span className="fw-bold">GND : </span> La debemos conectar al Pin GND para que podamos tener la conexión a tierra (-)</p></li>
                                            </ul>
                                            <CopyButton code={class4MCode[1]} />
                                            <img className="w-75 mx-auto d-block border-content" alt="" src="../../img/class4Micropython/PWM2paso2.webp"></img>
                                            <h4 className="mt-4 text-break mx-auto w-75">Visualizar duty Cycle y voltaje en potenciometro</h4>
                                            <CopyButton code={class4MCode[2]} />
                                            <img className="w-75 mx-auto d-block border-content" alt="" src="../../img/class4Micropython/PWM2.webp"></img>
                                        </div>
                                    </div>
                                </div>
                                <div id="element9" className={`accordion-item animated-left mt-4 ${elementVisibility.element9 ? 'slide-left' : ''}`} style={{ background: colorPrimaryMicropython, borderRadius: "40px" }} >
                                    <button className="accordion-button collapsed  bg-transparent text-light" type="button" data-bs-toggle="collapse" data-bs-target="#a8" aria-expanded="false" aria-controls="flush-collapseOne">
                                        <h2>Led</h2>
                                    </button>
                                    <div id="a8" className="accordion-collapse collapse" >
                                        <div className="accordion-body text-light bg-dark ">
                                            <h3 className="mt-4 text-break mx-auto w-75 fw-bold">Funcionamiento de PWM en LEDs</h3>
                                            <p className="text-break mx-auto w-75">Los LEDs son dispositivos semiconductores que convierten energía eléctrica en luz, y su brillo depende de la cantidad de corriente que pasa a través de ellos. Sin embargo, en lugar de ajustar directamente la corriente, lo que podría ser ineficiente y producir calor, el PWM ofrece un enfoque eficiente para regular el brillo mediante el control del tiempo que el LED está encendido o apagado durante un ciclo.</p>
                                            <ul className="text-break mx-auto w-75 list-unstyled"><span>Cuando se usa PWM:</span>
                                                <li><p className="text-break mx-auto w-75">El LED es encendido y apagado rápidamente a una frecuencia constante.</p></li>
                                                <li><p className="text-break mx-auto w-75">El ojo humano no percibe este parpadeo si la frecuencia es lo suficientemente alta, por lo que el LED parece estar atenuado en lugar de encendido y apagado.</p></li>
                                                <li><p className="text-break mx-auto w-75">El brillo percibido del LED es ajustado variando el duty cycle, es decir, cuánto tiempo está encendido en cada ciclo de la señal PWM.</p></li>
                                            </ul>
                                            <h3 className="mt-4 text-break mx-auto w-75 fw-bold">Frecuencia y Percepción Visual</h3>
                                            <p className="text-break mx-auto w-75">La frecuencia es otro parámetro clave en el control del brillo de LEDs mediante PWM. La frecuencia es la cantidad de veces por segundo que se repite el ciclo de encendido y apagado. Si la frecuencia es demasiado baja, el parpadeo del LED será perceptible para el ojo humano, lo que puede ser incómodo o distraer.</p>
                                            <ul className="text-break mx-auto w-75 list-unstyled"><span>Frecuencias altas y bajas</span>
                                                <li><p className="text-break mx-auto w-75">Frecuencia baja (&lt;100 Hz): A frecuencias bajas, el parpadeo puede ser claramente visible. Un parpadeo inferior a 60 Hz será notorio, ya que es la frecuencia mínima que el ojo humano puede procesar sin notar el parpadeo.</p></li>
                                                <li><p className="text-break mx-auto w-75">Frecuencia alta (&gt;500 Hz a 1 kHz): A frecuencias más altas, el parpadeo se vuelve imperceptible para el ojo humano. Los LEDs parecen emitir una luz continua y estable.</p></li>
                                            </ul>
                                            <h4 className="mt-4 text-break mx-auto w-75">Efecto de la frecuencia en LEDs:</h4>
                                            <ul className="text-break mx-auto w-75 list-unstyled">
                                                <li><p className="text-break mx-auto w-75">Para aplicaciones comunes, como la iluminación o pantallas LED, una frecuencia mínima de PWM de 500 Hz es recomendable.</p></li>
                                                <li><p className="text-break mx-auto w-75">Para aplicaciones de mayor precisión, como pantallas LED de alta calidad o iluminación que se graba en cámaras, frecuencias mucho más altas (2 kHz a 5 kHz o más) son necesarias para evitar efectos de parpadeo o interferencias visuales con la grabación.</p></li>
                                            </ul>
                                            <h3 className="mt-4 text-break mx-auto w-75 fw-bold">Ejecución de Potenciómetro en LEDs(PWM)</h3>
                                            <p className="text-break mx-auto w-75">Para poder manipular LEDs con un potenciometro vamos a utilizar lo mismo que vimos anteriormente con el potenciómetro, pero añadimos también la clase "PWM" de libreria machine.</p>
                                            <CopyButton code={class4MCode[3]} />
                                            <img className="w-75 mx-auto d-block border-content" alt="" src="../../img/class4Micropython/PWMLed1.webp"></img>
                                            <p className="text-break mx-auto w-75 mt-4">Agregamos una variable llamada "pwm" y le asignamos la clase PWM() indicandole dentro del paréntesis(parámetro) el Pin que vamos a conectar nuestro led, en este caso va a ser el pin 15.</p>
                                            <p className="text-break mx-auto w-75 mt-4">También le añadiremos la frecuencia que va a tener el PWM. Para hacerlo debemos llamar a la variable "pwm" y le asignamos el método freq(), en este caso va a ser de 1000Hz(.freq(1000)) y mostramos la frecuencia en la terminal con print(pwm.freq()) </p>
                                            <p className="text-break mx-auto w-75 mt-4">Para asignarle ahora el duty cycle al PWM en nuestro led, vamos a tener que poner pwm.duty_u16(analog_value)</p>
                                            <CopyButton code={class4MCode[4]} />
                                            <img className="w-75 mx-auto d-block border-content" alt="" src="../../img/class4Micropython/PWMLed2.webp"></img>
                                            <p className="text-break mx-auto w-75">Ahora conectamos el ánodo(+) del led a una resistencia y en el extremo al Pin GP15 y el cátodo(-) a GND</p>
                                            <CopyButton code={class4MCode[5]} />
                                            <img className="w-75 mx-auto d-block border-content" alt="" src="../../img/class4Micropython/PWMLed3.webp"></img>
                                            <h4 className="mt-4 text-break mx-auto w-75">Activación de luces Led con Potenciómetro</h4>
                                            <p className="text-break mx-auto w-75">También podemos activar los leds girando el potenciometro</p>
                                            <CopyButton code={class4MCode[6]} />
                                            <img className="w-75 mx-auto d-block border-content" alt="" src="../../img/class4Micropython/PWMLed4.webp"></img>
                                            <h4 className="mt-4 text-break mx-auto w-75">Elección de luz Led con Potenciómetro</h4>
                                            <p className="text-break mx-auto w-75">También podemos activar los leds girando el potenciometro</p>
                                            <CopyButton code={class4MCode[7]} />
                                            <img className="w-75 mx-auto d-block border-content" alt="" src="../../img/class4Micropython/PWMLed5.webp"></img>
                                            <h4 className="mt-4 text-break mx-auto w-75">Elección de luz Led con Potenciómetro(Código optimizado)</h4>
                                            <CopyButton code={class4MCode[8]} />
                                            <img className="w-75 mx-auto d-block border-content" alt="" src="../../img/class4Micropython/PWMLed6.webp"></img>
                                        </div>
                                    </div>
                                </div>
                                <div id="element10" className={`accordion-item mt-4 rounded-5 animated-left ${elementVisibility.element10 ? 'slide-left' : ''}`} style={{ background: colorPrimaryMicropython, borderRadius: "40px" }} >
                                    <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a9" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        <h2 className="text-light">Servomotores</h2>
                                    </button>
                                    <div id="a9" className="accordion-collapse collapse" >
                                        <div className="accordion-body text-light bg-dark ">
                                            <h3 className="mt-4 text-break mx-auto w-75 fw-bold">Qué es un servomotor?</h3>
                                            <p className="text-break mx-auto mt-4 w-75">Un servomotor es un tipo de motor que permite un control preciso de la posición, la velocidad y el movimiento. A menudo se utiliza en aplicaciones como robótica, automatización y modelos a escala.</p>
                                            <img className="w-75 mx-auto d-block border-content" alt="" src="../../img/class4Micropython/servo.webp"></img>
                                            <h3 className="mt-4 text-break mx-auto w-75 fw-bold">Tipos de servomotores</h3>
                                            <ul className="text-break mx-auto w-75 list-unstyled">
                                                <li><p className="text-break mx-auto w-75"><span className="fw-bold">Servomotores de 180 grados: </span> Suelen rotar en un rango de 0 a 180 grados.</p></li>
                                                <li><p className="text-break mx-auto w-75"><span className="fw-bold">Servomotores de 360 grados: </span> Pueden girar continuamente en ambas direcciones.</p></li>
                                            </ul>
                                            <h3 className="mt-4 text-break mx-auto w-75 fw-bold">Conexión de servomotor</h3>
                                            <ul className="text-break mx-auto w-75 list-unstyled">
                                                <li><p className="text-break mx-auto w-75"><span className="fw-bold">VCC/VBUS :</span> La debemos conectar al puerto 3V3 para que nos proporcione el voltaje de 3V (+), aunque usualmente se conecta a 5V por medio del VBUS.</p></li>
                                                <li><p className="text-break mx-auto w-75"><span className="fw-bold">SIG : </span> La debemos conectar al Pin GP28 para que podamos comunicar la señal de nuestro servomotor</p></li>
                                                <li><p className="text-break mx-auto w-75"><span className="fw-bold">GND : </span> La debemos conectar al Pin GND para que podamos tener la conexión a tierra (-)</p></li>
                                            </ul>
                                            <h3 className="mt-4 text-break mx-auto w-75 fw-bold">Valores típicos en un servomotor</h3>
                                            <p className="text-break mx-auto mt-4 w-75">Los servomotores se controlan mediante señales PWM (Modulación por Ancho de Pulso), y el valor que utilizan para moverse se refiere a la duración del pulso en microsegundos (µs) o nanosegundos (ns). </p>
                                            <ul className="text-break mx-auto w-75 list-unstyled">
                                                <li><p className="text-break mx-auto w-75"><span className="fw-bold">Rango de pulsos:</span> La mayoría de los servomotores estándar se mueven en un rango de pulso entre aproximadamente 1 ms (1000 µs) y 2 ms (2000 µs). Este rango suele corresponder a posiciones de 0° a 180°.</p></li>
                                                <li><p className="text-break mx-auto w-75"><span className="fw-bold">Posiciones Comunes: </span> 1 ms (1000 µs)Generalmente se asocia con la posición mínima (0°). 1.5 ms (1500 µs): Comúnmente se considera la posición central (90°) y 2 ms (2000 µs): Se asocia con la posición máxima (180°).</p></li>
                                                <li><p className="text-break mx-auto w-75"><span className="fw-bold">Frecuencia : </span> La frecuencia típica para la señal PWM es de 50 Hz. Esto significa que se repite un ciclo cada 20 ms (20,000 µs).</p></li>
                                            </ul>
                                            <h3 className="mt-4 text-break mx-auto w-75 fw-bold">Potenciometro en servomotor 180°</h3>
                                            <p className="text-break mx-auto mt-4 w-75">Para utilizar este tipo de servomotores vamos a tener que mapear el angulo que puede dar este servomotor en el potenciometro, para ello multiplicamos por 180(angulo) dividido 65535(valor máximo del potenciómetro), así cada vez que giremos el potenciómetro indique el angulo de giro</p>
                                            <p className="text-break mx-auto mt-4 w-75">También vamos a tener que asignarle el valor al servomotor de la siguiente forma: int((el calculo anterior para mapear el potenciometro + 45) * 100000 / 9), esto se hace para que devuelva un valor en nanosegundos, lo que se necesita para mover el servomotor </p>
                                            <CopyButton code={class4MCode[9]} />
                                            <img className="w-75 mx-auto d-block border-content" alt="" src="../../img/class4Micropython/servo2.webp"></img>
                                        </div>
                                    </div>
                                </div>
                                <div id="element11" className={`accordion-item mt-4 rounded-5 animated-left ${elementVisibility.element11 ? 'slide-left' : ''}`} style={{ background: colorPrimaryMicropython, borderRadius: "40px" }} >
                                    <Link to="/micropythonClassFile/class5.py"
                                        target={"_blank"}
                                        download={"class5.py"}>
                                        <button className="accordion-button collapsed bg-transparent" type="button">
                                            <h2 className="text-light">Descarga el archivo de la clase 5</h2>
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
                                    <h1>Clase 5</h1>
                                    <h2>Configuración de redes Wi-Fi.</h2>
                                    <h2>Acceso a Internet y servicios web.</h2>
                                    <h2>Ejemplos de proyectos conectados a la web.</h2>
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

export default MicropythonClass5
