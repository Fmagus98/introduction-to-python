import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../../Utils/firebase'
import { collection, getDocs } from 'firebase/firestore'
import { colorPrimaryPython } from '../../colors'
import useScrollAnimation from '../../useScrollAnimation'

const Class5 = () => {

  const elementVisibility = useScrollAnimation()
  const [date, setDate] = useState()
  const newDate = new Date()
  useEffect(() => {
    getDocs(collection(db, "course")).then(response => {
      response.docs.map(doc => {
        if (doc.id === "gHRanIzZrKbdu1K8Qb4x") {
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
                    <h1>Clase 5: Estructuras de datos I: Listas y tuplas</h1>
                    <h2>Listas y tuplas: definición y uso</h2>
                    <h2>Manipulación de elementos en listas y tuplas</h2>
                    <h2>Métodos de listas y tuplas</h2>
                    <div className="text-center text-lg-start">
                      <a href="#clase5" className="btn-get-started scrollto">Contenido de la clase 5</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 order-1 order-lg-2 hero-img" >
                  <img src="../img/python.png" className="img-fluid animated vh-60" alt="" />
                </div>
              </div>
            </div>
            <svg id="clase5" className="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28 " preserveAspectRatio="none">
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
                <h2>Clase 5</h2>
                <p>Contenido</p>
              </div>
              <div className="accordion accordion-flush w-100 mx-auto rounded-5" id="accordionFlushExample">
                <div id="element2" className={`rounded-5 animated-left ${elementVisibility.element2 ? 'slide-left' : ''}`}  style={{ background: colorPrimaryPython , borderRadius: "40px" }} >
                  <button className="accordion-button collapsed bg-transparent text-light" type="button" data-bs-toggle="collapse" data-bs-target="#a1" aria-expanded="false" aria-controls="flush-collapseOne">
                    <h2>Listas</h2>
                  </button>
                  <div id="a1" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                      <div className="accordion-body text-light">
                        <h2 className="text-light text-center">Descripción de lista</h2>
                        <p className="text-center mx-auto w-75">Una lista en Python es una estructura de datos que permite almacenar múltiples elementos en un solo objeto. <br></br>Puedes considerar una lista como una secuencia ordenada de elementos que pueden ser de diferentes tipos, como números, cadenas de texto, booleanos e incluso otras listas. Se definen utilizando corchetes [ ] y los elementos se separan por comas.</p>
                        <img className="w-75 d-block mx-auto mb-4" alt="" src="../img/class5/list1.png"></img>
                        <h2 className="text-light text-center">índice</h2>
                        <p className="text-center mx-auto w-75">Puedes acceder a los elementos de una lista utilizando índices, donde el primer elemento tiene un índice de 0. Por ejemplo, numeros[7] te daría el octavo elemento de la lista.</p>
                        <img className="w-75 d-block mx-auto" alt="" src="../img/class5/list2.png"></img>
                        <h2 className="text-light text-center">Modificación de elementos</h2>
                        <p className="text-center mx-auto w-75">Puedes modificar el valor de un elemento en una lista utilizando el índice correspondiente.</p>
                        <img className="w-75 d-block mx-auto" alt="" src="../img/class5/list3.png"></img>
                        <h2 className="text-light text-center">segmentación - slicing:</h2>
                        <p className="text-center mx-auto w-75">Puedes acceder a subconjuntos de elementos en una lista utilizando la técnica de slicing. Esto te permite obtener porciones de una lista basándote en índices.</p>
                        <img className="w-75 d-block mx-auto" alt="" src="../img/class5/list4.png"></img>
                        <h2  className="text-light text-center">Copia de lista</h2>
                        <p className="text-center mx-auto w-75">Para crear una copia de un diccionario en Python, puedes utilizar el método copy() o el constructor list(). Ambos métodos crean una nueva copia de la lista original.</p>
                        <img className="w-75 d-block mx-auto" alt="" src="../img/class5/list5.png"></img>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="element3" className={`mt-4 rounded-5 animated-left ${elementVisibility.element3 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython , borderRadius: "40px" }}>
                  <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a2" aria-expanded="false" aria-controls="flush-collapseThree">
                    <h2 className="text-light">Métodos de lista</h2>
                  </button>
                  <div id="a2" className="accordion-collapse collapse bg-dark" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                      <p className="text-center mx-auto w-75">Las listas en Python tienen varios métodos integrados que facilitan su manipulación.</p>
                      <h2 className="text-center mx-auto mt-4 ">append() / extend()</h2>
                      <p className="text-center mx-auto w-75">El método append() es una función incorporada de Python que se utiliza para agregar un elemento al final de una lista existente. Toma un argumento y lo agrega como un nuevo elemento al final de la lista.</p>
                      <p className="text-center mx-auto w-75">Ten en cuenta que append() modifica la lista existente y no devuelve una nueva lista. Si deseas agregar múltiples elementos a la lista al mismo tiempo, puedes utilizar el método extend(). Aquí tiene un ejemplo de estos métodos:</p>
                      <img className="w-75 d-block mx-auto" alt="" src="../img/class5/list6.png"></img>
                      <h2 className="text-center mx-auto mt-4 ">insert()</h2>
                      <p className="text-center mx-auto w-75">Inserta un elemento en una posición específica de la lista.</p>
                      <img className="w-75 d-block mx-auto" alt="" src="../img/class5/list7.png"></img>
                      <h2 className="text-center mx-auto mt-4 ">remove()</h2>
                      <p className="text-center mx-auto w-75">Elimina la primera aparición de un elemento en la lista.</p>
                      <img className="w-75 d-block mx-auto" alt="" src="../img/class5/list8.png"></img>
                      <h2 className="text-center mx-auto mt-4 ">pop()</h2>
                      <p className="text-center mx-auto w-75">Se utiliza para eliminar el último elemento o un elemento en una posición específica de la lista.</p>
                      <img className="w-75 d-block mx-auto" alt="" src="../img/class5/list9.png"></img>
                      <h2 className="text-center mx-auto mt-4 ">index()</h2>
                      <p className="text-center mx-auto w-75">Devuelve el índice de la primera aparición de un elemento en la lista.</p>
                      <img className="w-75 d-block mx-auto" alt="" src="../img/class5/list10.png"></img>
                      <h2 className="text-center mx-auto mt-4 ">count()</h2>
                      <p className="text-center mx-auto w-75">Devuelve el número de veces que un elemento aparece en la lista.</p>
                      <img className="w-75 d-block mx-auto" alt="" src="../img/class5/list11.png"></img>
                      <h2 className="text-center mx-auto mt-4 ">clear()</h2>
                      <p className="text-center mx-auto w-75">Elimina todos los elementos en la lista.</p>
                      <img className="w-75 d-block mx-auto" alt="" src="../img/class3/list12.png"></img>
                    </div>
                  </div>
                </div>
                <div id="element4" className={`mt-4 rounded-5 animated-left ${elementVisibility.element4 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython , borderRadius: "40px" }}>
                  <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a3" aria-expanded="false" aria-controls="flush-collapseThree">
                    <h2 className="text-light">Funciones en listas</h2>
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
                <div id="element5" className={`mt-4 rounded-5 animated-left ${elementVisibility.element5 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython , borderRadius: "40px" }}>
                  <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a4" aria-expanded="false" aria-controls="flush-collapseFour">
                    <h2 className="text-light">Tuplas</h2>
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
                <div id="element6" className={`mt-4 rounded-5 animated-left ${elementVisibility.element6 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython , borderRadius: "40px" }}>
                  <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a5" aria-expanded="false" aria-controls="flush-collapseFive">
                    <h2 className="text-light">For</h2>
                  </button>
                  <div id="a5" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                      <p className="text-center mx-auto w-75">El bucle for se utiliza para iterar sobre una secuencia de elementos, como una lista, una cadena de texto, un rango de números, entre otros. En cada iteración, el bucle for asigna el siguiente elemento de la secuencia a una variable y ejecuta el bloque de código.</p>
                      <h2 className="text-center mx-auto mt-4">Bucle for en listas</h2>
                      <img className="w-75 d-block mx-auto" alt="" src="../img/class3/for4.webp" style={{ marginBottom: "7rem" }} ></img>
                      <h2 className="text-center mx-auto mt-4">Bucle for en tuplas</h2>
                      <img className="w-75 d-block mx-auto" alt="" src="../img/class3/for5.webp" style={{ marginBottom: "7rem" }} ></img>
                    </div>
                  </div>
                </div>
                <div id="element7" className={`mt-4 rounded-5 animated-left ${elementVisibility.element7 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython , borderRadius: "40px" }}>
                  <Link to="/pythonClassFile/class5.py"
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
        </>
        :
        <section id="hero">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
                <div>
                  <h1>Clase 5: Estructuras de datos I: Listas y tuplas</h1>
                  <h2>Listas y tuplas: definición y uso</h2>
                  <h2>Manipulación de elementos en listas y tuplas</h2>
                  <h2>Métodos de listas y tuplas</h2>
                  <div className="text-center text-lg-start">
                    <a href="#clase1" className="btn-get-started scrollto">tendrás acceso al curso el {new Date(date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</a>
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
      }
    </>
  )
}
export default Class5
