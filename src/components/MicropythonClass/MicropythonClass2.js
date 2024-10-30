import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { colorPrimaryMicropython, colorSecondaryMicropython } from '../../colors'
import { db } from '../../Utils/firebase'
import { collection, getDocs } from 'firebase/firestore'
import useScrollAnimation from '../../useScrollAnimation'
import { class2Code, class3Code } from '../Class/classCode'
import CopyButton from '../CopyButton/CopyButton'

const MicropythonClass2 = () => {

    const elementVisibility = useScrollAnimation()
    const [date, setDate] = useState()
    const newDate = new Date()
    
    useEffect(() => {
        if (!localStorage.getItem("dataCourseMicropython")) {
            getDocs(collection(db, "courseMicropython")).then(response => {
                response.docs.map(doc => {
                    if (doc.id === "MYel0kO6E1gEbrgonfGJ") {
                        return setDate(doc.data().date.toDate())
                    }
                    return null
                })
            })
        }
        else{
            const dateCourse = JSON.parse(localStorage.getItem("dataCourseMicropython"))
            setDate(dateCourse)
        }
    }, [])

    return (
        <>{
            (new Date(date?.[1]?.date) <= newDate) || localStorage.getItem("access - micropython") ?
                <>
                    <section id="hero" style={{ background: colorPrimaryMicropython }} >
                        <div className="container">
                            <div className="row justify-content-between">
                                <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
                                    <div >
                                        <h1>Clase 2</h1>
                                        <h2>Sintaxis básica de Python en MicroPython.</h2>
                                        <h2>Variables y tipos de datos.</h2>
                                        <h2>Estructuras de control y funciones</h2>
                                        <div className="text-center text-lg-start">
                                            <a href="#clase2" className="btn-get-started scrollto" style={{ backgroundColor: "#EE7053" }}>Contenido de la clase 2</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 order-1 order-lg-2 hero-img">
                                    <img src="../img/micropython.png" className="img-fluid animated vh-60" alt="" />
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
                    <section className="section-bg">
                        <div className="container">
                            <div id="element1" className={`section-title animated-down ${elementVisibility.element1 ? 'slide-down' : ''}`} style={{ color: colorSecondaryMicropython }} >
                                <h2>Clase 2</h2>
                                <p>Contenido</p>
                            </div>
                            <div className="accordion accordion-flush w-100 mx-auto rounded-5" id="accordionFlushExample" >
                                <div id="element2" className={`accordion-item mt-4 rounded-5 animated-left ${elementVisibility.element2 ? 'slide-left' : ''}`} style={{ background: colorPrimaryMicropython, borderRadius: "40px" }} >
                                    <button className="accordion-button collapsed bg-transparent text-light" type="button" data-bs-toggle="collapse" data-bs-target="#a1" aria-expanded="false" aria-controls="flush-collapseOne">
                                        <h2>Variables</h2>
                                    </button>
                                    <div id="a1" className="accordion-collapse collapse" >
                                        <div className="accordion-body text-light bg-dark ">
                                            <div className="accordion-body text-light">
                                                <h3 className="text-break mx-auto w-75 mt-4">¿Que es una variable?</h3>
                                                <p className="text-break mx-auto w-75">En el contexto de la programación, una variable es un contenedor para almacenar y manipular datos. Imagina una variable como una caja etiquetada en la memoria del equipo, donde puedes guardar diferentes tipos de información, como números, texto o valores booleanos. En un programa, puedes declarar una variable y asignarle un valor para luego utilizarlo en diferentes partes del código.</p>
                                                <p className="text-break mb-4 mx-auto w-75">Cuando declaras una variable en un lenguaje de programación, se reserva un espacio en la memoria para almacenar su valor. La ubicación exacta en la memoria puede variar dependiendo del lenguaje y del entorno de ejecución. Sin embargo, el proceso general para acceder al valor de una variable implica el uso de la CPU y la RAM del equipo.</p>
                                                <h3 className="text-break mt-4 mx-auto w-75">Funcionamiento de hardware</h3>
                                                <p className="text-break mx-auto w-75">CPU (Unidad Central de Procesamiento): La CPU es el componente principal del hardware que ejecuta las instrucciones de un programa. Cuando accedes a una variable, la CPU utiliza registros internos para almacenar temporalmente el valor de la variable que se va a procesar. Los registros son ubicaciones de memoria extremadamente rápidas y cercanas a la CPU, lo que permite un acceso más rápido a los datos.</p>
                                                <p className="text-break mx-auto w-75">RAM (Memoria de Acceso Aleatorio): La RAM es un tipo de memoria de almacenamiento temporal que almacena tanto el programa en ejecución como los datos necesarios para el programa. Cuando se necesita el valor de una variable, la CPU busca en la RAM la ubicación de memoria reservada para esa variable y recupera el valor almacenado allí. Esto implica acceder a la dirección de memoria correspondiente a la variable y obtener los datos almacenados en esa ubicación.</p>
                                                <img className="w-75 d-block mx-auto border-content" style={{ marginBottom: "7rem" }} alt="" src="../../img/class2/variable.webp"></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="element3" className={`accordion-item mt-4 rounded-5 animated-left ${elementVisibility.element3 ? 'slide-left' : ''}`} style={{ background: colorPrimaryMicropython, borderRadius: "40px" }} >
                                    <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a2" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        <h2 className="text-light">Estilo de escritura</h2>
                                    </button>
                                    <div id="a2" className="accordion-collapse collapse" >
                                        <div className="accordion-body text-light bg-dark ">
                                            <h3 className="text-break mx-auto w-75 mt-4">Convenciones de Estilo de Escritura en Python</h3>
                                            <p className="text-break mx-auto w-75">Las convenciones de estilo de codificación incluyen reglas para nombrar variables, funciones, clases, métodos, constantes, etc.
                                                También pueden incluir reglas para la indentación, el espaciado, la longitud máxima de línea, entre otros aspectos.</p>
                                            <p className="text-break mx-auto w-75">En general, las convenciones de estilo de codificación se utilizan para estandarizar la forma en que se escribe el código dentro
                                                de un proyecto o una organización, lo que facilita la colaboración y el mantenimiento del código a largo plazo. Además, siguiendo estas convenciones, el código puede
                                                ser más fácilmente legible y comprensible por otros programadores, lo que es especialmente importante en proyectos de equipo.</p>
                                            <p className="text-break mx-auto w-75">En el caso de python, tenemos 3 tipos de estilos de escritura<br></br>
                                            </p>
                                            <p className="text-break mx-auto w-50">
                                                <span className="fw-bold">Upper case:</span> Se utiliza cuando nombramos una variable o función llamada con una palabra.
                                            </p>
                                            <p className="text-break mx-auto w-50">
                                                <span className="fw-bold">Snake case:</span> Cuando nombramos una variable llamada con más de 1 palabra se utilizará "snake case".<br></br>
                                            </p>
                                            <p className="text-break mx-auto w-50">
                                                <span className="fw-bold">Pascal case:</span> Este estilo de escritura se utilizará solamente cuando creamos una clase.
                                            </p>
                                            <img className="w-75 d-block mx-auto border-content" alt="" src="../../img/class2/namingConventions.webp"></img>
                                            <p className="mt-4 text-break mx-auto w-75">También tenemos que saber que el lenguaje de python es camel sensitive, esto que quiere decir? Al ser camel sensitive python es sensible a las mayúsculas y minúsculas y es importante
                                                evitar nombrar dos o más variables con el mismo nombre en un mismo ámbito en la programación, incluso si se utilizan diferentes tipos de escritura (como mayúsculas y minúsculas o
                                                snake case vs. camel case), ya que esto puede llevar a confusiones y dificultades para identificar qué variable contiene qué valor.
                                            </p>
                                            <img className="w-75 d-block mx-auto border-content" alt="" src="../../img/class2/practice.webp"></img>
                                            <p className="mt-4 text-break mx-auto w-75">Nombrar variables con nombres distintos y descriptivos ayudará a mantener un código más organizado y fácil de leer y entender, lo que será beneficioso para la mantenibilidad y escalabilidad del código a largo plazo.
                                            </p>
                                            <p className="text-break mx-auto w-75">También en python existen palabras reservadas que debemos evitar al nombrar variables, ya que podrías tener problemas en el código.
                                            </p>
                                            <img className="w-75 d-block mx-auto border-content" style={{ marginBottom: "7rem" }} alt="" src="../../img/class2/letterNot.webp"></img>
                                        </div>
                                    </div>
                                </div>
                                <div id="element4" className={`accordion-item mt-4 rounded-5 animated-left ${elementVisibility.element4 ? 'slide-left' : ''}`} style={{ background: colorPrimaryMicropython, borderRadius: "40px" }} >
                                    <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a3" aria-expanded="false" aria-controls="flush-collapseThree">
                                        <h2 className="text-light">Tipos de datos</h2>
                                    </button>
                                    <div id="a3" className="accordion-collapse collapse bg-dark" >
                                        <div className="accordion-body text-light">
                                            <h3 className="text-break mx-auto w-75 mt-4">Booleano</h3>
                                            <p className="text-break mx-auto w-75">Este es el primer tipo de dato que vamos a ver y se asemeja al lenguaje máquina, ya que su comportamiento es de forma binaria
                                                como la máquina (0,1) pero tiene la particularidad de que no vamos a escribir 0 y 1,  sino que utilizaremos la palabra False para representar el 0 y True para representar el 1.
                                            </p>
                                            <CopyButton code={class2Code[0]} />
                                            <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class2/boolean.webp"></img>
                                            <h3 className="text-break mx-auto w-75" >Integer/float</h3>
                                            <p className="text-break mx-auto w-75">Cuando queramos representar números vamos a usar el tipo dato "int" o el tipo de dato "float".
                                                El tipo de dato Int representará todos los números enteros, estos pueden ser tanto positivos como negativos;
                                                El tipo de dato Float representará todos los números fraccionarios, estos pueden ser positivos, negativos y mostrados como decimales también.
                                            </p>
                                            <CopyButton code={class2Code[1]} />
                                            <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class2/int.webp"></img>
                                            <h3 className="text-break mx-auto w-75">String</h3>
                                            <p className="text-break mx-auto w-75">String: Este tipo de datos representa letras o texto, hay que tener en cuenta que podemos tipear
                                                también números pero estos no se comportarán como números y no podremos realizar operaciones matemáticas dentro de ella, para describir
                                                que el tipo de dato es un string debemos poner el texto entre comillas o doble comillas(" ", "" "") si es que va a estar escrito en una
                                                linea de código y triple comillas(""" """) en el caso de que queramos escribir en varias líneas de código".
                                            </p>
                                            <CopyButton code={class2Code[2]} />
                                            <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class2/str.webp"></img>
                                            <h3 className="text-break mx-auto w-75">Type()</h3>
                                            <p className="text-break mx-auto w-75">A la hora de no saber qué tipo de dato contiene una variable podemos utilizar una función type,
                                                para esto debemos escribir de la siguiente forma:  type(var), "var" va a representar el nombre de la variable que contenga el dato que queremos saber,
                                                acá te mostraré un ejemplo de ello:
                                            </p>
                                            <CopyButton code={class2Code[3]} />
                                            <img className="w-75 d-block mx-auto  border-content" style={{ marginBottom: "7rem" }} alt="" src="../../img/class2/type.webp"></img>
                                        </div>
                                    </div>
                                </div>
                                <div id="element5" className={`accordion-item mt-4 rounded-5 animated-left ${elementVisibility.element5 ? 'slide-left' : ''}`} style={{ background: colorPrimaryMicropython, borderRadius: "40px" }} >
                                    <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a4" aria-expanded="false" aria-controls="flush-collapseFour">
                                        <h2 className="text-light">Operadores y expresiones</h2>
                                    </button>
                                    <div id="a4" className="accordion-collapse collapse" >
                                        <div className="accordion-body text-light bg-dark ">
                                            <p className="text-break mx-auto w-75 mt-4">En Python, los operadores son símbolos especiales que realizan operaciones en valores y variables.
                                                Las expresiones, por otro lado, son combinaciones de valores, variables y operadores que Python puede evaluar y dar un resultado.
                                            </p>
                                            <p className="text-break mx-auto w-75 mb-4">Existen varios tipos de operadores en Python, entre los más comunes se encuentran operadores:
                                                aritméticos, de comparación, lógicos y de asignación.
                                            </p>
                                            <h3 className="text-break mx-auto w-75">Operadores aritméticos</h3>
                                            <p className="text-break mx-auto w-75">Estos operadores se utilizan para realizar operaciones matemáticas básicas como la suma (+),
                                                la resta (-), la multiplicación (*), la división (/), el módulo (%) y la potencia (**).
                                            </p>
                                            <CopyButton code={class2Code[4]} />
                                            <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class2/opArit.webp"></img>
                                            <h3 className="text-break mx-auto w-75">Operadores de comparación</h3>
                                            <p className="text-break mx-auto w-75">Se utilizan para comparar dos valores y devolver un valor booleano (verdadero o falso) como resultado. Algunos operadores de comparación comunes son el igual a (==), el distinto a (!=), mayor que (&gt;), menor que (&lt;), mayor o igual que (&gt;=) y menor o igual que (&lt;=).
                                            </p>
                                            <CopyButton code={class2Code[5]} />
                                            <img className="w-75 d-block mx-auto mb-4 border-content" alt="" src="../../img/class2/opComp.webp"></img>
                                            <h3 className="text-break mx-auto w-75">Operadores lógicos</h3>
                                            <p className="text-break mx-auto w-75">Se utilizan para combinar valores booleanos y devolver un valor booleano como resultado. Los operadores lógicos más comunes son "and", "or" y "not".
                                            </p>
                                            <CopyButton code={class2Code[6]} />
                                            <img className="w-75 d-block mx-auto  border-content" style={{ marginBottom: "7rem" }} alt="" src="../../img/class2/opLog.webp"></img>
                                        </div>
                                    </div>
                                </div>
                                <div id="element7" className={`accordion-item mt-4 rounded-5 animated-left ${elementVisibility.element7 ? 'slide-left' : ''}`} style={{ background: colorPrimaryMicropython, borderRadius: "40px" }} >
                                    <button className="accordion-button mt-4 collapsed bg-transparent text-light" type="button" data-bs-toggle="collapse" data-bs-target="#a6" aria-expanded="false" aria-controls="flush-collapseOne">
                                        <h2 >Condicionales</h2>
                                    </button>
                                    <div id="a6" className="accordion-collapse collapse" >
                                        <div className="accordion-body text-light bg-dark ">
                                            <div className="accordion-body text-light">
                                                <p className="text-center mx-auto w-75">En programación, las condicionales son estructuras que nos permiten tomar decisiones basadas en ciertas condiciones. Podemos pensar en ellas como una forma de emular el proceso de toma de decisiones que ocurre en la vida real.<br></br><br></br>
                                                    Te daré un ejemplo: Supongamos que una persona está por salir a la mañana desde su casa y hay probabilidad de que llueva a la tarde, en este caso tenemos la decisión de décidir si llevamos nuestro paraguas o no, cada decisión que hagamos nos va a provocar una situación diferente.</p>
                                                <img className="w-75 d-block mx-auto" alt="" src="../../img/class3/condition.webp"></img>
                                                <p className="text-center mx-auto w-75">Las condicionales se basan en una expresión o condición que evalúa si es verdadera o falsa. Dependiendo del resultado de esa evaluación, se ejecutará un bloque de código específico. Esta estructura se puede representar de la siguient emanera en Python:</p>
                                                <img className="w-75 d-block mx-auto" alt="" src="../../img/class3/conditionalestructure.webp" style={{ marginBottom: "7rem" }} ></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="element8" className={`accordion-item mt-4 rounded-5 animated-left ${elementVisibility.element8 ? 'slide-left' : ''}`} style={{ background: colorPrimaryMicropython, borderRadius: "40px" }} >
                                    <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a7" aria-expanded="false" aria-controls="flush-collapseThree">
                                        <h2 className="text-light">If else elif y match</h2>
                                    </button>
                                    <div id="a7" className="accordion-collapse collapse bg-dark" >
                                        <div className="accordion-body text-light bg-dark ">
                                            <h3 className="text-break mx-auto w-75 mt-4">If</h3>
                                            <p className="text-break mx-auto w-75">La palabra clave if se utiliza para iniciar una estructura condicional. Nos permite especificar una condición que se evalúa como verdadera o falsa. Si la condición es verdadera, se ejecuta el bloque de código indentado bajo el if. Si la condición es falsa, se omite ese bloque y el programa continúa con la siguiente instrucción después del if. Aquí tienes un ejemplo:</p>
                                            <CopyButton code={class3Code[0]} />
                                            <img className="w-75 d-block mx-auto border-content" alt="" src="../../img/class3/if.webp"></img>
                                            <h3 className="text-break mx-auto w-75 mt-4 ">Else</h3>
                                            <p className="text-break mx-auto w-75">La palabra clave else se utiliza junto con if y nos permite especificar un bloque de código que se ejecuta cuando la condición del if es falsa. Si la condición del if es verdadera, se omite el bloque de código bajo el else. Aquí tienes un ejemplo:</p>
                                            <CopyButton code={class3Code[1]} />
                                            <img className="w-75 d-block mx-auto border-content" alt="" src="../../img/class3/else.webp"></img>
                                            <h3 className="text-break mx-auto w-75 mt-4 ">Elif</h3>
                                            <p className="text-break mx-auto w-75">La palabra clave elif es una abreviatura de "else if" y se utiliza para agregar condiciones adicionales después del if. Se utiliza cuando hay múltiples condiciones que queremos evaluar secuencialmente. Si alguna de las condiciones anteriores es verdadera, se omite el bloque de código bajo el elif y se continúa con la siguiente instrucción después de la estructura condicional. Aquí tienes un ejemplo:</p>
                                            <CopyButton code={class3Code[2]} />
                                            <img className="w-75 d-block mx-auto border-content" style={{ marginBottom: "7rem" }} alt="" src="../../img/class3/elif.webp"></img>
                                            <h3 className="text-break mx-auto w-75 mt-4 ">Match</h3>
                                            <p className="text-break mx-auto w-75">Match es una nueva estructura de control introducida en Python 3.10, que permite la coincidencia de patrones. Esta estructura es similar a switch en otros lenguajes de programación, pero es más poderosa y flexible. match permite comparar un valor con una serie de patrones y ejecutar el bloque de código correspondiente al primer patrón que coincida.</p>
                                            <CopyButton code={class3Code[3]} />
                                            <img className="w-75 d-block mx-auto border-content" alt="" src="../../img/class3/match.webp"></img>
                                        </div>
                                    </div>
                                </div>
                                <div id="element9" className={`accordion-item mt-4 rounded-5 animated-left ${elementVisibility.element9 ? 'slide-left' : ''}`} style={{ background: colorPrimaryMicropython, borderRadius: "40px" }} >
                                    <button className="accordion-button collapsed bg-transparent text-light" type="button" data-bs-toggle="collapse" data-bs-target="#a8" aria-expanded="false" aria-controls="flush-collapseOne">
                                        <h2 >Ejecución del segundo programa</h2>
                                    </button>
                                    <div id="a8" className="accordion-collapse collapse" >
                                        <div className="accordion-body text-light bg-dark ">
                                            <div className="accordion-body text-light">
                                                <h2 className="text-center mx-auto">Esquema del programa</h2>
                                                <img className="w-75 d-block mx-auto border-content" style={{ marginBottom: "7rem" }} alt="" src="../../img/class2Micropython/program1.webp"></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="element10" className={`accordion-item mt-4 rounded-5 animated-left ${elementVisibility.element10 ? 'slide-left' : ''}`} style={{ background: colorPrimaryMicropython, borderRadius: "40px" }} >
                                    <Link to="/pythonClassFile/class2.py"
                                        target={"_blank"}
                                        download={"class2.py"}>
                                        <button className="accordion-button collapsed bg-transparent" type="button">
                                            <h2 className="text-light">Descarga el archivo de la clase 2</h2>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </> :
                <section id="hero" style={{ background: colorPrimaryMicropython }} >
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
                                <div >
                                    <h1>Clase 2</h1>
                                    <h2>Sintaxis básica de Python en MicroPython.</h2>
                                    <h2>Variables y tipos de datos.</h2>
                                    <h2>Estructuras de control y funciones</h2>
                                    <div className="text-center text-lg-start">
                                        <a href="#clase1" className="btn-get-started scrollto">tendrás acceso al curso el {new Date(date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 order-1 order-lg-2 hero-img" style={{ backgroundColor: "#EE7053" }}  >
                                <img src="../img/micropython.png" className="img-fluid animated vh-60" alt="" />
                            </div>
                        </div>
                    </div>
                    <svg id="clase1" className="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28 " preserveAspectRatio="none">
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

export default MicropythonClass2
