import React, { useEffect, useState, useCallback } from 'react'
import { useLocation } from 'react-router-dom';
import { colorSecondaryMicropython, colorPrimaryPython } from '../../colors';
import useScrollAnimation from '../../useScrollAnimation'
import { db } from '../../Utils/firebase'
import { collection, getDocs } from 'firebase/firestore'

const Exercises = () => {

    const elementVisibility = useScrollAnimation();
    const location = useLocation();
    const title = location.pathname.includes("micropython") ? "micropython" : "python";
    const content = location.pathname === "/micropython/classes" ? "courseMicropython" : location.pathname.includes("github") ? "courseGithub" : "course";
    const color = location.pathname.includes("micropython") ? colorSecondaryMicropython : colorPrimaryPython;
    const [course, setCourse] = useState([]);

    const callFirebase = useCallback(() => {
        getDocs(collection(db, content)).then(response => {
            const getData = response.docs.map(doc => {
                const data = doc.data();
                data.date = data.date.toDate();
                return { id: doc.id, ...data };
            });
            localStorage.removeItem('dataCourse');
            localStorage.setItem('dataCourse', JSON.stringify(getData));
            setCourse(getData);
        });
    }, [content]);

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
            <section id="hero" style={{ background: location.pathname.includes("micropython") ? "#B34229" : colorPrimaryPython }} >
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
                            <div>
                                <h1>Ejercicios</h1>
                                <h2> Este apartado proporciona la oportunidad de practicar y aplicar los conceptos aprendidos. <br></br><br></br>Los ejercicios van desde simples hasta desafiantes, permitiendo a los estudiantes resolver problemas y adquirir experiencia en la escritura de código {title}.</h2>
                                <div className="text-center text-lg-start">
                                    <a href="#exercises" className={`btn-get-started scrollto ${title === "micropython" ? "micropython-theme" : "python-theme"}`}>Empieza a practicar!</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 order-1 order-lg-2 hero-img" >
                            <img src={`../img/${title}.png`} className="img-fluid animated vh-60" alt="" />
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
                    <g id="exercises" className="wave2">
                        <use xlinkHref="#wave-path" x="50" y="0" fill="rgba(255,255,255, .2)" />
                    </g>
                    <g className="wave3">
                        <use xlinkHref="#wave-path" x="50" y="9" fill="#fff" />
                    </g>
                </svg>
            </section>
            <section className="section-bg">
                <div className="container">
                    <div id="element1" className={`section-title animated-down ${elementVisibility.element1 ? 'slide-down' : ''}`} style={{ color: color }} >
                        <h2>Ejercicios</h2>
                        <p>Contenido</p>
                    </div>
                    <div className="accordion accordion-flush w-100 mx-auto rounded-5" id="accordionFlushExample">
                        <div id="element2" className={`accordion-item animated-left ${elementVisibility.element2 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }} >
                            <button className="accordion-button collapsed bg-transparent text-light" type="button" data-bs-toggle="collapse" data-bs-target="#a1" aria-expanded="false" aria-controls="flush-collapseOne">
                                <h2>Clase 1</h2>
                            </button>
                            <div id="a1" className="accordion-collapse collapse" >
                                <div className="accordion-body text-light bg-dark ">
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 1 </h3>
                                    <p className="text-break mx-auto w-50"> Solicitar al usuario que ingrese su nombre y luego imprimir un mensaje de saludo con el nombre proporcionado.
                                    </p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 2 </h3>
                                    <p className="text-break mx-auto w-50">Pedir al usuario que ingrese su edad y luego imprimir un mensaje que diga "Tienes X años" (reemplazando X con la edad ingresada).
                                    </p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 3 </h3>
                                    <p className="text-break mx-auto w-50"> Solicitar al usuario que ingrese dos palabras y luego imprimir la concatenación de las dos palabras ingresadas.
                                    </p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 4 </h3>
                                    <p className="text-break mx-auto w-50"> Pedir al usuario que ingrese su nombre y su edad. Luego imprimir un mensaje que diga "Hola, [nombre]. Tienes [edad] años".
                                    </p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 5 </h3>
                                    <p className="text-break mx-auto w-50"> Solicitar al usuario que ingrese su nombre y su color favorito. Luego imprimir un mensaje que diga "Hola, [nombre]. Tu color favorito es [color]".
                                    </p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 6 </h3>
                                    <p className="text-break mx-auto w-50"> Solicitar al usuario que ingrese su nombre y una palabra. Luego imprimir un mensaje que diga "Hola, [nombre]. La longitud de la palabra que ingresaste es [longitud]".
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div id="element3" className={`accordion-item mt-4 rounded-5 animated-left ${elementVisibility.element3 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }} >
                            {new Date() >= new Date(course[1]?.date || '') || (localStorage.getItem("access")) ?
                                <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a2" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    <h2 className="text-light">Clase 2</h2>
                                </button>
                                :
                                <button className="accordion-button collapsed bg-dark text-light" style={{ borderRadius: "40px" }} type="button">
                                    <h2>Clase 2 {course[1]?.date ? "- " + new Date(course[1].date).toLocaleDateString('es-ES', { month: 'long', day: 'numeric' }) : ''}</h2>
                                </button>}
                            <div id="a2" className="accordion-collapse collapse" >
                                <div className="accordion-body text-light bg-dark ">
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 1 </h3>
                                    <p className="text-break mx-auto w-50"> Solicitar al usuario que ingrese un número y guardarlo en una variable, convertir este número a un tipo de dato "float" y luego mostrar en la terminal el resultado de 5 + el número que escribió el usuario.</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 2 </h3>
                                    <p className="text-break mx-auto w-50">Solicita al usuario que ingrese su nombre y luego imprime en pantalla el nombre todo en mayúscula</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 3 </h3>
                                    <p className="text-break mx-auto w-50">Solicita al usuario que ingrese su nombre y luego imprime en pantalla un valor booleano si lo que escribió el usuario está todo en minúscula es True, si hay algo en mayúscula es False</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 4 </h3>
                                    <p className="text-break mx-auto w-50"> Una variable contiene un tipo de dato "string" diciendo un trabalenguas "A Cuesta le cuesta subir la cuesta, y en medio de la cuesta, va y se acuesta.", imprime en pantalla la cantidad de veces que dijo "cuesta".</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 5 </h3>
                                    <p className="text-break mx-auto w-50"> Una variable contiene un tipo de dato "string" diciendo "   El zorro iba andando por la pradera   ", muestra en pantalla el mismo texto eliminando los espacios que hay al principio y final del texto.
                                    </p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 6 </h3>
                                    <p className="text-break mx-auto w-50"> A partir del ejercicio 6 no te daré pistas, asi que presta mucha atención a la consigna. <br></br>Solicita al usuario 2 números y imprime en pantalla la sumatoria de estos números.</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 7 </h3>
                                    <p className="text-break mx-auto w-50"> Solicita al usuario 2 nombres y imprime en pantalla de forma booleana(True - False) si son los mismos nombres o no (True = son iguales, False = no lo son).</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 8 </h3>
                                    <p className="text-break mx-auto w-50"> Solicita al usuario 2 números y imprime en pantalla de forma booleana(True - False) si el primer número es mayor o igual al segundo número.</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 9 </h3>
                                    <p className="text-break mx-auto w-50"> Solicita al usuario 2 números y imprime en pantalla de forma booleana(True - False) si el primer número es diferente al segundo</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 10 </h3>
                                    <p className="text-break mx-auto w-50"> Situacion: Un auto pasa por un control policial, el policia le pide el permiso de conducir, papeles del auto y su documentacion, el policia no debe detenerlo si es mayor de edad y tiene el permiso de conducir y los papeles en regla.<br></br><br></br>Solicita al usuario que escriba "True" o "False" a las siguientes preguntas:<br></br>1_ ¿Es mayor de edad?.<br></br>2_Tiene permiso de conducir y los papeles en regla?. <br></br>Luego imprime en pantalla de forma booleana (True - False), si cumple con las 2 preguntas o no (true = cumple, false = no cumple).</p>
                                </div>
                            </div>
                        </div>
                        <div id="element4" className={`accordion-item mt-4 rounded-5 animated-left ${elementVisibility.element4 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }} >
                            {new Date() >= new Date(course[2]?.date || '') || (localStorage.getItem("access")) ?
                                <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a3" aria-expanded="false" aria-controls="flush-collapseThree">
                                    <h2 className="text-light">Clase 3</h2>
                                </button>
                                :
                                <button className="accordion-button collapsed bg-dark text-light" style={{ borderRadius: "40px" }} type="button">
                                    <h2>Clase 3 {course[2]?.date ? "- " + new Date(course[2].date).toLocaleDateString('es-ES', { month: 'long', day: 'numeric' }) : ''}</h2>
                                </button>}
                            <div id="a3" className="accordion-collapse collapse" >
                                <div className="accordion-body text-light bg-dark ">
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 1 </h3>
                                    <p className="text-break mx-auto w-50">Escribe un programa que solicite al usuario un número e imprima si es positivo, negativo o cero.</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 2 </h3>
                                    <p className="text-break mx-auto w-50">Escribe un programa que tome dos números como entrada y muestre cuál de ellos es mayor, o si son iguales.</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 3 </h3>
                                    <p className="text-break mx-auto w-50">Escribe un programa que solicite al usuario su edad y determine si es mayor de edad (18 años o más) o menor de edad.</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 4 </h3>
                                    <p className="text-break mx-auto w-50">Escribe un programa que solicite al usuario un número del 1 al 7 y muestre el día de la semana correspondiente (1 - Lunes, 2 - Martes, ..., 7 - Domingo). Si el número está fuera de ese rango, muestra un mensaje de error.</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 5 </h3>
                                    <p className="text-break mx-auto w-50">Escribe un programa que solicite al usuario un número del 1 al 12 y muestre el nombre del mes correspondiente. Si el número está fuera de ese rango, muestra un mensaje de error.</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 6 </h3>
                                    <p className="text-break mx-auto w-50">Escribe un programa que solicite al usuario tres números y determine si forman un triángulo válido. Un triángulo es válido si la suma de las longitudes de dos de sus lados es siempre mayor que la longitud del tercer lado.</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 7 </h3>
                                    <p className="text-break mx-auto w-50">Escribe un programa que solicite al usuario una palabra y muestre cada letra de la palabra en una línea separada.</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 8 </h3>
                                    <p className="text-break mx-auto w-50">Escribe un programa que genere una secuencia de números del 1 al 10, pero solo muestre aquellos que sean divisibles por 3.</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 9 </h3>
                                    <p className="text-break mx-auto w-50">Escribe un programa que solicite al usuario un número y muestre la tabla de multiplicar de ese número hasta el 10.</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 10 </h3>
                                    <p className="text-break mx-auto w-50">Escribe un programa que solicite al usuario un número y muestre la suma de todos los números pares desde 0 hasta ese número.</p>
                                </div>
                            </div>
                        </div>
                        <div id="element5" className={`accordion-item mt-4 rounded-5 animated-left ${elementVisibility.element5 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }} >
                            {new Date() >= new Date(course[3]?.date || '') || (localStorage.getItem("access")) ?
                                <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a4" aria-expanded="false" aria-controls="flush-collapseFour">
                                    <h2 className="text-light">Clase 4</h2>
                                </button>
                                :
                                <button className="accordion-button collapsed bg-dark text-light" style={{ borderRadius: "40px" }} type="button">
                                    <h2>Clase 4 {course[3]?.date ? "- " + new Date(course[3].date).toLocaleDateString('es-ES', { month: 'long', day: 'numeric' }) : ''}</h2>
                                </button>}
                            <div id="a4" className="accordion-collapse collapse" >
                                <div className="accordion-body text-light bg-dark ">
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 1 </h3>
                                    <p className="text-break mx-auto w-50">Crea una función llamada "saludar", esta función de mostrar en pantalla " hola, se está ejecutando la función saludar".</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 2 </h3>
                                    <p className="text-break mx-auto w-50">Crea una función llamada "sumar", esta función deberá imprimir en pantalla el resultado de una suma de 2 números por medio de parámetros.</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 3 </h3>
                                    <p className="text-break mx-auto w-50">Crea una función llamada "restar", esta función deberá imprimir en pantalla el resultado de una resta de 2 números por medio de parámetros.</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 4 </h3>
                                    <p className="text-break mx-auto w-50">Crea una función llamada "multiplicar", esta función deberá imprimir en pantalla el resultado de una multiplicación de 2 números por medio de parámetros.</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 5 </h3>
                                    <p className="text-break mx-auto w-50">Crea una función llamada "dividir", esta función deberá imprimir en pantalla el resultado de una división de 2 números por medio de parámetros.</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 6 </h3>
                                    <p className="text-break mx-auto w-50">Crea una función llamada "calculadora", esta funcion deberá usar las funciones sumar,restar,multiplicar y dividir, tambien deberá dejar al usuario indicar los 2 números y indicar que tipo de orperacion quiere realizar, tendrás que utilizar condicionales para esto.</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 7 </h3>
                                    <p className="text-break mx-auto w-50">Crea una función llamada "es_par_o_inpar", esta función deberá indicarle al usuario que escriba un número y retornarle "es par" en el caso de que el número es par ó "es impar" en el caso de no serlo.</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 8 </h3>
                                    <p className="text-break mx-auto w-50">Crea una funcion llamada "adivina_numero", esta función deberá indicarle al usuario que escriba un número entre el 1 y el 10, con random genera un número random entre 1 y 10 y escribe en pantalla si el numero que eligió al usuario es el mismo que escogió el número random.</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 9 </h3>
                                    <p className="text-break mx-auto w-50">Crea una función llamada "fecha_y_hora_actual", esta función deberá indicarle al usuario si quiere ver la fecha actual o la hora, al elegir la hora imprime en pantalla la hora, al elegir la fecha imprime en pantalla la fecha.</p>
                                </div>
                            </div>
                        </div>
                        <div id="element6" className={`accordion-item mt-4 rounded-5 animated-left ${elementVisibility.element6 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }} >
                            {new Date() >= new Date(course[4]?.date || '') || (localStorage.getItem("access")) ?
                                <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a5" aria-expanded="false" aria-controls="flush-collapseFive">
                                    <h2 className="text-light">Clase 5</h2>
                                </button>
                                :
                                <button className="accordion-button collapsed bg-dark text-light" style={{ borderRadius: "40px" }} type="button">
                                    <h2>Clase 5 {course[4]?.date ? "- " + new Date(course[4].date).toLocaleDateString('es-ES', { month: 'long', day: 'numeric' }) : ''}</h2>
                                </button>}
                            <div id="a5" className="accordion-collapse collapse" >
                                <div className="accordion-body text-light bg-dark ">
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 1 </h3>
                                    <p className="text-break mx-auto w-50">Dada una lista de números, escribe un programa que calcule la suma de todos los elementos y la imprima.</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 2 </h3>
                                    <p className="text-break mx-auto w-50">Dada una tupla que contiene información de una persona en el siguiente formato: (nombre, edad, ciudad), escribe un programa que imprima el nombre, la edad y la ciudad de la persona.<br></br>Ejemplo:<br></br>Input: ("Juan", 25, "Madrid")<br></br>Output: Nombre: Juan, Edad: 25, Ciudad: Madrid</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 3 </h3>
                                    <p className="text-break mx-auto w-50">Crea una tupla con 5 elementos y modifica el elemento 3 a otro valor, acuerdate que las tuplas no pueden modificarse, intenta aplicar lo visto en clases para hacerlo.</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 4 </h3>
                                    <p className="text-break mx-auto w-50">Dada una lista de números, escribe un programa que imprima todos los números pares presentes en la lista.<br></br>Ejemplo:<br></br>Input: [1, 2, 3, 4, 5, 6]<br></br>Output: [2, 4, 6].</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 5 </h3>
                                    <p className="text-break mx-auto w-50">Dada una lista de palabras, escribe un programa que encuentre y devuelva la palabra más larga de la lista.<br></br>Ejemplo:<br></br>Input: ["Hola", "Programación", "Python", "Ejercicio"]<br></br>Output: "Programación"</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 6 </h3>
                                    <p className="text-break mx-auto w-50">Dada una lista de palabras, escribe un programa que encuentre y devuelva la palabra más alta alfabéticamente de la lista.</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 7 </h3>
                                    <p className="text-break mx-auto w-50">Dada una tupla de elementos, escribe un programa que invierta el orden de los elementos y devuelva una nueva tupla invertida.</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 8 </h3>
                                    <p className="text-break mx-auto w-50">Dada una lista de tuplas que contienen información de personas en el siguiente formato: (nombre, edad, altura), escribe un programa que ordene la lista de personas por altura de forma descendente y, en caso de empate, por edad de forma ascendente.<br></br>Ejemplo:<br></br>Input: [("Juan", 25, 170), ("María", 30, 160), ("Pedro", 20, 170)]<br></br>Output: [("Juan", 25, 170), ("Pedro", 20, 170), ("María", 30, 160)].</p>
                                </div>
                            </div>
                        </div>
                        <div id="element7" className={`accordion-item mt-4 rounded-5 animated-left ${elementVisibility.element7 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }} >
                            {(new Date() >= new Date(course[5]?.date || '')) || (localStorage.getItem("access")) ?
                                <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a6" aria-expanded="false" aria-controls="flush-collapseSix">
                                    <h2 className="text-light">Clase 6</h2>
                                </button>
                                :
                                <button className="accordion-button collapsed bg-dark text-light" style={{ borderRadius: "40px" }} type="button">
                                    <h2>Clase 6 {course[5]?.date ? "- " + new Date(course[5].date).toLocaleDateString('es-ES', { month: 'long', day: 'numeric' }) : ''}</h2>
                                </button>}
                            <div id="a6" className="accordion-collapse collapse" >
                                <div className="accordion-body text-light bg-dark ">
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 1 </h3>
                                    <p className="text-break mx-auto w-50">Dados dos conjuntos, encuentra la intersección entre ellos.</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 2 </h3>
                                    <p className="text-break mx-auto w-50">Dado un conjunto de números, verifica si todos los elementos son pares.</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 3 </h3>
                                    <p className="text-break mx-auto w-50">Crea un diccionario que represente el inventario de una tienda, donde las claves sean los nombres de los productos y los valores sean las cantidades disponibles.</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 4 </h3>
                                    <p className="text-break mx-auto w-50">Dado un diccionario de notas de estudiantes, calcula el promedio de las notas.</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 5 </h3>
                                    <p className="text-break mx-auto w-50">Dado un conjunto de números, encuentra el número más grande y el número más pequeño.</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 6 </h3>
                                    <p className="text-break mx-auto w-50">Dado un conjunto de palabras, elimina todas las palabras que tengan menos de 5 caracteres.</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 7 </h3>
                                    <p className="text-break mx-auto w-50">Dado un diccionario de nombres y edades, crea un nuevo diccionario solo con las personas mayores de 18 años.</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 8 </h3>
                                    <p className="text-break mx-auto w-50">Dado un diccionario de productos y sus precios, encuentra el producto más caro.</p>
                                </div>
                            </div>
                        </div>
                        <div id="element8" className={`accordion-item mt-4 rounded-5 animated-left ${elementVisibility.element8 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }} >
                            {new Date() >= new Date(course[6]?.date || '') || (localStorage.getItem("access")) ?
                                <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a7" aria-expanded="false" aria-controls="flush-collapseSeven">
                                    <h2 className="text-light">Clase 7</h2>
                                </button>
                                :
                                <button className="accordion-button collapsed bg-dark text-light" style={{ borderRadius: "40px" }} type="button">
                                    <h2>Clase 7 {course[6]?.date ? "- " + new Date(course[6].date).toLocaleDateString('es-ES', { month: 'long', day: 'numeric' }) : ''}</h2>
                                </button>}
                            <div id="a7" className="accordion-collapse collapse" >
                                <div className="accordion-body text-light bg-dark ">
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 1 </h3>
                                    <p className="text-break mx-auto w-50">Escribe un programa que solicite al usuario dos números enteros y realice la división del primero entre el segundo. Asegúrate de manejar las excepciones que puedan ocurrir, como la división por cero o la entrada de valores no numérico.</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 2 </h3>
                                    <p className="text-break mx-auto w-50">Crea un programa que lea un archivo de texto llamado "datos.txt" y muestre su contenido en la consola. Maneja las excepciones que puedan surgir en caso de que el archivo no exista o haya algún problema al leerlo.</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 3 </h3>
                                    <p className="text-break mx-auto w-50">Escribe un programa que solicite al usuario que ingrese una serie de frases. Luego, guarda esas frases en un archivo de texto llamado "frases.txt". Asegúrate de manejar las excepciones que puedan ocurrir durante la escritura del archivo.</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 4 </h3>
                                    <p className="text-break mx-auto w-50">Crea un programa que solicite al usuario que ingrese una nueva frase. Luego, agrega esa frase al final del archivo "frases.txt" creado en el ejercicio anterior. Maneja las excepciones que puedan surgir durante la actualización del archivo.</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 5 </h3>
                                    <p className="text-break mx-auto w-50">Escribe un programa que permita al usuario eliminar un archivo. El programa debe solicitar el nombre del archivo al usuario y luego eliminarlo. Maneja las excepciones que puedan surgir si el archivo no existe o no se puede eliminar.</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 6 </h3>
                                    <p className="text-break mx-auto w-50">Escribe un programa que solicite al usuario el nombre de un archivo de origen y un archivo de destino. El programa debe copiar el contenido del archivo de origen al archivo de destino. Asegúrate de manejar las excepciones que puedan ocurrir durante el proceso de copia.</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 7 </h3>
                                    <p className="text-break mx-auto w-50">Crea un programa que solicite al usuario una palabra clave y un nombre de archivo. El programa debe buscar la palabra clave en el archivo y mostrar todas las líneas que la contengan. Maneja las excepciones que puedan surgir durante la lectura del archivo o si no se encuentra la palabra clave.</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 8 </h3>
                                    <p className="text-break mx-auto w-50">Escribe un programa que lea un archivo de texto y cuente cuántas veces aparece cada palabra en el archivo. Luego, muestra el resultado en la consola. Maneja las excepciones que puedan ocurrir durante la lectura del archivo.</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 9 </h3>
                                    <p className="text-break mx-auto w-50">Crea un programa que lea un archivo CSV llamado "datos.csv" que contenga nombres y edades separados por comas. El programa debe mostrar en la consola los nombres de las personas mayores de 18 años. Maneja las excepciones que puedan surgir durante la lectura del archivo o si hay un formato incorrecto en los datos.</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 10 </h3>
                                    <p className="text-break mx-auto w-50">Escribe un programa que solicite al usuario ingresar el nombre y la edad de una persona. Luego, guarda esa información como un objeto en un archivo binario llamado "persona.bin". Asegúrate de manejar las excepciones que puedan ocurrir durante la escritura del archivo.</p>  </div>
                            </div>
                        </div>
                        <div id="element9" className={`accordion-item mt-4 rounded-5 animated-left ${elementVisibility.element9 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }} >
                            {new Date() >= new Date(course[7]?.date || '') || (localStorage.getItem("access")) ?
                                <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a7" aria-expanded="false" aria-controls="flush-collapseSeven">
                                    <h2 className="text-light">Clase 8</h2>
                                </button>
                                :
                                <button className="accordion-button collapsed bg-dark text-light" style={{ borderRadius: "40px" }} type="button">
                                    <h2>Clase 8 {course[7]?.date ? "- " + new Date(course[7].date).toLocaleDateString('es-ES', { month: 'long', day: 'numeric' }) : ''}</h2>
                                </button>}
                            <div id="a8" className="accordion-collapse collapse" >
                                <div className="accordion-body text-light bg-dark ">
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 1 </h3>
                                    <p className="text-break mx-auto w-50">Crear una clase "Persona" con atributos como nombre, edad y dirección. Luego, crea varios objetos de persona y muestra sus datos.</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 2 </h3>
                                    <p className="text-break mx-auto w-50">Crea una clase "Rectángulo" con atributos "ancho" y "alto". Agrega métodos para calcular el área y el perímetro del rectángulo.</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 3 </h3>
                                    <p className="text-break mx-auto w-50">Implementa una clase "Círculo" con un atributo "radio". Agrega métodos para calcular el área y la circunferencia del círculo.</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 4 </h3>
                                    <p className="text-break mx-auto w-50">Crea una clase "CuentaBancaria" que tenga atributos como saldo y número de cuenta. Agrega métodos para depositar y retirar dinero, y para consultar el saldo.</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 5 </h3>
                                    <p className="text-break mx-auto w-50">Diseña una clase "Estudiante" con atributos como nombre, edad y calificaciones. Agrega métodos para calcular el promedio de calificaciones del estudiante.</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 6 </h3>
                                    <p className="text-break mx-auto w-50">Crea una clase "Libro" con atributos como título, autor y año de publicación. Implementa métodos para mostrar la información del libro y para verificar si dos libros son iguales.</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 7 </h3>
                                    <p className="text-break mx-auto w-50">Diseña una clase "Tienda" que administre productos. Cada producto debe tener un nombre, precio y cantidad en stock. Agrega métodos para agregar y vender productos, y para calcular el valor total de la tienda.</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 8 </h3>
                                    <p className="text-break mx-auto w-50">Implementa una clase "Coche" con atributos como marca, modelo y año. Agrega métodos para acelerar, frenar y mostrar la información del coche.</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 9 </h3>
                                    <p className="text-break mx-auto w-50">Crea una clase "Película" con atributos como título, director y duración. Agrega métodos para mostrar la información de la película y para calcular su duración en minutos y horas.</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 10 </h3>
                                    <p className="text-break mx-auto w-50">Diseña una clase "Mascota" con atributos como nombre, especie y edad. Agrega métodos para mostrar la información de la mascota y para verificar si dos mascotas son de la misma especie.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Exercises