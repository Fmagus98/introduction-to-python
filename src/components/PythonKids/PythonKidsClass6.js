import React, { useEffect, useState, useCallback } from 'react'
import { Link } from 'react-router-dom';
import { db } from '../../Utils/firebase'
import { collection, getDocs } from 'firebase/firestore'
import { colorPrimaryPythonKids, colorSecondaryPythonKids } from '../../colors'
import useScrollAnimation from '../../useScrollAnimation'
import { CopyButton } from '../CopyButton/CopyButton'
import { pythonKidsClass6Code } from './pythonKidsClassCode'
import QuizForm from '../QuizForm/QuizForm';

const PythonKidsClass6 = () => {

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
      {(new Date() >= new Date(course?.[5]?.date || '')) || localStorage.getItem("access") ?
        <>
          <section id="hero" style={{ background: colorPrimaryPythonKids }}>
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
                  <div>
                    <h1>Clase 6: Diccionarios y conjuntos</h1>
                    <h2>Definición y uso</h2>
                    <h2>Manipulación de elementos</h2>
                    <h2>Métodos</h2>
                    <div className="text-center text-lg-start">
                      <a href="#class6" className={`btn-get-started scrollto python-theme`} style={{background:colorSecondaryPythonKids}}>Contenido de la Clase 6</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 order-1 order-lg-2 hero-img" >
                  <img src="../../img/python.png" className="img-fluid animated vh-60" alt="" />
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
              <g id="class6" className="wave2">
                <use xlinkHref="#wave-path" x="50" y="0" fill="rgba(255,255,255, .2)" />
              </g>
              <g className="wave3">
                <use xlinkHref="#wave-path" x="50" y="9" fill="#fff" />
              </g>
            </svg>
          </section>
          <section className="section-bg">
            <div className="container">
              <div id="element1" className={`section-title animated-left ${elementVisibility.element1 ? 'slide-left' : ''}`} >
                <h2>Clase 6</h2>
                <p>Contenido</p>
              </div>
              <div className="accordion accordion-flush w-100 mx-auto rounded-5" id="accordionFlushExample">
                <div id="element2" className={`rounded-5 animated-left ${elementVisibility.element2 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPythonKids, borderRadius: "40px" }} >
                  <button className="accordion-button collapsed bg-transparent text-light" type="button" data-bs-toggle="collapse" data-bs-target="#a1" aria-expanded="false" aria-controls="flush-collapseOne">
                    <h2>Diccionarios</h2>
                  </button>
                  <div id="a1" className="accordion-collapse collapse" >
                    <div className="accordion-body text-light bg-dark ">
                      <div className="accordion-body text-light">
                        <h3 className="text-break w-75 mx-auto mt-4">Definición y uso de diccionarios:</h3>
                        <p className="text-break mx-auto w-75">Un diccionario es una estructura de datos mutable y sin orden en Python. Está compuesto por pares clave-valor, donde cada clave es única y se utiliza para acceder a su respectivo valor.<br></br>Las claves en un diccionario pueden ser de tipo inmutable, como cadenas de texto, números o tuplas. Los valores pueden ser de cualquier tipo, incluyendo listas, diccionarios e incluso funciones.</p>
                        <CopyButton code={pythonKidsClass6Code[0]} />
                        <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class6/dict1.webp"></img>
                        <h3 className="text-break w-75 mx-auto">Manipulación de elementos en diccionarios</h3>
                        <p className="text-break mx-auto w-75">Para acceder a un valor en un diccionario, utilizamos la clave correspondiente.</p>
                        <CopyButton code={pythonKidsClass6Code[1]} />
                        <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class6/dict2.webp"></img>
                        <h3 className="text-break w-75 mx-auto">Modificación de elementos</h3>
                        <p className="text-break mx-auto w-75">Las claves en un diccionario pueden ser de tipo inmutable, como cadenas de texto, números o tuplas. Los valores pueden ser de cualquier tipo, incluyendo listas, diccionarios e incluso funciones.</p>
                        <CopyButton code={pythonKidsClass6Code[2]} />
                        <img className="w-75 d-block mx-auto border-content" style={{ marginBottom: "7rem" }} alt="" src="../../img/class6/dict3.webp"></img>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="element3" className={`mt-4 rounded-5 animated-left ${elementVisibility.element3 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPythonKids, borderRadius: "40px" }}>
                  <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a2" aria-expanded="false" aria-controls="flush-collapseThree">
                    <h2 className="text-light">Métodos de diccionario</h2>
                  </button>
                  <div id="a2" className="accordion-collapse collapse bg-dark" >
                    <div className="accordion-body text-light bg-dark ">
                      <h3 className="text-break mx-auto w-75 mt-4">keys()</h3>
                      <p className="text-break mx-auto w-75">El método keys() retorna una lista con todas las claves del diccionario.</p>
                      <CopyButton code={pythonKidsClass6Code[3]} />
                      <img className="w-75 d-block mx-auto border-content" alt="" src="../../img/class6/dict4.webp"></img>
                      <h3 className="text-break mx-auto w-75 mt-4">values()</h3>
                      <p className="text-break mx-auto w-75">El método values() Retorna una lista con todos los valores del diccionario.</p>
                      <CopyButton code={pythonKidsClass6Code[4]} />
                      <img className="w-75 d-block mx-auto border-content" alt="" src="../../img/class6/dict5.webp"></img>
                      <h3 className="text-break mx-auto w-75 mt-4">items()</h3>
                      <p className="text-break mx-auto w-75">El método items() retorna una lista de tuplas con los pares clave-valor del diccionario.</p>
                      <CopyButton code={pythonKidsClass6Code[5]} />
                      <img className="w-75 d-block mx-auto border-content" alt="" src="../../img/class6/dict6.webp"></img>
                      <h3 className="text-break mx-auto w-75 mt-4">get(clave, valor_predeterminado):</h3>
                      <p className="text-break mx-auto w-75">El método get() retorna el valor asociado a una clave, o un valor predeterminado si la clave no existe.</p>
                      <CopyButton code={pythonKidsClass6Code[6]} />
                      <img className="w-75 d-block mx-auto border-content" alt="" src="../../img/class6/dict7.webp"></img>
                      <h3 className="text-break mx-auto w-75 mt-4">update(diccionario2)</h3>
                      <p className="text-break mx-auto w-75">El método update(diccionario2) combina dos diccionarios, actualizando las claves existentes y agregando nuevas claves.</p>
                      <CopyButton code={pythonKidsClass6Code[7]} />
                      <img className="w-75 d-block mx-auto border-content" alt="" src="../../img/class6/dict8.webp"></img>
                      <h3 className="text-break mx-auto w-75 mt-4">pop()</h3>
                      <p className="text-break mx-auto w-75">el método pop(clave, [valor_predeterminado]) elimina y retorna el valor asociado a una clave. Si la clave no existe, se puede proporcionar un valor predeterminado opcional que se retornará en lugar de generar un error KeyError.</p>
                      <CopyButton code={pythonKidsClass6Code[8]} />
                      <img className="w-75 d-block mx-auto border-content" alt="" src="../../img/class6/dict9.webp"></img>
                      <h3 className="text-break mx-auto w-75 mt-4">popitem()</h3>
                      <p className="text-break mx-auto w-75">El método popitem() elimina y retorna un par clave-valor arbitrario del diccionario como una tupla. Útil cuando se desea eliminar elementos en un orden no específico.</p>
                      <CopyButton code={pythonKidsClass6Code[9]} />
                      <img className="w-75 d-block mx-auto border-content" alt="" src="../../img/class6/dict10.webp"></img>
                      <h3 className="text-break mx-auto w-75 mt-4 ">clear()</h3>
                      <p className="text-break mx-auto w-75">el método clear() elimina todos los pares clave-valor del diccionario, dejándolo vacío.</p>
                      <CopyButton code={pythonKidsClass6Code[10]} />
                      <img className="w-75 d-block mx-auto border-content" alt="" src="../../img/class6/dict11.webp"></img>
                      <h3 className="text-break mx-auto w-75 mt-4 ">copy()</h3>
                      <p className="text-break mx-auto w-75">El método copy() retorna una copia superficial del diccionario.</p>
                      <CopyButton code={pythonKidsClass6Code[11]} />
                      <img className="w-75 d-block mx-auto border-content" alt="" src="../../img/class6/dict12.webp"></img>
                      <h3 className="text-break mx-auto w-75 mt-4">fromkeys()</h3>
                      <p className="text-break mx-auto w-75">El método fromkeys(iterable, [valor]) retorna un nuevo diccionario con las claves del iterable proporcionado y el mismo valor opcional para todas las claves.</p>
                      <CopyButton code={pythonKidsClass6Code[12]} />
                      <img className="w-75 d-block mx-auto border-content" style={{ marginBottom: "7rem" }} alt="" src="../../img/class6/dict13.webp"></img>
                    </div>
                  </div>
                </div>
                <div id="element4" className={`mt-4 rounded-5  animated-left ${elementVisibility.element4 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPythonKids, borderRadius: "40px" }}>
                  <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a3" aria-expanded="false" aria-controls="flush-collapseThree">
                    <h2 className="text-light">Conjuntos - Set</h2>
                  </button>
                  <div id="a3" className="accordion-collapse collapse bg-dark" >
                    <div className="accordion-body text-light bg-dark ">
                      <p className="text-break mx-auto w-75 mt-4">Los conjuntos o llamados set permiten almacenar varios elementos y acceder a ellos de una forma muy similar a las listas pero con ciertas diferencias:</p>
                      <ul className="text-break mx-auto w-75 mt-4">
                        <li>Los elementos de un set son únicos, lo que significa que no puede haber elementos duplicados.</li>
                        <li>Los set son desordenados, lo que significa que no mantienen el orden de cuando son declarados.</li>
                        <li>Sirven principalmente para eliminar elementos repetidos.</li>
                        <li>Son mutables.</li>
                      </ul>
                      <CopyButton code={pythonKidsClass6Code[13]} />
                      <img className="w-75 d-block mx-auto border-content" alt="" src="../../img/class6/set1.webp"></img>
                      <h3 className="text-break mx-auto w-75 mt-4">Extracción de elementos en un conjunto</h3>
                      <p className="text-break mx-auto w-75">Los conjuntos no contienen un índice para extraer un elemento específico, debemos utilizar otros métodos como: Iteración mediante bucle for, conversión a una lista o utilizar el método pop.</p>
                      <CopyButton code={pythonKidsClass6Code[14]} />
                      <img className="w-75 d-block mx-auto border-content" style={{ marginBottom: "7rem" }} alt="" src="../../img/class6/set2.webp"></img>
                    </div>
                  </div>
                </div>
                <div id="element5" className={`mt-4 rounded-5 animated-left ${elementVisibility.element5 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPythonKids, borderRadius: "40px" }}>
                  <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a4" aria-expanded="false" aria-controls="flush-collapseFour">
                    <h2 className="text-light">Métodos en conjuntos</h2>
                  </button>
                  <div id="a4" className="accordion-collapse collapse" >
                    <div className="accordion-body text-light bg-dark ">
                      <p className="text-break mx-auto w-75 mt-4">Los conjuntos en Python tienen varios métodos incorporados que puedes utilizar para realizar operaciones y manipulaciones en conjuntos.</p>
                      <h3 className="text-break mx-auto w-75 mt-4 ">add()</h3>
                      <p className="text-break mx-auto w-75">El método add() agrega un elemento al conjunto.</p>
                      <CopyButton code={pythonKidsClass6Code[15]} />
                      <img className="w-75 d-block mx-auto border-content" alt="" src="../../img/class6/set3.webp"></img>
                      <h3 className="text-break mx-auto w-75 mt-4 ">copy()</h3>
                      <p className="text-break mx-auto w-75">Crea y devuelve una copia superficial del conjunto.</p>
                      <CopyButton code={pythonKidsClass6Code[16]} />
                      <img className="w-75 d-block mx-auto border-content" alt="" src="../../img/class6/set4.webp"></img>
                      <h3 className="text-break mx-auto w-75 mt-4 ">update(otro_conjunto)</h3>
                      <p className="text-break mx-auto w-75">Agrega los elementos del otro conjunto al conjunto actual.</p>
                      <CopyButton code={pythonKidsClass6Code[17]} />
                      <img className="w-75 d-block mx-auto border-content" alt="" src="../../img/class6/set5.webp"></img>
                      <h3 className="text-break mx-auto w-75 mt-4 ">remove(elemento)</h3>
                      <p className="text-break mx-auto w-75">Elimina un elemento específico del conjunto. Si el elemento no existe, se produce un error.</p>
                      <CopyButton code={pythonKidsClass6Code[18]} />
                      <img className="w-75 d-block mx-auto border-content" alt="" src="../../img/class6/set6.webp"></img>
                      <h3 className="text-break mx-auto w-75 mt-4 ">discard(elemento)</h3>
                      <p className="text-break mx-auto w-75">Elimina un elemento del conjunto si está presente. Si el elemento no existe, no se produce ningún error.</p>
                      <CopyButton code={pythonKidsClass6Code[19]} />
                      <img className="w-75 d-block mx-auto border-content" alt="" src="../../img/class6/set7.webp"></img>
                      <h3 className="text-break mx-auto w-75 mt-4 ">pop()</h3>
                      <p className="text-break mx-auto w-75">Elimina y devuelve un elemento aleatorio del conjunto.</p>
                      <CopyButton code={pythonKidsClass6Code[20]} />
                      <img className="w-75 d-block mx-auto border-content" alt="" src="../../img/class6/set8.webp"></img>
                      <h3 className="text-break mx-auto w-75 mt-4 ">union(otro_conjunto)</h3>
                      <p className="text-break mx-auto w-75">Devuelve un nuevo conjunto que es la unión de dos conjuntos, es decir, contiene todos los elementos de ambos conjuntos sin duplicados.</p>
                      <CopyButton code={pythonKidsClass6Code[21]} />
                      <img className="w-75 d-block mx-auto border-content" alt="" src="../../img/class6/set9.webp"></img>
                      <h3 className="text-break mx-auto w-75 mt-4 ">intersection(otro_conjunto)</h3>
                      <p className="text-break mx-auto w-75">Devuelve un nuevo conjunto que es la intersección de dos conjuntos, es decir, contiene solo los elementos que están presentes en ambos conjuntos.</p>
                      <CopyButton code={pythonKidsClass6Code[22]} />
                      <img className="w-75 d-block mx-auto border-content" alt="" src="../../img/class6/set10.webp"></img>
                      <h3 className="text-break mx-auto w-75 mt-4 ">difference(otro_conjunto)</h3>
                      <p className="text-break mx-auto w-75">Devuelve un nuevo conjunto que es la diferencia entre dos conjuntos, es decir, contiene los elementos que están en el conjunto actual pero no en el otro conjunto.</p>
                      <CopyButton code={pythonKidsClass6Code[23]} />
                      <img className="w-75 d-block mx-auto border-content" alt="" src="../../img/class6/set11.webp"></img>
                      <h3 className="text-break mx-auto w-75 mt-4 ">symmetric_difference(otro_conjunto)</h3>
                      <p className="text-break mx-auto w-75">Devuelve un nuevo conjunto que es la diferencia simétrica entre dos conjuntos, es decir, contiene los elementos que están en uno de los conjuntos pero no en ambos.</p>
                      <CopyButton code={pythonKidsClass6Code[24]} />
                      <img className="w-75 d-block mx-auto border-content" alt="" src="../../img/class6/set12.webp"></img>
                      <h3 className="text-break mx-auto w-75 mt-4 ">issubset(otro_conjunto)</h3>
                      <p className="text-break mx-auto w-75">Verifica si el conjunto actual es un subconjunto del otro conjunto, es decir, si todos los elementos del conjunto actual están presentes en el otro conjunto.</p>
                      <CopyButton code={pythonKidsClass6Code[25]} />
                      <img className="w-75 d-block mx-auto border-content" alt="" src="../../img/class6/set13.webp"></img>
                      <h3 className="text-break mx-auto w-75 mt-4 ">issuperset(otro_conjunto)</h3>
                      <p className="text-break mx-auto w-75">Verifica si el conjunto actual es un superconjunto del otro conjunto, es decir, si contiene todos los elementos del otro conjunto.</p>
                      <CopyButton code={pythonKidsClass6Code[26]} />
                      <img className="w-75 d-block mx-auto border-content" alt="" src="../../img/class6/set14.webp"></img>
                      <h3 className="text-break mx-auto w-75 mt-4 ">clear()</h3>
                      <p className="text-break mx-auto w-75">Elimina todos los elementos del conjunto, dejándolo vacío.</p>
                      <CopyButton code={pythonKidsClass6Code[27]} />
                      <img className="w-75 d-block mx-auto border-content" style={{ marginBottom: "7rem" }} alt="" src="../../img/class6/set15.webp"></img>
                    </div>
                  </div>
                </div>
                <div id="element6" className={`mt-4 rounded-5 animated-left ${elementVisibility.element6 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPythonKids, borderRadius: "40px" }}>
                  <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a5" aria-expanded="false" aria-controls="flush-collapseSix">
                    <h2 className="text-light">Mini Proyecto 6: Inventario de productos</h2>
                  </button>
                  <div id="a5" className="accordion-collapse collapse" >
                    <div className="accordion-body text-light bg-dark ">
                      <h3 className="text-break mx-auto w-75">Objetivo:</h3>
                      <p className="text-break mx-auto w-75">Crear un sistema que permita gestionar un inventario de productos. El sistema permitirá agregar,actualizar y eliminar productos, listar todos los productos, buscar productos por nombre y calcular el valor total del inventario.</p>
                      <ul className="text-break mx-auto w-75">Agregar Producto:
                        <li className="text-break mx-auto w-75">
                          <p>Permitir al usuario agregar un nuevo producto al inventario.</p>
                        </li>
                        <li className="text-break mx-auto w-75">
                          <p>Cada producto se representará como un diccionario con el formato: {'{"nombre": "xxxx", "cantidad":00, "precio por unidad":0000}'}.</p>
                        </li>
                        <li className="text-break mx-auto w-75">
                          <p>La lista de productos será el inventario.</p>
                        </li>
                      </ul>
                      <ul className="text-break mx-auto w-75">Actualizar Producto:
                        <li className="text-break mx-auto w-75">
                          <p>Permitir al usuario actualizar los productos del inventario.</p>
                        </li>
                        <li className="text-break mx-auto w-75">
                          <p>En cada producto se puede modificar: Nombre, cantidad y el precio del producto.</p>
                        </li>
                      </ul>
                      <ul className="text-break mx-auto w-75">Eliminar Producto:
                        <li className="text-break mx-auto w-75">
                          <p>Permitir al usuario eliminar el producto del inventario.</p>
                        </li>
                        <li className="text-break mx-auto w-75">
                          <p>Se puede eliminar un producto por medio del nombre del producto.</p>
                        </li>
                      </ul>
                      <ul className="text-break mx-auto w-75 mt-4">Listar productos:
                        <li className="text-break mx-auto w-75">
                          <p>Mostrar todos los productos en el inventario con su nombre, cantidad y precio por unidad.</p>
                        </li>
                      </ul>
                      <ul className="text-break mx-auto w-75 mt-4">Buscar Producto:
                        <li className="text-break mx-auto w-75">
                          <p>Permitir al usuario buscar un producto por su nombre y mostrar los detalles del producto si se encuentra en el inventario.</p>
                        </li>
                      </ul>
                      <ul className="text-break mx-auto w-75 mt-4">Calcular Valor Total del Inventario:
                        <li className="text-break mx-auto w-75">
                          <p>Calcular y mostrar el valor total de todos los productos en el inventario (cantidad * precio por unidad para cada producto, sumado para todos los productos).</p>
                        </li>
                      </ul>
                      <p className="text-break mx-auto w-75">El programa debe tener un bucle para que no termine de consultar el inventario hasta que no lo diga el usuario.</p>
                      <p className="text-break mx-auto w-75">Descarga un ejemplo del mini proyecto desde acá --
                        <Link to="/pythonClassFile/miniproject6.py" target={"_blank"} download={"miniproject6.py"} className="text-primary" > Calculadora</Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div id="element7" className={`mt-4 rounded-5 animated-left ${elementVisibility.element7 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPythonKids, borderRadius: "40px" }}>
                  <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a6" aria-expanded="false" aria-controls="flush-collapseSeven">
                    <h2 className="text-light">Evaluación de Conocimientos: Clase 6 - Diccionarios y conjuntos</h2>
                  </button>
                  <div id="a6" className="accordion-collapse collapse" >
                    <div className="accordion-body text-light bg-dark ">
                      <QuizForm />
                    </div>
                  </div>
                </div>
                <div id="element8" className={`mt-4 rounded-5 animated-left ${elementVisibility.element8 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPythonKids, borderRadius: "40px" }}>
                  <Link to="/pythonClassFile/class6.py"
                    target={"_blank"}
                    download={"class6.py"}>
                    <button className="accordion-button collapsed bg-transparent" type="button">
                      <h2 className="text-light">Descarga el archivo de la clase 6</h2>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </>
        :
        <section id="hero" style={{ background: colorPrimaryPythonKids }}>
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
                <div>
                  <h1>Clase 6: Diccionarios y conjuntos</h1>
                  <h2>Definición y uso</h2>
                  <h2>Manipulación de elementos</h2>
                  <h2>Métodos</h2>
                  <div className="text-center text-lg-start">
                    <Link to="#" className="btn-get-started scrollto python-theme">Tendrás acceso al curso el {new Date(course?.[3]?.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 order-1 order-lg-2 hero-img" >
                <img src="../../img/python.png" className="img-fluid animated vh-60" alt="" />
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
            <g className="wave2">
              <use xlinkHref="#wave-path" x="50" y="0" fill="rgba(255,255,255, .2)" />
            </g>
            <g className="wave3">
              <use xlinkHref="#wave-path" x="50" y="9" fill="#fff" />
            </g>
          </svg>
        </section>}
    </>
  )
}

export default PythonKidsClass6;
