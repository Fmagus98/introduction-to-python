import React, { useEffect, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../../Utils/firebase'
import { collection, getDocs } from 'firebase/firestore'
import { colorPrimaryPython } from '../../colors'
import useScrollAnimation from '../../useScrollAnimation'
import { CopyButton } from '../CopyButton/CopyButton'
import { class3Code, class5Code } from './classCode'
import QuizForm from '../QuizForm/QuizForm';

const Class5 = () => {
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
      {(new Date() >= new Date(course?.[4]?.date || '')) || localStorage.getItem("access") ?
        <>
          <section id="hero" style={{ background: colorPrimaryPython }}>
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
                  <div>
                    <h1>Clase 5: Listas y tuplas</h1>
                    <h2>Definición y uso de listas y tuplas</h2>
                    <h2>Manipulación de elementos</h2>
                    <h2>Métodos</h2>
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
          <section className="section-bg">
            <div className="container">
              <div id="element1" className={`section-title animated-down ${elementVisibility.element1 ? 'slide-down' : ''}`} >
                <h2>Clase 5</h2>
                <p>Contenido</p>
              </div>
              <div className="accordion accordion-flush w-100 mx-auto rounded-5" id="accordionFlushExample">
                <div id="element2" className={`rounded-5 animated-left ${elementVisibility.element2 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }} >
                  <button className="accordion-button collapsed bg-transparent text-light" type="button" data-bs-toggle="collapse" data-bs-target="#a1" aria-expanded="false" aria-controls="flush-collapseOne">
                    <h2>Listas</h2>
                  </button>
                  <div id="a1" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body text-light bg-dark ">
                      <div className="accordion-body text-light">
                        <p className="text-break mx-auto mt-4 w-75">Una lista en Python es una estructura de datos que permite almacenar múltiples elementos en un solo objeto. <br></br>Puedes considerar una lista como una secuencia ordenada de elementos que pueden ser de diferentes tipos, como números, cadenas de texto, booleanos e incluso otras listas. Se definen utilizando corchetes [ ] y los elementos se separan por comas.</p>
                        <CopyButton code={class5Code[0]} />
                        <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/class5/list1.webp"></img>
                        <h3 className="text-break w-75 mx-auto">índice</h3>
                        <p className="text-break mx-auto w-75">Puedes acceder a los elementos de una lista utilizando índices, donde el primer elemento tiene un índice de 0. Por ejemplo, numeros[7] te daría el octavo elemento de la lista.</p>
                        <CopyButton code={class5Code[1]} />
                        <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/class5/list2.webp"></img>
                        <h3 className="text-break w-75 mx-auto">Modificación de elementos</h3>
                        <p className="text-break mx-auto w-75">Puedes modificar el valor de un elemento en una lista utilizando el índice correspondiente.</p>
                        <CopyButton code={class5Code[2]} />
                        <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/class5/list3.webp"></img>
                        <h3 className="text-break w-75 mx-auto">Segmentación - slicing:</h3>
                        <p className="text-break mx-auto w-75">Puedes acceder a subconjuntos de elementos en una lista utilizando la técnica de slicing. Esto te permite obtener porciones de una lista basándote en índices.</p>
                        <CopyButton code={class5Code[3]} />
                        <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/class5/list4.webp"></img>
                        <h3 className="text-break w-75 mx-auto">Copia de lista</h3>
                        <p className="text-break mx-auto w-75">Para crear una copia de un diccionario en Python, puedes utilizar el método copy() o el constructor list(). Ambos métodos crean una nueva copia de la lista original.</p>
                        <CopyButton code={class5Code[4]} />
                        <img className="w-75 d-block mx-auto border-content" style={{ marginBottom: "7rem" }} alt="" src="../img/class5/list5.webp"></img>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="element3" className={`mt-4 rounded-5 animated-left ${elementVisibility.element3 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
                  <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a2" aria-expanded="false" aria-controls="flush-collapseThree">
                    <h2 className="text-light">Métodos de lista</h2>
                  </button>
                  <div id="a2" className="accordion-collapse collapse bg-dark" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body text-light bg-dark ">
                      <p className="text-break mx-auto w-75">Las listas en Python tienen varios métodos integrados que facilitan su manipulación.</p>
                      <h3 className="text-break w-75 mx-auto">append() / extend()</h3>
                      <p className="text-break mx-auto w-75">El método append() es una función incorporada de Python que se utiliza para agregar un elemento al final de una lista existente. Toma un argumento y lo agrega como un nuevo elemento al final de la lista.</p>
                      <p className="text-break mx-auto w-75">Ten en cuenta que append() modifica la lista existente y no devuelve una nueva lista. Si deseas agregar múltiples elementos a la lista al mismo tiempo, puedes utilizar el método extend(). Aquí tiene un ejemplo de estos métodos:</p>
                      <CopyButton code={class5Code[5]} />
                      <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/class5/list6.webp"></img>
                      <h3 className="text-break w-75 mx-auto">insert()</h3>
                      <p className="text-break mx-auto w-75">Inserta un elemento en una posición específica de la lista.</p>
                      <CopyButton code={class5Code[6]} />
                      <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/class5/list7.webp"></img>
                      <h3 className="text-break w-75 mx-auto">remove()</h3>
                      <p className="text-break mx-auto w-75">Elimina la primera aparición de un elemento en la lista.</p>
                      <CopyButton code={class5Code[7]} />
                      <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/class5/list8.webp"></img>
                      <h3 className="text-break w-75 mx-auto">pop()</h3>
                      <p className="text-break mx-auto w-75">Se utiliza para eliminar el último elemento o un elemento en una posición específica de la lista.</p>
                      <CopyButton code={class5Code[8]} />
                      <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/class5/list9.webp"></img>
                      <h3 className="text-break w-75 mx-auto">index()</h3>
                      <p className="text-break mx-auto w-75">Devuelve el índice de la primera aparición de un elemento en la lista.</p>
                      <CopyButton code={class5Code[9]} />
                      <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/class5/list10.webp"></img>
                      <h3 className="text-break w-75 mx-auto">count()</h3>
                      <p className="text-break mx-auto w-75">Devuelve el número de veces que un elemento aparece en la lista.</p>
                      <CopyButton code={class5Code[10]} />
                      <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/class5/list11.webp"></img>
                      <h3 className="text-break w-75 mx-auto">clear()</h3>
                      <p className="text-break mx-auto w-75">Elimina todos los elementos en la lista.</p>
                      <CopyButton code={class5Code[11]} />
                      <img className="w-75 d-block mx-auto border-content" style={{ marginBottom: "7rem" }} alt="" src="../img/class5/list12.webp"></img>
                    </div>
                  </div>
                </div>
                <div id="element4" className={`mt-4 rounded-5 animated-left ${elementVisibility.element4 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
                  <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a3" aria-expanded="false" aria-controls="flush-collapseThree">
                    <h2 className="text-light">Funciones en listas</h2>
                  </button>
                  <div id="a3" className="accordion-collapse collapse bg-dark" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body text-light bg-dark ">
                      <p className="text-break mx-auto w-75">
                        Además de tener métodos para utilizar en listas, también tenemos funciones que nos ayudan a la hora de manipular datos. Aquí te explicaré algunos de ellos:
                      </p>
                      <h3 className="text-break w-75 mx-auto">len()</h3>
                      <p className="text-break mx-auto w-75">len() te devuelve la cantidad de elementos que contiene la lista.</p>
                      <CopyButton code={class5Code[12]}/>
                      <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/class5/list13.webp"></img>
                      <h3 className="text-break w-75 mx-auto">max()</h3>
                      <p className="text-break mx-auto w-75">max() te devuelve el valor del elemento más alto de la lista.</p>
                      <CopyButton code={class5Code[13]}/>
                      <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/class5/list14.webp"></img>
                      <h3 className="text-break w-75 mx-auto">min()</h3>
                      <p className="text-break mx-auto w-75">min() te devuelve el valor del elemento más bajo de la lista.</p>
                      <CopyButton code={class5Code[14]}/>
                      <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/class5/list15.webp"></img>
                      <h3 className="text-break w-75 mx-auto">sum()</h3>
                      <p className="text-break mx-auto w-75">sum() te devuelve la sumatoria de todos los elementos de la lista </p>
                      <CopyButton code={class5Code[15]}/>
                      <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/class5/list16.webp"></img>
                      <h3 className="text-break w-75 mx-auto">sort() / sorted / reverse</h3>
                      <p className="text-break mx-auto w-75">sort() ordena los elementos de la lista de forma ascendente y modifica la lista original.<br></br>Sorted() crea una lista y ordena la lista de forma ascendente <br></br>Si deseas ordenar la lista en orden descendente, puedes utilizar el argumento reverse=True en el método sort() o sorted()</p>
                      <CopyButton code={class5Code[16]}/>
                      <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/class5/list17.webp"></img>
                      <CopyButton code={class5Code[17]}/>
                      <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/class5/list18.webp"></img>
                      <h3 className="text-break w-75 mx-auto">reversed()</h3>
                      <p className="text-break mx-auto w-75">reversed() ordena los elementos de la lista de forma descendente y no modifica la lista original.</p>
                      <CopyButton code={class5Code[18]}/>
                      <img className="w-75 d-block mx-auto border-content" style={{ marginBottom: "7rem" }} alt="" src="../img/class5/list19.webp"></img>
                    </div>
                  </div>
                </div>
                <div id="element5" className={`mt-4 rounded-5 animated-left ${elementVisibility.element5 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
                  <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a4" aria-expanded="false" aria-controls="flush-collapseFour">
                    <h2 className="text-light">Tuplas</h2>
                  </button>
                  <div id="a4" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body text-light bg-dark ">
                      <p className="text-break mx-auto w-75 mt-4">
                        Una tupla en Python es una estructura de datos inmutable, lo que significa que no se pueden modificar una vez creadas. <br></br>Se utiliza para almacenar una colección ordenada de elementos heterogéneos, como números, cadenas de texto, booleanos, etc. <br></br>Las tuplas se definen utilizando paréntesis () y los elementos se separan por comas.</p>
                        <CopyButton code={class5Code[19]} />
                      <img className="w-75 d-block mx-auto border-content" alt="" src="../img/class5/tupla1.webp"></img>
                      <h3 className="text-break mx-auto w-75 mt-4 ">índice</h3>
                      <p className="text-break mx-auto w-75">Al igual que las listas, el operador de indexación [ ] permite acceder a elementos individuales de la tupla utilizando su índice. Por ejemplo, tupla[0] devuelve el primer elemento de la tupla.</p>
                      <CopyButton code={class5Code[20]} />
                      <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/class5/tupla2.webp"></img>
                      <h3 className="text-break w-75 mx-auto">segmentación</h3>
                      <p className="text-break mx-auto w-75">El operador de segmentación (:) permite acceder a un rango de elementos en la tupla. Por ejemplo, tupla[1:3] devuelve una nueva tupla que contiene los elementos desde el índice 1 hasta el índice 2.</p>
                      <CopyButton code={class5Code[21]} />
                      <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/class5/tupla3.webp"></img>
                      <h3 className="text-break w-75 mx-auto">concatenación</h3>
                      <p className="text-break mx-auto w-75">El operador de concatenación (+) permite concatenar dos o más tuplas para crear una nueva tupla que contenga todos los elementos de las tuplas originales en el mismo orden.</p>
                      <CopyButton code={class5Code[22]} />
                      <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/class5/tupla4.webp"></img>
                      <h3 className="text-break w-75 mx-auto">repetición</h3>
                      <p className="text-break mx-auto w-75">El operador de multiplicación (*) permite repetir una tupla múltiples veces para crear una nueva tupla que contenga las repeticiones de los elementos originales.</p>
                      <CopyButton code={class5Code[23]} />
                      <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/class5/tupla5.webp"></img>
                      <h3 className="text-break w-75 mx-auto">conversión tupla - lista / lista - tupla</h3>
                      <p className="text-break mx-auto w-75">Si necesitas realizar operaciones más avanzadas con tuplas, como ordenar, filtrar o modificar elementos, es posible convertir la tupla en una lista utilizando el método list(), realizar las operaciones necesarias y luego convertir la lista resultante nuevamente en una tupla utilizando el método tuple().</p>
                      <CopyButton code={class5Code[24]} />
                      <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/class5/tupla6.webp"></img>
                      <p className="text-break mx-auto w-75" style={{ marginBottom: "7rem" }}>Como había explicado anteriormente, las tuplas son estructuras de datos inmutables, lo que significa que no se pueden modificar una vez creadas. Debido a esto, las tuplas tienen un conjunto limitado de métodos incorporados en comparación con las listas. Los únicos métodos disponibles para las tuplas son conunt() y index</p>
                    </div>
                  </div>
                </div>
                <div id="element6" className={`mt-4 rounded-5 animated-left ${elementVisibility.element6 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
                  <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a5" aria-expanded="false" aria-controls="flush-collapseFive">
                    <h2 className="text-light">For</h2>
                  </button>
                  <div id="a5" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body text-light bg-dark ">
                      <p className="text-break mx-auto w-75 mt-4">El bucle for se utiliza para iterar sobre una secuencia de elementos, como una lista, una cadena de texto, un rango de números, entre otros. En cada iteración, el bucle for asigna el siguiente elemento de la secuencia a una variable y ejecuta el bloque de código.</p>
                      <h3 className="text-break mx-auto w-75 mt-4">Bucle for en listas</h3>
                      <CopyButton code={class3Code[9]} />
                      <img className="w-75 d-block mx-auto border-content" alt="" src="../img/class3/for4.webp"></img>
                      <h3 className="text-break mx-auto w-75 mt-4">Bucle for en tuplas</h3>
                      <CopyButton code={class3Code[10]} />
                      <img className="w-75 d-block mx-auto border-content" alt="" src="../img/class3/for5.webp" style={{ marginBottom: "7rem" }} ></img>
                    </div>
                  </div>
                </div>
                <div id="element7" className={`mt-4 rounded-5 animated-left ${elementVisibility.element7 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
                  <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a6" aria-expanded="false" aria-controls="flush-collapseFive">
                    <h2 className="text-light">Evaluación de Conocimientos: Clase 5 - Listas y tuplas en python</h2>
                  </button>
                  <div id="a6" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body text-light bg-dark ">
                     <QuizForm />
                        </div>
                  </div>
                </div>
                <div id="element8" className={`mt-4 rounded-5 animated-left ${elementVisibility.element7 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
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
        <section id="hero" style={{ background: colorPrimaryPython }}>
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
                <div>
                  <h1>Clase 5: Listas y tuplas</h1>
                  <h2>Definición y uso de listas y tuplas</h2>
                  <h2>Manipulación de elementos</h2>
                  <h2>Métodos</h2>
                  <div className="text-center text-lg-start">
                    <a href="#clase1" className="btn-get-started scrollto">tendrás acceso al curso el {new Date(course?.[4]?.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</a>
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
