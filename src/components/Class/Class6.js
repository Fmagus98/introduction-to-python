import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { db } from '../../Utils/firebase'
import { collection, getDocs } from 'firebase/firestore'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Class6 = () => {
  const [date, setDate] = useState()
  const newDate = new Date()
  useEffect(() => {
    getDocs(collection(db, "course")).then(response => {
      response.docs.map(doc => {
        if (doc.id === "id2wolQKcDk77qxdG24W") {
          return setDate(doc.data().date.toDate())
        }
        return null
      })
    })
  }, [])

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      {(new Date(date) <= newDate) || localStorage.getItem("access") ?
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
                        <p className="text-center mx-auto w-75">Un diccionario es una estructura de datos mutable y sin orden en Python. Está compuesto por pares clave-valor, donde cada clave es única y se utiliza para acceder a su respectivo valor.<br></br>Las claves en un diccionario pueden ser de tipo inmutable, como cadenas de texto, números o tuplas. Los valores pueden ser de cualquier tipo, incluyendo listas, diccionarios e incluso funciones.</p>
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
                      <img className="w-75 d-block mx-auto" alt="" src="../img/class6/dict12.jpg"></img>
                      <h2 className="text-center mx-auto mt-4 ">fromkeys()</h2>
                      <p className="text-center mx-auto w-75">El método fromkeys(iterable, [valor]) retorna un nuevo diccionario con las claves del iterable proporcionado y el mismo valor opcional para todas las claves.</p>
                      <img className="w-75 d-block mx-auto" alt="" src="../img/class6/dict13.jpg"></img>
                    </div>
                  </div>
                </div>
                <div data-aos="fade-right" className="accordion-item mt-4 rounded-5" style={{ background: "#010483" }}>
                  <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a3" aria-expanded="false" aria-controls="flush-collapseThree">
                    <h2 data-aos="fade-right" className="text-light">Conjuntos - Set</h2>
                  </button>
                  <div id="a3" className="accordion-collapse collapse bg-dark" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                      <p className="text-center mx-auto w-75">
                        Los conjuntos o llamados set permiten almacenar varios elementos y acceder a ellos de una forma muy similar a las listas pero con ciertas diferencias:
                        <br></br>Los elementos de un set son únicos, lo que significa que no puede haber elementos duplicados.
                        <br></br>Los set son desordenados, lo que significa que no mantienen el orden de cuando son declarados.
                        <br></br>Sirven principalmente para eliminar elementos repetidos.
                        <br></br>Son mutables.
                      </p>
                      <img className="w-75 d-block mx-auto" alt="" src="../img/class6/set1.png"></img>
                      <h2 className="text-center mx-auto mt-4 ">Extracción de elementos en un conjunto</h2>
                      <p className="text-center mx-auto w-75">Los conjuntos no contienen un índice para extraer un elemento específico, debemos utilizar otros métodos como: Iteración mediante bucle for, conversión a una lista o utilizar el método pop.</p>
                      <img className="w-75 d-block mx-auto" alt="" src="../img/class6/set2.jpg"></img>
                    </div>
                  </div>
                </div>
                <div data-aos="fade-right" className="accordion-item mt-4 rounded-5" style={{ background: "#010483" }}>
                  <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a4" aria-expanded="false" aria-controls="flush-collapseFour">
                    <h2 data-aos="fade-right" className="text-light">Métodos en conjuntos</h2>
                  </button>
                  <div id="a4" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                      <p className="text-center mx-auto w-75">Los conjuntos en Python tienen varios métodos incorporados que puedes utilizar para realizar operaciones y manipulaciones en conjuntos.</p>
                      <h2 className="text-center mx-auto mt-4 ">add()</h2>
                      <p className="text-center mx-auto w-75">El método add() agrega un elemento al conjunto.</p>
                      <img className="w-75 d-block mx-auto" alt="" src="../img/class6/set3.jpg"></img>
                      <h2 className="text-center mx-auto mt-4 ">copy()</h2>
                      <p className="text-center mx-auto w-75">Crea y devuelve una copia superficial del conjunto.</p>
                      <img className="w-75 d-block mx-auto" alt="" src="../img/class6/set4.jpg"></img>
                      <h2 className="text-center mx-auto mt-4 ">update(otro_conjunto)</h2>
                      <p className="text-center mx-auto w-75">Agrega los elementos del otro conjunto al conjunto actual.</p>
                      <img className="w-75 d-block mx-auto" alt="" src="../img/class6/set5.jpg"></img>
                      <h2 className="text-center mx-auto mt-4 ">remove(elemento)</h2>
                      <p className="text-center mx-auto w-75">Elimina un elemento específico del conjunto. Si el elemento no existe, se produce un error.</p>
                      <img className="w-75 d-block mx-auto" alt="" src="../img/class6/set6.jpg"></img>
                      <h2 className="text-center mx-auto mt-4 ">discard(elemento)</h2>
                      <p className="text-center mx-auto w-75">Elimina un elemento del conjunto si está presente. Si el elemento no existe, no se produce ningún error.</p>
                      <img className="w-75 d-block mx-auto" alt="" src="../img/class6/set7.jpg"></img>
                      <h2 className="text-center mx-auto mt-4 ">pop()</h2>
                      <p className="text-center mx-auto w-75">Elimina y devuelve un elemento aleatorio del conjunto.</p>
                      <img className="w-75 d-block mx-auto" alt="" src="../img/class6/set8.jpg"></img>
                      <h2 className="text-center mx-auto mt-4 ">union(otro_conjunto)</h2>
                      <p className="text-center mx-auto w-75">Devuelve un nuevo conjunto que es la unión de dos conjuntos, es decir, contiene todos los elementos de ambos conjuntos sin duplicados.</p>
                      <img className="w-75 d-block mx-auto" alt="" src="../img/class6/set9.jpg"></img>
                      <h2 className="text-center mx-auto mt-4 ">intersection(otro_conjunto)</h2>
                      <p className="text-center mx-auto w-75">Devuelve un nuevo conjunto que es la intersección de dos conjuntos, es decir, contiene solo los elementos que están presentes en ambos conjuntos.</p>
                      <img className="w-75 d-block mx-auto" alt="" src="../img/class6/set10.jpg"></img>
                      <h2 className="text-center mx-auto mt-4 ">difference(otro_conjunto)</h2>
                      <p className="text-center mx-auto w-75">Devuelve un nuevo conjunto que es la diferencia entre dos conjuntos, es decir, contiene los elementos que están en el conjunto actual pero no en el otro conjunto.</p>
                      <img className="w-75 d-block mx-auto" alt="" src="../img/class6/set11.jpg"></img>
                      <h2 className="text-center mx-auto mt-4 ">symmetric_difference(otro_conjunto)</h2>
                      <p className="text-center mx-auto w-75">Devuelve un nuevo conjunto que es la diferencia simétrica entre dos conjuntos, es decir, contiene los elementos que están en uno de los conjuntos pero no en ambos.</p>
                      <img className="w-75 d-block mx-auto" alt="" src="../img/class6/set12.jpg"></img>
                      <h2 className="text-center mx-auto mt-4 ">issubset(otro_conjunto)</h2>
                      <p className="text-center mx-auto w-75">Verifica si el conjunto actual es un subconjunto del otro conjunto, es decir, si todos los elementos del conjunto actual están presentes en el otro conjunto.</p>
                      <img className="w-75 d-block mx-auto" alt="" src="../img/class6/set13.jpg"></img>
                      <h2 className="text-center mx-auto mt-4 ">issuperset(otro_conjunto)</h2>
                      <p className="text-center mx-auto w-75">Verifica si el conjunto actual es un superconjunto del otro conjunto, es decir, si contiene todos los elementos del otro conjunto.</p>
                      <img className="w-75 d-block mx-auto" alt="" src="../img/class6/set14.jpg"></img>
                      <h2 className="text-center mx-auto mt-4 ">clear()</h2>
                      <p className="text-center mx-auto w-75">Elimina todos los elementos del conjunto, dejándolo vacío.</p>
                      <img className="w-75 d-block mx-auto" alt="" src="../img/class6/set15.jpg"></img>
                    </div>
                  </div>
                </div>
                <div data-aos="fade-right" className="accordion-item mt-4 rounded-5" style={{ background: "#010483" }}>
                  <button className="accordion-button collapsed bg-transparent" type="button">
                    <Link to="/pythonClassFile/"
                      target={"_blank"}
                      download={"class6.py"}>
                      <h2 data-aos="fade-right" className="text-light">Descarga el archivo de la clase 6</h2>
                    </Link>
                  </button>
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
                <div data-aos="zoom-out">
                  <h1>Clase 6: Estructuras de datos II: Diccionarios y conjuntos</h1>
                  <h2>Diccionarios y conjuntos: definición y uso</h2>
                  <h2>Manipulación de elementos en diccionarios y conjuntos</h2>
                  <h2>Métodos de diccionarios y conjuntos</h2>
                  <div className="text-center text-lg-start">
                    <a href="#clase1" className="btn-get-started scrollto">tendrás acceso al curso el {new Date(date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</a>
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
        </section>}
    </>
  )
}

export default Class6