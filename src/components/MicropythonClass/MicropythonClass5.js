import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../../Utils/firebase'
import { collection, getDocs } from 'firebase/firestore'
import { colorPrimaryMicropython } from '../../colors'
import useScrollAnimation from '../../useScrollAnimation'
import { class5MCode } from './MicropythonClassCode'
import { CopyButton } from '../CopyButton/CopyButton'
import { class4Code } from '../Class/classCode'

const MicropythonClass5 = () => {

    const elementVisibility = useScrollAnimation()
    const [date, setDate] = useState()
    const newDate = new Date()
    useEffect(() => {
        if (!localStorage.getItem("dataCourseMicropython")) {
            getDocs(collection(db, "courseMicropython")).then(response => {
                response.docs.map(doc => {
                    if (doc.id === "biHDw8gF0oV14msUfiD5") {
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
            (new Date(date?.[4]?.date) <= newDate) || localStorage.getItem("access - micropython") ?
                <>
                    <section id="hero" style={{ background: colorPrimaryMicropython }} >
                        <div className="container">
                            <div className="row justify-content-between">
                                <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
                                    <div>
                                        <h1>Clase 5</h1>
                                        <h2>Uso de pantallas LCD y OLED.</h2>
                                        <h2>Generación de gráficos simples.</h2>
                                        <h2>Creación de interfaces de usuario básicas.</h2>
                                        <div className="text-center text-lg-start">
                                            <a href="#clase1" className="btn-get-started scrollto" style={{ backgroundColor: "#EE7053" }}>Contenido de la clase 5</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 order-1 order-lg-2 hero-img"  >
                                    <img src="../../img/micropython.png" className="img-fluid animated vh-60" alt="micropython" />
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
                                <h2>Clase 5</h2>
                                <p>Contenido</p>
                            </div>
                            <div id="element2" className={`mt-4 rounded-5 animated-left ${elementVisibility.element2 ? 'slide-left' : ''}`} style={{ background: colorPrimaryMicropython, borderRadius: "40px" }}>
                                <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a3" aria-expanded="false" aria-controls="flush-collapseFour">
                                    <h2 className="text-light">¿Que es un módulo?</h2>
                                </button>
                                <div id="a3" className="accordion-collapse collapse" >
                                    <div className="accordion-body text-light bg-dark ">
                                        <p className="text-break mx-auto w-75 mt-4">En Python, los módulos son archivos que contiene extensión .py .pyc ( código Python ) reutilizable, que posee su propio espacio de nombres y que puede contener variables, funciones, clases e incluso otros módulos.
                                            <br></br>
                                            Los módulos se utilizan para organizar y modularizar el código, lo que facilita su mantenimiento y reutilización en diferentes programas.</p>
                                        <p className="text-break mx-auto w-75">Aquí tienes los pasos básicos para crear y usar módulos en Python:</p>
                                        <p className="text-break mx-auto w-75"><span className="fw-bold">1_ Crear un archivo de módulo:</span> Crea un archivo Python con extensión .py que contendrá el código del módulo. Por ejemplo, crea un archivo llamado mi_modulo.py</p>
                                        <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class4/module1.webp"></img>
                                        <p className="text-break mx-auto w-75"><span className="fw-bold">2_ Escribir el código del módulo:</span> En el archivo mimodulo.py, escribe el código que deseas incluir en el módulo. Puedes definir funciones, clases, variables u otras estructuras de datos en el archivo. Por ejemplo, el contenido de mimodulo.py podría tener una función llamada saludo() y una variable llamada pi.</p>
                                        <CopyButton code={class4Code[6]} />
                                        <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class4/module2.webp"></img>
                                        <p className="text-break mx-auto w-75"><span className="fw-bold">3_ Usar el módulo en otro archivo:</span> Para usar el módulo en otro archivo Python, necesitas importarlo. Puedes importar todo el módulo o solo partes específicas del mismo. Por ejemplo, crea un archivo curso4 y úsalo para importar y utilizar el módulo mi_modulo.py:</p>
                                        <CopyButton code={class4Code[7]} />
                                        <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class4/module3.webp"></img>
                                        <p className="text-break mx-auto w-75">También puedes importar partes específicas del módulo utilizando la declaración from / import. Por ejemplo:</p>
                                        <CopyButton code={class4Code[8]} />
                                        <img className="w-75 d-block mx-auto mb-4 border-content" style={{ marginBottom: "7rem" }} alt="" src="../../img/class4/module4.webp"></img>
                                        <p className="text-break mx-auto w-75">En el caso que tengas que importar un archivo que está dentro de una carpeta ajena a tu dirección local del archivo donde estás llamando la importación, podés hacerlo de la siguiente manera:</p>
                                        <CopyButton code={class4Code[9]} />
                                        <img className="w-75 d-block mx-auto mb-4 border-content" style={{ marginBottom: "7rem" }} alt="" src="../../img/class4/module5.webp"></img>
                                    </div>
                                </div>
                            </div>
                            <div id="element3" className={`mt-4 rounded-5 animated-left ${elementVisibility.element3 ? 'slide-left' : ''}`} style={{ background: colorPrimaryMicropython, borderRadius: "40px" }}>
                                <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a4" aria-expanded="false" aria-controls="flush-collapseFive">
                                    <h2 className="text-light">Módulos nativos de python</h2>
                                </button>
                                <div id="a4" className="accordion-collapse collapse" >
                                    <div className="accordion-body text-light bg-dark ">
                                        <p className="text-break mx-auto w-75 mt-4">Python tiene una amplia biblioteca estándar que incluye una serie de módulos nativos para realizar diversas tareas.<br></br>Aquí hay algunos módulos nativos comunes de Python:</p>
                                        <h3 className="text-light text-break mx-auto w-75">Math</h3>
                                        <p className="text-break mx-auto w-75">El módulo math en Python proporciona funciones y constantes matemáticas para realizar cálculos numéricos. Para utilizar el módulo math, debes importarlo al principio de tu script de la siguiente manera:</p>
                                        <CopyButton code={class4Code[10]} />
                                        <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class4/math1.webp"></img>
                                        <p className="text-break mx-auto w-75">A continuación, puedes utilizar las funciones y constantes proporcionadas por el módulo math. Aquí hay algunos ejemplos de cómo puedes usarlo.</p>
                                        <p className="text-break mx-auto w-75">Redondeo de números: Cuando tengamos un número con décimal podemos redondearlo con varios métodos (ceil,floor,trunc).</p>
                                        <CopyButton code={class4Code[11]} />
                                        <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class4/math2.webp"></img>
                                        <p className="text-break mx-auto w-75">Funciones trigonométricas: Podemos realizar cálculos trigonométricos para calcular seno,arcoseno,coseno,arcocoseno,tangente y arcotangente de un ángulo con estas funciones (sin,cos,tang).</p>
                                        <CopyButton code={class4Code[12]} />
                                        <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class4/math3.webp"></img>
                                        <p className="text-break mx-auto w-75">Funciones hiperbólicas: Son útiles para describir fenómenos físicos (por ejemplo, velocidad de las olas o el movimiento de un objeto en un fluido) por su conveniencia al resolver ecuaciones diferenciales. Para usar esto se usan estas funciones (sinh,cosh,tanh,asinh,acosh,atanh).</p>
                                        <CopyButton code={class4Code[13]} />
                                        <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class4/math4.webp"></img>
                                        <p className="text-break mx-auto w-75">Funciones exponenciales y logarítmicas: Se puede realizar cálculos logarítmicos y exponenciales con estas funciones (log, exp, pow).</p>
                                        <CopyButton code={class4Code[14]} />
                                        <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class4/math5.webp"></img>
                                        <p className="text-break mx-auto w-75">Estos son solo algunos ejemplos de las funciones y constantes disponibles en el módulo math. Para obtener más detalles y ver todas las funciones y constantes proporcionadas, puedes consultar la documentación oficial de Python: <Link className="text-primary" to="https://docs.python.org/3/library/math.html">math - Módulo matemático</Link>.</p>
                                        <h3 className="text-break w-75 mx-auto">Random</h3>
                                        <p className="text-break mx-auto w-75">El módulo random en Python proporciona funciones para generar números pseudoaleatorios.<br></br>Dentro de este módulo tiene varias funcionalidades como:</p>
                                        <p className="text-break mx-auto w-75"><span className="fw-bold">Random: </span>Podes generar un número aleatorio</p>
                                        <CopyButton code={class4Code[15]} />
                                        <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class4/random1.webp"></img>
                                        <p className="text-break mx-auto w-75"><span className="fw-bold">Randint: </span>Podes generar un número aleatorio dentro de un rango específico.</p>
                                        <CopyButton code={class4Code[16]} />
                                        <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class4/random2.webp"></img>
                                        <p className="text-break mx-auto w-75"><span className="fw-bold">Uniform: </span>Generar un número aleatorio de punto flotante dentro de un rango específico.</p>
                                        <CopyButton code={class4Code[17]} />
                                        <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class4/random3.webp"></img>
                                        <p className="text-break mx-auto w-75"><span className="fw-bold">Choice: </span>Selecciona un elemento aleatorio de una lista.</p>
                                        <CopyButton code={class4Code[18]} />
                                        <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class4/random4.webp"></img>
                                        <p className="text-break mx-auto w-75"><span className="fw-bold">Shuffle: </span>Mezcla el orden aleatoriamente de los elementos de una lista.</p>
                                        <CopyButton code={class4Code[19]} />
                                        <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class4/random5.webp"></img>
                                        <p className="text-break mx-auto w-75">Si quieres ver más sobre el módulo random puedes ir a la documentación oficial <Link className="text-primary" to="https://docs.python.org/3/library/random.html">Random</Link></p>
                                        <h3 className="text-break w-75 mx-auto">Datetime</h3>
                                        <p className="text-break mx-auto w-75">El módulo datetime en Python permite trabajar con fechas, horas y realizar operaciones relacionadas con el tiempo, aquí te mostraré algunos ejemplos.</p>
                                        <p className="text-break mx-auto w-75"><span className="fw-bold">Datetime.datetime.now(): </span>Puedes obtener la fecha y hora actual.</p>
                                        <CopyButton code={class4Code[20]} />
                                        <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class4/datetime1.webp"></img>
                                        <p className="text-break mx-auto w-75"><span className="fw-bold">Datetime.date(): </span>Crea un objeto de fecha específica.</p>
                                        <CopyButton code={class4Code[21]} />
                                        <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class4/datetime2.webp"></img>
                                        <p className="text-break mx-auto w-75"><span className="fw-bold">Datetime.time(): </span>Crear un objeto de tiempo específico.</p>
                                        <CopyButton code={class4Code[22]} />
                                        <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class4/datetime3.webp"></img>
                                        <p className="text-break mx-auto w-75"><span className="fw-bold">Datetime.datetime(): </span>Crear un objeto de fecha y hora específicos:.</p>
                                        <CopyButton code={class4Code[23]} />
                                        <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class4/datetime4.webp"></img>
                                        <p className="text-break mx-auto w-75"><span className="fw-bold">Strftime(): </span>Formatear una fecha y hora en una cadena específica.</p>
                                        <CopyButton code={class4Code[24]} />
                                        <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class4/datetime5.webp"></img>
                                        <p className="text-break mx-auto w-75">Tambien puedes obtener la fecha y hora de forma individual</p>
                                        <CopyButton code={class4Code[25]} />
                                        <img className="w-75 d-block mx-auto border-content" style={{ marginBottom: "7rem" }} alt="" src="../../img/class4/datetime6.webp"></img>
                                    </div>
                                </div>
                            </div>
                            <div id="element4" className={`mt-4 rounded-5 animated-left ${elementVisibility.element4 ? 'slide-left' : ''}`} style={{ background: colorPrimaryMicropython, borderRadius: "40px" }}>
                                <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a5" aria-expanded="false" aria-controls="flush-collapseSix">
                                    <h2 className="text-light">Módulos y librerias independientes para python</h2>
                                </button>
                                <div id="a5" className="accordion-collapse collapse" >
                                    <div className="accordion-body text-light bg-dark ">
                                        <p className="text-break mx-auto w-75 mt-4">Hay una amplia gama de módulos y bibliotecas disponibles para integrar en proyectos de Micropython, según los requisitos y objetivos específicos del proyecto.
                                            <br></br>
                                            Algunos de los módulos más populares que podrías considerar son estos:
                                        </p>
                                        <h3 className="text-break mx-auto w-75">Rp2:</h3>
                                        <p className="text-break mx-auto w-75">Ofrece funcionalidades específicas del chip RP2040, como el control de las máquinas de estado PIO y configuraciones avanzadas de hardware.
                                            <br></br>
                                            Es esencial para proyectos que requieren procesamiento en paralelo o control preciso del hardware.<br></br><Link className="text-primary" to="https://docs.micropython.org/en/latest/library/rp2.html" target="_blank">Documentación RP2</Link>
                                        </p>
                                        <h3 className="text-break mx-auto w-75">Network:</h3>
                                        <p className="text-break mx-auto w-75">Permite configurar y utilizar interfaces de red como WiFi. Esto es útil para proyectos de IoT y conectividad.
                                            <br></br>
                                            <Link className="text-primary" to="https://docs.micropython.org/en/latest/library/network.html" target="_blank">Documentación Network</Link>
                                        </p>
                                        <h3 className="text-break mx-auto w-75">socket:</h3>
                                        <p className="text-break mx-auto w-75">Permite crear y gestionar conexiones de red mediante sockets. Es ideal para implementar servidores web o comunicación TCP/UDP.
                                            <br></br>
                                            <Link className="text-primary" to="https://docs.python.org/3/library/socket.html" target="_blank">Documentación Socket</Link>
                                        </p>
                                        <h2 className="text-break mx-auto mt-4 w-75">Páginas de módulos para python</h2>
                                        <p className="text-break mx-auto w-75">
                                            Existen diferentes lugares donde puedes buscar módulos y bibliotecas para Python. Algunas de las fuentes más populares son:</p>
                                        <h3 className="text-break mx-auto w-75">Python Package Index (PyPI): </h3>
                                        <p className="text-break mx-auto w-75">Es el repositorio oficial de paquetes de Python, donde puedes encontrar una amplia gama de módulos y bibliotecas. Puedes acceder a PyPI en el siguiente enlace: <Link className="text-primary" to="https://pypi.org/" target="_blank">https://pypi.org/</Link></p>
                                        <h3 className="text-break mx-auto w-75">Anaconda:</h3>
                                        <p className="text-break mx-auto w-75">Es una distribución de Python que incluye una gran cantidad de módulos y bibliotecas populares para análisis de datos y ciencia computacional. Puedes explorar las bibliotecas disponibles en Anaconda en el siguiente enlace: <Link className="text-primary" to="https://anaconda.org/" target="_blank">https://anaconda.org/</Link></p>
                                        <h3 className="text-break mx-auto w-75">GitHub:</h3>
                                        <p className="text-break mx-auto w-75">Es una plataforma de desarrollo colaborativo que alberga repositorios de código fuente, incluidos muchos módulos y bibliotecas de Python. Puedes buscar en GitHub utilizando palabras clave relevantes para encontrar proyectos que se ajusten a tus necesidades en el siguiente enlace: <Link className="text-primary" to="https://github.com/" target="_blank">https://github.com/</Link></p>
                                        <h3 className="text-break mx-auto w-75">Documentación oficial de Python:</h3>
                                        <p className="text-break mx-auto w-75">La documentación oficial de Python proporciona una lista de módulos y bibliotecas estándar que están disponibles en la instalación básica de Python. Puedes consultar la documentación en el siguiente enlace: <Link className="text-primary" to="https://docs.python.org/" target="_blank">https://docs.python.org/</Link></p>
                                        <h3 className="text-break mx-auto w-75">Foros y comunidades de Python:</h3>
                                        <p className="text-break mx-auto w-75">Existen comunidades en línea donde los desarrolladores de Python comparten sus proyectos y recomendaciones de módulos y bibliotecas. Algunos ejemplos son el <Link className="text-primary" to="https://www.reddit.com/r/Python/" target="_blank">subreddit r/python</Link>, el foro oficial de Python <Link className="text-primary" to="https://python-forum.io/" target="_blank">Python Forum</Link>, y diversas comunidades en plataformas como <Link className="text-primary" to="https://stackoverflow.com/" target="_blank">Stack Overflow</Link>.</p>
                                        <p className="text-break mx-auto w-75" style={{ marginBottom: "7rem" }}>Al buscar módulos y bibliotecas, es recomendable verificar la popularidad y la calidad del proyecto, leer las opiniones y reseñas de otros usuarios, y comprobar si el proyecto está activamente mantenido y actualizado.
                                            <br></br>
                                            Recuerda revisar los requisitos y la compatibilidad del módulo o biblioteca con la versión de Python que estás utilizando en tu proyecto, así como cualquier dependencia adicional que pueda requerir.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div id="element5" className={`mt-4 rounded-5 animated-left ${elementVisibility.element5 ? 'slide-left' : ''}`} style={{ background: colorPrimaryMicropython, borderRadius: "40px" }} >
                                <button className="accordion-button collapsed bg-transparent text-light" type="button" data-bs-toggle="collapse" data-bs-target="#a6" aria-expanded="false" aria-controls="flush-collapseOne">
                                    <h2>Introducción a las pantallas LCD y OLED</h2>
                                </button>
                                <div id="a6" className="accordion-collapse collapse" >
                                    <div className="accordion-body text-light bg-dark ">
                                        <p className="text-break mx-auto w-75">Las pantallas son componentes clave en muchos proyectos de electrónica y programación, especialmente en el ámbito de la Raspberry Pi Pico W. Conocer las diferencias entre las tecnologías de visualización, como LCD y OLED, es esencial para seleccionar la mejor opción para cada aplicación.</p>
                                        <h3 className="text-center mx-auto w-75">Pantallas LCD (Liquid Crystal Display)</h3>
                                        <img className="w-50 d-block mx-auto mb-4 border-content" alt="" src="../../img/class6Micropython/lcd.webp"></img>
                                        <ul className="text-break mx-auto w-75 list-unstyled ">
                                            <li><p className="text-break mx-auto w-100">Las pantallas LCD son un tipo de pantalla plana que utiliza cristales líquidos para mostrar imágenes. Funcionan mediante la manipulación de la luz a través de capas de cristales líquidos que cambian su orientación cuando se aplica una corriente eléctrica.</p></li>
                                            <li><p className="text-break mx-auto w-100"><span className="fw-bold">Estructura: </span>Tienen una capa de cristales líquidos entre dos filtros polarizados. La luz de fondo (generalmente LED) atraviesa estos filtros y los cristales, permitiendo que se muestre texto o imágenes en la pantalla.</p></li>
                                        </ul>
                                        <h3 className="text-break mx-auto w-75">Ventajas y desventajas en LCD</h3>
                                        <ul className="text-break mx-auto w-75 list-unstyled">
                                            <li><p className="text-break mx-auto w-100"><span className="fw-bold">Costo: </span>Generalmente más económicas de producir, lo que las hace más accesibles para muchos proyectos.</p></li>
                                            <li><p className="text-break mx-auto w-100"><span className="fw-bold">Durabilidad: </span>Tienen una mayor resistencia al burn-in, un fenómeno donde las imágenes estáticas pueden quedar grabadas permanentemente en la pantalla.</p></li>
                                            <li><p className="text-break mx-auto w-100"><span className="fw-bold">Consumo de energía: </span>Para aplicaciones que muestran principalmente texto o imágenes estáticas, pueden ser más eficientes en términos de energía que las OLED.</p></li>
                                            <li><p className="text-break mx-auto w-100"><span className="fw-bold">Contraste: </span>La calidad del contraste no es tan alta como en las pantallas OLED. Los negros pueden aparecer más apagados debido a la luz de fondo.</p></li>
                                            <li><p className="text-break mx-auto w-100"><span className="fw-bold">Ángulo de visión: </span>Los colores pueden distorsionarse cuando se ven desde ángulos extremos, lo que puede limitar su uso en ciertas aplicaciones.</p></li>
                                        </ul>
                                        <h3 className="text-center mx-auto w-75">Pantallas OLED (Organic Light Emitting Diode)</h3>
                                        <img className="w-50 d-block mx-auto mb-4 border-content" alt="" src="../../img/class6Micropython/oled.webp"></img>
                                        <ul className="text-break mx-auto w-75 list-unstyled">
                                            <li><p className="text-break mx-auto w-100">A diferencia de las LCD, las pantallas OLED no requieren retroiluminación. Cada píxel en una pantalla OLED es un diodo emisor de luz orgánico que emite su propia luz cuando se le aplica una corriente eléctrica.</p></li>
                                            <li><p className="text-break mx-auto w-100"><span className="fw-bold">Estructura: </span>Están compuestas por una capa de materiales orgánicos entre dos electrodos. Cuando se aplica un voltaje, estos materiales emiten luz, lo que permite mostrar imágenes más brillantes y colores más vivos.</p></li>
                                        </ul>
                                        <h3 className="text-break mx-auto w-75">Ventajas y desventajas en OLED</h3>
                                        <ul className="text-break mx-auto w-75 list-unstyled">
                                            <li><p className="text-break mx-auto w-100"><span className="fw-bold">Calidad de imagen: </span>Ofrecen un contraste superior y colores más vibrantes, lo que mejora la experiencia visual.</p></li>
                                            <li><p className="text-break mx-auto w-100"><span className="fw-bold">Ángulos de visión: </span>Mantienen la calidad de la imagen desde diferentes ángulos, lo que las hace ideales para dispositivos donde el espectador puede estar en diversas posiciones.</p></li>
                                            <li><p className="text-break mx-auto w-100"><span className="fw-bold">Flexibilidad: </span>Las pantallas OLED pueden ser más delgadas y ligeras, permitiendo su uso en dispositivos portátiles y flexibles.</p></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div id="element6" className={`rounded-5 animated-left mt-4 ${elementVisibility.element6 ? 'slide-left' : ''}`} style={{ background: colorPrimaryMicropython, borderRadius: "40px" }} >
                                <button className="accordion-button collapsed bg-transparent text-light" type="button" data-bs-toggle="collapse" data-bs-target="#a7" aria-expanded="false" aria-controls="flush-collapseOne">
                                    <h2>Pantallas Compatibles con Raspberri pi pico w</h2>
                                </button>
                                <div id="a7" className="accordion-collapse collapse" >
                                    <div className="accordion-body text-light bg-dark ">
                                        <div className="accordion-body text-light">
                                            <h3 className="text-break w-75 mx-auto mt-4">LCD 16x2 (HD44780)</h3>
                                            <p className="text-break mx-auto mt-4 w-75">Los displays LCDs de 16×2 tienen 16 pines de los cuales únicamente usaremos 12 pines para la realización de una conexión básica. Este tipo de pantallas es muy utilizado y es ideal para proyectos que requieren información básica, como menús o datos de sensores.</p>
                                            <img className="w-50 d-block mx-auto mb-4 border-content" alt="" src="../../img/class6Micropython/lcd16x2conexion.webp"></img>
                                            <h3 className="text-break w-75 mx-auto mt-4">LCD 20x4</h3>
                                            <p className="text-break mx-auto mt-4 w-75">El módulo de pantalla LCD de 20 x 4 caracteres tiene una amplia gama de aplicaciones en sistemas integrados y electrónicos.</p>
                                            <img className="w-50 d-block mx-auto mb-4 border-content" alt="" src="../../img/class6Micropython/lcd20x4conexion.webp"></img>
                                            <h3 className="text-break w-75 mx-auto mt-4">LCD Gráfica (128x64)</h3>
                                            <p className="text-break mx-auto mt-4 w-75">Esta pantalla tiene una resolución de 128 píxeles de ancho y 64 píxeles de alto, lo que permite mostrar gráficos y texto de manera efectiva.</p>
                                            <img className="w-50 d-block mx-auto mb-4 border-content" alt="" src="../../img/class6Micropython/lcd128x64conexion.webp"></img>
                                            <h3 className="text-break w-75 mx-auto mt-4">E paper(e-ink)</h3>
                                            <p className="text-break mx-auto mt-4 w-75">Las pantallas e-Paper son una excelente opción para proyectos con Raspberry Pi Pico W que requieren bajo consumo de energía y buena legibilidad, especialmente en condiciones de luz intensa. Aunque no son adecuadas para aplicaciones de video o gráficos en movimiento, destacan en aplicaciones estáticas y dispositivos de bajo consumo, como lectores de eBooks y etiquetas electrónicas.</p>
                                            <img className="w-50 d-block mx-auto mb-4 border-content" alt="" src="../../img/class6Micropython/e-ink.webp"></img>
                                            <h3 className="text-break w-75 mx-auto mt-4">Pantallas táctiles (XPT2046)</h3>
                                            <p className="text-break mx-auto mt-4 w-75">Aunque las pantallas táctiles no son tan comunes con el Raspberry Pi Pico W, algunas pantallas TFT con controladores táctiles (como XPT2046) son compatibles y pueden conectarse mediante SPI.</p>
                                            <img className="w-50 d-block mx-auto mb-4 border-content" alt="" src="../../img/class6Micropython/touch.webp"></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="element7" className={`mt-4 rounded-5 animated-left ${elementVisibility.element7 ? 'slide-left' : ''}`} style={{ background: colorPrimaryMicropython, borderRadius: "40px" }}>
                                <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a8" aria-expanded="false" aria-controls="flush-collapseThree">
                                    <h2 className="text-light">Conexión Pantalla LCD 16x2 I2C</h2>
                                </button>
                                <div id="a8" className="accordion-collapse collapse bg-dark" >
                                    <div className="accordion-body text-light bg-dark ">
                                        <p className="text-break mx-auto w-75">Vamos a probar esto desde  <Link to="https://wokwi.com/projects/new/micropython-pi-pico" target="_blank" className="text-info">Wokwi</Link>, primero vamos a empezar a crear la conexión de la raspberry pi pico a nuestra pantalla LCD</p>
                                        <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class6Micropython/I2Cconect1.webp"></img>
                                        <h3 className="text-break w-75 mx-auto">Repositorio I2C-LCD - Github</h3>
                                        <p className="text-break mx-auto w-75">Este repositorio está hecho para facilitar la integración de un LCD I2C con el Raspberry Pi Pico.</p>
                                        <p className="text-break mx-auto w-75">Primero debemos crear 2 archivos llamado uno 'lcd_api.py' y otro 'pico_ic2_led.py', el contenido del código lo encontraremos ingresando desde este link --  <Link to="https://github.com/T-622/RPI-PICO-I2C-LCD/blob/main/lcd_api.py" target="_blank" className="text-info">https://github.com/T-622/RPI-PICO-I2C-LCD/blob/main/lcd_api.py</Link></p>
                                        <CopyButton code={class5MCode[0]} />
                                        <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class6Micropython/I2CLCD-github.webp"></img>
                                        <CopyButton code={class5MCode[1]} />
                                        <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class6Micropython/I2CLCD-github2.webp"></img>
                                        <p className="text-break mx-auto w-75">Estos archivos lo agregamos en Wokwi para tener la facilidad de poder manipular la pantalla LCD.</p>
                                        <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class6Micropython/I2Cconect2.webp"></img>
                                        <p className="text-break mx-auto w-75">Ahora dentro del archivo main.py debemos importar el archivo "pico_i2c_lcd" y traer la clase "I2cLcd".</p>
                                        <CopyButton code={class5MCode[2]} />
                                        <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class6Micropython/I2Cconect3.webp"></img>
                                        <p className="text-break mx-auto w-75">Importa desde el módulo Machine: "Pin", "I2C" y desde el módulo time: "sleep".</p>
                                        <CopyButton code={class5MCode[3]} />
                                        <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class6Micropython/I2Cconect4.webp"></img>
                                        <p className="text-break mx-auto w-75">Debemos almacenar en una variable la conexión de los pines de comunicación con la pantalla LCD</p>
                                        <ul className="text-break mx-auto w-75 list-unstyled">
                                            <li><p className="text-break mx-auto w-100"><span className="fw-bold">I2C() </span>Llamada de la clase I2C del módulo machine</p></li>
                                            <li><p className="text-break mx-auto w-100"><span className="fw-bold">1° argumento (0) </span>Especifica que se usará el controlador I2C GP0 del microcontrolador.</p></li>
                                            <li><p className="text-break mx-auto w-100"><span className="fw-bold">sda=Pin(0) </span>Configura el pin GPIO 0 para ser utilizado como la línea de datos serial (SDA). Esta línea se usa para la transmisión de datos en la comunicación I2C.</p></li>
                                            <li><p className="text-break mx-auto w-100"><span className="fw-bold">scl=Pin(1) </span>Configura el pin GPIO 1 para ser utilizado como la línea de reloj serial (SCL). Esta línea genera los pulsos de reloj necesarios para sincronizar la transmisión de datos.</p></li>
                                            <li><p className="text-break mx-auto w-100"><span className="fw-bold">freq=400000: </span>Establece la frecuencia de comunicación I2C a 400 kHz. Esta es una velocidad comúnmente utilizada para I2C y se conoce como "modo rápido" (Fast Mode).</p></li>
                                        </ul>
                                        <CopyButton code={class5MCode[4]} />
                                        <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class6Micropython/I2Cconect5.webp"></img>
                                        <p className="text-break mx-auto w-75">Debemos crear una variable que capture el número del adaptador i2c que comunica el lcd al microcontrolador, sin esto no vamos a poder hacer la comunicación, por lo general debe detectar el número 39.</p>
                                        <CopyButton code={class5MCode[5]} />
                                        <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class6Micropython/I2Cconect6.webp"></img>
                                        <p className="text-break mx-auto w-75">Ahora creamos una variable que capture la clase I2cLcd del módulo "pico_i2c_lcd" con los datos capturados anteriormente, lo ingresamos en los parámetros de la clase.</p>
                                        <ul className="text-break mx-auto w-75 list-unstyled">
                                            <li><p className="text-break mx-auto w-100"><span className="fw-bold">I2cLcd() : </span>Llamada de la clase I2cLcd del módulo "pico_i2c_lcd"</p></li>
                                            <li><p className="text-break mx-auto w-100"><span className="fw-bold">I2C_ADDR : </span>Número del adaptador de comunicación I2C</p></li>
                                            <li><p className="text-break mx-auto w-100"><span className="fw-bold">2 : </span>Número de filas que tiene la pantalla LCD</p></li>
                                            <li><p className="text-break mx-auto w-100"><span className="fw-bold">16 :</span>Número de columnas que tiene la pantalla LCD</p></li>
                                        </ul>
                                        <CopyButton code={class5MCode[6]} />
                                        <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class6Micropython/I2Cconect7.webp"></img>
                                        <p className="text-break mx-auto w-75">Creamos un bucle while para que constantemente se sobreescriba la palabra que quieras introducir, con el método "putstr" vas a poder ingresar los caracteres dentro del LCD y con "clean" vas a poder limpiar la pantalla.</p>
                                        <p className="mt-4 mb-4 text-center mx-auto w-50">Para verlo desde Wokwi ingresa al link -- <Link to="https://wokwi.com/projects/413391997575993345" target="_blank" className="text-info">Conexión básica de LCD</Link></p>
                                        <CopyButton code={class5MCode[7]} />
                                        <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class6Micropython/I2Cconect6.webp"></img>
                                    </div>
                                </div>
                            </div>
                            <div id="element8" className={`mt-4 rounded-5 animated-left ${elementVisibility.element8 ? 'slide-left' : ''}`} style={{ background: colorPrimaryMicropython, borderRadius: "40px" }}>
                                <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a9" aria-expanded="false" aria-controls="flush-collapseThree">
                                    <h2 className="text-light">Conexión Pantalla LCD 1602 </h2>
                                </button>
                                <div id="a9" className="accordion-collapse collapse bg-dark" >
                                    <div className="accordion-body text-light bg-dark ">
                                        <p className="text-break mx-auto w-75">Para este tipo de LCD no conseguí una librería específica para manipular este LCD, este código lo he desarrollado por mi cuenta, este tipo de LCD tiene una transferencia de datos de 4 a 8 bits, en este caso solo utilizaré 4 bits, pero basicamente entre más bits, más rápido será la transferencia de datos.</p>
                                        <p className="text-break mx-auto w-75">Para agilizar el proceso utilizaremos <Link to="https://wokwi.com/projects/new/micropython-pi-pico" target="_blank" className="text-info">Wokwi</Link> y crearemos un archivo llamado lcd.py y copiaremos este código.</p>
                                        <CopyButton code={class5MCode[18]} />
                                        <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class5Micropython/lcd1602.webp"></img>
                                        <p className="text-break mx-auto w-75">Creando este archivo observamos que tenemos varias variables en la que contienen la comunicación de los pines de nuestra raspberry pi pico, estos pines debemos conectarlo a nuestro LCD.</p>
                                        <ul className="text-break mx-auto w-75 list-unstyled">
                                            <li><p className="text-break mx-auto w-100"><span className="fw-bold">VSS - RW - K : </span>Debemos conectarlo a tierra(GND).</p></li>
                                            <li><p className="text-break mx-auto w-100"><span className="fw-bold">VDD - A : </span>Debemos conectarlo a 3V3.</p></li>
                                            <li><p className="text-break mx-auto w-100"><span className="fw-bold">RS: </span>Debemos conectarlo a GP28.</p></li>
                                            <li><p className="text-break mx-auto w-100"><span className="fw-bold">E: </span>Debemos conectarlo a GP27.</p></li>
                                            <li><p className="text-break mx-auto w-100"><span className="fw-bold">D4: </span>Debemos conectarlo a GP26.</p></li>
                                            <li><p className="text-break mx-auto w-100"><span className="fw-bold">D5: </span>Debemos conectarlo a GP22.</p></li>
                                            <li><p className="text-break mx-auto w-100"><span className="fw-bold">D6: </span>Debemos conectarlo a GP21.</p></li>
                                            <li><p className="text-break mx-auto w-100"><span className="fw-bold">D7: </span>Debemos conectarlo a GP20.</p></li>
                                        </ul>
                                        <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class5Micropython/lcd1602-2.webp"></img>
                                        <p className="text-break mx-auto w-75">Luego en main.py debemos utilizar importar del módulo lcd las funciones que contiene(lcd_init, lcd_set_cursor, lcd_print)</p>
                                        <ul className="text-break mx-auto w-75 list-unstyled">
                                            <li><p className="text-break mx-auto w-100"><span className="fw-bold">lcd_init: </span>Esta función inicia la pantalla del lcd.</p></li>
                                            <li><p className="text-break mx-auto w-100"><span className="fw-bold">lcd_set_cursor: </span>Esta función indica en que ubicación iniciará el texto.</p></li>
                                            <li><p className="text-break mx-auto w-100"><span className="fw-bold">lcd_print: </span>Esta función imprimirá el texto en la pantalla.</p></li>
                                        </ul>
                                        <p className="mt-4 mb-4 text-center mx-auto w-50">Para verlo desde Wokwi ingresa al link -- <Link to="https://wokwi.com/projects/415201117168705537" target="_blank" className="text-info">Pantalla LCD1602</Link></p>
                                        <CopyButton code={class5MCode[19]} />
                                        <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class5Micropython/lcd1602-3.webp"></img>
                                        <h3 className="text-break w-75 mx-auto">Pantalla LCD1602 - Activación de led</h3>
                                        <p className="mt-4 mb-4 text-center mx-auto w-50">Para verlo desde Wokwi ingresa al link -- <Link to="https://wokwi.com/projects/415348937494693889" target="_blank" className="text-info">Pantalla LCD1602 Activación de led</Link></p>
                                        <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class5Micropython/lcd1602-4.webp"></img>
                                    </div>
                                </div>
                            </div>
                            <div id="element9" className={`mt-4 rounded-5 animated-left ${elementVisibility.element9 ? 'slide-left' : ''}`} style={{ background: colorPrimaryMicropython, borderRadius: "40px" }}>
                                <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a10" aria-expanded="false" aria-controls="flush-collapseThree">
                                    <h2 className="text-light">Conexión pantalla OLED I2C (modelo SSD1306)</h2>
                                </button>
                                <div id="a10" className="accordion-collapse collapse bg-dark" >
                                    <div className="accordion-body text-light bg-dark ">
                                        <h3 className="text-break w-75 mx-auto">Repositorio ssd1306 - Github</h3>
                                        <p className="text-break mx-auto w-75">Este repositorio está hecho para facilitar la integración de un OLED I2C con el Raspberry Pi Pico.</p>
                                        <p className="text-break mx-auto w-75">Primero debemos crear 1 archivo llamado uno 'ssd1306.py', el contenido del código lo encontraremos ingresando desde este link --  <Link to="https://github.com/stlehmann/micropython-ssd1306/blob/master/ssd1306.py" target="_blank" className="text-info">https://github.com/stlehmann/micropython-ssd1306/blob/master/ssd1306.py</Link></p>
                                        <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class6Micropython/OLEDConect1.webp"></img>
                                        <p className="text-break mx-auto w-75">Vamos a probar esto desde  <Link to="https://wokwi.com/projects/new/micropython-pi-pico" target="_blank" className="text-info">Wokwi</Link>, primero vamos a empezar a pasar ese archivo a wokwi</p>
                                        <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class6Micropython/OLEDConect2.webp"></img>
                                        <p className="text-break mx-auto w-75">Ahora desde Wokwi vamos hacer la conexión de la pantalla OLED a la raspberry pi pico.</p>
                                        <ul className="text-break mx-auto w-75 list-unstyled">
                                            <li><p className="text-break mx-auto w-100"><span className="fw-bold">3v3: </span>La debemos conectar al puerto 3V3 para que nos proporcione el voltaje de 3V (+)</p></li>
                                            <li><p className="text-break mx-auto w-100"><span className="fw-bold">GND: </span>La debemos conectar al Pin GND para que podamos tener la conexión a tierra (-)</p></li>
                                            <li><p className="text-break mx-auto w-100"><span className="fw-bold">SDA: </span>Configura el pin GPIO 0 para ser utilizado como la línea de datos serial (SDA). Esta línea se usa para la transmisión de datos en la comunicación I2C.</p></li>
                                            <li><p className="text-break mx-auto w-100"><span className="fw-bold">SCL: </span>Configura el pin GPIO 1 para ser utilizado como la línea de reloj serial (SCL). Esta línea genera los pulsos de reloj necesarios para sincronizar la transmisión de datos.</p></li>
                                        </ul>
                                        <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class6Micropython/OLEDConect3.webp"></img>
                                        <p className="text-break mx-auto w-75">Debemos importar la libreria "machine" con las clases I2C y Pin y importar el módulo SSD1306 con la clase SSD1306_I2C</p>
                                        <CopyButton code={class5MCode[8]} />
                                        <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class6Micropython/OLEDConect4.webp"></img>
                                        <p className="text-break mx-auto w-75">Ahora debemos guardar en una variable la llamada a la clase i2C para hacer la conexión I2C</p>
                                        <ul className="text-break mx-auto w-75 list-unstyled">
                                            <li><p className="text-break mx-auto w-100"><span className="fw-bold">I2C() : </span>Llamada de la clase I2C del módulo machine</p></li>
                                            <li><p className="text-break mx-auto w-100"><span className="fw-bold">1° argumento (0) : </span>Especifica que se usará el controlador I2C GP0 del microcontrolador.</p></li>
                                            <li><p className="text-break mx-auto w-100"><span className="fw-bold">sda=Pin(0) : </span>Configura el pin GPIO 0 para ser utilizado como la línea de datos serial (SDA). Esta línea se usa para la transmisión de datos en la comunicación I2C.</p></li>
                                            <li><p className="text-break mx-auto w-100"><span className="fw-bold">scl=Pin(1) : </span>Configura el pin GPIO 1 para ser utilizado como la línea de reloj serial (SCL). Esta línea genera los pulsos de reloj necesarios para sincronizar la transmisión de datos.</p></li>
                                            <li><p className="text-break mx-auto w-100"><span className="fw-bold">freq=400000: </span>Establece la frecuencia de comunicación I2C a 400 kHz. Esta es una velocidad comúnmente utilizada para I2C y se conoce como "modo rápido" (Fast Mode).</p></li>
                                        </ul>
                                        <p className="text-break mx-auto w-75">También debemos guardar en una variable la llamada a la clase SSD1306 del módulo "SSD1306_I2C" para obtener toda la funcionalidad de la pantalla OLED.</p>
                                        <ul className="text-break mx-auto w-75 list-unstyled">
                                            <li><p className="text-break mx-auto w-100"><span className="fw-bold">SSD1306_I2C() : </span>Llamada de la clase SSD1306 del módulo SSD1306_I2C</p></li>
                                            <li><p className="text-break mx-auto w-100"><span className="fw-bold">128 : </span>Ancho de pixeles de la pantalla OLED.</p></li>
                                            <li><p className="text-break mx-auto w-100"><span className="fw-bold">64 : </span>Largo de pixeles de la pantalla OLED.</p></li>
                                            <li><p className="text-break mx-auto w-100"><span className="fw-bold">i2c : </span>Variable que contiene la comunicación I2C</p></li>
                                        </ul>
                                        <CopyButton code={class5MCode[9]} />
                                        <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class6Micropython/OLEDConect5.webp"></img>
                                        <h3 className="text-break w-75 mx-auto">Escribir texto en el inicio de la pantalla</h3>
                                        <p className="text-break mx-auto w-75">Para escribir en la pantalla OLED, debemos utilizar la variable que almacena la clase SSD1306(), en este caso es la variable "oled" y debemos agregarle el método .text()</p>
                                        <p className="text-break mx-auto w-75">Dentro del método text debemos utilizar los siguientes parámetros:</p>
                                        <ul className="text-break mx-auto w-75 list-unstyled">
                                            <li><p className="text-break mx-auto w-100"><span className="fw-bold">"Probando" :</span> Texto que va a imprimir en pantalla</p></li>
                                            <li><p className="text-break mx-auto w-100"><span className="fw-bold">0 :</span> Posición Horizontal.</p></li>
                                            <li><p className="text-break mx-auto w-100"><span className="fw-bold">0 :</span> Posición Vertical.</p></li>
                                        </ul>
                                        <p className="text-break mx-auto w-75">Luego de esto debemos llamar nuevamente la variable que contiene la clase SSD1306() y le asignamos el método .show(), este método va a impactar todo lo que habíamos indicado con el método .text()</p>
                                        <CopyButton code={class5MCode[10]} />
                                        <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class6Micropython/OLEDConect6.webp"></img>
                                        <h3 className="text-break w-75 mx-auto">Escribir texto debajo de la linea inicial(Posición Vertical)</h3>
                                        <p className="text-break mx-auto w-75">Para hacer esto debemos hacer lo mismo que hicimos anteriormente, solamente cambiamos el 2° parámetro del método text() de 0 a 10, cada 10 pixeles vamos a poder ir por lineas</p>
                                        <CopyButton code={class5MCode[11]} />
                                        <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class6Micropython/OLEDConect7.webp"></img>
                                        <h3 className="text-break w-75 mx-auto">Escribir texto debajo de la linea inicial y con sangría(Posición Horizontal)</h3>
                                        <p className="text-break mx-auto w-75">Para hacer esto debemos hacer lo mismo que hicimos anteriormente, solamente cambiamos el 2° parámetro del método text() de 0 a 10, cada 10 pixeles vamos a poder ir por lineas</p>
                                        <CopyButton code={class5MCode[12]} />
                                        <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class6Micropython/OLEDConect8.webp"></img>
                                        <h3 className="text-break w-75 mx-auto">Limpiar la pantalla y cambiar el texto.</h3>
                                        <p className="text-break mx-auto w-75">Para limpiar la pantalla debemos utilizar el método .fill(0) para limpiar la pantalla, luego de esto podemos utilizar nuevamente text() y show() para mostrar algo nuevo en pantalla </p>
                                        <CopyButton code={class5MCode[13]} />
                                        <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class6Micropython/OLEDConect9.webp"></img>
                                        <h3 className="text-break w-75 mx-auto">Dibujar con pixeles individuales</h3>
                                        <p className="text-break mx-auto w-75">Además de tener la posibilidad de escribir texto también podemos graficar de muchas maneras, en este caso podemos dibujar pixeles individuales con el método .pixel().</p>
                                        <p className="text-break mx-auto w-75">Dentro del método pixel debemos utilizar los siguientes parámetros:</p>
                                        <ul className="text-break mx-auto w-75 list-unstyled">
                                            <li><p className="text-break mx-auto w-100"><span className="fw-bold">1° parámetro :</span> Posición Horizontal</p></li>
                                            <li><p className="text-break mx-auto w-100"><span className="fw-bold">2° parámetro :</span> Posición Vertical</p></li>
                                            <li><p className="text-break mx-auto w-100"><span className="fw-bold">3° parámetro :</span> 0 (Pixel desactivado) -- 1 (Pixel activado)</p></li>
                                        </ul>
                                        <p className="text-break mx-auto w-75">Puedes verlo desde Wokwi -- <Link to="https://wokwi.com/projects/413758944477152257" target="_blank" className="text-info">Pantalla OLED Dibujo con Pixel</Link></p>
                                        <CopyButton code={class5MCode[14]} />
                                        <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class6Micropython/OLEDConect10.webp"></img>
                                        <h3 className="text-break w-75 mx-auto">Dibujar Lineas</h3>
                                        <p className="text-break mx-auto w-75">Con el mismo método text(), si utilizas un bucle for podes dibujar lineas pixel por pixel.</p>
                                        <p className="text-break mx-auto w-75">Puedes verlo desde Wokwi -- <Link to="https://wokwi.com/projects/413826471673622529" target="_blank" className="text-info">Pantalla OLED Dibujo con Pixel</Link></p>
                                        <CopyButton code={class5MCode[15]} />
                                        <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class6Micropython/OLEDConect11.webp"></img>
                                        <h3 className="text-break w-75 mx-auto">Dibujar un Rectángulo</h3>
                                        <p className="text-break mx-auto w-75">Dibujar un rectángulo en la pantalla OLED es posible usando un bucle para definir sus bordes.</p>
                                        <p className="text-break mx-auto w-75">También se puede usar oled.fill_rect() para crear un rectángulo sólido.</p>
                                        <p className="text-break mx-auto w-75">Puedes verlo desde Wokwi -- <Link to="https://wokwi.com/projects/413830169693719553" target="_blank" className="text-info">Pantalla OLED Dibujo con Pixel - Rectangulo</Link></p>
                                        <CopyButton code={class5MCode[16]} />
                                        <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class6Micropython/OLEDConect12.webp"></img>
                                        <h3 className="text-break w-75 mx-auto">Dibujar gráficos en tiempo real.</h3>
                                        <p className="text-break mx-auto w-75">Para realizar gráficos en tiempo real debemos hacer un refresco constante de nuestro gráfico, para esto debemos utilizar el método .scroll(-1, 0) para mover 1 pixel a la izquierda para x tiempo pero además utilizar fill_rect() con un valor 0 en el 4° parámetro para desactivar el pixel y Limpiar la columna siguiente.</p>
                                        <p className="text-break mx-auto w-75">En este caso voy a utilizar un potenciómetro para graficar en tiempo real el valor de mi potenciometro</p>
                                        <p className="text-break mx-auto w-75">Puedes verlo desde Wokwi -- <Link to="https://wokwi.com/projects/413831042287328257" target="_blank" className="text-info">Pantalla OLED Gráfico con Pixel - Potenciometro</Link></p>
                                        <CopyButton code={class5MCode[17]} />
                                        <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class6Micropython/OLEDConect13.webp"></img>
                                    </div>
                                </div>
                            </div>
                            <div id="element14" className={`accordion-item mt-4 rounded-5 animated-left ${elementVisibility.element14 ? 'slide-left' : ''}`} style={{ background: colorPrimaryMicropython, borderRadius: "40px" }} >
                                <Link to="/micropythonClassFile/class5.py"
                                    target={"_blank"}
                                    download={"class5.py"}>
                                    <button className="accordion-button collapsed bg-transparent" type="button">
                                        <h2 className="text-light">Descarga el archivo de la clase 5</h2>
                                    </button>
                                </Link>
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
                                    <h2>Uso de pantallas LCD y OLED.</h2>
                                    <h2>Generación de gráficos simples.</h2>
                                    <h2>Creación de interfaces de usuario básicas.</h2>
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

export default MicropythonClass5




