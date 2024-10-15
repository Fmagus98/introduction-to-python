import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../../Utils/firebase'
import { collection, getDocs } from 'firebase/firestore'
import { colorPrimaryMicropython } from '../../colors'
import useScrollAnimation from '../../useScrollAnimation'
import { CopyButton } from '../CopyButton/CopyButton'
import { class3MCode, class4MCode } from './MicropythonClassCode'
import { class3Code } from '../Class/classCode'

const MicropythonClass4 = () => {

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
                                        <h1>Clase 4</h1>
                                        <h2>Introducción a PWM y su aplicación en MicroPython."</h2>
                                        <h2>Control de LED mediante PWM.</h2>
                                        <h2>Control de motor mediante PWM.</h2>
                                        <div className="text-center text-lg-start">
                                            <a href="#clase4" className="btn-get-started scrollto" style={{ backgroundColor: "#EE7053" }}>Contenido de la clase 4</a>
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
                                <h2>Clase 4</h2>
                                <p>Contenido</p>
                            </div>
                            <div className="accordion accordion-flush w-100 mx-auto" id="accordionFlushExample">
                                <div id="element2" className={`accordion-item animated-left ${elementVisibility.element2 ? 'slide-left' : ''}`} style={{ background: colorPrimaryMicropython, borderRadius: "40px" }} >
                                    <button className="accordion-button collapsed  bg-transparent text-light" type="button" data-bs-toggle="collapse" data-bs-target="#a1" aria-expanded="false" aria-controls="flush-collapseOne">
                                        <h2>PWM</h2>
                                    </button>
                                    <div id="a1" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
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
                                <div id="element3" className={`accordion-item animated-left mt-4 ${elementVisibility.element3 ? 'slide-left' : ''}`} style={{ background: colorPrimaryMicropython, borderRadius: "40px" }} >
                                    <button className="accordion-button collapsed  bg-transparent text-light" type="button" data-bs-toggle="collapse" data-bs-target="#a2" aria-expanded="false" aria-controls="flush-collapseOne">
                                        <h2>Potenciometro</h2>
                                    </button>
                                    <div id="a2" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
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
                                <div id="element4" className={`accordion-item animated-left mt-4 ${elementVisibility.element4 ? 'slide-left' : ''}`} style={{ background: colorPrimaryMicropython, borderRadius: "40px" }} >
                                    <button className="accordion-button collapsed  bg-transparent text-light" type="button" data-bs-toggle="collapse" data-bs-target="#a3" aria-expanded="false" aria-controls="flush-collapseOne">
                                        <h2>Led</h2>
                                    </button>
                                    <div id="a3" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
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
                                        </div>
                                    </div>
                                </div>
                                <div id="element5" className={`accordion-item mt-4 rounded-5 animated-left ${elementVisibility.element5 ? 'slide-left' : ''}`} style={{ background: colorPrimaryMicropython, borderRadius: "40px" }} >
                                    <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a4" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        <h2 className="text-light">Resistencia</h2>
                                    </button>
                                    <div id="a4" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body text-light bg-dark ">
                                            <h3 className="mt-4 text-break mx-auto w-75 fw-bold">¿Qué es una resistencia?</h3>
                                            <p className="text-break mx-auto mt-4 w-75">Una resistencia es un componente electrónico diseñado para limitar el flujo de corriente en un circuito. Se utiliza para proteger otros componentes sensibles de sobrecargas o para controlar la cantidad de corriente que pasa por ellos. El valor de una resistencia se mide en ohmios (Ω), y su principal función es oponerse al paso de la corriente eléctrica.</p>
                                            <p className="text-break mx-auto mt-4 w-75">La ley de Ohm, que establece la relación entre el voltaje (V), la corriente (I) y la resistencia (R), se expresa como: V=I×R</p>
                                            <img className="w-75 d-block mx-auto border-content" alt="" src="../../img/class3Micropython/ohm.webp"></img>
                                            <p className="text-break mx-auto mt-4 w-75">Esto significa que el voltaje en un circuito es igual a la corriente multiplicada por la resistencia.</p>
                                            <h3 className="mt-4 text-break mx-auto w-75 fw-bold">¿Cómo se mide una resistencia?</h3>
                                            <p className="text-break mx-auto mt-4 w-75">Las resistencias se miden en ohmios (Ω) utilizando un multímetro. En el multímetro, debes seleccionar la opción para medir resistencia (indicada por el símbolo Ω) y luego conectar las puntas del multímetro a los extremos de la resistencia.</p>
                                            <p className="text-break mx-auto mt-4 w-75">Las resistencias también tienen un código de colores en sus cuerpos que indica su valor en ohmios. Cada color corresponde a un número, y la secuencia de colores te permite calcular el valor de la resistencia.</p>
                                            <img className="w-75 d-block mx-auto border-content" alt="" src="../../img/class3Micropython/resistance.webp"></img>
                                            <h3 className="mt-4 text-break mx-auto w-75 fw-bold">¿Para qué se utiliza una resistencia con LEDs en Raspberry Pi Pico?</h3>
                                            <p className="text-break mx-auto mt-4 w-75">Cuando conectas un LED a la Raspberry Pi Pico, se debe usar una resistencia para limitar la cantidad de corriente que pasa a través del LED. Si no se usa una resistencia, la corriente puede ser demasiado alta y dañar tanto el LED como la Raspberry Pi Pico.</p>
                                            <p className="text-break mx-auto mt-4 w-75">Los LEDs son componentes que solo permiten el paso de la corriente en una dirección y requieren una cantidad específica de corriente para funcionar correctamente. Si reciben demasiada corriente, se quemarán rápidamente. La resistencia actúa como un limitador, asegurando que solo fluya la cantidad adecuada de corriente.</p>
                                            <h4 className="mt-4 text-break mx-auto w-75">Ejemplo con un LED</h4>
                                            <p className="text-break mx-auto mt-4 w-75">Si conectas un LED a un pin GPIO de la Raspberry Pi Pico (por ejemplo, el GPIO 15), necesitarás una resistencia en serie con el LED para limitar la corriente. Una resistencia común para un LED estándar es de 220Ω.</p>
                                            <h4 className="mt-4 text-break mx-auto w-75">Cálculo de la resistencia para un LED</h4>
                                            <p className="text-break mx-auto mt-4 w-75">Supongamos que estás utilizando un LED que necesita 2V y la Raspberry Pi Pico suministra 3.3V en los pines GPIO. Queremos limitar la corriente a 20 mA (0.02 A) para proteger el LED.</p>
                                            <ol className="text-break mx-auto w-75">
                                                <li><p className="text-break mx-auto">La diferencia de voltaje entre la fuente y el LED es: <span className='fw-bold'>V=3.3V−2V=1.3V</span></p></li>
                                                <li><p className="text-break mx-auto">Usamos la ley de Ohm para calcular la resistencia necesaria: <span className='fw-bold'>R= V/I = 1.3V / 0.02A = 65Ω</span></p>
                                                    <p className="text-break mx-auto">Las resistencias tienen valores standard, en este caso podriamos utilizar una resitencia de 68Ω, 100Ω para proteger el Led. Puedes utilizar de más ohmios pero ten en cuenta que mientras más ohms tenga, menor intensidad tendrá.</p></li>
                                            </ol>
                                            <img className="w-75 d-block mx-auto border-content" style={{ marginBottom: "7rem" }} alt="" src="../../img/class3Micropython/68ohm.webp"></img>
                                        </div>
                                    </div>
                                </div>
                                <div id="element6" className={`accordion-item mt-4 rounded-5 animated-left ${elementVisibility.element6 ? 'slide-left' : ''}`} style={{ background: colorPrimaryMicropython, borderRadius: "40px" }} >
                                    <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a5" aria-expanded="false" aria-controls="flush-collapseThree">
                                        <h2 className="text-light">Botones</h2>
                                    </button>
                                    <div id="a5" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body text-light bg-dark ">
                                            <p className="text-break mx-auto w-75">Para utilizar un botón en un raspberri pi pico, vamos a tener que utilizar de la libreria "machine" la función "Pin"</p>
                                            <img className="w-75 mx-auto d-block border-content mb-4" alt="" src="../../img/class3Micropython/button1.webp"></img>
                                            <p className="text-break mx-auto w-75 mt-4">Con la función Pin vas a indicar que pin quieres utilizar en tu raspberry pi pico para utilizar un botón, en este ejemplo utilizaré el pin GPIO3 y debemos indicar que este Pin es un puerto de entrada ( Pin.IN )</p>
                                            <h3 className="mt-4 text-break mx-auto w-75 fw-bold">Acción Pull DOWN</h3>
                                            <p className="text-break mx-auto w-75">Debemos indicarle que acción queremos capturar del botón. En este caso va a ser la acción al dejar de presionar el botón. (Pin.PULL_DOWN), cuando no está pulsado tendrá un valor 0, en caso contrario un 1</p>
                                            <img className="w-75 mx-auto d-block border-content mb-4" alt="" src="../../img/class3Micropython/button4.webp"></img>
                                            <p className="text-break mx-auto w-75 mt-4">Para detectar si el botón está pulsado o no, debemos utilizar el método "value", para detectar constantemente el estado debemos utilizar el bucle while y también la libreria utime para que detecte el estado de forma detenida.</p>
                                            <p className="text-break mx-auto w-75 mt-4">Además de esto, la acción Pull down se comporta de otra manera, cuando accionas el botón se envía voltaje 3v/5v(HIGH), si no está presionado no envía voltaje(LOW). Por lo tanto debemos conectar también el pin 3V3 y también podemos añadirle una resistencia de 10k, esto es para que no haya un efecto llamado "Bounce", este efecto puede provocar acciones involuntarias del botón haciendo que no sea estable.</p>
                                            <h4 className="mt-4 text-break mx-auto w-75">¿Por qué se elige específicamente 10kΩ?</h4>
                                            <p className="text-break mx-auto w-75 mt-4">Además de esto, la acción Pull down se comporta de otra manera, cuando accionas el botón se envía voltaje 3v/5v(HIGH), si no está presionado no envía voltaje(LOW). Por lo tanto debemos conectar también el pin 3V3 y también podemos añadirle una resistencia de 10k, esto es para que no haya un efecto llamado "Bounce", este efecto puede provocar acciones involuntarias del botón haciendo que no sea estable.</p>
                                            <ol className="text-break mx-auto w-75">
                                                <li>
                                                    <p className="text-break mx-auto"><span className='fw-bold'>Estabilidad:</span> Proporciona un nivel adecuado de corriente para mantener el pin GPIO en un estado lógico alto o bajo sin que haya interferencia. Esto evita problemas de "ruido" en el pin, donde el pin podría cambiar de estado sin presionar el botón.</p>
                                                </li>
                                                <li>
                                                    <p className="text-break mx-auto"><span className='fw-bold'>Bajo consumo de corriente: </span> La resistencia de 10kΩ permite que solo una pequeña cantidad de corriente fluya entre el pin GPIO y la alimentación (o tierra). En una configuración pull-up, cuando el pin GPIO está en estado alto, la corriente que pasa a través de la resistencia es: I = V / R = 3.3V / 10000Ω = 0.00033A = 0.33ma</p>
                                                    <p className="text-break mx-auto">Esto es suficiente para mantener el estado lógico sin consumir demasiada energía.</p>
                                                </li>
                                                <li>
                                                    <p className="text-break mx-auto"><span className='fw-bold'>Resistencia estándar:</span> 10kΩ es un valor común que proporciona un buen equilibrio entre estabilidad y bajo consumo de corriente. Valores más bajos (como 1kΩ) podrían permitir más corriente, lo que no es necesario en aplicaciones de botones, mientras que valores más altos (como 100kΩ) podrían hacer que el circuito sea más susceptible a interferencias.</p>
                                                </li>
                                            </ol>
                                            <CopyButton code={class3MCode[1]} />
                                            <img className="w-75 mx-auto d-block border-content mb-4" alt="" src="../../img/class3Micropython/button5.webp"></img>
                                            <h3 className="mt-4 text-break mx-auto w-75 fw-bold">Acción Pull UP</h3>
                                            <p className="text-break mx-auto w-75">Debemos indicarle que acción queremos capturar del botón. En este caso va a ser la acción al presionar el botón. (Pin.PULL_UP), cuando no está pulsado tendrá un valor 1, en caso contrario un 0</p>
                                            <img className="w-75 mx-auto d-block border-content mb-4" alt="" src="../../img/class3Micropython/button2.webp"></img>
                                            <p className="text-break mx-auto w-75 mt-4">Para detectar si el botón está pulsado o no, debemos utilizar el método "value", para detectar constantemente el estado debemos utilizar el bucle while y también la libreria utime para que detecte el estado de forma detenida.</p>
                                            <CopyButton code={class3MCode[0]} />
                                            <img className="w-75 mx-auto d-block border-content mb-4" alt="" src="../../img/class3Micropython/button3.webp"></img>
                                        </div>
                                    </div>
                                </div>
                                <div id="element7" className={`accordion-item mt-4 rounded-5 animated-left ${elementVisibility.element7 ? 'slide-left' : ''}`} style={{ background: colorPrimaryMicropython, borderRadius: "40px" }} >
                                    <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a6" aria-expanded="false" aria-controls="flush-collapseFour">
                                        <h2 className="text-light">Led</h2>
                                    </button>
                                    <div id="a6" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body text-light bg-dark ">
                                            <h3 className="text-center mx-auto mt-4" style={{ fontSize: "25px", fontWeight: "700" }}>Control Básico de LED</h3>
                                            <p className="text-break mx-auto w-75">Los LEDs básicos son dispositivos de dos pines: un ánodo (+) y un cátodo (-). Para encender y apagar un LED en MicroPython, simplemente se conecta el ánodo a un pin GPIO configurado como salida y el cátodo a tierra (GND). Se puede controlar encendiéndolo o apagándolo con comandos sencillos.</p>
                                            <img className="d-block mx-auto w-50 border-content" alt="" src="../../img/class3Micropython/Led1.webp"></img>
                                            <h3 className="text-center mx-auto mt-4" style={{ fontSize: "25px", fontWeight: "700" }}>Ejecución Basica con led</h3>
                                            <CopyButton code={class3MCode[2]} />
                                            <img className="d-block mx-auto w-75 border-content" alt="" src="../../img/class3Micropython/Led2.webp"></img>
                                            <h3 className="text-center mx-auto mt-4" style={{ fontSize: "25px", fontWeight: "700" }}>Ejecución Basica de control de led con botones de forma directa</h3>
                                            <img className="d-block mx-auto w-75 border-content" alt="" src="../../img/class3Micropython/Led4.webp"></img>
                                            <h3 className="text-center mx-auto mt-4" style={{ fontSize: "25px", fontWeight: "700" }}>Ejecución Basica de control de led con botones de forma indirecta</h3>
                                            <CopyButton code={class3MCode[3]} />
                                            <img className="d-block mx-auto w-75 border-content" alt="" src="../../img/class3Micropython/Led3.webp"></img>
                                        </div>
                                    </div>
                                </div>
                                {/* <div id="element8" className={`accordion-item mt-4 rounded-5 animated-left ${elementVisibility.element8 ? 'slide-left' : ''}`} style={{ background: colorPrimaryMicropython, borderRadius: "40px" }} >
                                    <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a7" aria-expanded="false" aria-controls="flush-collapseFive">
                                        <h2 className="text-light">Ejecución del tercer programa</h2>
                                    </button>
                                    <div id="a7" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
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
                                </div> */}
                                <div id="element9" className={`accordion-item mt-4 rounded-5 animated-left ${elementVisibility.element9 ? 'slide-left' : ''}`} style={{ background: colorPrimaryMicropython, borderRadius: "40px" }} >
                                    <Link to="/micropythonClassFile/class3.py"
                                        target={"_blank"}
                                        download={"class3.py"}>
                                        <button className="accordion-button collapsed bg-transparent" type="button">
                                            <h2 className="text-light">Descarga el archivo de la clase 3</h2>
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
                                    <h1>Clase 4</h1>
                                    <h2>Comunicación UART y SPI.</h2>
                                    <h2>Protocolo I2C en MicroPython.</h2>
                                    <h2>Uso de sensores y actuadores externos/ Proyectos con sensores.</h2>
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

export default MicropythonClass4
