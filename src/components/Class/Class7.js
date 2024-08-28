import React, { useEffect, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../../Utils/firebase'
import { collection, getDocs } from 'firebase/firestore'
import { colorPrimaryPython } from '../../colors'
import useScrollAnimation from '../../useScrollAnimation'
import { CopyButton } from '../CopyButton/CopyButton'
import { class7Code } from './classCode'

const Class7 = () => {

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
      {(new Date() >= new Date(course?.[6]?.date || '')) || localStorage.getItem("access") ?
        <>
          <section id="hero" style={{ background: colorPrimaryPython }}>
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
                  <div>
                    <h1>Clase 7: Archivos y excepciones</h1>
                    <h2>Métodos de archivos</h2>
                    <h2>Manejo de excepciones</h2>
                    <h2>Práctica con archivos y excepciones</h2>
                    <div className="text-center text-lg-start">
                    <a href="#class7" className={`btn-get-started scrollto python-theme`}>Contenido de la Clase 7</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 order-1 order-lg-2 hero-img" >
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
              <g id="class7" className="wave2">
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
                <h2>Clase 7</h2>
                <p>Contenido</p>
              </div>
              <div className="accordion accordion-flush w-100 mx-auto rounded-5" id="accordionFlushExample">
                <div id="element2" className={`mt-4 rounded-5 animated-left ${elementVisibility.element2 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
                  <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a3" aria-expanded="false" aria-controls="flush-collapseThree">
                    <h2 className="text-light">Tipos de excepciones</h2>
                  </button>
                  <div id="a3" className="accordion-collapse collapse bg-dark" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body text-light bg-dark ">
                      <p className="text-break mx-auto w-75 mt-4">
                        Python tiene una amplia variedad de tipos de excepciones incorporados que cubren diferentes situaciones de error. Algunos ejemplos comunes de tipos de excepciones son:
                      </p>
                      <h3 className="text-break mx-auto w-75 mt-4">SintaxError</h3>
                      <p className="text-break mx-auto w-75">Ocurre cuando la manera de escribir código no sigue las reglas de sintaxis en Python .</p>
                      <CopyButton code={class7Code[0]} />
                      <img className="w-75 d-block mx-auto border-content" alt="" src="../img/class7/indexError.webp"></img>
                      <h3 className="text-break mx-auto w-75 mt-4">NameError</h3>
                      <p className="text-break mx-auto w-75">Ocurre cuando se realiza una operación en un objeto de un tipo incorrecto.</p>
                      <CopyButton code={class7Code[1]} />
                      <img className="w-75 d-block mx-auto border-content" alt="" src="../img/class7/nameError.webp"></img>
                      <h3 className="text-break mx-auto w-75 mt-4">TypeError</h3>
                      <p className="text-break mx-auto w-75">Ocurre cuando se realiza una operación en un objeto de un tipo incorrecto.</p>
                      <CopyButton code={class7Code[2]} />
                      <img className="w-75 d-block mx-auto border-content" alt="" src="../img/class7/typeError.webp"></img>
                      <h3 className="text-break mx-auto w-75 mt-4">ValueError</h3>
                      <p className="text-break mx-auto w-75">Ocurre cuando una función recibe un argumento con un valor inapropiado.</p>
                      <CopyButton code={class7Code[3]} />
                      <img className="w-75 d-block mx-auto border-content" alt="" src="../img/class7/valueError.webp"></img>
                      <h3 className="text-break mx-auto w-75 mt-4">IndentationError</h3>
                      <p className="text-break mx-auto w-75">Ocurre cuando la indentación (espacios o tabulaciones) no está correctamente alineada.</p>
                      <CopyButton code={class7Code[4]} />
                      <img className="w-75 d-block mx-auto border-content" alt="" src="../img/class7/indentationError.webp"></img>
                      <h3 className="text-break mx-auto w-75 mt-4">AttributeError</h3>
                      <p className="text-break mx-auto w-75">Ocurre cuando se intenta acceder a un atributo o método que no existe en un objeto.</p>
                      <CopyButton code={class7Code[5]} />
                      <img className="w-75 d-block mx-auto border-content" alt="" src="../img/class7/attributeError.webp"></img>
                      <h3 className="text-break mx-auto w-75 mt-4">keyError</h3>
                      <p className="text-break mx-auto w-75">Ocurre cuando se intenta acceder a una clave que no existe en un diccionario.</p>
                      <CopyButton code={class7Code[6]} />
                      <img className="w-75 d-block mx-auto border-content" alt="" src="../img/class7/keyError.webp"></img>
                      <h3 className="text-break mx-auto w-75 mt-4">ZeroDivisionError</h3>
                      <p className="text-break mx-auto w-75">Ocurre cuando se intenta dividir un número entre cero.</p>
                      <CopyButton code={class7Code[7]} />
                      <img className="w-75 d-block mx-auto border-content" alt="" src="../img/class7/zeroDivisionError.webp"></img>
                      <h3 className="text-break mx-auto w-75 mt-4">FileNotFoundError</h3>
                      <p className="text-break mx-auto w-75">Ocurre cuando se intenta abrir un archivo que no existe.</p>
                      <CopyButton code={class7Code[8]} />
                      <img className="w-75 d-block mx-auto border-content" style={{ marginBottom: "7rem" }} alt="" src="../img/class7/fileNotFound.webp"></img>
                    </div>
                  </div>
                </div>
                <div id="element3" className={`mt-4 rounded-5 animated-left ${elementVisibility.element3 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
                  <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a2" aria-expanded="false" aria-controls="flush-collapseThree">
                    <h2 className="text-light">Manejo de excepciones</h2>
                  </button>
                  <div id="a2" className="accordion-collapse collapse bg-dark" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body text-light bg-dark ">
                      <p className="text-break mx-auto w-75 mt-4">Una excepción es un evento que ocurre durante la ejecución de un programa y puede interrumpir su flujo normal. Cuando ocurre una excepción, el programa se desvía del flujo normal de ejecución y busca un bloque de código especial diseñado para manejar dicha excepción. Este proceso se conoce como "lanzar" (raise) una excepción.</p>
                      <h3 className="text-break mx-auto w-75 mt-4">Bloque try - except</h3>
                      <p className="text-break mx-auto w-75">El bloque try-except es utilizado para manejar excepciones en Python. Dentro del bloque try, se coloca el código que podría generar una excepción. Si ocurre una excepción en este bloque, el flujo del programa se desvía al bloque except, donde podemos manejar la excepción de manera adecuada.</p>
                      <CopyButton code={class7Code[9]} />
                      <img className="w-75 d-block mx-auto border-content" alt="" src="../img/class7/tryExcept.webp"></img>
                      <h3 className="text-break mx-auto w-75 mt-4">Bloque else</h3>
                      <p className="text-break mx-auto w-75">El bloque else es opcional y se ejecuta solo si no se ha producido ninguna excepción en el bloque try. Podemos colocar aquí el código que debe ejecutarse si no hay excepciones.</p>
                      <CopyButton code={class7Code[10]} />
                      <img className="w-75 d-block mx-auto border-content" alt="" src="../img/class7/else.webp"></img>
                      <h3 className="text-break mx-auto w-75 mt-4">Bloque finally</h3>
                      <p className="text-break mx-auto w-75">El bloque finally también es opcional y se ejecuta siempre, independientemente de si se ha producido una excepción o no. Se utiliza para realizar tareas de limpieza o liberación de recursos, como cerrar archivos abiertos, conexiones de bases de datos, etc.</p>
                      <CopyButton code={class7Code[11]} />
                      <img className="w-75 d-block mx-auto border-content" style={{ marginBottom: "7rem" }} alt="" src="../img/class7/finally.webp"></img>
                    </div>
                  </div>
                </div>
                <div id="element4" className={`mt-4 rounded-5 animated-left ${elementVisibility.element4 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
                  <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a4" aria-expanded="false" aria-controls="flush-collapseFour">
                    <h2 className="text-light">Metodos de archivos en python</h2>
                  </button>
                  <div id="a4" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body text-light bg-dark ">
                      <p className="text-break mx-auto w-75 mt-4">En Python, puedes realizar operaciones de lectura y escritura de archivos utilizando las funciones y métodos proporcionados por el lenguaje.</p>
                      <h3 className="text-break w-75 mx-auto">open() - Abrir archivos </h3>
                      <p className="text-break mx-auto w-75"> Este método se utiliza para abrir un archivo. Toma dos parámetros principales: el nombre del archivo y el modo en el que se abrirá (por ejemplo, lectura, escritura, agregado, etc.).</p>
                      <CopyButton code={class7Code[12]} />
                      <img className="w-75 d-block mx-auto border-content mb-4" alt="" src="../img/class7/open.webp"></img>
                      <h3 className="text-break mx-auto w-75 mt-4">read() - lee archivos</h3>
                      <p className="text-break mx-auto w-75">Este método se utiliza para leer el contenido de un archivo. Puede leer todo el contenido o una cantidad específica de caracteres.</p>
                      <CopyButton code={class7Code[13]} />
                      <img className="w-75 d-block mx-auto border-content" alt="" src="../img/class7/read.webp"></img>
                      <h3 className="text-break mx-auto w-75 mt-4">write() - escribe archivos</h3>
                      <p className="text-break mx-auto w-75">Este método se utiliza para escribir datos en un archivo. Puede escribir una cadena de texto o datos formateados en el archivo.</p>
                      <CopyButton code={class7Code[14]} />
                      <img className="w-75 d-block mx-auto border-content" alt="" src="../img/class7/write.webp"></img>
                      <h3 className=" text-break mx-auto w-75 mt-4">adjunto - adjunta archivos</h3>
                      <p className="text-break mx-auto w-75">Este método se utiliza para Agregar contenido a un archivo existente.</p>
                      <CopyButton code={class7Code[15]} />
                      <img className="w-75 d-block mx-auto border-content" alt="" src="../img/class7/adjunto.webp"></img>
                      <h3 className=" text-break mx-auto w-75 mt-4">close() - cierra archivos</h3>
                      <p className="text-break mx-auto w-75">Este método se utiliza para cerrar un archivo después de que hayamos terminado de trabajar con él. Es importante cerrar los archivos para liberar los recursos del sistema.</p>
                      <CopyButton code={class7Code[16]} />
                      <img className="w-75 d-block mx-auto border-content" alt="" src="../img/class7/close.webp"></img>
                      <h3 className=" text-break mx-auto w-75 mt-4">rename(nombre_actual, nombre_nuevo) - renombrar archivos</h3>
                      <p className="text-break mx-auto w-75">Para renombrar archivos debemos utilizar el módulo "os" y con el método rename podremos cambiar el nombre del archivo.</p>
                      <CopyButton code={class7Code[17]} />
                      <img className="w-75 d-block mx-auto border-content" alt="" src="../img/class7/rename.webp"></img>
                      <h3 className=" text-break mx-auto w-75 mt-4">remove(nombre_achivo) - eliminar archivos</h3>
                      <p className="text-break mx-auto w-75">Para eliminar archivos debemos utilizar el módulo "os" y con el método remove podremos eliminar el archivo.</p>
                      <CopyButton code={class7Code[18]} />
                      <img className="w-75 d-block mx-auto border-content" style={{ marginBottom: "7rem" }} alt="" src="../img/class7/remove.webp"></img>
                    </div>
                  </div>
                </div>
                <div id="element5" className={`mt-4 rounded-5 animated-left ${elementVisibility.element4 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
                  <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a5" aria-expanded="false" aria-controls="flush-collapseFour">
                    <h2 className="text-light">Metodos de archivos en python(csv)</h2>
                  </button>
                  <div id="a5" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body text-light bg-dark ">
                      <p className="text-break mx-auto w-75 mt-4">En Python, puedes también abrir, leer, escribir y cerrar archivos también con csv, en este caso debemos importar el módulo csv.</p>
                      <h3 className="text-break w-75 mx-auto">Leer csv</h3>
                      <p className="text-break mx-auto w-75">El método csv.DictReader() Se utiliza para leer archivos CSV y convertir cada fila del archivo en un diccionario. La clave de cada diccionario corresponde a los nombres de las columnas, y los valores corresponden a los datos de cada fila. </p>
                      <CopyButton code={class7Code[19]} />
                      <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../img/class7/dictReader.webp"></img>
                      <h3 className="text-break mx-auto w-75 mt-4">Encontrar un dato desde un csv</h3>
                      <p className="text-break mx-auto w-75">Para encontrar una fila en un archivo csv por una columna, puedes utilizar el mismo método para leer el csv y recorrer la lista de diccionarios hasta encontrar la fila correspondiente.</p>
                      <CopyButton code={class7Code[20]} />
                      <img className="w-75 d-block mx-auto border-content" alt="" src="../img/class7/dictReaderFind.webp"></img>
                      <h3 className="text-break mx-auto w-75 mt-4">Añadir un dato en un csv</h3>
                      <p className="text-break mx-auto w-75">Se agrega un nuevo registro con un nuevo ID y los datos ingresados por el usuario, y luego sobrescribe el archivo con todos los datos actualizados. Utiliza csv.DictReader y csv.DictWriter para manejar los datos como diccionarios y asegura el cierre adecuado de los archivos con bloques try-finally.</p>
                      <CopyButton code={class7Code[21]} />
                      <img className="w-75 d-block mx-auto border-content" alt="" src="../img/class7/writeCsv.webp"></img>
                      <h3 className=" text-break mx-auto w-75 mt-4">Eliminar un dato en un csv</h3>
                      <p className="text-break mx-auto w-75">Se filtran los registros para excluir el que coincide con el ID proporcionado por el usuario, y luego sobrescribe el archivo con los datos actualizados. Utiliza csv.DictReader y csv.DictWriter para manejar los datos como diccionarios y asegura el cierre adecuado de los archivos con bloques try-finally.</p>
                      <CopyButton code={class7Code[22]} />
                      <img className="w-75 d-block mx-auto border-content" alt="" src="../img/class7/deleteCsv.webp"></img>
                      <h3 className=" text-break mx-auto w-75 mt-4">Actualizar un dato en un csv</h3>
                      <p className="text-break mx-auto w-75">Se busca un registro por su ID y actualiza el nombre asociado, luego sobrescribe el archivo con los datos actualizados. Utiliza csv.DictReader y csv.DictWriter para manejar los datos en formato de diccionarios y garantiza el cierre adecuado de los archivos con bloques try-finally.</p>
                      <CopyButton code={class7Code[23]} />
                      <img className="w-75 d-block mx-auto border-content" alt="" src="../img/class7/updateCsv.webp"></img>
                    </div>
                  </div>
                </div>
                <div id="element6" className={`mt-4 rounded-5 animated-left ${elementVisibility.element5 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
                  <Link to="/pythonClassFile/class7.py"
                    target={"_blank"}
                    download={"class7.py"}>
                    <button className="accordion-button collapsed bg-transparent" type="button">
                      <h2 className="text-light">Descarga el archivo de la clase 7</h2>
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
                  <h1>Clase 7: Archivos y excepciones</h1>
                  <h2>Métodos de archivos</h2>
                  <h2>Manejo de excepciones</h2>
                  <h2>Práctica con archivos y excepciones</h2>
                  <div className="text-center text-lg-start">
                    <Link to="#" className="btn-get-started scrollto python-theme">Tendrás acceso al curso el {new Date(course?.[3]?.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 order-1 order-lg-2 hero-img" >
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

export default Class7
