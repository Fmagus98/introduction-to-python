import React from 'react'
import { useLocation, Link } from 'react-router-dom';
import { colorPrimaryPython, colorSecondaryMicropython } from '../../colors'
import useScrollAnimation from '../../useScrollAnimation'

const HealthAndProductivity = () => {

    const elementVisibility = useScrollAnimation()
    const location = useLocation()
    const title = location.pathname.includes("micropython") ? "micropython" : "python"
    const colorSecondary = location.pathname.includes("micropython") ? colorSecondaryMicropython : null

    return (
        <>
            <section id="hero" style={{ background: location.pathname.includes("micropython") ? "#B34229" : colorPrimaryPython }} >
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
                            <div>
                                <h1>Salud y productividad</h1>
                                <h2>Descubre cómo estiramientos simples y cuidados visuales pueden potenciar tu bienestar y eficiencia en el desarrollo de software</h2>
                                <div className="text-center text-lg-start">
                                    <a href="#clase1" style={{ backgroundColor: colorSecondary }} className="btn-get-started scrollto">Ver Contenido</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 order-1 order-lg-2 hero-img" >
                            <img src={`../img/${title}.png`} className="img-fluid animated vh-60" alt="" />
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
                    <div id="element1" className={`section-title animated-down ${elementVisibility.element1 ? 'slide-down' : ''}`} >
                        <h2>Proyectos</h2>
                        <p>Contenido</p>
                    </div>
                    <div className="accordion accordion-flush w-100 mx-auto rounded-5" id="accordionFlushExample">
                        <div id="element2" className={`rounded-5 animated-left ${elementVisibility.element2 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }} >
                            <button className="accordion-button collapsed bg-transparent text-light" type="button" data-bs-toggle="collapse" data-bs-target="#a1" aria-expanded="false" aria-controls="flush-collapseOne">
                                <h2>¿Que es esta sección?</h2>
                            </button>
                            <div id="a1" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                                    <p className="text break mx-auto mt-4 w-75">En esta sección exploraremos una serie de prácticas diseñadas para mejorar el bienestar físico y mental de aquellos que pasan largas horas frente a una computadora. Ser un programador puede ser gratificante, pero también puede traer consigo desafíos como la tensión muscular, fatiga visual y estrés mental.</p>
                                    <p className="text break mx-auto mt-4 w-75">Aprenderemos una variedad de técnicas, desde estiramientos simples hasta consejos ergonómicos y estrategias para mejorar la concentración y el rendimiento. Estas prácticas no solo pueden aliviar las molestias físicas comunes asociadas con el trabajo de programación, sino que también pueden aumentar la eficiencia y la creatividad.</p>
                                    <h3 className="text-break mx-auto w-75 mt-4">Problemas al no realizar estiramientos:</h3>
                                    <ul className="w-75 mx-auto">
                                        <li><p><span className="fw-bold">Hombros y Cuello: </span>La falta de estiramiento puede llevar a la acumulación de tensión en los hombros y el cuello, causando dolor y rigidez.</p></li>
                                        <li><p><span className="fw-bold">Brazos y Antebrazos: </span>La falta de movimiento puede llevar a la rigidez en los músculos de los brazos y los antebrazos, especialmente si estás utilizando el teclado y el ratón durante mucho tiempo.</p></li>
                                        <li><p><span className="fw-bold">Síndrome del Túnel Carpiano: </span>La tensión repetitiva en las muñecas y los antebrazos debido a una postura incorrecta y la falta de estiramiento puede aumentar el riesgo de desarrollar el síndrome del túnel carpiano, que causa entumecimiento, dolor y debilidad en la mano y la muñeca.</p></li>
                                        <li><p><span className="fw-bold">Postura Encorvada y Dolor de Espalda: </span>Sentarse durante largos períodos sin estirarse puede llevar a una postura encorvada, lo que a su vez puede causar dolor de espalda y problemas de columna a largo plazo.</p><p>Los músculos de la espalda pueden volverse débiles y rígidos si no se estiran regularmente.</p></li>
                                        <li><p><span className="fw-bold">Fatiga y Disminución de la Productividad: </span>La tensión y el dolor muscular pueden causar fatiga, lo que puede afectar tu concentración y productividad.</p><p>Cuando los músculos están tensos, es más difícil mantenerse enfocado en el trabajo y puede llevar a un mayor estrés y agotamiento.</p></li>
                                        <li><p><span className="fw-bold">Lesiones por Esfuerzo Repetitivo (RSI): </span>La repetición de movimientos sin descanso ni estiramiento puede aumentar el riesgo de lesiones por esfuerzo repetitivo, como tendinitis y bursitis.</p></li>
                                        <li><p><span className="fw-bold">Circulación Deficiente: </span>Estar sentado en una posición estática durante mucho tiempo puede afectar la circulación sanguínea en los brazos y las manos, lo que puede causar entumecimiento y sensación de frío.</p></li>
                                        <li><p><span className="fw-bold">Dolor de Cabeza: </span>La tensión en los hombros y el cuello puede contribuir a dolores de cabeza tensionales, lo que puede dificultar aún más tu enfoque en el trabajo.</p></li>
                                    </ul>
                                    <p className="text break mx-auto mt-4 w-75">Es esencial recordar que la salud física y mental juega un papel crucial en nuestra capacidad para desempeñarnos de manera óptima en cualquier tarea, y la programación no es una excepción. Por lo tanto, ¡comencemos este viaje hacia una vida más saludable y productiva para los programadores!</p>
                                </div>
                            </div>
                        </div>
                        <div id="element3" className={`mt-4 rounded-5 animated-left ${elementVisibility.element3 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
                            <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a2" aria-expanded="false" aria-controls="flush-collapseThree">
                                <h2 className="text-light">Estiramientos</h2>
                            </button>
                            <div id="a2" className="accordion-collapse collapse bg-dark" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                                    <h3 className="text-break mx-auto w-75 mt-4">Estiramiento de bíceps braquial</h3>
                                    <p className="text break mx-auto mt-4 w-75">El estiramiento  tanto del pectoral y bíceps como de toda la cadena anterior del brazo son importantísimos ya que tienden a estar acortados y por su continuo trabajo y su función principal en las funciones hegemónicas  del ser humano. En la realización de este estiramiento, realizaremos una extensión de hombro manteniendo una pronación del antebrazo, llevando la palma de la mano hacia arriba y evitando una excesiva antepulsión del hombro (movimiento del hombro hacia delante).</p>
                                    <img className="w-25 d-block mx-auto mb-4 border-content bg-light" alt="" src="../img/healthAndProductivity/brazo1.webp"></img>
                                    <h3 className="text-break mx-auto w-75 mt-4">Estiramiento del músculo tríceps del brazo</h3>
                                    <p className="text break mx-auto mt-4 w-75">El músculo tríceps braquial, es un importante extensor del codo y del hombro, es por tanto un músculo biarticular con importantes funciones. No es un músculo que tienda excesivamente al acortamiento pero si puede estar expuesto a patología y la presencia de puntos gatillo activos. Para estirar este músculo es muy importante fijar primero la escápula y posteriormente llevar el hombro a flexión con flexión de codo.</p>
                                    <img className="w-25 d-block mx-auto mb-4 border-content bg-light" alt="" src="../img/healthAndProductivity/brazo2.webp"></img>
                                    <h3 className="text-break mx-auto w-75 mt-4">Estiramiento global de hombro y brazos</h3>
                                    <p className="text break mx-auto mt-4 w-75">Este no es un estiramiento muy especifico, pero puede servir para quitar tensión en diferentes músculos, flexores del hombro, y además incentiva la extensión de la columna dorsal, muy importante en las últimos grados de flexión de hombro.</p>
                                    <img className="w-25 d-block mx-auto mb-4 border-content bg-light" alt="" src="../img/healthAndProductivity/brazo3.webp"></img>
                                    <h3 className="text-break mx-auto w-75 mt-4">Estiramiento de la cadena fisiológica anterior del brazo, pectoral y bíceps</h3>
                                    <p className="text break mx-auto mt-4 w-75">El estiramiento  tanto del pectoral y bíceps como de toda la cadena anterior del brazo son importantísimos ya que tienden a estar acortados y por su continuo trabajo y su función principal en las funciones hegemónicas  del ser humano. Te mostramos en este vídeo una útil y sencilla manera de estirar correctamente toda la cadena fisiológica.</p>
                                    <img className="w-25 d-block mx-auto mb-4 border-content bg-light" alt="" src="../img/healthAndProductivity/brazo4.webp"></img>
                                    <h3 className="text-break mx-auto w-75 mt-4">Estiramiento del músculos dorsales y romboides</h3>
                                    <p className="text break mx-auto mt-4 w-75">Te mostramos una útil manera de estirar estos músculos de la zona dorsal de la espalda, estos finos músculos, serrato y romboides, son esenciales para mantener la correcta posición de la cintura escapular y en consecuencia de todo el miembro superior. Un mal estado de estos músculos puede fácilmente activar puntos gatillo que provoquen dolores dorsales, un correcto estiramiento de estas zonas puede ser muy útil para evitar y/o mejorar todos estos problemas.</p>
                                    <img className="w-25 d-block mx-auto mb-4 border-content bg-light" alt="" src="../img/healthAndProductivity/brazo5.webp"></img>
                                    <h3 className="text-break mx-auto w-75 mt-4">Estiramiento del músculo dorsal ancho</h3>
                                    <p className="text break mx-auto mt-4 w-75">El estiramiento del dorsal ancho es muy importante para la el buen funcionamiento  de la espalda y el hombro, con este estiramiento mejoraras la movilidad del hombro y puede ayudarte a mejorar el control motor del mismo.</p>
                                    <img className="w-25 d-block mx-auto mb-4 border-content bg-light" alt="" src="../img/healthAndProductivity/brazo6-1.webp"></img>
                                    <img className="w-25 d-block mx-auto mb-4 border-content bg-light" alt="" src="../img/healthAndProductivity/brazo6-2.webp"></img>
                                    <h3 className="text-break mx-auto w-75 mt-4">Inclinación lateral</h3>
                                    <ul className="w-75 mx-auto">
                                        <li><p><span className="fw-bold">1_ </span> Manteniendo la espalda recta, inclina la cabeza hacia un lado, tratando de tocar el oído con el hombro.</p></li>
                                        <li><p><span className="fw-bold">2_ </span> Mantén la posición por 15-30 segundos y siente el estiramiento en el lado opuesto del cuello.</p></li>
                                        <li><p><span className="fw-bold">3_ </span> Regresa a la posición inicial y repite del otro lado.</p></li>
                                        <li><p><span className="fw-bold">4_ </span> Repite 3 veces en cada lado..</p></li>
                                    </ul>
                                    <img className="w-25 d-block mx-auto mb-4 border-content bg-light" alt="" src="../img/healthAndProductivity/cuello1.webp"></img>
                                    <h3 className="text-break mx-auto w-75 mt-4">Estiramiento de Rotación del Cuello con Presión</h3>
                                    <ul className="w-75 mx-auto">
                                        <li><p><span className="fw-bold">1_ </span> Siéntate o párate con la espalda recta.</p></li>
                                        <li><p><span className="fw-bold">2_ </span> Coloca una mano detrás de la cabeza, con los dedos entrelazados y el codo apuntando hacia afuera.</p></li>
                                        <li><p><span className="fw-bold">3_ </span> Coloca la otra mano en la mandíbula del mismo lado, con los dedos apuntando hacia abajo.</p></li>
                                        <li><p><span className="fw-bold">4_ </span> Lentamente, presiona la mano que está en la mandíbula hacia abajo y hacia el hombro del mismo lado.</p></li>
                                    </ul>
                                    <img className="w-25 d-block mx-auto mb-4 border-content bg-light" alt="" src="../img/healthAndProductivity/cuello2.webp"></img>
                                    <h3 className="text-break mx-auto w-75 mt-4">Estiramiento de Rotación del Cuello</h3>
                                    <ul className="w-75 mx-auto">
                                        <li><p><span className="fw-bold">1_ </span> Siéntate o párate con la espalda recta.</p></li>
                                        <li><p><span className="fw-bold">2_ </span> Coloca la mano de la dirección donde se inclina el cuello detrás de la cabeza y presiona suavemente hacia la dirección donde gira el cuello.</p></li>
                                    </ul>
                                    <img className="w-25 d-block mx-auto mb-4 border-content bg-light" alt="" src="../img/healthAndProductivity/cuello3.webp"></img>
                                </div>
                            </div>
                        </div>
                        <div id="element4" className={`mt-4 rounded-5 animated-left ${elementVisibility.element4 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
                            <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a3" aria-expanded="false" aria-controls="flush-collapseThree">
                                <h2 className="text-light">Equipo</h2>
                            </button>
                            <div id="a3" className="accordion-collapse collapse bg-dark" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                                    <h3 className="text-break mx-auto w-75 mt-4">Monitor</h3>
                                    <ul className="w-75 mx-auto">
                                        <li><p>Trabaje con monitores que lleven un tratamiento antirreflejo o incorporen un filtro especial. Los monitores reflejan en su mayoria la luz que le llega. Estos destellos son molestos para el ojo, porque reducen la legibilidad y obligan a una constante acomodación de la visión. Hay que tener un especial cuidado en que el filtro no oscurezca demasiado el monitor.</p></li>
                                        <li><p>Regule el brillo y contraste para adaptarlos a las condiciones del entorno.</p></li>
                                        <li><p>Procure que la pantalla esté siempre limpia. Las huellas y demás suciedades también provocan reflejos.</p></li>
                                        <li><p>Coloque el monitor en la posición correcta y ajuste su ángulo de visualización. Sitúe la pantalla a una distancia entre 50 y 60 centímetros. Nunca a menos de 40 centímetros.</p></li>
                                    </ul>
                                    <p className="text break mx-auto mt-4 w-75">La parte superior de la pantalla debe estar a una altura similar a la de los ojos, o ligeramente más baja. Lo más recomendable es inclinarlo ligeramente hacia atrás. El monitor se sitúa así en la zona óptima de visión, comprendida entre los 5 y los 35 grados por debajo de la horizontal visual, y desde la cual se contempla todo sin ningún esfuerzo.</p>
                                    <p className="text break mx-auto mt-4 w-75">De esta forma, la vista no se resiente y se evitan posturas lesivas. La pantalla ha de colocarse perpendicular a las ventanas. Nunca enfrente o de espaldas a ellas. En el primer caso, al levantar la vista, se pueden producir deslumbramientos.</p>
                                    <ul className="w-75 mx-auto">
                                        <li><p>Los caracteres tienen que estar bien definidos, con un buen nivel de contraste con respecto al fondo, de tamaño suficiente y con un espacio adecuado entre los renglones. Esto facilita la legibilidad. Es preferible trabajar con estas características y modificarlas, si se desea, en el momento de la impresión.</p></li>
                                        <li><p>Trabaje con texto negro sobre fondo blanco. Se debe procurar no abusar de los colores.</p></li>
                                        <li><p>También es conveniente usar un atril para los documentos. Colocándolo a una distancia equivalente a la pantalla, a su misma altura, y junto a ella. De esta forma no se baja y se sube constantemente la cabeza para mirar y se reduce la fatiga visual. Ubicación:</p></li>
                                    </ul>
                                    <h3 className="text-break mx-auto w-75 mt-4">El Teclado</h3>
                                    <p className="text break mx-auto mt-4 w-75">Al manipular un teclado, las manos adoptan una posición forzada, hacia afuera, y quienes deben digitar muchas horas al día pueden tener problemas en sus manos y articulaciones.  Cada vez existen en el mercado más componentes que corrigen esto, como los teclados ergonómicos o los reposa muñecas.</p>
                                    <ul className="w-75 mx-auto">
                                        <li><p>Tanto unos como otros permiten un acceso a las teclas en línea recta con respecto al antebrazo, por lo que la postura que se adopta es más natural. El teclado ergonómico ofrece además otras ventajas: apertura de las partes acomodándolo al mejor ángulo de trabajo, teclas situadas donde los dedos tienen una posición de descanso. Son más caros que los normales pero, si se pasan muchas horas ante la computadora, merecen la pena.</p></li>
                                        <li><p>Regulable en cuanto a inclinación. En un intervalo de 10 a 15 grados, con el fin de evitar movimientos forzados de las articulaciones, que pueden derivar en lesiones. Se recomienda que la línea media del teclado (tercera fila), no se levante más de 3 cm. de la superficie de trabajo. Estable durante su uso. Que no se deslice sobre la superficie en la que reposa. Suave en su manipulación. Que no requiera ejercer una presión grande sobre las teclas que se pulsan.</p></li>
                                        <li><p>Que no provoque ningún ruido. Sin embargo, al accionarse debe dar una señal táctil, acústica o visual.</p></li>
                                        <li><p>Con el espacio necesario delante para poder apoyar cómodamente brazos y manos, a fin de reducir la fatiga en los brazos y la tensión en la espalda. Situado dentro del llamado espacio asequible, que comienza a partir del borde de la mesa. Así se evitan posturas forzadas, como trabajar con los brazos estirados.</p></li>
                                        <li><p>Es recomendable situarlo justo debajo del monitor. Cuando se encuentra en superficies laterales con respecto a él, obliga a girar la cabeza a derecha o izquierda (según esté la pantalla).</p></li>
                                        <li><p>Para los dolores de muñecas y dedos un buen ejercicio es lavarse las manos con agua fría a menudo. Esto mejora la circulación, alivia las molestias y previene inflamaciones</p></li>
                                    </ul>
                                    <h3 className="text-break mx-auto w-75 mt-4">El Ratón</h3>
                                    <p className="text break mx-auto mt-4 w-75">El ratón es uno de los periféricos más usados, sustituyendo al teclado en muchas tareas. Tendinitis (Ver artículo) es el trastorno más frecuente derivado de su uso. Como con los teclados, en el mercado también existen ratones ergonómicos de gran calidad, con una manejabilidad cómoda y fácil.</p>
                                    <ul className="w-75 mx-auto">
                                        <li><p>Su configuración debe adaptarse a la curva de la mano.</p></li>
                                        <li><p>Tiene que permitir que se puedan descansar los dedos y la mano sobre él sin que se active inesperadamente.</p></li>
                                        <li><p>Que no necesite mucha fuerza para accionarse.</p></li>
                                        <li><p>Fácilmente deslizable. Se pueden utilizar también alfombrillas. Éstas deben facilitar el movimiento del ratón y no entorpecerlo.</p></li>
                                        <li><p>Su manejo ha de ser posible para diestros y zurdos.</p></li>
                                    </ul>
                                    <img className="w-50 d-block mx-auto mb-4 border-content bg-light" alt="" src="../img/healthAndProductivity/postura.webp"></img>
                                </div>
                            </div>
                        </div>
                        <div id="element5" className={`mt-4 rounded-5 animated-left ${elementVisibility.element5 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
                            <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a4" aria-expanded="false" aria-controls="flush-collapseFour">
                                <h2 className="text-light">Buscador de celulares - Mercadolibre (web scraping)</h2>
                            </button>
                            <div id="a4" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                                    <h3 className="text-break mx-auto w-75 mt-4">Descripción</h3>
                                    <p className="text break mx-auto mt-4 w-75">Este programa permite al usuario buscar productos en MercadoLibre ingresando el nombre del producto y seleccionando un criterio de filtrado de precios (de menor a mayor, de mayor a menor, o sin filtrar). Luego, muestra los resultados de la búsqueda ordenados según el criterio elegido.</p>
                                    <h3 className="text-break mx-auto w-75 mt-4">Pasos Clave del proyecto</h3>
                                    <ul className="w-75 mx-auto">
                                        <li><p><span className="fw-bold">Solicitud de entrada del usuario: </span> El usuario proporciona el nombre del producto que desea buscar y selecciona un criterio de filtrado de precios.</p></li>
                                        <li><p><span className="fw-bold">Construcción de la URL de búsqueda:</span> Se construye la URL de búsqueda utilizando el nombre del producto y el criterio de filtrado seleccionado.</p></li>
                                        <li><p><span className="fw-bold">Realización de la solicitud GET:</span> Se realiza una solicitud GET a la URL de búsqueda utilizando la biblioteca Requests.</p></li>
                                        <li><p><span className="fw-bold">Análisis del contenido HTML:</span> Se analiza el contenido HTML de la página utilizando BeautifulSoup.</p></li>
                                        <li><p><span className="fw-bold">Extracción de información:</span> Se extraen los nombres y precios de los productos de los elementos HTML analizados.</p></li>
                                        <li><p><span className="fw-bold">Ordenamiento de los resultados:</span> Los resultados se ordenan según el criterio seleccionado por el usuario.</p></li>
                                        <li><p><span className="fw-bold">Impresión de los resultados:</span> Se imprimen los nombres, precios y enlaces de los productos encontrados.</p></li>
                                    </ul>
                                    <h3 className="text-break mx-auto w-75 mt-4">Librerias</h3>
                                    <ul className="w-75 mx-auto">
                                        <li><p><span className="fw-bold">Requests:</span> Para realizar solicitudes HTTP.</p></li>
                                        <li><p><span className="fw-bold">BeautifulSoup:</span> Para analizar el contenido HTML de la página web y extraer información de ella.</p></li>
                                    </ul>
                                    <h3 className="text-break mx-auto w-75 mt-4">Instalación</h3>
                                    <p className="text-break mx-auto w-75"><span className="fw-bold">1_  </span> Descargá el archivo index.py desde este link -- <Link to="https://drive.google.com/drive/u/0/folders/1SHu1PgjdhmdTZUvsf2U0FF9yF9-yEZg6" target='_blank' className="text-primary">Web scraping</Link>.</p>
                                    <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/projects/web_scraping.webp"></img>
                                    <p className="text-break mx-auto w-75"><span className="fw-bold">2_ </span> Después de abrir el archivo desde Visual Studio Code, abre la terminal desde "Terminal/New terminal.</p>
                                    <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/projects/web_scraping2.webp"></img>
                                    <p className="text-break mx-auto w-75"><span className="fw-bold">3_ </span> Dentro de la terminal escribe: pip install request, esto instalará la libreria request.</p>
                                    <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/projects/web_scraping3.webp"></img>
                                    <p className="text-break mx-auto w-75"><span className="fw-bold">4_ </span> Luego de instalar request, escribe en la terminal: pip install beautifulsoup, esto instalará la libreria beautifulsoup</p>
                                    <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/projects/web_scraping4.webp"></img>
                                    <p className="text-break mx-auto w-75"><span className="fw-bold">5_ </span> Dentro de la terminal escribe: python index.py, esto ejecutará el programa.</p>
                                    <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/projects/web_scraping5.webp"></img>
                                    <h3 className="text-break mx-auto w-75 mt-4">Ejemplo de uso</h3>
                                    <ul className="w-75 mx-auto">
                                        <li><p>Escribe el nombre del producto que quieras buscar.</p></li>
                                        <li><p>Escribe un número de las opciones para ordenar los precios del producto.</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id="element6" className={`mt-4 rounded-5 animated-left ${elementVisibility.element6 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
                            <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a5" aria-expanded="false" aria-controls="flush-collapseFive">
                                <h2 className="text-light">Detección de dedos</h2>
                            </button>
                            <div id="a5" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                                    <h3 className="text-break mx-auto w-75 mt-4">Descripción</h3>
                                    <p className="text break mx-auto mt-4 w-75">Este programa reconoce y cuenta los dedos de una mano en tiempo real, se utilza la libreria mediapipe y openCv.</p>
                                    <h3 className="text-break mx-auto w-75 mt-4">Pasos Clave del proyecto</h3>
                                    <ul className="w-75 mx-auto">
                                        <li><p><span className="fw-bold">Cálculo de distancias de dedos: </span> la función palm_centroid calcula el centroide de la palma de la mano.</p></li>
                                        <li><p><span className="fw-bold">Captura de video: </span> Se utiliza la función cv2.VideoCapture().</p></li>
                                        <li><p><span className="fw-bold">Conteo de dedos: </span> Contar y visualizar los dedos levantados en el frame.</p></li>
                                        <li><p><span className="fw-bold">Procesar cada fotograma del video: </span> Se procesa cada fotograma del video para detectar la posición de la mano y realizar acciones en función de los gestos detectados.</p></li>
                                        <li><p><span className="fw-bold">Área de interacción: </span> Se dibuja un área de interacción en la pantalla del video.</p></li>
                                        <li><p><span className="fw-bold">Realizar acciones del mouse: </span> Se mueve el cursor del mouse y se simulan clics y desplazamientos de la rueda del mouse utilizando PyAutoGUI.</p></li>
                                    </ul>
                                    <h3 className="text-break mx-auto w-75 mt-4">Librerias</h3>
                                    <ul className="w-75 mx-auto">
                                        <li><p><span className="fw-bold">OpenCV (cv2):</span> Para la captura de video, procesamiento de imágenes y visualización.</p></li>
                                        <li><p><span className="fw-bold">MediaPipe (mediapipe):</span> Para la detección de manos y el seguimiento de puntos de referencia en la mano.</p></li>
                                        <li><p><span className="fw-bold">NumPy (np):</span> Para realizar operaciones numéricas, como cálculos de distancia.</p></li>
                                        <li><p><span className="fw-bold">math:</span> Para realizar operaciones matemáticas, como el cálculo de ángulos.</p></li>
                                    </ul>
                                    <h3 className="text-break mx-auto w-75 mt-4">Instalación</h3>
                                    <p className="text-break mx-auto w-75"><span className="fw-bold">1_  </span> Descargá la carpeta "Detección de dedos" desde este link -- <Link to="https://drive.google.com/drive/u/0/folders/1_bCxbxQRA9Nq2q3u-LGSrdW2NOavmCOg" target='_blank' className="text-primary">Detección de dedos</Link>.</p>
                                    <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/projects/fingerscan.webp"></img>
                                    <p className="text-break mx-auto w-75"><span className="fw-bold">2_ </span> Después de abrir el archivo desde Visual Studio Code, abre la terminal desde "Terminal/New terminal.</p>
                                    <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/projects/fingerscan2.webp"></img>
                                    <p className="text-break mx-auto w-75"><span className="fw-bold">3_ </span> Dentro de la terminal escribe: pip install virtualenv, esto instalará la libreria virtualenv, es la encargada de realizar el entorno virtual.</p>
                                    <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/projects/fingerscan3.webp"></img>
                                    <p className="text-break mx-auto w-75"><span className="fw-bold">4_ </span> Luego de instalar el entorno virtual, escribe en la terminal: fingerScan\Scripts\activate, esto hará que el entorno virtual este activo.</p>
                                    <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/projects/fingerscan4.webp"></img>
                                    <p className="text-break mx-auto w-75"><span className="fw-bold">5_ </span> Dentro de la terminal escribe: python scan.py, esto ejecutará el programa. En caso de no ejecutarse, debes instalar la version de python 3.8.3.0 y realizar de nuevo de proceso.</p>
                                    <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/projects/fingerscan5.webp"></img>
                                </div>
                            </div>
                        </div>
                        <div id="element7" className={`mt-4 rounded-5 animated-left ${elementVisibility.element6 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
                            <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a6" aria-expanded="false" aria-controls="flush-collapseFive">
                                <h2 className="text-light">Virtual mouse</h2>
                            </button>
                            <div id="a6" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                                    <h3 className="text-break mx-auto w-75 mt-4">Descripción</h3>
                                    <p className="text break mx-auto mt-4 w-75">Este programa utiliza la biblioteca OpenCV (cv2), MediaPipe (mediapipe), NumPy (np), PyAutoGUI (pyautogui) y time para detectar la posición de la mano y simular movimientos del mouse en función de los gestos de la mano detectados.</p>
                                    <h3 className="text-break mx-auto w-75 mt-4">Pasos Clave del proyecto</h3>
                                    <ul className="w-75 mx-auto">
                                        <li><p><span className="fw-bold">Ejecución del entorno virtual: </span> Este entorno vitual contiene la versión de python 3.8 y las librerias necesarias para ejecutarlo(carpeta "virtualmouse").</p></li>
                                        <li><p><span className="fw-bold">Detección de manos: </span> Se configura el modelo de detección de manos utilizando la clase Hands de MediaPipe.</p></li>
                                        <li><p><span className="fw-bold">Capturar el video de la cámara: </span> Se captura el video de la cámara utilizando OpenCV.</p></li>
                                        <li><p><span className="fw-bold">Procesar cada fotograma del video: </span> Se procesa cada fotograma del video para detectar la posición de la mano y realizar acciones en función de los gestos detectados.</p></li>
                                        <li><p><span className="fw-bold">Área de interacción: </span> Se dibuja un área de interacción en la pantalla del video.</p></li>
                                        <li><p><span className="fw-bold">Realizar acciones del mouse: </span> Se mueve el cursor del mouse y se simulan clics y desplazamientos de la rueda del mouse utilizando PyAutoGUI.</p></li>
                                    </ul>
                                    <h3 className="text-break mx-auto w-75 mt-4">Librerias</h3>
                                    <ul className="w-75 mx-auto">
                                        <li><p><span className="fw-bold">OpenCV (cv2):</span> Para la captura de video, procesamiento de imágenes y visualización.</p></li>
                                        <li><p><span className="fw-bold">MediaPipe (mediapipe):</span> Para la detección de manos y el seguimiento de puntos de referencia en la mano.</p></li>
                                        <li><p><span className="fw-bold">NumPy (np):</span> Para realizar operaciones numéricas, como cálculos de distancia.</p></li>
                                        <li><p><span className="fw-bold">PyAutoGUI (pyautogui):</span> Para controlar el cursor del mouse y simular acciones del mouse, como clics y desplazamientos de la rueda del mouse.</p></li>
                                        <li><p><span className="fw-bold">Time:</span> Para realizar pausas o esperas en el script.</p></li>
                                    </ul>
                                    <h3 className="text-break mx-auto w-75 mt-4">Instalación</h3>
                                    <p className="text-break mx-auto w-75"><span className="fw-bold">1_  </span> Descargá la carpeta "mouse" desde este link -- <Link to="https://drive.google.com/drive/u/0/folders/1q-lgvOBQV-xjJQ_tX2uzgnIP2BaJF1MB" target='_blank' className="text-primary">Virtual Mouse</Link>.</p>
                                    <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/projects/virtualmouse.webp"></img>
                                    <p className="text-break mx-auto w-75"><span className="fw-bold">2_ </span> Después de abrir el archivo desde Visual Studio Code, abre la terminal desde "Terminal/New terminal.</p>
                                    <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/projects/virtualmouse2.webp"></img>
                                    <p className="text-break mx-auto w-75"><span className="fw-bold">3_ </span> Dentro de la terminal escribe: pip install virtualenv, esto instalará la libreria virtualenv, es la encargada de realizar el entorno virtual.</p>
                                    <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/projects/virtualmouse3.webp"></img>
                                    <p className="text-break mx-auto w-75"><span className="fw-bold">4_ </span> Luego de instalar el entorno virtual, escribe en la terminal: virtualmouse\Scripts\activate, esto hará que el entorno virtual este activo.</p>
                                    <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/projects/virtualmouse4.webp"></img>
                                    <p className="text-break mx-auto w-75"><span className="fw-bold">5_ </span> Dentro de la terminal escribe: python mouse_control_game.py, esto ejecutará el programa. En caso de no ejecutarse, debes instalar la version de python 3.8.3.0 y realizar de nuevo de proceso.</p>
                                    <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/projects/virtualmouse5.webp"></img>
                                    <h3 className="text-break mx-auto w-75 mt-4">Instrucciones</h3>
                                    <ul className="w-75 mx-auto">
                                        <li><p>Si tu dedo pulgar lo acercas a la palma de la mano, la rueda del mouse se moverá.</p></li>
                                        <li><p>Si tu dedo indice lo acercas a la palma de la mano, hará click izquierda del mouse.</p></li>
                                        <li><p>Si tu dedo medio lo acercas a la palma de la mano, hará click derecho del mouse.</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HealthAndProductivity