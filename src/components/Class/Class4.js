import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { db } from '../../Utils/firebase'
import { collection, getDocs } from 'firebase/firestore'
import { colorPrimaryPython } from '../../colors'
import useScrollAnimation from '../../useScrollAnimation'

const Class4 = () => {

  const elementVisibility = useScrollAnimation();
  const [date, setDate] = useState()
  const newDate = new Date()
  useEffect(() => {
    getDocs(collection(db, "course")).then(response => {
      response.docs.map(doc => {
        if (doc.id === "atVa7k6EyWDn7tZV7v1b") {
          return setDate(doc.data().date.toDate())
        }
        return null
      })
    })
  }, [])

  return (
    <>
      {(new Date(date) <= newDate) || localStorage.getItem("access") ?
        <>
          <section id="hero" style={{ background: colorPrimaryPython }}>
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
                  <div>
                    <h1>Clase 4: Funciones y módulos</h1>
                    <h2>Definicion y llamada de funciones</h2>
                    <h2>Paso de parámetros a funciones</h2>
                    <h2>Creación y uso de módulos</h2>
                    <div className="text-break text-lg-start">
                      <a href="#clase4" className="btn-get-started scrollto">Contenido de la clase 4</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 order-1 order-lg-2 hero-img" >
                  <img src="../img/python.png" className="img-fluid animated vh-60" alt="" />
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
          <section id="faq" className="faq section-bg">
            <div className="container">
              <div id="element1" className={`section-title animated-down ${elementVisibility.element1 ? 'slide-down' : ''}`}>
                <h2>Clase 4</h2>
                <p>Contenido</p>
              </div>
              <div className="accordion accordion-flush w-100 mx-auto rounded-5" id="accordionFlushExample">
                <div id="element2" className={`rounded-5 animated-left ${elementVisibility.element2 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }} >
                  <button className="accordion-button collapsed bg-transparent text-light" type="button" data-bs-toggle="collapse" data-bs-target="#a1" aria-expanded="false" aria-controls="flush-collapseOne">
                    <h2>¿Que es una función?</h2>
                  </button>
                  <div id="a1" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
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
                      <p className="text-break mx-auto w-75" style={{ marginBottom: "7rem" }}>Al dividir un programa en funciones más pequeñas y enfocadas, se mejora la legibilidad del código. Las funciones bien nombradas y bien definidas hacen que el código sea más fácil de entender y de dar seguimiento. Además, si se encuentra un error o se necesita hacer una mejora, solo se necesita realizar el cambio en la función correspondiente, lo que facilita el mantenimiento del programa en el futuro.</p>
                    </div>
                  </div>
                </div>
                <div id="element4" className={`mt-4 rounded-5 animated-left ${elementVisibility.element4 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
                  <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a3" aria-expanded="false" aria-controls="flush-collapseThree">
                    <h2 className="text-light">Sintaxis básica de una función</h2>
                  </button>
                  <div id="a3" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                      <img className="w-75 d-block mx-auto mt-4 mb-4 border-content" alt="" src="../img/class4/function.webp"></img>
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
                <div id="element5" className={`mt-4 rounded-5 animated-left ${elementVisibility.element5 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
                  <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a4" aria-expanded="false" aria-controls="flush-collapseFour">
                    <h2 className="text-light">¿Que es un módulo?</h2>
                  </button>
                  <div id="a4" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                      <p className="text-break mx-auto w-75 mt-4">En Python, los módulos son archivos que contiene extensión .py .pyc ( código Python ) reutilizable, que posee su propio espacio de nombres y que puede contener variables, funciones, clases e incluso otros módulos.
                        <br></br>
                        Los módulos se utilizan para organizar y modularizar el código, lo que facilita su mantenimiento y reutilización en diferentes programas.</p>
                      <p className="text-break mx-auto w-75">Aquí tienes los pasos básicos para crear y usar módulos en Python:</p>
                      <p className="text-break mx-auto w-75"><span className="fw-bold">1_ Crear un archivo de módulo:</span> Crea un archivo Python con extensión .py que contendrá el código del módulo. Por ejemplo, crea un archivo llamado mi_modulo.py</p>
                      <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/class4/module1.webp"></img>
                      <p className="text-break mx-auto w-75"><span className="fw-bold">2_ Escribir el código del módulo:</span> En el archivo mimodulo.py, escribe el código que deseas incluir en el módulo. Puedes definir funciones, clases, variables u otras estructuras de datos en el archivo. Por ejemplo, el contenido de mimodulo.py podría tener una función llamada saludo() y una variable llamada pi.</p>
                      <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/class4/module2.webp"></img>
                      <p className="text-break mx-auto w-75"><span className="fw-bold">3_ Usar el módulo en otro archivo:</span> Para usar el módulo en otro archivo Python, necesitas importarlo. Puedes importar todo el módulo o solo partes específicas del mismo. Por ejemplo, crea un archivo curso4 y úsalo para importar y utilizar el módulo mi_modulo.py:</p>
                      <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/class4/module3.webp"></img>
                      <p className="text-break mx-auto w-75">También puedes importar partes específicas del módulo utilizando la declaración from / import. Por ejemplo:</p>
                      <img className="w-75 d-block mx-auto mb-4 border-content" style={{ marginBottom: "7rem" }} alt="" src="../img/class4/module4.webp"></img>
                    </div>
                  </div>
                </div>
                <div id="element6" className={`mt-4 rounded-5 animated-left ${elementVisibility.element6 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
                  <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a5" aria-expanded="false" aria-controls="flush-collapseFive">
                    <h2 className="text-light">Módulos nativos de python</h2>
                  </button>
                  <div id="a5" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                      <p className="text-break mx-auto w-75 mt-4">Python tiene una amplia biblioteca estándar que incluye una serie de módulos nativos para realizar diversas tareas.<br></br>Aquí hay algunos módulos nativos comunes de Python:</p>
                      <h3 className="text-light text-break mx-auto w-75">Math</h3>
                      <p className="text-break mx-auto w-75">El módulo math en Python proporciona funciones y constantes matemáticas para realizar cálculos numéricos. Para utilizar el módulo math, debes importarlo al principio de tu script de la siguiente manera:</p>
                      <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/class4/math1.webp"></img>
                      <p className="text-break mx-auto w-75">A continuación, puedes utilizar las funciones y constantes proporcionadas por el módulo math. Aquí hay algunos ejemplos de cómo puedes usarlo.</p>
                      <p className="text-break mx-auto w-75">Redondeo de números: Cuando tengamos un número con décimal podemos redondearlo con varios métodos (ceil,floor,trunc).</p>
                      <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/class4/math2.webp"></img>
                      <p className="text-break mx-auto w-75">Funciones trigonométricas: Podemos realizar cálculos trigonométricos para calcular seno,arcoseno,coseno,arcocoseno,tangente y arcotangente de un ángulo con estas funciones (sin,cos,tang).</p>
                      <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/class4/math3.webp"></img>
                      <p className="text-break mx-auto w-75">Funciones hiperbólicas: Son útiles para describir fenómenos físicos (por ejemplo, velocidad de las olas o el movimiento de un objeto en un fluido) por su conveniencia al resolver ecuaciones diferenciales. Para usar esto se usan estas funciones (sinh,cosh,tanh,asinh,acosh,atanh).</p>
                      <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/class4/math4.webp"></img>
                      <p className="text-break mx-auto w-75">Funciones exponenciales y logarítmicas: Se puede realizar cálculos logarítmicos y exponenciales con estas funciones (log, exp, pow).</p>
                      <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/class4/math5.webp"></img>
                      <p className="text-break mx-auto w-75">Estos son solo algunos ejemplos de las funciones y constantes disponibles en el módulo math. Para obtener más detalles y ver todas las funciones y constantes proporcionadas, puedes consultar la documentación oficial de Python: <Link className="text-primary" to="https://docs.python.org/3/library/math.html">math - Módulo matemático</Link>.</p>
                      <h3 className="text-break w-75 mx-auto">Random</h3>
                      <p className="text-break mx-auto w-75">El módulo random en Python proporciona funciones para generar números pseudoaleatorios.<br></br>Dentro de este módulo tiene varias funcionalidades como:</p>
                      <p className="text-break mx-auto w-75"><span className="fw-bold">Random: </span>Podes generar un número aleatorio</p>
                      <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/class4/random1.webp"></img>
                      <p className="text-break mx-auto w-75"><span className="fw-bold">Randint: </span>Podes generar un número aleatorio dentro de un rango específico.</p>
                      <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/class4/random2.webp"></img>
                      <p className="text-break mx-auto w-75"><span className="fw-bold">Uniform: </span>Generar un número aleatorio de punto flotante dentro de un rango específico.</p>
                      <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/class4/random3.webp"></img>
                      <p className="text-break mx-auto w-75"><span className="fw-bold">Choice: </span>Selecciona un elemento aleatorio de una lista.</p>
                      <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/class4/random4.webp"></img>
                      <p className="text-break mx-auto w-75"><span className="fw-bold">Shuffle: </span>Mezcla el orden aleatoriamente de los elementos de una lista.</p>
                      <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/class4/random5.webp"></img>
                      <p className="text-break mx-auto w-75">Si quieres ver más sobre el módulo random puedes ir a la documentación oficial <Link className="text-primary" to="https://docs.python.org/3/library/random.html">Random</Link></p>
                      <h3 className="text-break w-75 mx-auto">Datetime</h3>
                      <p className="text-break mx-auto w-75">El módulo datetime en Python permite trabajar con fechas, horas y realizar operaciones relacionadas con el tiempo, aquí te mostraré algunos ejemplos.</p>
                      <p className="text-break mx-auto w-75"><span className="fw-bold">Datetime.datetime.now(): </span>Puedes obtener la fecha y hora actual.</p>
                      <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/class4/datetime1.webp"></img>
                      <p className="text-break mx-auto w-75"><span className="fw-bold">Datetime.date(): </span>Crea un objeto de fecha específica.</p>
                      <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/class4/datetime2.webp"></img>
                      <p className="text-break mx-auto w-75"><span className="fw-bold">Datetime.time(): </span>Crear un objeto de tiempo específico.</p>
                      <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/class4/datetime3.webp"></img>
                      <p className="text-break mx-auto w-75"><span className="fw-bold">Datetime.datetime(): </span>Crear un objeto de fecha y hora específicos:.</p>
                      <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/class4/datetime4.webp"></img>
                      <p className="text-break mx-auto w-75"><span className="fw-bold">Strftime(): </span>Formatear una fecha y hora en una cadena específica.</p>
                      <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/class4/datetime5.webp"></img>
                      <p className="text-break mx-auto w-75">Tambien puedes obtener la fecha y hora de forma individual</p>
                      <img className="w-75 d-block mx-auto border-content" style={{ marginBottom: "7rem" }} alt="" src="../img/class4/datetime6.webp"></img>
                    </div>
                  </div>
                </div>
                <div id="element7" className={`mt-4 rounded-5 animated-left ${elementVisibility.element7 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
                  <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a6" aria-expanded="false" aria-controls="flush-collapseSix">
                    <h2 className="text-light">Módulos y librerias independientes para python</h2>
                  </button>
                  <div id="a6" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                      <p className="text-break mx-auto w-75 mt-4">Hay una amplia gama de módulos y bibliotecas disponibles para integrar en proyectos de Python, según los requisitos y objetivos específicos del proyecto.
                        <br></br>
                        Algunos de los módulos más populares que podrías considerar son estos:
                      </p>
                      <h3 className="text-break mx-auto w-75">Pygame:</h3>
                      <p className="text-break mx-auto w-75">Es una biblioteca para el desarrollo de juegos y aplicaciones multimedia, que proporciona herramientas para el manejo de gráficos, sonidos y eventos de usuario.
                        <br></br>
                        Si quieres ver más sobre pygame, lo podrás ver en la documentacion oficial de <Link className="text-primary" to="https://www.pygame.org" target="_blank">Pygame</Link>
                      </p>
                      <h3 className="text-break mx-auto w-75">Flask:</h3>
                      <p className="text-break mx-auto w-75">Es un framework de desarrollo web que facilita la creación de aplicaciones web robustas y escalables, ofreciendo un conjunto de herramientas y una arquitectura MVC.
                        <br></br>
                        Si quieres ver más sobre Flask, lo podrás ver en la documentacion oficial de <Link className="text-primary" to="https://flask.palletsprojects.com/en/2.3.x/installation" target="_blank">Flask</Link>
                      </p>
                      <h3 className="text-break mx-auto w-75">Django:</h3>
                      <p className="text-break mx-auto w-75">Es un framework de desarrollo web que facilita la creación de aplicaciones web robustas y escalables, ofreciendo un conjunto de herramientas y una arquitectura MVC.
                        <br></br>
                        Si quieres ver más sobre Django, lo podrás ver en la documentacion oficial de <Link className="text-primary" to="https://www.djangoproject.com/download" target="_blank">Django</Link>
                      </p>
                      <h3 className="text-break mx-auto w-75">Numpy:</h3>
                      <p className="text-break mx-auto w-75">Proporciona soporte para cálculos numéricos eficientes y manipulación de matrices multidimensionales.
                        <br></br>
                        Si quieres ver más sobre Numpy, lo podrás ver en la documentacion oficial de <Link className="text-primary" to="https://numpy.org/doc" target="_blank">Numpy</Link>
                      </p>
                      <h3 className="text-break mx-auto w-75">Pandas:</h3>
                      <p className="text-break mx-auto w-75">Ofrece herramientas para el análisis y la manipulación de datos estructurados, incluyendo estructuras de datos flexibles y potentes para trabajar con tablas y series temporales.
                        <br></br>
                        Si quieres ver más sobre Pandas, lo podrás ver en la documentacion oficial de <Link className="text-primary" to="https://pandas.pydata.org/docs" target="_blank">Pandas</Link>
                      </p>
                      <h3 className="text-break mx-auto w-75">Requests:</h3>
                      <p className="text-break mx-auto w-75">Facilita el envío de solicitudes HTTP y la gestión de respuestas, lo que lo hace útil para interactuar con APIs y realizar solicitudes a servidores.
                        <br></br>
                        Si quieres ver más sobre requests, lo podrás ver en la documentacion oficial de <Link className="text-primary" to="https://requests.readthedocs.io/en/latest/user/install" target="_blank">Requests</Link>
                      </p>
                      <h3 className="text-break mx-auto w-75">Opencv:</h3>
                      <p className="text-break mx-auto w-75">Es una biblioteca de código abierto muy popular y ampliamente utilizada para aplicaciones de visión por computadora y procesamiento de imágenes.
                        <br></br>
                        Si quieres ver más sobre requests, lo podrás ver en la documentacion oficial de <Link className="text-primary" to="https://docs.opencv.org/3.4/d6/d00/tutorial_py_root.html" target="_blank">Opencv</Link>
                      </p>
                      <h3 className="text-break mx-auto w-75">Tensorflow:</h3>
                      <p className="text-break mx-auto w-75" style={{ marginBottom: "7rem" }}>Es una biblioteca de aprendizaje automático de código abierto desarrollada por Google que se utiliza ampliamente para construir y entrenar modelos de redes neuronales.
                        <br></br>
                        Si quieres ver más sobre tensorflow, lo podrás ver en la documentacion oficial de <Link className="text-primary" to="https://www.tensorflow.org/api_docs" target="_blank">Tensorflow</Link>
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
                <div id="element8" className={`mt-4 rounded-5 animated-left ${elementVisibility.element8 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
                  <Link to="/pythonClassFile/class4.py"
                    target={"_blank"}
                    download={"class4.py"}>
                    <button className="accordion-button collapsed bg-transparent" type="button">
                      <h2 className="text-light">Descarga el archivo de la clase 4</h2>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </>
        :
        <section id="hero" style={{ background: colorPrimaryPython }}>
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
                <div>
                  <h1>Clase 4: Funciones y módulos</h1>
                  <h2>Definicion y llamada de funciones</h2>
                  <h2>Paso de parámetros a funciones</h2>
                  <h2>Creación y uso de módulos</h2>
                  <div className="text-break text-lg-start">
                    <a href="#clase1" className="btn-get-started scrollto">tendrás acceso al curso el {new Date(date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 order-1 order-lg-2 hero-img" >
                <img src="../img/python.png" className="img-fluid animated vh-60" alt="" />
              </div>
            </div>
          </div>
          <svg id="clase3" className="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28 " preserveAspectRatio="none">
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

export default Class4
