import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Class4 = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <section id="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
              <div data-aos="zoom-out">
                <h1>Clase 4</h1>
                <h2>Definicion y llamada de funciones en python</h2>
                <h2>Paso de parámetros a funciones</h2>
                <h2>Creación y uso de módulos</h2>
                <div className="text-center text-lg-start">
                  <a href="#clase4" className="btn-get-started scrollto">Contenido de la clase 4</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 order-1 order-lg-2 hero-img" data-aos="zoom-out" data-aos-delay="300">
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
          <div className="section-title" data-aos="fade-up">
            <h2>Clase 4</h2>
            <p>Contenido</p>
          </div>
          <div className="accordion accordion-flush w-100 mx-auto rounded-5" id="accordionFlushExample">
            <div className="accordion-item rounded-5" style={{ background: "#010483" }} >
              <button className="accordion-button collapsed bg-transparent text-light" pe="button" data-bs-toggle="collapse" data-bs-target="#a1" aria-expanded="false" aria-controls="flush-collapseOne">
                <h2 data-aos="fade-right">¿Que es una función?</h2>
              </button>
              <div id="a1" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                  <p className="text-center">Una función en programación es un conjunto de lineas de código agrupadas ( bloque de código ) que funcionan como una unidad realizando una tarea específica.
                    <br></br>
                    Estas funciones en Python pueden devolver o no valores, también pueden tener o no parámetros/argumentos.
                    <br></br>
                    A las funciones también se las denomina "métodos" cuando se encuentran definidas dentro de una clase.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item mt-4 rounded-5" style={{ background: "#010483" }}>
              <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a2" aria-expanded="false" aria-controls="flush-collapseTwo">
                <h2 data-aos="fade-right" className="text-light">¿Para que sirve una función?</h2>
              </button>
              <div id="a2" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                  <ol className="list-group list-group-numbered w-75 mx-auto mb-4 text-xl text-center">
                    <h3 className="text-center mx-auto" style={{ fontSize: "25px", fontWeight: "700", marginTop: "7rem" }}>REUTILIZACIÓN DE CÓDIGO</h3>
                    <li className="list-group list-group-numbered w-100 mx-auto "><p className="text-center">Una vez que se define una función, puede ser llamada desde diferentes partes del programa tantas veces como sea necesario. Esto evita la repetición de código y promueve la eficiencia, ya que no es necesario volver a escribir el mismo código una y otra vez. La reutilización de funciones también facilita las actualizaciones y modificaciones, ya que solo se necesita hacer el cambio en un solo lugar.<br></br>En la comunidad de programadores se difundió la abreviacion "DRY" ("don't release yoursef") que significa "no te repitas a ti mismo".</p></li>
                    <h3 className="text-center mx-auto mt-4" style={{ fontSize: "25px", fontWeight: "700" }}>MODULARIDAD</h3>
                    <li className="list-group list-group-numbered w-100 mx-auto "><p className="text-center">Las funciones permiten dividir un programa en módulos más pequeños y autónomos. Cada función se centra en una tarea específica y puede ser desarrollada, probada y depurada de manera independiente. Esto facilita el desarrollo colaborativo y el trabajo en equipo, ya que diferentes programadores pueden trabajar en funciones diferentes al mismo tiempo.</p></li>
                    <h3 className="text-center mx-auto mt-4" style={{ fontSize: "25px", fontWeight: "700" }}>ABSTRACCIÓN</h3>
                    <li className="list-group list-group-numbered w-100 mx-auto "><p className="text-center">Las funciones pueden ocultar los detalles internos de su implementación y proporcionar una interfaz más simple y fácil de usar. Esto permite que los programadores se centren en el uso de la función sin preocuparse por cómo se implementa. La abstracción reduce la complejidad y facilita el diseño y mantenimiento del programa</p></li>
                    <h3 className="text-center mx-auto mt-4" style={{ fontSize: "25px", fontWeight: "700" }}>LEGIBILIDAD Y MANTENIMIENTO</h3>
                    <li className="list-group list-group-numbered w-100 mx-auto "><p className="text-center">Al dividir un programa en funciones más pequeñas y enfocadas, se mejora la legibilidad del código. Las funciones bien nombradas y bien definidas hacen que el código sea más fácil de entender y de dar seguimiento. Además, si se encuentra un error o se necesita hacer una mejora, solo se necesita realizar el cambio en la función correspondiente, lo que facilita el mantenimiento del programa en el futuro.</p></li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="accordion-item mt-4 rounded-5" style={{ background: "#010483" }}>
              <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a3" aria-expanded="false" aria-controls="flush-collapseThree">
                <h2 data-aos="fade-right" className="text-light">Sintaxis básica de una función</h2>
              </button>
              <div id="a3" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                  <h2 data-aos="fade-right" className="text-light text-center mt-4 mb-4">Concepto y ejemplo de una función/función con parámetros</h2>
                  <img className="w-75 d-block mx-auto" alt="" src="../img/clase4/function.png" style={{ marginBottom: "7rem" }}></img>
                  <h2 data-aos="fade-right" className="text-light text-center">Explicación de los elementos en una función</h2>
                  <p className="text-center mx-auto w-75">def: La palabra clave "def" se utiliza para definir una función en Python.</p>
                  <p className="text-center mx-auto w-75">nombre_de_la_funcion: Es el nombre que eliges para tu función. Debes seguir las convenciones de nombrado de Python y elegir un nombre descriptivo que indique la tarea que realiza la función.</p>
                  <p className="text-center mx-auto w-75">parámetros: Son los valores que la función puede recibir como entrada. Estos son opcionales y puedes tener cero, uno o más parámetros separados por comas. Si no hay parámetros, se dejan los paréntesis vacíos.</p>
                  <p className="text-center mx-auto w-75">indentación: El cuerpo de la función está indentado y contiene el código que define las acciones que la función realizará cuando sea llamada. Puede consistir en cualquier número de declaraciones, operaciones y estructuras de control (como condicionales y bucles).</p>
                  <p className="text-center mx-auto w-75">return: La declaración return se utiliza para especificar el valor que la función devuelve como resultado. Es opcional y puede haber múltiples declaraciones de retorno dentro de una función. Si no se especifica un valor de retorno, la función devuelve None de forma predeterminada.</p>
                  <p className="text-center mx-auto w-75">nombre_de_la_funcion(): Una función no se ejecuta por si solo, cuando queramos ejecutar una función debemos escribir el nombre asignado a la función seguido de un paréntesis, a este paréntesis se lo denomina zona de parámetros/argumentos, si tu función tiene parámetros deberás escribir adentro de los paréntesis tus parámetros.</p>
                </div>
              </div>
            </div>
            <div className="accordion-item mt-4 rounded-5" style={{ background: "#010483" }}>
              <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a4" aria-expanded="false" aria-controls="flush-collapseFour">
                <h2 data-aos="fade-right" className="text-light">¿Que es un módulo?</h2>
              </button>
              <div id="a4" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                  <p className="text-center mx-auto">En Python, los módulos son archivos que contiene extensión .py .pyc ( código Python ) reutilizable, que posee su propio espacio de nombres y que puede contener variables, funciones, clases e incluso otros módulos.
                    <br></br>
                    Los módulos se utilizan para organizar y modularizar el código, lo que facilita su mantenimiento y reutilización en diferentes programas.</p>
                  <p className="text-center mx-auto">Aquí tienes los pasos básicos para crear y usar módulos en Python:</p>
                  <p className="text-center mx-auto">1_ Crear un archivo de módulo: Crea un archivo Python con extensión .py que contendrá el código del módulo. Por ejemplo, crea un archivo llamado mi_modulo.py</p>
                  <img className="w-75 mx-auto d-block" alt="" src="../img/clase4/module1.jpg"></img>
                  <p className="text-center mx-auto">2_ Escribir el código del módulo: En el archivo mimodulo.py, escribe el código que deseas incluir en el módulo. Puedes definir funciones, clases, variables u otras estructuras de datos en el archivo. Por ejemplo, el contenido de mimodulo.py podría tener una función llamada saludo() y una variable llamada pi.</p>
                  <img className="w-75 mx-auto d-block" alt="" src="../img/clase4/module2.jpg"></img>
                  <p className="text-center mx-auto">3_ Usar el módulo en otro archivo: Para usar el módulo en otro archivo Python, necesitas importarlo. Puedes importar todo el módulo o solo partes específicas del mismo. Por ejemplo, crea un archivo curso4 y úsalo para importar y utilizar el módulo mi_modulo.py:</p>
                  <img className="w-75 mx-auto d-block" alt="" src="../img/clase4/module3.jpg"></img>
                  <p className="text-center mx-auto">También puedes importar partes específicas del módulo utilizando la declaración from / import. Por ejemplo:</p>
                  <img className="w-75 mx-auto d-block" alt="" src="../img/clase4/module4.jpg"></img>
                </div>
              </div>
            </div>
            <div className="accordion-item mt-4 rounded-5" style={{ background: "#010483" }}>
              <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a5" aria-expanded="false" aria-controls="flush-collapseFive">
                <h2 data-aos="fade-right" className="text-light">Módulos nativos de python</h2>
              </button>
              <div id="a5" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                  <p className="text-center mx-auto">Python tiene una amplia biblioteca estándar que incluye una serie de módulos nativos para realizar diversas tareas.<br></br>Aquí hay algunos módulos nativos comunes de Python:</p>
                  <h2 data-aos="fade-right" className="text-light text-center">Math</h2>
                  <p className="text-center mx-auto w-75">El módulo math en Python proporciona funciones y constantes matemáticas para realizar cálculos numéricos. Para utilizar el módulo math, debes importarlo al principio de tu script de la siguiente manera:</p>
                  <img className="w-75 mx-auto d-block" alt="" src="../img/clase4/math1.jpg"></img>
                  <p className="text-center mx-auto w-75">A continuación, puedes utilizar las funciones y constantes proporcionadas por el módulo math. Aquí hay algunos ejemplos de cómo puedes usarlo.</p>
                  <p className="text-center mx-auto w-75">Redondeo de números: Cuando tengamos un número con décimal podemos redondearlo con varios métodos (ceil,floor,trunc).</p>
                  <img className="w-75 mx-auto d-block" alt="" src="../img/clase4/math2.jpg"></img>
                  <p className="text-center mx-auto w-75">Funciones trigonométricas: Podemos realizar cálculos trigonométricos para calcular seno,arcoseno,coseno,arcocoseno,tangente y arcotangente de un ángulo con estas funciones (sin,cos,tang).</p>
                  <img className="w-75 mx-auto d-block" alt="" src="../img/clase4/math3.jpg"></img>
                  <p className="text-center mx-auto w-75">Funciones hiperbólicas: Son útiles para describir fenómenos físicos (por ejemplo, velocidad de las olas o el movimiento de un objeto en un fluido) por su conveniencia al resolver ecuaciones diferenciales. Para usar esto se usan estas funciones (sinh,cosh,tanh,asinh,acosh,atanh).</p>
                  <img className="w-75 mx-auto d-block" alt="" src="../img/clase4/math4.jpg"></img>
                  <p className="text-center mx-auto w-75">Funciones exponenciales y logarítmicas: Se puede realizar cálculos logarítmicos y exponenciales con estas funciones (log, exp, pow).</p>
                  <img className="w-75 mx-auto d-block" alt="" src="../img/clase4/math5.jpg"></img>
                  <p className="text-center mx-auto w-75">Estos son solo algunos ejemplos de las funciones y constantes disponibles en el módulo math. Para obtener más detalles y ver todas las funciones y constantes proporcionadas, puedes consultar la documentación oficial de Python: <a className="text-primary" href="https://docs.python.org/3/library/math.html">math - Módulo matemático</a>.</p>
                  <h2 data-aos="fade-right" className="text-light text-center">Random</h2>
                  <p className="text-center mx-auto w-75">El módulo random en Python proporciona funciones para generar números pseudoaleatorios.<br></br>Dentro de este módulo tiene varias funcionalidades como:</p>
                  <p className="text-center mx-auto w-75">random: Podes generar un número aleatorio</p>
                  <img className="w-75 mx-auto d-block" alt="" src="../img/clase4/random1.jpg"></img>
                  <p className="text-center mx-auto w-75">randint: Podes generar un número aleatorio dentro de un rango específico.</p>
                  <img className="w-75 mx-auto d-block" alt="" src="../img/clase4/random2.jpg"></img>
                  <p className="text-center mx-auto w-75">uniform: Generar un número aleatorio de punto flotante dentro de un rango específico.</p>
                  <img className="w-75 mx-auto d-block" alt="" src="../img/clase4/random3.jpg"></img>
                  <p className="text-center mx-auto w-75">choice: Selecciona un elemento aleatorio de una lista.</p>
                  <img className="w-75 mx-auto d-block" alt="" src="../img/clase4/random4.jpg"></img>
                  <p className="text-center mx-auto w-75">shuffle: Mezcla el orden aleatoriamente de los elementos de una lista.</p>
                  <img className="w-75 mx-auto d-block" alt="" src="../img/clase4/random5.jpg"></img>
                  <p className="text-center mx-auto w-75">Si quieres ver más sobre el módulo random puedes ir a la documentación oficial <a className="text-primary"href="https://docs.python.org/3/library/random.html">random - número aleatorio</a></p>
                  <h2 data-aos="fade-right" className="text-light text-center">Datetime</h2>
                  <p className="text-center mx-auto w-75">El módulo datetime en Python permite trabajar con fechas, horas y realizar operaciones relacionadas con el tiempo, aquí te mostraré algunos ejemplos.</p>
                  <p className="text-center mx-auto w-75">now: Puedes obtener la fecha y hora actual.</p>
                  <img className="w-75 mx-auto d-block" alt="" src="../img/clase4/datatime1.jpg"></img>
                  <p className="text-center mx-auto w-75">date: Crea un objeto de fecha específica.</p>
                  <img className="w-75 mx-auto d-block" alt="" src="../img/clase4/datatime1.jpg"></img>
                  <p className="text-center mx-auto w-75">time: Crear un objeto de tiempo específico.</p>
                  <img className="w-75 mx-auto d-block" alt="" src="../img/clase4/datatime1.jpg"></img>
                  <p className="text-center mx-auto w-75">datetime: Puedes obtener la fecha y hora actual</p>
                  <img className="w-75 mx-auto d-block" alt="" src="../img/clase4/datatime1.jpg"></img>
                  <p className="text-center mx-auto w-75">strtime: Formatear una fecha y hora en una cadena específica.</p>
                  <img className="w-75 mx-auto d-block" alt="" src="../img/clase4/datatime1.jpg"></img>
                  <p className="text-center mx-auto w-75">Tambien puedes obtener la fecha y hora de forma individual</p>
                  <img className="w-75 mx-auto d-block" alt="" src="../img/clase4/datatime1.jpg"></img>
                </div>
              </div>
            </div>
            <div className="accordion-item mt-4 rounded-5" style={{ background: "#010483" }}>
              <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a6" aria-expanded="false" aria-controls="flush-collapseSix">
                <h2 data-aos="fade-right" className="text-light">Entorno de desarrollo integrado (IDE)</h2>
              </button>
              <div id="a6" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body text-light bg-dark rounded-5 rounded-top">



                </div>
              </div>
            </div>
            <div className="accordion-item mt-4 rounded-5" style={{ background: "#010483" }}>
              <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a7" aria-expanded="false" aria-controls="flush-collapseSeven">
                <h2 data-aos="fade-right" className="text-light">Ejecución del primer programa</h2>
              </button>
              <div id="a7" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body text-light bg-dark rounded-5 rounded-top">



                </div>
              </div>
            </div>
            <div className="accordion-item mt-4 rounded-5" style={{ background: "#010483" }}>
              <button className="accordion-button collapsed bg-transparent" type="button">
                <Link to="/pythonClassFile/class1.py"
                  target={"_blank"}
                  download={"class4.py"}>
                  <h2 data-aos="fade-right" className="text-light">Descarga el archivo de la clase 4</h2>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Class4