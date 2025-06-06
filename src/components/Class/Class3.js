import React, { useEffect, useState, useCallback } from 'react'
import { Link } from 'react-router-dom';
import { db } from '../../Utils/firebase'
import { collection, getDocs } from 'firebase/firestore'
import { colorPrimaryPython } from '../../colors'
import useScrollAnimation from '../../useScrollAnimation'
import { CopyButton } from '../CopyButton/CopyButton'
import { class3Code } from './classCode'
import QuizForm from '../QuizForm/QuizForm';

const Class3 = () => {

  const elementVisibility = useScrollAnimation();
  const [course, setCourse] = useState()

  const callFirebase = useCallback(() => {
    getDocs(collection(db, "course")).then(response => {
      const getData = response.docs.map(doc => {
        const data = doc.data();
        data.date = data.date.toDate();
        return { id: doc.id, ...data };
      });
      localStorage.removeItem('dataCourse');
      localStorage.setItem('dataCourse', JSON.stringify(getData));
      setCourse(getData);
    });
  }, []);

  useEffect(() => {
    const savedCourse = localStorage.getItem('dataCourse');
    if (savedCourse) {
      const parsedDates = JSON.parse(savedCourse);
      if (parsedDates.length > 0 && parsedDates[1].date) {
        const firstDate = new Date(parsedDates[1].date);
        const currentDate = new Date();

        if ((currentDate - firstDate) <= 4742590612) {
          setCourse(parsedDates);
        } else {
          callFirebase();
        }
      } else {
        callFirebase();
      }
    } else {
      callFirebase();
    }
  }, [callFirebase]);

  return (
    <>
      {(new Date() >= new Date(course?.[2]?.date || '')) || localStorage.getItem("access") ?
        <>
          <section id="hero" style={{ background: colorPrimaryPython }}>
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
                  <div>
                    <h1>Clase 3: Control de flujo</h1>
                    <h2>Estructuras de control de flujo: if, elif, else y match</h2>
                    <h2>Bucles while y for</h2>
                    <h2>Uso de break y continue en bucles</h2>
                    <div className="text-center text-lg-start">
                    <a href="#class3" className={`btn-get-started scrollto python-theme`}>Contenido de la Clase 3</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 order-1 order-lg-2 hero-img">
                  <img src="../img/python.png" className="img-fluid animated vh-60" alt="" />
                </div>
              </div>
            </div>
            <svg className="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28 " preserveAspectRatio="none">
              <defs>
                <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
              </defs>
              <g className="wave1">
                <use xlinkHref="#wave-path" x="50" y="3" fill="rgba(255,255,255, .1)" />
              </g>
              <g id="class3" className="wave2">
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
                <h2>Clase 3</h2>
                <p>Contenido</p>
              </div>
              <div className="accordion accordion-flush w-100 mx-auto rounded-5" id="accordionFlushExample">
                <div id="element2" className={`rounded-5 animated-left ${elementVisibility.element2 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }} >
                  <button className="accordion-button collapsed bg-transparent text-light" type="button" data-bs-toggle="collapse" data-bs-target="#a1" aria-expanded="false" aria-controls="flush-collapseOne">
                    <h2 >Condicionales</h2>
                  </button>
                  <div id="a1" className="accordion-collapse collapse" >
                    <div className="accordion-body text-light bg-dark ">
                      <div className="accordion-body text-light">
                        <p className="text-break mx-auto w-75 mt-4">En programación, las condicionales son estructuras que nos permiten tomar decisiones basadas en ciertas condiciones. Podemos pensar en ellas como una forma de emular el proceso de toma de decisiones que ocurre en la vida real.<br></br><br></br>
                          Te daré un ejemplo: Supongamos que una persona está por salir a la mañana desde su casa y hay probabilidad de que llueva a la tarde, en este caso tenemos la decisión de décidir si llevamos nuestro paraguas o no, cada decisión que hagamos nos va a provocar una situación diferente.</p>
                        <img className="w-75 d-block mx-auto border-content mb-4" alt="" src="../img/class3/condition.webp"></img>
                        <p className="text-break mx-auto w-75 mb-4">Las condicionales se basan en una expresión o condición que evalúa si es verdadera o falsa. Dependiendo del resultado de esa evaluación, se ejecutará un bloque de código específico. Esta estructura se puede representar de la siguient emanera en Python:</p>
                        <img className="w-75 d-block mx-auto border-content" alt="" src="../img/class3/conditionalestructure.webp" style={{ marginBottom: "7rem" }} ></img>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="element3" className={`mt-4 rounded-5 animated-left ${elementVisibility.element3 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
                  <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a2" aria-expanded="false" aria-controls="flush-collapseThree">
                    <h2 className="text-light">If, else, elif y match</h2>
                  </button>
                  <div id="a2" className="accordion-collapse collapse bg-dark" >
                    <div className="accordion-body text-light bg-dark ">
                      <h3 className="text-break mx-auto w-75 mt-4">If</h3>
                      <p className="text-break mx-auto w-75">La palabra clave if se utiliza para iniciar una estructura condicional. Nos permite especificar una condición que se evalúa como verdadera o falsa. Si la condición es verdadera, se ejecuta el bloque de código indentado bajo el if. Si la condición es falsa, se omite ese bloque y el programa continúa con la siguiente instrucción después del if. Aquí tienes un ejemplo:</p>
                      <CopyButton code={class3Code[0]} />
                      <img className="w-75 d-block mx-auto border-content" alt="" src="../img/class3/if.webp"></img>
                      <h3 className="text-break mx-auto w-75 mt-4 ">Else</h3>
                      <p className="text-break mx-auto w-75">La palabra clave else se utiliza junto con if y nos permite especificar un bloque de código que se ejecuta cuando la condición del if es falsa. Si la condición del if es verdadera, se omite el bloque de código bajo el else. Aquí tienes un ejemplo:</p>
                      <CopyButton code={class3Code[1]} />
                      <img className="w-75 d-block mx-auto border-content" alt="" src="../img/class3/else.webp"></img>
                      <h3 className="text-break mx-auto w-75 mt-4 ">Elif</h3>
                      <p className="text-break mx-auto w-75">La palabra clave elif es una abreviatura de "else if" y se utiliza para agregar condiciones adicionales después del if. Se utiliza cuando hay múltiples condiciones que queremos evaluar secuencialmente. Si alguna de las condiciones anteriores es verdadera, se omite el bloque de código bajo el elif y se continúa con la siguiente instrucción después de la estructura condicional. Aquí tienes un ejemplo:</p>
                      <CopyButton code={class3Code[2]} />
                      <img className="w-75 d-block mx-auto border-content" style={{ marginBottom: "7rem" }} alt="" src="../img/class3/elif.webp"></img>
                      <h3 className="text-break mx-auto w-75 mt-4 ">Match</h3>
                      <p className="text-break mx-auto w-75">Match es una nueva estructura de control introducida en Python 3.10, que permite la coincidencia de patrones. Esta estructura es similar a switch en otros lenguajes de programación, pero es más poderosa y flexible. match permite comparar un valor con una serie de patrones y ejecutar el bloque de código correspondiente al primer patrón que coincida.</p>
                      <CopyButton code={class3Code[3]} />
                      <img className="w-75 d-block mx-auto border-content" alt="" src="../img/class3/match.webp"></img>
                    </div>
                  </div>
                </div>
                <div id="element4" className={`mt-4 rounded-5 animated-left ${elementVisibility.element4 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
                  <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a3" aria-expanded="false" aria-controls="flush-collapseThree">
                    <h2 className="text-light">Bucles</h2>
                  </button>
                  <div id="a3" className="accordion-collapse collapse bg-dark" >
                    <div className="accordion-body text-light bg-dark ">
                      <p className="text-break mx-auto w-75 mt-4">En programación, los bucles son estructuras que nos permiten repetir un bloque de código varias veces. Estos bloques de código se ejecutan repetidamente hasta que se cumpla una condición específica.</p>
                      <p className="text-break mx-auto w-75">Los bucles son especialmente útiles cuando queremos automatizar tareas repetitivas o cuando necesitamos procesar una colección de elementos. En lugar de escribir líneas de código individuales para cada elemento o repetición, podemos utilizar bucles para hacerlo de manera más eficiente y concisa.</p>
                      <img className="w-75 d-block mx-auto border-content" alt="" src="../img/class3/bucles.webp" style={{ marginBottom: "7rem" }}></img>
                    </div>
                  </div>
                </div>
                <div id="element5" className={`mt-4 rounded-5 animated-left ${elementVisibility.element5 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
                  <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a4" aria-expanded="false" aria-controls="flush-collapseFour">
                    <h2 className="text-light">While</h2>
                  </button>
                  <div id="a4" className="accordion-collapse collapse" >
                    <div className="accordion-body text-light bg-dark ">
                      <p className="text-break mx-auto mt-4 w-75">Bucle while (mientras): El bucle while ejecuta repetidamente un bloque de código siempre que una condición sea verdadera. La condición se verifica antes de cada iteración, y si es verdadera, se ejecuta el bloque de código. Si la condición se vuelve falsa en algún momento, se sale del bucle y se continúa con la siguiente instrucción después del bucle. Aquí tienes un ejemplo de un bucle while:</p>
                      <CopyButton code={class3Code[4]} />
                      <img className="w-75 d-block mx-auto border-content" alt="" src="../img/class3/while.webp"></img>
                      <CopyButton code={class3Code[5]} />
                      <img className="w-75 d-block mx-auto border-content" style={{ marginBottom: "7rem" }} alt="" src="../img/class3/while2.webp"></img>
                    </div>
                  </div>
                </div>
                <div id="element6" className={`mt-4 rounded-5 animated-left ${elementVisibility.element6 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
                  <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a5" aria-expanded="false" aria-controls="flush-collapseFive">
                    <h2 className="text-light">For</h2>
                  </button>
                  <div id="a5" className="accordion-collapse collapse" >
                    <div className="accordion-body text-light bg-dark ">
                      <p className="text-break mx-auto w-75 mt-4"> El bucle for se utiliza para iterar sobre una secuencia de elementos, como una lista, una cadena de texto, un rango de números, entre otros. En cada iteración, el bucle for asigna el siguiente elemento de la secuencia a una variable y ejecuta el bloque de código. Aquí tienes unos ejemplos:</p>
                      <h3 className="text-break mx-auto w-75 mt-4">Bucle for en cadena de texto</h3>
                      <CopyButton code={class3Code[6]} />
                      <img className="w-75 d-block mx-auto mb-4 pb-4 border-content" alt="" src="../img/class3/for1.webp"></img>
                      <CopyButton code={class3Code[7]} />
                      <img className="w-75 d-block mx-auto pt-4 border-content" alt="" src="../img/class3/for2.webp"></img>
                      <h3 className="text-break mx-auto w-75 mt-4">Bucle for en rango de números</h3>
                      <CopyButton code={class3Code[8]} />
                      <img className="w-75 d-block mx-auto mt-4 border-content" alt="" src="../img/class3/for3.webp"></img>
                      <CopyButton code={class3Code[9]} />
                      <img className="w-75 d-block mx-auto mt-4 border-content" alt="" src="../img/class3/range.webp"></img>
                      <h3 className="text-break mx-auto w-75 mt-4">Bucle for en listas</h3>
                      <CopyButton code={class3Code[10]} />
                      <img className="w-75 d-block mx-auto mt-4 border-content" alt="" src="../img/class3/for4.webp"></img>
                      <h3 className="text-break mx-auto w-75 mt-4">Bucle for en tuplas</h3>
                      <CopyButton code={class3Code[11]} />
                      <img className="w-75 d-block mx-auto mt-4 border-content" alt="" src="../img/class3/for5.webp" style={{ marginBottom: "7rem" }} ></img>
                    </div>
                  </div>
                </div>
                <div id="element7" className={`mt-4 rounded-5 animated-left ${elementVisibility.element7 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
                  <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a6" aria-expanded="false" aria-controls="flush-collapseSix">
                    <h2 className="text-light">Resolución de problemas</h2>
                  </button>
                  <div id="a6" className="accordion-collapse collapse" >
                    <div className="accordion-body text-light bg-dark ">
                      <p className="text-break mx-auto mt-4 w-75">En esta instancia del curso de python estamos empezando a implementar con condicionales y bucles, es un buen momento de implementar estas herramientas en problemas reales y empezar a desarrollar la resolución de problemas con lógica</p>
                      <h3 className="text-break mx-auto w-75">Problema n°1 - validación de contraseña</h3>
                      <p className="text-break mx-auto w-75">Supongamos que le damos a elegir al usuario una contraseña para su cuenta y como requisito debe tener al menos una letra, un número y debe tener al menos un largo de 8 caracteres.</p>
                      <h3 className="text-break mx-auto w-75">Diagrama de flujo</h3>
                      <p className="text-break mx-auto w-75">Lo primero que podemos hacer es realizar un diagrama de flujo, Un diagrama de flujo es una representación gráfica de un algoritmo o proceso que utiliza símbolos y líneas para mostrar la secuencia de pasos o decisiones necesarios para resolver un problema. Los diagramas de flujo son una herramienta visual utilizada en programación y en otras disciplinas para planificar, analizar y comunicar la lógica de un proceso.</p>
                      <p className="text-break mx-auto w-75">Si vemos lo que nos indica el problema, vemos que nos dice que el usuario debe ingresar una contraseña para su cuenta.</p>
                      <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/class3/problem1-1.webp"></img>
                      <p className="text-break mx-auto w-75">En el problema nos está diciendo que como requisito debe tener al menos una letra, un número y debe tener al menos un largo de 8 caracteres, por lo tanto estas van a ser condiciones que le tenemos que dar a este </p>
                      <img className="w-75 d-block mx-auto mt-4 mb-4 border-content" alt="" src="../img/class3/problem1-2.webp"></img>
                      <p className="text-break mx-auto mb-4 w-75">Si vemos lo que nos indica el problema, vemos que nos dice que el usuario debe ingresar una contraseña para su cuenta</p>
                      <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/class3/problem1-3.webp"></img>
                      <p className="text-break mx-auto w-75">En base al análisis que hicimos con el diagrama de flujos, podemos ya identificar a groso modo que aplicaciones debemos hacer para realizar nuestro programa. <br></br>Habrá veces que no realizamos el código tal cual lo hicimos en el diagrama por problemas que surgieron mientras programamos, pero lo bueno de hacer estos diagramas es que tenemos ya pensado una base en la cual programar.<br></br> Acá te muestro una de las posibles soluciones al problema hecho con python.</p>
                      <CopyButton code={class3Code[12]} />
                      <img className="w-75 d-block mx-auto border-content" style={{ marginBottom: "7rem" }} alt="" src="../img/class3/problem1-4.webp"></img>
                    </div>
                  </div>
                </div>
                <div id="element8" className={`mt-4 rounded-5 animated-left ${elementVisibility.element8 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
                  <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a7" aria-expanded="false" aria-controls="flush-collapseSeven">
                    <h2 className="text-light">Mini projecto 3 - Simulador de compra</h2>
                  </button>
                  <div id="a7" className="accordion-collapse collapse" >
                    <div className="accordion-body text-light bg-dark ">
                      <h3 className="text-break mx-auto w-75">Objetivo:</h3>
                      <p className="text-break mx-auto w-75">Crear un simulador que permita a los usuarios seleccionar productos para comprar, ingresar la cantidad deseada de ese producto y mostrar el total a pagar, incluyendo impuestos si es necesario.</p>
                      <ul className="text-break mx-auto w-75"> Entrada de Datos:
                        <li className="text-break mx-auto w-75">
                          <p><span className="fw-bold">Productos Disponibles:</span> Definir una lista de productos con sus respectivos precios.</p>
                        </li>
                        <li className="text-break mx-auto w-75">
                          <p><span className="fw-bold">Selección del Producto:</span> ¿Cómo permitirá el programa al usuario seleccionar un producto? (Por ejemplo, mediante un número asociado a cada producto).</p>
                        </li>
                        <li className="text-break mx-auto w-75">
                          <p><span className="fw-bold">Cantidad:</span> ¿Cómo ingresará el usuario la cantidad de productos que desea comprar?</p>
                        </li>
                        <li className="text-break mx-auto w-75">
                          <p><span className="fw-bold">Impuesto (Opcional):</span> ¿Se incluirá el cálculo del impuesto? Si es así, ¿cómo se recogerá la información (por ejemplo, porcentaje de impuesto)?</p>
                        </li>
                      </ul>
                      <ul className="text-break mx-auto w-75 mt-4">Calculo:
                        <li className="text-break mx-auto w-75">
                          <p><span className="fw-bold">Subtotal:</span> Multiplicar el precio del producto seleccionado por la cantidad ingresada.</p>
                        </li>
                        <li className="text-break mx-auto w-75">
                          <p><span className="fw-bold">Impuesto:</span> Si se incluye, calcular el monto del impuesto sobre el subtotal.</p>
                        </li>
                        <li className="text-break mx-auto w-75">
                          <p><span className="fw-bold">Total:</span> Sumar el subtotal y el impuesto (si lo hay) para obtener el total a pagar.</p>
                        </li>
                      </ul>
                      <ul className="text-break mx-auto w-75 mt-4">Salida de Datos:
                        <li className="text-break mx-auto w-75">
                          <p><span className="fw-bold">Detalle de la Compra:</span> Mostrar un resumen con el nombre del producto, la cantidad comprada, el precio unitario, el subtotal, el impuesto (si aplica) y el total a pagar.</p>
                        </li>
                      </ul>
                      <p className="text-break mx-auto w-75">Descarga un ejemplo del mini proyecto desde acá --
                        <Link to="/pythonClassFile/miniproject3.py" target={"_blank"} download={"miniproject3.py"} className="text-primary" > Simulador de compra</Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div id="element9" className={`mt-4 rounded-5 animated-left ${elementVisibility.element9 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
                  <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a8" aria-expanded="false" aria-controls="flush-collapseSeven">
                    <h2 className="text-light">Evaluación de Conocimientos: Clase 3 - Control de flujo en Python</h2>
                  </button>
                  <div id="a8" className="accordion-collapse collapse" >
                    <div className="accordion-body text-light bg-dark ">
                      <QuizForm />
                    </div>
                  </div>
                </div>
                <div id="element10" className={`mt-4 rounded-5 animated-left ${elementVisibility.element10 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
                  <Link to="/pythonClassFile/class3.py"
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
        </>
        :
        <section id="hero" style={{ background: colorPrimaryPython }}>
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
                <div>
                  <h1>Clase 3: Control de flujo</h1>
                  <h2>Estructuras de control de flujo: if, elif, else</h2>
                  <h2>Bucles while y for</h2>
                  <h2>Uso de break y continue en bucles</h2>
                  <div className="text-center text-lg-start">
                    <Link to="#" className="btn-get-started scrollto python-theme">Tendrás acceso al curso el {new Date(course?.[3]?.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 order-1 order-lg-2 hero-img">
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

export default Class3
