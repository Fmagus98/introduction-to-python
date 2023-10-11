import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { db } from '../../Utils/firebase'
import { collection, getDocs } from 'firebase/firestore'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Class2 = () => {
  const [date, setDate] = useState()
  const newDate = new Date()
  useEffect(() => {
    getDocs(collection(db, "course")).then(response => {
      response.docs.map(doc => {
        if (doc.id === "2KLc4SOyBBSsZ3MvrydE") {
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
          <section section id="hero" style={{ background: "rgba(2, 5, 161, 0.91)" }}>
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
                  <div data-aos="zoom-out">
                    <h1>Clase 2: Variables y operadores</h1>
                    <h2>Variables y tipos de datos en Python</h2>
                    <h2>Operadores aritméticos y de asignación</h2>
                    <h2>Uso de operadores lógicos y de comparación</h2>
                    <div className="text-center text-lg-start">
                      <a href="#clase2" className="btn-get-started scrollto">Contenido de la clase 2</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 order-1 order-lg-2 hero-img" data-aos="zoom-out" data-aos-delay="300">
                  <img src="../img/python.png" className="img-fluid animated vh-60" alt="" />
                </div>
              </div>
            </div>
            <svg id="clase2" className="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28 " preserveAspectRatio="none">
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
                <h2>Clase 2</h2>
                <p>Contenido</p>
              </div>
              <div className="accordion accordion-flush w-100 mx-auto rounded-5" id="accordionFlushExample">
                <div data-aos="fade-right" className="accordion-item rounded-5" style={{ background: "#010483" }} >
                  <button className="accordion-button collapsed bg-transparent text-light" pe="button" data-bs-toggle="collapse" data-bs-target="#a1" aria-expanded="false" aria-controls="flush-collapseOne">
                    <h2 data-aos="fade-right">Variables</h2>
                  </button>
                  <div id="a1" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                      <div className="accordion-body text-light">
                        <p className="text-center mx-auto w-75">En el contexto de la programación, una variable es un contenedor para almacenar y manipular datos. Imagina una variable como una caja etiquetada en la memoria del equipo, donde puedes guardar diferentes tipos de información, como números, texto o valores booleanos. En un programa, puedes declarar una variable y asignarle un valor para luego utilizarlo en diferentes partes del código.</p>
                        <p className="text-center mx-auto w-75" style={{ marginBottom: "7rem" }}>Cuando declaras una variable en un lenguaje de programación, se reserva un espacio en la memoria para almacenar su valor. La ubicación exacta en la memoria puede variar dependiendo del lenguaje y del entorno de ejecución. Sin embargo, el proceso general para acceder al valor de una variable implica el uso de la CPU y la RAM del equipo.</p>
                        <h2 className="text-center mx-auto">Funcionamiento de hardware</h2>
                        <p className="text-center mx-auto w-75">CPU (Unidad Central de Procesamiento): La CPU es el componente principal del hardware que ejecuta las instrucciones de un programa. Cuando accedes a una variable, la CPU utiliza registros internos para almacenar temporalmente el valor de la variable que se va a procesar. Los registros son ubicaciones de memoria extremadamente rápidas y cercanas a la CPU, lo que permite un acceso más rápido a los datos.</p>
                        <p className="text-center mx-auto w-75">RAM (Memoria de Acceso Aleatorio): La RAM es un tipo de memoria de almacenamiento temporal que almacena tanto el programa en ejecución como los datos necesarios para el programa. Cuando se necesita el valor de una variable, la CPU busca en la RAM la ubicación de memoria reservada para esa variable y recupera el valor almacenado allí. Esto implica acceder a la dirección de memoria correspondiente a la variable y obtener los datos almacenados en esa ubicación.</p>
                        <img className="w-75 d-block mx-auto" style={{ marginBottom: "7rem" }} alt="" src="../img/class2/variable.webp"></img>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-aos="fade-right" className="accordion-item mt-4 rounded-5" style={{ background: "#010483" }}>
                  <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a2" aria-expanded="false" aria-controls="flush-collapseTwo">
                    <h2 data-aos="fade-right" className="text-light">Estilo de escritura</h2>
                  </button>
                  <div id="a2" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                      <p className="text-center mx-auto w-75">Un estilo de escritura en programación es una convención de codificación que se utiliza para dar formato y estructurar el código
                        fuente. Estas convenciones de estilo de codificación ayudan a que el código sea más legible y entendible para los programadores.</p>
                      <p className="text-center mx-auto w-75">Las convenciones de estilo de codificación incluyen reglas para nombrar variables, funciones, clases, métodos, constantes, etc.
                        También pueden incluir reglas para la indentación, el espaciado, la longitud máxima de línea, entre otros aspectos.</p>
                      <p className="text-center mx-auto w-75">En general, las convenciones de estilo de codificación se utilizan para estandarizar la forma en que se escribe el código dentro
                        de un proyecto o una organización, lo que facilita la colaboración y el mantenimiento del código a largo plazo. Además, siguiendo estas convenciones, el código puede
                        ser más fácilmente legible y comprensible por otros programadores, lo que es especialmente importante en proyectos de equipo.</p>
                      <p className="text-center mx-auto w-75">En el caso de python, tenemos 3 tipos de estilos de escritura<br></br>
                        upper case: Se utiliza cuando nombramos una variable o función llamada con una palabra.<br></br>
                        snake case: Cuando nombramos una variable llamada con más de 1 palabra se utilizará "snake case".<br></br>
                        pascal case: Este estilo de escritura se utilizará solamente cuando creamos una clase.
                      </p>
                      <img className="w-75 d-block mx-auto" alt="" src="../img/class2/namingConventions.webp"></img>
                      <p className="text-center mx-auto w-75">También tenemos que saber que el lenguaje de python es camel sensitive, esto que quiere decir? Al ser camel sensitive python es sensible a las mayúsculas y minúsculas y es importante
                        evitar nombrar dos o más variables con el mismo nombre en un mismo ámbito en la programación, incluso si se utilizan diferentes tipos de escritura (como mayúsculas y minúsculas o
                        snake case vs. camel case), ya que esto puede llevar a confusiones y dificultades para identificar qué variable contiene qué valor.
                      </p>
                      <img className="w-75 d-block mx-auto" alt="" src="../img/class2/practice.webp"></img>
                      <p className="text-center mx-auto w-75">Nombrar variables con nombres distintos y descriptivos ayudará a mantener un código más organizado y fácil de leer y entender, lo que será beneficioso para la mantenibilidad y escalabilidad del código a largo plazo.
                      </p>
                      <p className="text-center mx-auto w-75">También en python existen palabras reservadas que debemos evitar al nombrar variables, ya que podrías tener problemas en el código.
                      </p>
                      <img className="w-75 d-block mx-auto" style={{ marginBottom: "7rem" }} alt="" src="../img/class2/letterNot.webp"></img>
                    </div>
                  </div>
                </div>
                <div data-aos="fade-right" className="accordion-item mt-4 rounded-5" style={{ background: "#010483" }}>
                  <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a3" aria-expanded="false" aria-controls="flush-collapseThree">
                    <h2 data-aos="fade-right" className="text-light">Tipos de datos</h2>
                  </button>
                  <div id="a3" className="accordion-collapse collapse bg-dark" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body text-light">
                      <p className="text-center mx-auto w-75" style={{ marginBottom: "7rem" }}>Vamos a ver entonces cuáles son los tipos de datos que Python nos provee.<br></br>Por el momento vamos a hablar de 4 tipos de datos básicos que también
                        llamamos tipos primitivos (Boolean - Integer - Float - String).</p>
                      <h2 className="text-center mx-auto">Booleano</h2>
                      <p className="text-center mx-auto w-75">Este es el primer tipo de dato que vamos a ver y se asemeja al lenguaje máquina, ya que su comportamiento es de forma binaria
                        como la máquina (0,1) pero tiene la particularidad de que no vamos a escribir 0 y 1,  sino que utilizaremos la palabra False para representar el 0 y True para representar el 1.
                      </p>
                      <img className="w-75 d-block mx-auto" style={{ marginBottom: "7rem" }} alt="" src="../img/class2/boolean.webp"></img>
                      <h2 className="text-center mx-auto">Integer/float</h2>
                      <p className="text-center mx-auto w-75">Cuando queramos representar números vamos a usar el tipo dato "int" o el tipo de dato "float".
                        El tipo de dato Int representará todos los números enteros, estos pueden ser tanto positivos como negativos;
                        El tipo de dato Float representará todos los números fraccionarios, estos pueden ser positivos, negativos y mostrados como decimales también.
                      </p>
                      <img className="w-75 d-block mx-auto" style={{ marginBottom: "7rem" }} alt="" src="../img/class2/int.webp"></img>
                      <h2 className="text-center mx-auto">String</h2>
                      <p className="text-center mx-auto w-75">String: Este tipo de datos representa letras o texto, hay que tener en cuenta que podemos tipear
                        también números pero estos no se comportarán como números y no podremos realizar operaciones matemáticas dentro de ella, para describir
                        que el tipo de dato es un string debemos poner el texto entre comillas o doble comillas(" ", "" "") si es que va a estar escrito en una
                        linea de código y triple comillas(""" """) en el caso de que queramos escribir en varias líneas de código".
                      </p>
                      <img className="w-75 d-block mx-auto" style={{ marginBottom: "7rem" }} alt="" src="../img/class2/str.webp"></img>
                      <h2 className="text-center mx-auto">type()</h2>
                      <p className="text-center mx-auto w-75">A la hora de no saber qué tipo de dato contiene una variable podemos utilizar una función type,
                        para esto debemos escribir de la siguiente forma:  type(var), "var" va a representar el nombre de la variable que contenga el dato que queremos saber,
                        acá te mostraré un ejemplo de ello:
                      </p>
                      <img className="w-75 d-block mx-auto" style={{ marginBottom: "7rem" }} alt="" src="../img/class2/type.webp"></img>
                    </div>
                  </div>
                </div>
                <div data-aos="fade-right" className="accordion-item mt-4 rounded-5" style={{ background: "#010483" }}>
                  <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a4" aria-expanded="false" aria-controls="flush-collapseFour">
                    <h2 data-aos="fade-right" className="text-light">Operadores y expresiones</h2>
                  </button>
                  <div id="a4" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                      <p className="text-center mx-auto w-75">En Python, los operadores son símbolos especiales que realizan operaciones en valores y variables.
                        Las expresiones, por otro lado, son combinaciones de valores, variables y operadores que Python puede evaluar y dar un resultado.
                      </p>
                      <p className="text-center mx-auto w-75" style={{ marginBottom: "7rem" }}>Existen varios tipos de operadores en Python, entre los más comunes se encuentran operadores:
                        aritméticos, de comparación, lógicos y de asignación.
                      </p>
                      <h2 className="text-center mx-auto">Operadores aritméticos</h2>
                      <p className="text-center mx-auto w-75">Estos operadores se utilizan para realizar operaciones matemáticas básicas como la suma (+),
                        la resta (-), la multiplicación (*), la división (/), el módulo (%) y la potencia (**).
                      </p>
                      <img className="w-75 d-block mx-auto" style={{ marginBottom: "7rem" }} alt="" src="../img/class2/opArit.webp"></img>
                      <h2 className="text-center mx-auto">Operadores de comparación</h2>
                      <p className="text-center mx-auto w-75">Se utilizan para comparar dos valores y devolver un valor booleano (verdadero o falso) como resultado. Algunos operadores de comparación comunes son el igual a (==), el distinto a (!=), mayor que (&gt;), menor que (&lt;), mayor o igual que (&gt;=) y menor o igual que (&lt;=).
                      </p>
                      <img className="w-75 d-block mx-auto" style={{ marginBottom: "7rem" }} alt="" src="../img/class2/opComp.webp"></img>
                      <h2 className="text-center mx-auto">Operadores lógicos</h2>
                      <p className="text-center mx-auto w-75">Se utilizan para combinar valores booleanos y devolver un valor booleano como resultado. Los operadores lógicos más comunes son "and", "or" y "not".
                      </p>
                      <img className="w-75 d-block mx-auto" style={{ marginBottom: "7rem" }} alt="" src="../img/class2/opLog.webp"></img>
                    </div>
                  </div>
                </div>
                <div data-aos="fade-right" className="accordion-item mt-4 rounded-5" style={{ background: "#010483" }}>
                  <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a5" aria-expanded="false" aria-controls="flush-collapseFive">
                    <h2 data-aos="fade-right" className="text-light">Conversión común de tipos de datos</h2>
                  </button>
                  <div id="a5" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                      <p className="text-center mx-auto w-75">La conversión de tipos de datos en Python se refiere al proceso de cambiar el tipo de un valor de una clase de datos a otra. En Python, esto se puede hacer mediante el uso de funciones incorporadas llamadas "funciones de conversión" que toman un valor y lo convierten en otro tipo de dato.
                      </p>
                      <img className="w-75 d-block mx-auto" alt="" src="../img/class2/convType.webp"></img>
                      <p className="text-center mx-auto w-75" style={{ marginBottom: "7rem" }} >También es importante tener en cuenta que algunas conversiones pueden no ser posibles o pueden producir resultados inesperados. Por ejemplo, la conversión de una cadena de texto que no representa un número válido a un número puede producir un error en tiempo de ejecución. Por lo tanto, es importante ser cuidadoso al realizar conversiones de tipo en Python y asegurarse de que los valores sean compatibles con el tipo de destino.</p>
                    </div>
                  </div>
                </div>
                <div data-aos="fade-right" className="accordion-item mt-4 rounded-5" style={{ background: "#010483" }}>
                  <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a6" aria-expanded="false" aria-controls="flush-collapseSix">
                    <h2 data-aos="fade-right" className="text-light">Conversión de tipos de datos - String</h2>
                  </button>
                  <div id="a6" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                      <h2 className="text-center mx-auto">F-string</h2>
                      <p className="text-center mx-auto w-75">F-strings (cadenas formateadas) son una forma conveniente y legible de formatear y construir cadenas en Python a partir de expresiones y variables. Se introdujeron en Python 3.6 y son muy populares debido a su sintaxis sencilla y su capacidad para incorporar valores de manera directa en las cadenas.<br></br>Un f-string se crea precediendo una cadena con el prefijo f o F. Dentro de un f-string, puedes incluir expresiones Python encerradas entre llaves { }. Estas expresiones se evalúan y se insertan en la cadena final.
                      </p>
                      <img className="w-75 d-block mx-auto" alt="" style={{ marginBottom: "7rem" }} src="../img/class2/f-string.webp"></img>
                      <h2 className="text-center mx-auto">Format</h2>
                      <p className="text-center mx-auto w-75">El método format() se llama en una cadena y toma uno o más argumentos que se utilizan para completar marcadores de posición dentro de la cadena. Estos marcadores de posición se definen utilizando llaves { } en la cadena y se reemplazan por los valores correspondientes.
                      </p>
                      <img className="w-75 d-block mx-auto" style={{ marginBottom: "7rem" }} alt="" src="../img/class2/format.webp"></img>
                      <h2 className="text-center mx-auto">Repr</h2>
                      <p className="text-center mx-auto w-75">El método repr() es una función incorporada que devuelve una representación de cadena "oficial" o "canónica" de un objeto. Cuando llamas a la función repr() en un objeto, Python intenta devolver una cadena que, si se pasara nuevamente como código Python, crearía un objeto idéntico al original. Es decir, la cadena resultante debe ser una representación precisa del estado interno del objeto.
                      </p>
                      <img className="w-75 d-block mx-auto" alt="" src="../img/class2/repr.webp" style={{ marginBottom: "7rem" }}></img>
                    </div>
                  </div>
                </div>
                <div data-aos="fade-right" className="accordion-item mt-4 rounded-5" style={{ background: "#010483" }}>
                  <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a7" aria-expanded="false" aria-controls="flush-collapseSeven">
                    <h2 data-aos="fade-right" className="text-light">Métodos de string</h2>
                  </button>
                  <div id="a7" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                      <h2 className="text-center mx-auto mt-4">Lower( )</h2>
                      <p className="text-center mx-auto w-75">El método lower() se utiliza en objetos de tipo str (cadenas) en Python y se utiliza para convertir una cadena a minúsculas.
                      </p>
                      <img className="w-75 d-block mx-auto" style={{ marginBottom: "7rem" }} alt="" src="../img/class2/lower.webp"></img>
                      <h2 className="text-center mx-auto">Upper( )</h2>
                      <p className="text-center mx-auto w-75">El método upper() se utiliza en objetos de tipo str (cadenas) en Python y se utiliza para convertir una cadena a mayúsculas.
                      </p>
                      <img className="w-75 d-block mx-auto" style={{ marginBottom: "7rem" }} alt="" src="../img/class2/upper.webp"></img>
                      <h2 className="text-center mx-auto">Islower( )</h2>
                      <p className="text-center mx-auto w-75">El método islower() verifica si todos los caracteres de la cadena son minúsculas.
                      </p>
                      <img className="w-75 d-block mx-auto" style={{ marginBottom: "7rem" }} alt="" src="../img/class2/islower.webp"></img>
                      <h2 className="text-center mx-auto">isupper( )</h2>
                      <p className="text-center mx-auto w-75">El método isupper() verifica si todos los caracteres de la cadena son mayúsculas.
                      </p>
                      <img className="w-75 d-block mx-auto" style={{ marginBottom: "7rem" }} alt="" src="../img/class2/isupper.webp"></img>
                      <h2 className="text-center mx-auto">Isdigit( )</h2>
                      <p className="text-center mx-auto w-75">El método isdigit() Verifica si todos los caracteres de la cadena son dígitos.
                      </p>
                      <img className="w-75 d-block mx-auto" style={{ marginBottom: "7rem" }} alt="" src="../img/class2/isdigit.webp"></img>
                      <h2 className="text-center mx-auto">Isalpha( )</h2>
                      <p className="text-center mx-auto w-75">El método isalpha() Verifica si todos los caracteres de la cadena son letras.
                      </p>
                      <img className="w-75 d-block mx-auto" style={{ marginBottom: "7rem" }} alt="" src="../img/class2/isalpha.webp"></img>
                      <h2 className="text-center mx-auto">Capitalize( )</h2>
                      <p className="text-center mx-auto w-75"> El método capitalize() es utilizado en objetos de tipo str (cadenas) y se utiliza para devolver una copia de la cadena con el primer carácter en mayúscula y el resto en minúscula.
                      </p>
                      <img className="w-75 d-block mx-auto" style={{ marginBottom: "7rem" }} alt="" src="../img/class2/capitalize.webp"></img>
                      <h2 className="text-center mx-auto">Center( )</h2>
                      <p className="text-center mx-auto w-75">El método center() se utiliza en objetos de tipo str (cadenas) en Python y se utiliza para centrar una cadena dentro de un ancho determinado.
                      </p>
                      <img className="w-75 d-block mx-auto" style={{ marginBottom: "7rem" }} alt="" src="../img/class2/center.webp"></img>
                      <h2 className="text-center mx-auto">Strip( )</h2>
                      <p className="text-center mx-auto w-75">El método strip() elimina los espacios en blanco al inicio y al final de la cadena, si quieres eliminar solo un lado debes usar la terminación lstrip o rstrip (l=left , r=right).
                      </p>
                      <img className="w-75 d-block mx-auto" style={{ marginBottom: "7rem" }} alt="" src="../img/class2/strip.webp"></img>
                      <h2 className="text-center mx-auto">Count( )</h2>
                      <p className="text-center mx-auto w-75">El método count() se utiliza en objetos de tipo str (cadenas) en Python y se utiliza para contar el número de apariciones de una subcadena dentro de una cadena.
                      </p>
                      <img className="w-75 d-block mx-auto" style={{ marginBottom: "7rem" }} alt="" src="../img/class2/count.webp"></img>
                      <h2 className="text-center mx-auto">Endswith( )</h2>
                      <p className="text-center mx-auto w-75">El método endswith() se utiliza en objetos de tipo str (cadenas) en Python y se utiliza para verificar si una cadena termina con una subcadena específica.
                      </p>
                      <img className="w-75 d-block mx-auto" style={{ marginBottom: "7rem" }} alt="" src="../img/class2/endswith.webp"></img>
                    </div>
                  </div>
                </div>
                <div data-aos="fade-right" className="accordion-item mt-4 rounded-5" style={{ background: "#010483" }}>
                  <Link to="/pythonClassFile/class2.py"
                    target={"_blank"}
                    download={"class2.py"}>
                    <button className="accordion-button collapsed bg-transparent" type="button">
                      <h2 data-aos="fade-right" className="text-light">Descarga el archivo de la clase 2</h2>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </> :
        <section id="hero">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
                <div data-aos="zoom-out">
                  <h1>Clase 2: Variables y operadores</h1>
                  <h2>Variables y tipos de datos en Python</h2>
                  <h2>Operadores aritméticos y de asignación</h2>
                  <h2>Uso de operadores lógicos y de comparación</h2>
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
          <svg id="clase2" className="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28 " preserveAspectRatio="none">
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

export default Class2
