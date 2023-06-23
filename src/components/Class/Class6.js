import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Class6 = () => {
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
                <h1>Clase 6: Estructuras de datos II: Diccionarios y conjuntos</h1>
                <h2>Diccionarios y conjuntos: definición y uso</h2>
                <h2>Manipulación de elementos en diccionarios y conjuntos</h2>
                <h2>Métodos de diccionarios y conjuntos</h2>
                <div className="text-center text-lg-start">
                  <a href="#clase6" className="btn-get-started scrollto">Contenido de la clase 6</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 order-1 order-lg-2 hero-img" data-aos="zoom-out" data-aos-delay="300">
              <img src="../img/python.png" className="img-fluid animated vh-60" alt="" />
            </div>
          </div>
        </div>
        <svg id="clase6" className="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28 " preserveAspectRatio="none">
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
            <h2>Clase 6</h2>
            <p>Contenido</p>
          </div>
          <div className="accordion accordion-flush w-100 mx-auto rounded-5" id="accordionFlushExample">
            <div data-aos="fade-right" className="accordion-item rounded-5" style={{ background: "#010483" }} >
              <button className="accordion-button collapsed bg-transparent text-light" pe="button" data-bs-toggle="collapse" data-bs-target="#a1" aria-expanded="false" aria-controls="flush-collapseOne">
                <h2 data-aos="fade-right">Diccionarios</h2>
              </button>
              <div id="a1" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                  <div className="accordion-body text-light">
                    <h2 data-aos="fade-right" className="text-light text-center">Definición y uso de diccionarios:</h2>
                    <p className="text-center mx-auto w-75">Un diccionario es una estructura de datos mutable y sin orden en Python. Está compuesto por pares clave-valor, donde cada clave es única y se utiliza para acceder a su respectivo valor.<br></br>Las claves en un diccionario pueden ser de tipo inmutable, como cadenas de texto, números o tuplas. Los valores pueden ser de cualquier tipo, incluyendo listas, diccionarios e incluso funciones.
                    </p>
                    <img className="w-75 d-block mx-auto mb-4" alt="" src="../img/class6/dict1.png"></img>
                    <h2 data-aos="fade-right" className="text-light text-center">Manipulación de elementos en diccionarios</h2>
                    <p className="text-center mx-auto w-75">Para acceder a un valor en un diccionario, utilizamos la clave correspondiente.</p>
                    <img className="w-75 d-block mx-auto mb-4" alt="" src="../img/class6/dict2.jpg"></img>
                    <h2 data-aos="fade-right" className="text-light text-center mt-4">Modificación de elementos</h2>
                    <p className="text-center mx-auto w-75">Las claves en un diccionario pueden ser de tipo inmutable, como cadenas de texto, números o tuplas. Los valores pueden ser de cualquier tipo, incluyendo listas, diccionarios e incluso funciones.</p>
                    <img className="w-75 d-block mx-auto" alt="" src="../img/class6/dict3.jpg"></img>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-right" className="accordion-item mt-4 rounded-5" style={{ background: "#010483" }}>
              <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a2" aria-expanded="false" aria-controls="flush-collapseThree">
                <h2 data-aos="fade-right" className="text-light">Métodos de diccionario</h2>
              </button>
              <div id="a2" className="accordion-collapse collapse bg-dark" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                  <h2 className="text-center mx-auto mt-4 ">keys()</h2>
                  <p className="text-center mx-auto w-75">El método keys() retorna una lista con todas las claves del diccionario.</p>
                  <img className="w-75 d-block mx-auto" alt="" src="../img/class6/dict4.jpg"></img>
                  <h2 className="text-center mx-auto mt-4 ">values()</h2>
                  <p className="text-center mx-auto w-75">El método values() Retorna una lista con todos los valores del diccionario.</p>
                  <img className="w-75 d-block mx-auto" alt="" src="../img/class6/dict5.jpg"></img>
                  <h2 className="text-center mx-auto mt-4 ">items()</h2>
                  <p className="text-center mx-auto w-75">El método items() retorna una lista de tuplas con los pares clave-valor del diccionario.</p>
                  <img className="w-75 d-block mx-auto" alt="" src="../img/class6/dict6.jpg"></img>
                  <h2 className="text-center mx-auto mt-4 ">get(clave, valor_predeterminado):</h2>
                  <p className="text-center mx-auto w-75">El método get() retorna el valor asociado a una clave, o un valor predeterminado si la clave no existe.</p>
                  <img className="w-75 d-block mx-auto" alt="" src="../img/class6/dict7.jpg"></img>
                  <h2 className="text-center mx-auto mt-4 ">update(diccionario2)</h2>
                  <p className="text-center mx-auto w-75">El método update(diccionario2) combina dos diccionarios, actualizando las claves existentes y agregando nuevas claves.</p>
                  <img className="w-75 d-block mx-auto" alt="" src="../img/class6/dict8.jpg"></img>
                  <h2 className="text-center mx-auto mt-4 ">pop()</h2>
                  <p className="text-center mx-auto w-75">el método pop(clave, [valor_predeterminado]) elimina y retorna el valor asociado a una clave. Si la clave no existe, se puede proporcionar un valor predeterminado opcional que se retornará en lugar de generar un error KeyError.</p>
                  <img className="w-75 d-block mx-auto" alt="" src="../img/class6/dict9.jpg"></img>
                  <h2 className="text-center mx-auto mt-4 ">popitem()</h2>
                  <p className="text-center mx-auto w-75">El método popitem() elimina y retorna un par clave-valor arbitrario del diccionario como una tupla. Útil cuando se desea eliminar elementos en un orden no específico.</p>
                  <img className="w-75 d-block mx-auto" alt="" src="../img/class6/dict10.jpg"></img>
                  <h2 className="text-center mx-auto mt-4 ">clear()</h2>
                  <p className="text-center mx-auto w-75">el método clear() elimina todos los pares clave-valor del diccionario, dejándolo vacío.</p>
                  <img className="w-75 d-block mx-auto" alt="" src="../img/class6/dict11.jpg"></img>
                  <h2 className="text-center mx-auto mt-4 ">copy()</h2>
                  <p className="text-center mx-auto w-75">El método copy() retorna una copia superficial del diccionario.</p>
                  <img className="w-75 d-block mx-auto" alt="" src="../img/class6/dcit12.jpg"></img>
                  <h2 className="text-center mx-auto mt-4 ">fromkeys()</h2>
                  <p className="text-center mx-auto w-75">El método fromkeys(iterable, [valor]) retorna un nuevo diccionario con las claves del iterable proporcionado y el mismo valor opcional para todas las claves.</p>
                  <img className="w-75 d-block mx-auto" alt="" src="../img/class6/dict13.jpg"></img>
                </div>
              </div>
            </div>
            <div data-aos="fade-right" className="accordion-item mt-4 rounded-5" style={{ background: "#010483" }}>
              <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a3" aria-expanded="false" aria-controls="flush-collapseThree">
                <h2 data-aos="fade-right" className="text-light">Conjuntos</h2>
              </button>
              <div id="a3" className="accordion-collapse collapse bg-dark" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                  <p className="text-center mx-auto w-75">
                    Además de tener métodos para utilizar en listas, también tenemos funciones que nos ayudan a la hora de manipular datos. Aquí te explicaré algunos de ellos:
                  </p>
                  <h2 className="text-center mx-auto mt-4 ">len()</h2>
                  <p className="text-center mx-auto w-75">len() te devuelve la cantidad de elementos que contiene la lista.</p>
                  <img className="w-75 d-block mx-auto" alt="" src="../img/class5/list13.png"></img>
                  <h2 className="text-center mx-auto mt-4 ">max()</h2>
                  <p className="text-center mx-auto w-75">max() te devuelve el valor del elemento más alto de la lista.</p>
                  <img className="w-75 d-block mx-auto" alt="" src="../img/class5/list14.png"></img>
                  <h2 className="text-center mx-auto mt-4 ">min()</h2>
                  <p className="text-center mx-auto w-75">min() te devuelve el valor del elemento más bajo de la lista.</p>
                  <img className="w-75 d-block mx-auto" alt="" src="../img/class5/list15.png"></img>
                  <h2 className="text-center mx-auto mt-4 ">sum()</h2>
                  <p className="text-center mx-auto w-75">sum() te devuelve la sumatoria de todos los elementos de la lista </p>
                  <img className="w-75 d-block mx-auto" alt="" src="../img/class5/list16.png"></img>
                  <h2 className="text-center mx-auto mt-4 ">sort() / sorted / reverse</h2>
                  <p className="text-center mx-auto w-75">sort() ordena los elementos de la lista de forma ascendente y modifica la lista original.<br></br>Sorted() crea una lista y ordena la lista de forma ascendente <br></br>Si deseas ordenar la lista en orden descendente, puedes utilizar el argumento reverse=True en el método sort() o sorted()</p>
                  <img className="w-75 d-block mx-auto" alt="" src="../img/class5/list17.png"></img>
                  <h2 className="text-center mx-auto mt-4 ">reversed()</h2>
                  <p className="text-center mx-auto w-75">reversed() ordena los elementos de la lista de forma descendente y no modifica la lista original.</p>
                  <img className="w-75 d-block mx-auto" alt="" src="../img/class5/list18.png"></img>
                </div>
              </div>
            </div>
            <div data-aos="fade-right" className="accordion-item mt-4 rounded-5" style={{ background: "#010483" }}>
              <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a4" aria-expanded="false" aria-controls="flush-collapseFour">
                <h2 data-aos="fade-right" className="text-light">Tuplas</h2>
              </button>
              <div id="a4" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                  <p className="text-center mx-auto w-75">
                    Una tupla en Python es una estructura de datos inmutable, lo que significa que no se pueden modificar una vez creadas. <br></br>Se utiliza para almacenar una colección ordenada de elementos heterogéneos, como números, cadenas de texto, booleanos, etc. <br></br>Las tuplas se definen utilizando paréntesis () y los elementos se separan por comas.</p>
                  <img className="w-75 d-block mx-auto" alt="" src="../img/class5/tupla1.png"></img>
                  <h2 className="text-center mx-auto mt-4 ">índice</h2>
                  <p className="text-center mx-auto w-75">Al igual que las listas, el operador de indexación [ ] permite acceder a elementos individuales de la tupla utilizando su índice. Por ejemplo, tupla[0] devuelve el primer elemento de la tupla.</p>
                  <img className="w-75 d-block mx-auto" alt="" src="../img/class5/tupla2.png"></img>
                  <h2 className="text-center mx-auto mt-4 ">segmentación</h2>
                  <p className="text-center mx-auto w-75">El operador de segmentación (:) permite acceder a un rango de elementos en la tupla. Por ejemplo, tupla[1:3] devuelve una nueva tupla que contiene los elementos desde el índice 1 hasta el índice 2.</p>
                  <img className="w-75 d-block mx-auto" alt="" src="../img/class5/tupla3.png"></img>
                  <h2 className="text-center mx-auto mt-4 ">concatenación</h2>
                  <p className="text-center mx-auto w-75">El operador de concatenación (+) permite concatenar dos o más tuplas para crear una nueva tupla que contenga todos los elementos de las tuplas originales en el mismo orden.</p>
                  <img className="w-75 d-block mx-auto" alt="" src="../img/class5/tupla4.png"></img>
                  <h2 className="text-center mx-auto mt-4 ">repetición</h2>
                  <p className="text-center mx-auto w-75">El operador de multiplicación (*) permite repetir una tupla múltiples veces para crear una nueva tupla que contenga las repeticiones de los elementos originales.</p>
                  <img className="w-75 d-block mx-auto" alt="" src="../img/class5/tupla5.png"></img>
                  <h2 className="text-center mx-auto mt-4 ">conversión tupla - lista / lista - tupla</h2>
                  <p className="text-center mx-auto w-75">Si necesitas realizar operaciones más avanzadas con tuplas, como ordenar, filtrar o modificar elementos, es posible convertir la tupla en una lista utilizando el método list(), realizar las operaciones necesarias y luego convertir la lista resultante nuevamente en una tupla utilizando el método tuple().</p>
                  <img className="w-75 d-block mx-auto" alt="" src="../img/class5/tupla6.png"></img>
                  <p className="text-center mx-auto w-75">Como había explicado anteriormente, las tuplas son estructuras de datos inmutables, lo que significa que no se pueden modificar una vez creadas. Debido a esto, las tuplas tienen un conjunto limitado de métodos incorporados en comparación con las listas. Los únicos métodos disponibles para las tuplas son conunt() y index</p>
                </div>
              </div>
            </div>
            <div data-aos="fade-right" className="accordion-item mt-4 rounded-5" style={{ background: "#010483" }}>
              <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a5" aria-expanded="false" aria-controls="flush-collapseFive">
                <h2 data-aos="fade-right" className="text-light">For</h2>
              </button>
              <div id="a5" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                  <p className="text-center mx-auto w-75" style={{ marginBottom: "7rem" }} > El bucle for se utiliza para iterar sobre una secuencia de elementos, como una lista, una cadena de texto, un rango de números, entre otros. En cada iteración, el bucle for asigna el siguiente elemento de la secuencia a una variable y ejecuta el bloque de código. Aquí tienes unos ejemplos:</p>
                  <h2 className="text-center mx-auto mt-4">Bucle for en cadena de texto</h2>
                  <img className="w-75 d-block mx-auto mb-4 pb-4" alt="" src="../img/class3/for1.webp"></img>
                  <img className="w-75 d-block mx-auto mt-4 pt-4" alt="" src="../img/class3/for2.webp" style={{ marginBottom: "7rem" }} ></img>
                  <h2 data-aos="fade-right" className="text-center mx-auto mt-4">Bucle for en rango de números</h2>
                  <img className="w-75 d-block mx-auto" alt="" src="../img/class3/for3.webp" style={{ marginBottom: "7rem" }} ></img>
                  <h2 data-aos="fade-right" className="text-center mx-auto mt-4">Bucle for en listas</h2>
                  <img className="w-75 d-block mx-auto" alt="" src="../img/class3/for4.webp" style={{ marginBottom: "7rem" }} ></img>
                </div>
              </div>
            </div>
            <div data-aos="fade-right" className="accordion-item mt-4 rounded-5" style={{ background: "#010483" }}>
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
                  <img className="w-75 d-block mx-auto" alt="" src="../img/class3/problem1-1.webp"></img>
                  <p className="text-center mx-auto w-75">En el problema nos está diciendo que como requisito debe tener al menos una letra, un número y debe tener al menos un largo de 8 caracteres, por lo tanto estas van a ser condiciones que le tenemos que dar a este </p>
                  <img className="w-75 d-block mx-auto" alt="" src="../img/class3/problem1-2.webp"></img>
                  <p className="text-center mx-auto w-75">Si vemos lo que nos indica el problema, vemos que nos dice que el usuario debe ingresar una contraseña para su cuenta</p>
                  <img className="w-75 d-block mx-auto" alt="" src="../img/class3/problem1-3.webp"></img>
                </div>
              </div>
            </div>
            <div data-aos="fade-right" className="accordion-item mt-4 rounded-5" style={{ background: "#010483" }}>
              <button className="accordion-button collapsed bg-transparent" type="button">
                <Link to="/pythonClassFile/"
                  target={"_blank"}
                  download={"class5.py"}>
                  <h2 data-aos="fade-right" className="text-light">Descarga el archivo de la clase 6</h2>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Class6