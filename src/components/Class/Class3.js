import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Class3 = () => {
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
                <h1>Clase 3: Estructuras de control de flujo</h1>
                <h2>Estructuras de control de flujo: if, elif, else</h2>
                <h2>Bucles while y for</h2>
                <h2>Uso de break y continue en bucles</h2>
                <div className="text-center text-lg-start">
                  <a href="#clase3" className="btn-get-started scrollto">Contenido de la clase 3</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 order-1 order-lg-2 hero-img" data-aos="zoom-out" data-aos-delay="300">
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
      <section id="faq" className="faq section-bg">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Clase 3</h2>
            <p>Contenido</p>
          </div>
          <div className="accordion accordion-flush w-100 mx-auto rounded-5" id="accordionFlushExample">
            <div className="accordion-item rounded-5" style={{ background: "#010483" }} >
              <button className="accordion-button collapsed bg-transparent text-light" pe="button" data-bs-toggle="collapse" data-bs-target="#a1" aria-expanded="false" aria-controls="flush-collapseOne">
                <h2 data-aos="fade-right">Condicionales</h2>
              </button>
              <div id="a1" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                  <div className="accordion-body text-light">
                    <p className="text-center mx-auto w-75">En programación, las condicionales son estructuras que nos permiten tomar decisiones basadas en ciertas condiciones. Podemos pensar en ellas como una forma de emular el proceso de toma de decisiones que ocurre en la vida real.<br></br><br></br>
                      Te daré un ejemplo: Supongamos que una persona está por salir a la mañana desde su casa y hay probabilidad de que llueva a la tarde, en este caso tenemos la decisión de décidir si llevamos nuestro paraguas o no, cada decisión que hagamos nos va a provocar una situación diferente.</p>
                    <img className="w-75 d-block mx-auto" alt="" src="../img/clase3/condition.png"></img>
                    <p className="text-center mx-auto w-75">Las condicionales se basan en una expresión o condición que evalúa si es verdadera o falsa. Dependiendo del resultado de esa evaluación, se ejecutará un bloque de código específico. Esta estructura se puede representar de la siguient emanera en Python:</p>
                    <img className="w-75 d-block mx-auto" alt="" src="../img/clase3/conditionalestructure.png" style={{ marginBottom: "7rem" }} ></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item mt-4 rounded-5" style={{ background: "#010483" }}>
              <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a2" aria-expanded="false" aria-controls="flush-collapseThree">
                <h2 data-aos="fade-right" className="text-light">If else y elif</h2>
              </button>
              <div id="a2" className="accordion-collapse collapse bg-dark" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                  <h2 className="text-center mx-auto mt-4 ">If</h2>
                  <p className="text-center mx-auto w-75">La palabra clave if se utiliza para iniciar una estructura condicional. Nos permite especificar una condición que se evalúa como verdadera o falsa. Si la condición es verdadera, se ejecuta el bloque de código indentado bajo el if. Si la condición es falsa, se omite ese bloque y el programa continúa con la siguiente instrucción después del if. Aquí tienes un ejemplo:</p>
                  <img className="w-75 d-block mx-auto" alt="" src="../img/clase3/if.jpg"></img>
                  <h2 className="text-center mx-auto mt-4 ">Else</h2>
                  <p className="text-center mx-auto w-75">La palabra clave else se utiliza junto con if y nos permite especificar un bloque de código que se ejecuta cuando la condición del if es falsa. Si la condición del if es verdadera, se omite el bloque de código bajo el else. Aquí tienes un ejemplo:</p>
                  <img className="w-75 d-block mx-auto" alt="" src="../img/clase3/else.jpg"></img>
                  <h2 className="text-center mx-auto mt-4 ">Elif</h2>
                  <p className="text-center mx-auto w-75">La palabra clave elif es una abreviatura de "else if" y se utiliza para agregar condiciones adicionales después del if. Se utiliza cuando hay múltiples condiciones que queremos evaluar secuencialmente. Si alguna de las condiciones anteriores es verdadera, se omite el bloque de código bajo el elif y se continúa con la siguiente instrucción después de la estructura condicional. Aquí tienes un ejemplo:</p>
                  <img className="w-75 d-block mx-auto" alt="" src="../img/clase3/elif.jpg"></img>
                </div>
              </div>
            </div>
            <div className="accordion-item mt-4 rounded-5" style={{ background: "#010483" }}>
              <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a3" aria-expanded="false" aria-controls="flush-collapseThree">
                <h2 data-aos="fade-right" className="text-light">Bucles</h2>
              </button>
              <div id="a3" className="accordion-collapse collapse bg-dark" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                  <p className="text-center mx-auto w-75">En programación, los bucles son estructuras que nos permiten repetir un bloque de código varias veces. Estos bloques de código se ejecutan repetidamente hasta que se cumpla una condición específica.</p>
                  <p className="text-center mx-auto w-75">Los bucles son especialmente útiles cuando queremos automatizar tareas repetitivas o cuando necesitamos procesar una colección de elementos. En lugar de escribir líneas de código individuales para cada elemento o repetición, podemos utilizar bucles para hacerlo de manera más eficiente y concisa.</p>
                  <img className="w-75 d-block mx-auto" alt="" src="../img/clase3/bucles.png" style={{ marginBottom: "7rem" }}></img>
                </div>
              </div>
            </div>
            <div className="accordion-item mt-4 rounded-5" style={{ background: "#010483" }}>
              <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a4" aria-expanded="false" aria-controls="flush-collapseFour">
                <h2 data-aos="fade-right" className="text-light">While</h2>
              </button>
              <div id="a4" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                  <p className="text-center mx-auto w-75">Bucle while (mientras): El bucle while ejecuta repetidamente un bloque de código siempre que una condición sea verdadera. La condición se verifica antes de cada iteración, y si es verdadera, se ejecuta el bloque de código. Si la condición se vuelve falsa en algún momento, se sale del bucle y se continúa con la siguiente instrucción después del bucle. Aquí tienes un ejemplo de un bucle while:</p>
                  <img className="w-75 d-block mx-auto" alt="" src="../img/clase3/while.jpg"></img>
                </div>
              </div>
            </div>
            <div className="accordion-item mt-4 rounded-5" style={{ background: "#010483" }}>
              <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a5" aria-expanded="false" aria-controls="flush-collapseFive">
                <h2 data-aos="fade-right" className="text-light">For</h2>
              </button>
              <div id="a5" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                  <p className="text-center mx-auto w-75" style={{ marginBottom: "7rem" }} > El bucle for se utiliza para iterar sobre una secuencia de elementos, como una lista, una cadena de texto, un rango de números, entre otros. En cada iteración, el bucle for asigna el siguiente elemento de la secuencia a una variable y ejecuta el bloque de código. Aquí tienes unos ejemplos:</p>
                  <h2 className="text-center mx-auto mt-4">Bucle for en cadena de texto</h2>
                  <img className="w-75 d-block mx-auto mb-4 pb-4" alt="" src="../img/clase3/for1.jpg"></img>
                  <img className="w-75 d-block mx-auto mt-4 pt-4" alt="" src="../img/clase3/for2.jpg" style={{ marginBottom: "7rem" }} ></img>
                  <h2 data-aos="fade-right" className="text-center mx-auto mt-4">Bucle for en rango de números</h2>
                  <img className="w-75 d-block mx-auto" alt="" src="../img/clase3/for3.jpg" style={{ marginBottom: "7rem" }} ></img>
                  <h2 data-aos="fade-right" className="text-center mx-auto mt-4">Bucle for en listas</h2>
                  <img className="w-75 d-block mx-auto" alt="" src="../img/clase3/for4.jpg" style={{ marginBottom: "7rem" }} ></img>
                </div>
              </div>
            </div>
            <div className="accordion-item mt-4 rounded-5" style={{ background: "#010483" }}>
              <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a6" aria-expanded="false" aria-controls="flush-collapseSix">
                <h2 data-aos="fade-right" className="text-light">Resolución de problemas</h2>
              </button>
              <div id="a6" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                  <p className="text-center mx-auto w-75">En esta instancia del curso de python estamos empezando a implementar con condicionales y bucles, es un buen momento de implementar estas herramientas en problemas reales y empezar a desarrollar la resolución de problemas con lógica</p>
                  <h2 className="text-center mx-auto">Problema n°1 - validación de contraseña</h2>
                  <p className="text-center mx-auto w-75">Supongamos que le damos a elegir al usuario una contraseña para su cuenta y como requisito debe tener al menos una letra, un número y debe tener al menos un largo de 8 caracteres.</p>
                  <p className="text-center mx-auto w-75">Lo primero que podemos hacer es realizar un diagrama de flujo, Un diagrama de flujo es una representación gráfica de un algoritmo o proceso que utiliza símbolos y líneas para mostrar la secuencia de pasos o decisiones necesarios para resolver un problema. Los diagramas de flujo son una herramienta visual utilizada en programación y en otras disciplinas para planificar, analizar y comunicar la lógica de un proceso.</p>
                  <p className="text-center mx-auto w-75">Si vemos lo que nos indica el problema, vemos que nos dice que el usuario debe ingresar una contraseña para su cuenta.</p>
                  <img className="w-75 d-block mx-auto" alt="" src="../img/clase3/problem1-1.png"></img>
                  <p className="text-center mx-auto w-75">En el problema nos está diciendo que como requisito debe tener al menos una letra, un número y debe tener al menos un largo de 8 caracteres, por lo tanto estas van a ser condiciones que le tenemos que dar a este </p>
                  <img className="w-75 d-block mx-auto" alt="" src="../img/clase3/problem1-2.png"></img>
                  <p className="text-center mx-auto w-75">Si vemos lo que nos indica el problema, vemos que nos dice que el usuario debe ingresar una contraseña para su cuenta</p>
                  <img className="w-75 d-block mx-auto" alt="" src="../img/clase3/problem1-3.png"></img>
                </div>
              </div>
            </div>
            <div className="accordion-item mt-4 rounded-5" style={{ background: "#010483" }}>
              <button className="accordion-button collapsed bg-transparent" type="button">
                <Link to="/pythonClassFile/class2.py"
                  target={"_blank"}
                  download={"class3.py"}>
                  <h2 data-aos="fade-right" className="text-light">Descarga el archivo de la clase 3</h2>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Class3