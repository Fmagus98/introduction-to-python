import React from 'react'
import { useLocation } from 'react-router-dom';
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
                                <h2 className="text-light">El mobiliario</h2>
                            </button>
                            <div id="a4" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                                    <p className="text break mx-auto mt-4 w-75">De nada sirve contar con un equipo ergonómicamente preparado, si luego trabajamos sobre una mesa en la que no nos caben las piernas, o nos sentamos en una silla sin respaldo. Las malas posturas representan, en general, el 75% de las lesiones: dolores de espalda, molestias cervicales, lumbalgias… El mobiliario del puesto de trabajo es, pues, fundamental para no dañar nuestra salud.</p>
                                    <h3 className="text-break mx-auto w-75 mt-4">La mesa</h3>
                                    <ul className="w-75 mx-auto">
                                        <li><p>Superficie de color claro y mate.</p></li>
                                        <li><p>Estable. Que soporte el peso del equipo y de cualquier persona que se apoye sobre alguno de sus bordes.</p></li>
                                        <li><p>De dimensiones suficientes como para permitir una colocación flexible de todo el material de trabajo. Se recomiendan unas medidas mínimas de 120 x 90 centímetros.</p></li>
                                        <li><p>Altura regulable. Esta condición no es imprescindible. En su defecto,la silla sí debe tenerla, o se debe usar un reposapies para aquellos que lo precisen. Si es regulable, la altura debe poder oscilar entre los 65 y 75 centímetros. Si no lo es, 75 centímetros es una buena medida.</p></li>
                                        <li><p>Espacio interior suficiente. Para evitar que las rodillas choquen o que no se puedan estirar un poco las piernas. 60 centímetros de ancho y 65-70 centímetros de profundidad son las medidas más aconsejables.</p></li>
                                    </ul>
                                    <h3 className="text-break mx-auto w-75 mt-4">La Silla</h3>
                                    <ul className="w-75 mx-auto">
                                        <li><p>Estable. Frente a las cuatro patas convencionales, son mejores las sillas con cinco apoyos y de ruedas antideslizantes, que eviten desplazamientos involuntarios. Éstas permiten mayor libertad de movimiento, evitando, a la vez, algunas posturas forzadas.</p></li>
                                        <li><p>Graduable en cuanto a altura. Los pies han de apoyarse en el suelo. En caso de personas bajas o niños es aconsejable utilizar un reposapies que, además, evita la comprensión de la circulación en los muslos.</p></li>
                                        <li><p>Respaldo regulable en altura, profundidad e inclinación. Con la forma de una S suave, cóncavo a nivel torácico y convexo a nivel lumbar, para que se adapte a la estructura de la espalda.</p></li>
                                        <li><p>Los reposabrazos no son imprescindibles. De tenerlos, su altura no debe obstaculizar la movilidad.</p></li>
                                        <li><p>La base del asiento ha de ser flexible pero firme. Con una distancia suficiente entre el borde del asiento y la cara posterior de la rodilla, para facilitar la circulación sanguínea.</p></li>
                                        <li><p>Los controles de ajuste deben ser accesibles desde la posición habitual de trabajo, sin que requieran demasiado esfuerzo para accionarlos.</p></li>
                                        <li><p>Es preferible una tapicería rugosa, que contribuya a mantener la postura escogida. Mejor si es transpirable.</p></li>
                                    </ul>
                                    <h3 className="text-break mx-auto w-75 mt-4">Iluminación, ruido y temperatura</h3>
                                    <ul className="w-75 mx-auto">
                                        <li><p>Una iluminación correcta aumenta la eficacia y la comodidad de su trabajo. En el apartado del monitor ya hemos hablado de la disposición de la computadora respecto a las fuentes de luz natural.</p></li>
                                        <li><p>Es preferible una iluminación tenue, que no provoque deslumbramientos o reflejos.</p></li>
                                        <li><p>Para los documentos, es recomendable utilizar un flexo destinado especialmente para ellos, manteniendo un nivel adecuado de iluminación general.</p></li>
                                        <li><p>Son preferibles las bombillas incandescentes normales a los tubos fluorescentes. Estos, por muy buenos que sean, suelen emitir cierto centelleo apenas perceptible, pero que provoca molestias.</p></li>
                                        <li><p>Combine la iluminación general e iluminación específica para la tarea, evitando luces intensas en su campo de visión.</p></li>
                                    </ul>
                                    <p className="text break mx-auto mt-4 w-75">El ruido es un contaminante ambiental que puede producir ansiedad, irritación… La maquinaria informática (impresoras, fax…) emite además sonidos agudos especialmente perturbadores.</p>
                                    <ul className="w-75 mx-auto">
                                        <li><p>Alejar lo máximo posible los focos de ruido.</p></li>
                                        <li><p>Usar encerramientos acústicos para las impresoras.</p></li>
                                    </ul>
                                    <p className="text break mx-auto mt-4 w-75">Un excesivo calor o frío produce incomodidad, pero también somnolencia o ansiedad e inquietud. La humedad relativa del aire puede provocar sequedad de las mucosas respiratorias y molestias.</p>
                                    <ul className="w-75 mx-auto">
                                        <li><p>Una temperatura ambiental entre 19º y 24ºC.</p></li>
                                        <li><p>Una humedad relativa entre el 40% y 70%.</p></li>
                                    </ul>
                                    <img className="w-50 d-block mx-auto mb-4 border-content bg-light" alt="" src="../img/healthAndProductivity/postura2.webp"></img>
                                </div>
                            </div>
                        </div>
                        <div id="element6" className={`mt-4 rounded-5 animated-left ${elementVisibility.element6 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
                            <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a5" aria-expanded="false" aria-controls="flush-collapseFive">
                                <h2 className="text-light">Postura corporal</h2>
                            </button>
                            <div id="a5" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                                    <p className="text break mx-auto mt-4 w-75">El diseño del puesto de trabajo debe permitir que se pueda adoptar la siguiente postura, que ha de tenerse en cuenta como referencia. Cualquier otra que no suponga un sobre esfuerzo es también válida.</p>
                                    <ul className="w-75 mx-auto">
                                        <li><p>Muslos horizontales y piernas verticales, formando un ángulo de 90º.</p></li>
                                        <li><p>Entre el ángulo que forma la rodilla y el borde de la silla debe haber, más o menos, una cuarta.</p></li>
                                        <li><p>Brazos verticales y antebrazos horizontales, formando un ángulo recto desde el codo.</p></li>
                                        <li><p>Antebrazo y mano en línea recta, paralelos al suelo.</p></li>
                                        <li><p>Los codos pueden tocar ligeramente el costado pero no los oprima contra su cuerpo.</p></li>
                                        <li><p>La muñecas en una posición natural y sin doblarlas excesivamente.</p></li>
                                        <li><p>Manos relajadas, sin extensión ni desviación lateral. Preocúpese especialmente de mantener los pulgares y los dedos en una postura relajada y natural.</p></li>
                                        <li><p>Columna vertebral recta. Sin torsión del tronco. La zona lumbar debe quedar cómodamente apoyada.</p></li>
                                        <li><p>Plantas de los pies apoyadas. Si la silla es demasiado alta para poder colocar los pies sobre el suelo, utilice un reposapiés.</p></li>
                                        <li><p>Línea de visión paralela a la superficie de trabajo.</p></li>
                                        <li><p>Ángulo de visión menor de 60º en el plano horizontal, y entre los cinco y los 35º en el vertical.</p></li>
                                        <li><p>Cuerpo no aprisionado entre la silla y la mesa.</p></li>
                                        <li><p>Adopte una postura relajada erguida. Evite inclinarse demasiado hacia adelante o hacia atrás.</p></li>
                                        <li><p>Coloque los materiales que utiliza con frecuencia al alcance de la mano.</p></li>
                                    </ul>
                                    <img className="w-50 d-block mx-auto mb-4 border-content bg-light" alt="" src="../img/healthAndProductivity/postura3.webp"></img>
                                </div>
                            </div>
                        </div>
                        <div id="element7" className={`mt-4 rounded-5 animated-left ${elementVisibility.element6 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
                            <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a6" aria-expanded="false" aria-controls="flush-collapseFive">
                                <h2 className="text-light">Cuidado de la vista</h2>
                            </button>
                            <div id="a6" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                                    <p className="text break mx-auto mt-4 w-75">Existe cierta discrepancia entre los expertos sobre si los trastornos oculares derivados de trabajar con ordenadores son sólo transitorios o se pueden convertir en patológicos. Lo que sí está demostrado es que, al trabajar con pantallas de forma prolongada y habitual, algunas deficiencias oculares sin importancia como ser irritación o fatiga , se pueden convertir en lesiones más o menos graves.</p>
                                    <ul className="w-75 mx-auto">
                                        <li><p>Por ello, la primera recomendación a la hora de trabajar con computadoras es someterse a una revisión oftalmológica. Algunas veces se llega a la consulta del especialista con un trastorno de visión que se atribuye al uso del ordenador, cuando lo que en realidad ocurre es que existía un problema de base sin tratar que se manifiesta tras muchas horas frente a la pantalla.</p></li>
                                        <li><p>Si sufre algún problema en la visión, es mejor utilizar lentes especialmente destinados al uso de la computadora. Consulte al oftalmólogo. Las gafas de sol reducen la capacidad de lectura.</p></li>
                                        <li><p>Efectúe pausas frecuentes y descanse la vista.</p></li>
                                        <li><p>Mantenga limpios sus lentes, sus lentes de contacto y la pantalla.</p></li>
                                        <li><p>Si utiliza un filtro de pantalla, límpielo siguiendo sus instrucciones.</p></li>
                                        <li><p>Lleve a cabo revisiones periódicas de la vista por parte de un especialista.</p></li>
                                        <li><p>Descansos de cinco minutos cada hora. Durante estas breves pausas hay que recrear la vista mirando escenas lejanas.</p></li>
                                        <li><p>Ejercicios oculares. Se puede simplemente cerrar los ojos con la ayuda de las palmas de las manos, pero sin presionar. Otro muy efectivo es, sentarse correctamente y mirar al frente. Después, sin mover la cabeza, desviar la mirada todo lo posible hacia la izquierda y luego a la derecha.</p></li>
                                    </ul>
                                    <img className="w-50 d-block mx-auto mb-4 border-content bg-light" alt="" src="../img/healthAndProductivity/ojos.webp"></img>
                                </div>
                            </div>
                        </div>
                        <div id="element8" className={`mt-4 rounded-5 animated-left ${elementVisibility.element6 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
                            <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a7" aria-expanded="false" aria-controls="flush-collapseFive">
                                <h2 className="text-light">Hábitos de trabajo y ejercicios saludables</h2>
                            </button>
                            <div id="a7" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                                    <p className="text break mx-auto mt-4 w-75">La colocación del mobiliario, los equipos de la oficina y la iluminación no son los únicos factores que determinan la forma de sentirse a lo largo de la jornada laboral. Sus hábitos de trabajo también son muy importantes.</p>
                                    <ul className="w-75 mx-auto">
                                        <li><p>Trabaje en una postura relajada y natural. Evite las posturas forzadas que pueden producir cansancio muscular.</p></li>
                                        <li><p>Examine sus hábitos de trabajo y los tipos de tarea que lleva a cabo. Interrumpa la rutina e intente variar las tareas a lo largo del día de forma que no trabaje en la misma posición ni realice las mismas actividades con sus manos durante varias horas.</p></li>
                                        <li><p>Es mejor hacer pausas cortas y frecuentes que pocas y prolongadas.</p></li>
                                        <li><p>En cualquier caso, no conviene pasar más de una hora sin moverse. Levántese y tómese algunos minutos para estirar los músculos.</p></li>
                                        <li><p>Ciertos ejercicios que mejoran la circulación se pueden hacer mientras se trabaja. Con los pies juntos, levantar primero los talones y luego las puntas, o mover en círculos los hombros delante y atrás, son algunos de ellos..</p></li>
                                        <li><p>Utilice la fuerza mínima necesaria para pulsar las teclas. Evite golpear las teclas ejerciendo una fuerza superior a la necesaria.</p></li>
                                        <li><p>Tome el ratón con la mano relajada. No lo sujete con fuerza. Utilice todo el brazo para moverlo.</p></li>
                                    </ul>
                                    <img className="w-50 d-block mx-auto mb-4 border-content bg-light" alt="" src="../img/healthAndProductivity/flexion-silla.webp"></img>
                                    <p className="text break mx-auto mt-4 w-75">La comodidad y la seguridad al trabajar en su computadora puede verse afectada por su estado general de salud. Las personas tienen distintos niveles de tolerancia física frente al trabajo intenso durante períodos prolongados. Supervise sus niveles personales de tolerancia y evite sobrepasarlos de forma regular.</p>
                                    <p className="text break mx-auto mt-4 w-75">La salud general y la tolerancia frente a las condiciones del trabajo se pueden mejorar mediante una prevención adecuada, haciéndose chequeos periódicos de salud y practicando ejercicio regularmente.</p>
                                    <img className="w-50 d-block mx-auto mb-4 border-content bg-light" alt="" src="../img/healthAndProductivity/flexion-silla2.webp"></img>
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