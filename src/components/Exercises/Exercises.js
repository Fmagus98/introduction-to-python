import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Exercises = () => {
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
                                <h1>Ejercicios</h1>
                                <h2> Este apartado proporciona la oportunidad de practicar y aplicar los conceptos aprendidos. Los ejercicios van desde simples hasta desafiantes, permitiendo a los estudiantes resolver problemas y adquirir experiencia en la escritura de código Python. Cada ejercicio se describe brevemente, se brinda un ejemplo de solución y se alienta a los estudiantes a intentar resolverlos por sí mismos antes de revisar la solución. Los ejercicios abarcan temas como impresión en la consola, cálculos matemáticos, entrada y procesamiento de datos, y uso de estructuras de control. El objetivo es fortalecer las habilidades de programación y la comprensión de los conceptos básicos de Python.</h2>
                                <div className="text-center text-lg-start">
                                    <a href="#exercises" className="btn-get-started scrollto">Empieza a practicar!</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 order-1 order-lg-2 hero-img" data-aos="zoom-out" data-aos-delay="300">
                            <img src="img/python.png" className="img-fluid animated vh-60" alt="" />
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
                    <g id="exercises" className="wave3">
                        <use xlinkHref="#wave-path" x="50" y="9" fill="#fff" />
                    </g>
                </svg>
            </section>

            <section id="faq" className="faq section-bg">
                <div className="container">
                    <div className="section-title" data-aos="fade-up">
                        <h2>Ejercicios</h2>
                        <p>Contenido</p>
                    </div>
                    <div className="accordion accordion-flush w-100 mx-auto rounded-5" id="accordionFlushExample">
                        <div className="accordion-item rounded-5" style={{ background: "#010483" }} >
                            <button className="accordion-button collapsed bg-transparent text-light" pe="button" data-bs-toggle="collapse" data-bs-target="#a1" aria-expanded="false" aria-controls="flush-collapseOne">
                                <h2 data-aos="fade-right">Clase 1</h2>
                            </button>
                            <div id="a1" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 1 </h3>
                                    <p className="text-center mx-auto w-75"> Solicitar al usuario que ingrese su nombre y luego imprimir un mensaje de saludo con el nombre proporcionado.
                                    </p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 2 </h3>
                                    <p className="text-center mx-auto w-75">Pedir al usuario que ingrese su edad y luego imprimir un mensaje que diga "Tienes X años" (reemplazando X con la edad ingresada).
                                    </p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 3 </h3>
                                    <p className="text-center mx-auto w-75"> Solicitar al usuario que ingrese dos palabras y luego imprimir la concatenación de las dos palabras ingresadas.
                                    </p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 4 </h3>
                                    <p className="text-center mx-auto w-75"> Pedir al usuario que ingrese su nombre y su edad. Luego imprimir un mensaje que diga "Hola, [nombre]. Tienes [edad] años".
                                    </p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 5 </h3>
                                    <p className="text-center mx-auto w-75"> Solicitar al usuario que ingrese su nombre y luego imprimir un mensaje de saludo con el nombre proporcionado.
                                    </p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 6 </h3>
                                    <p className="text-center mx-auto w-75"> Solicitar al usuario que ingrese su nombre y una palabra. Luego imprimir un mensaje que diga "Hola, [nombre]. La longitud de la palabra que ingresaste es [longitud]".
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mt-4 rounded-5" style={{ background: "#010483" }}>
                            <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a2" aria-expanded="false" aria-controls="flush-collapseTwo">
                                <h2 data-aos="fade-right" className="text-light">Clase 2</h2>
                            </button>
                            <div id="a2" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 1 </h3>
                                    <p className="text-center mx-auto w-75"> Solicitar al usuario que ingrese un número y guardarlo en una variable, convertir este número a un tipo de dato "float" y luego mostrar en la terminal el resultado de 5 + el número que escribió el usuario.</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 2 </h3>
                                    <p className="text-center mx-auto w-75">Solicita al usuario que ingrese su nombre y luego imprime en pantalla el nombre todo en mayúscula</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 3 </h3>
                                    <p className="text-center mx-auto w-75">Solicita al usuario que ingrese su nombre y luego imprime en pantalla un valor booleano si lo que escribió el usuario está todo en minúscula es True, si hay algo en mayúscula es False</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 4 </h3>
                                    <p className="text-center mx-auto w-75"> Una variable contiene un tipo de dato "string" diciendo un trabalenguas "A Cuesta le cuesta subir la cuesta, y en medio de la cuesta, va y se acuesta.", imprime en pantalla la cantidad de veces que dijo "cuesta".</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 5 </h3>
                                    <p className="text-center mx-auto w-75"> Una variable contiene un tipo de dato "string" diciendo "   El zorro iba andando por la pradera   ", muestra en pantalla el mismo texto eliminando los espacios que hay al principio y final del texto.
                                    </p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 6 </h3>
                                    <p className="text-center mx-auto w-75"> A partir del ejercicio 6 no te daré pistas, asi que presta mucha atención a la consigna. <br></br>Solicita al usuario 2 números y imprime en pantalla la sumatoria de estos números.</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 7 </h3>
                                    <p className="text-center mx-auto w-75"> Solicita al usuario 2 nombres y imprime en pantalla de forma booleana(True - False) si son los mismos nombres o no (True = son iguales, False = no lo son).</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 8 </h3>
                                    <p className="text-center mx-auto w-75"> Solicita al usuario 2 números y imprime en pantalla de forma booleana(True - False) si el primer número es mayor o igual al segundo número.</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 9 </h3>
                                    <p className="text-center mx-auto w-75"> Solicita al usuario 2 números y imprime en pantalla de forma booleana(True - False) si el primer número es mayor o igual al segundo número.</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 10 </h3>
                                    <p className="text-center mx-auto w-75"> Situacion: Un auto pasa por un control policial, el policia le pide el permiso de conducir, papeles del auto y su documentacion, el policia no debe detenerlo si es mayor de edad y tiene el permiso de conducir y los papeles en regla.<br></br><br></br>Solicita al usuario que escriba "True" o "False" a las siguientes preguntas:<br></br>1_ ¿Es mayor de edad?.<br></br>2_Tiene permiso de conducir y los papeles en regla?. <br></br>Luego imprime en pantalla de forma booleana (True - False), si cumple con las 2 preguntas o no (true = cumple, false = no cumple).</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mt-4 rounded-5" style={{ background: "#010483" }}>
                            <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a3" aria-expanded="false" aria-controls="flush-collapseThree">
                                <h2 data-aos="fade-right" className="text-light">Clase 3</h2>
                            </button>
                            <div id="a3" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 1 </h3>
                                    <p className="text-center mx-auto w-75">Escribe un programa que solicite al usuario un número e imprima si es positivo, negativo o cero.</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 2 </h3>
                                    <p className="text-center mx-auto w-75">Escribe un programa que tome dos números como entrada y muestre cuál de ellos es mayor, o si son iguales.</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 3 </h3>
                                    <p className="text-center mx-auto w-75">Escribe un programa que solicite al usuario su edad y determine si es mayor de edad (18 años o más) o menor de edad.</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 4 </h3>
                                    <p className="text-center mx-auto w-75">EEscribe un programa que solicite al usuario un número del 1 al 7 y muestre el día de la semana correspondiente (1 - Lunes, 2 - Martes, ..., 7 - Domingo). Si el número está fuera de ese rango, muestra un mensaje de error.</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 5 </h3>
                                    <p className="text-center mx-auto w-75">Escribe un programa que solicite al usuario un número del 1 al 12 y muestre el nombre del mes correspondiente. Si el número está fuera de ese rango, muestra un mensaje de error.</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 6 </h3>
                                    <p className="text-center mx-auto w-75">Escribe un programa que solicite al usuario tres números y determine si forman un triángulo válido. Un triángulo es válido si la suma de las longitudes de dos de sus lados es siempre mayor que la longitud del tercer lado.</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 7 </h3>
                                    <p className="text-center mx-auto w-75">Escribe un programa que solicite al usuario una palabra y muestre cada letra de la palabra en una línea separada.</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 8 </h3>
                                    <p className="text-center mx-auto w-75">Escribe un programa que genere una secuencia de números del 1 al 10, pero solo muestre aquellos que sean divisibles por 3.</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 9 </h3>
                                    <p className="text-center mx-auto w-75">Escribe un programa que solicite al usuario un número y muestre la tabla de multiplicar de ese número hasta el 10.</p>
                                    <h3 className="text-center mx-auto mt-4">Ejercicio 10 </h3>
                                    <p className="text-center mx-auto w-75">Escribe un programa que solicite al usuario un número y muestre la suma de todos los números pares desde 0 hasta ese número.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mt-4 rounded-5" style={{ background: "#010483" }}>
                            <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a4" aria-expanded="false" aria-controls="flush-collapseFour">
                                <h2 data-aos="fade-right" className="text-light">Clase 4</h2>
                            </button>
                            <div id="a4" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <h3 className="text-center mx-auto mt-4">Ejercicio 1 </h3>
                                <p className="text-center mx-auto w-75">Crea una función llamada "saludar", esta función de mostrar en pantalla " hola, se está ejecutando la función saludar".</p>
                                <h3 className="text-center mx-auto mt-4">Ejercicio 2 </h3>
                                <p className="text-center mx-auto w-75">Crea una función llamada "sumar", esta función deberá imprimir en pantalla el resultado de una suma de 2 números por medio de parámetros.</p>
                                <h3 className="text-center mx-auto mt-4">Ejercicio 3 </h3>
                                <p className="text-center mx-auto w-75">Crea una función llamada "restar", esta función deberá imprimir en pantalla el resultado de una resta de 2 números por medio de parámetros.</p>
                                <h3 className="text-center mx-auto mt-4">Ejercicio 4 </h3>
                                <p className="text-center mx-auto w-75">Crea una función llamada "multiplicar", esta función deberá imprimir en pantalla el resultado de una multiplicación de 2 números por medio de parámetros.</p>
                                <h3 className="text-center mx-auto mt-4">Ejercicio 5 </h3>
                                <p className="text-center mx-auto w-75">Crea una función llamada "dividir", esta función deberá imprimir en pantalla el resultado de una división de 2 números por medio de parámetros.</p>
                                <h3 className="text-center mx-auto mt-4">Ejercicio 6 </h3>
                                <p className="text-center mx-auto w-75">Crea una función llamada "calculadora", esta funcion deberá usar las funciones sumar,restar,multiplicar y dividir, tambien deberá dejar al usuario indicar los 2 números y indicar que tipo de orperacion quiere realizar, tendrás que utilizar condicionales para esto.</p>
                                <h3 className="text-center mx-auto mt-4">Ejercicio 7 </h3>
                                <p className="text-center mx-auto w-75">Crea una función llamada "es_par_o_inpar", esta función deberá indicarle al usuario que escriba un número y retornarle "es par" en el caso de que el número es par ó "es impar" en el caso de no serlo.</p>
                                <h3 className="text-center mx-auto mt-4">Ejercicio 8 </h3>
                                <p className="text-center mx-auto w-75">Crea una funcion llamada "adivina_numero", esta función deberá indicarle al usuario que escriba un número entre el 1 y el 10, con random genera un número random entre 1 y 10 y escribe en pantalla si el numero que eligió al usuario es el mismo que escogió el número random.</p>
                                <h3 className="text-center mx-auto mt-4">Ejercicio 9 </h3>
                                <p className="text-center mx-auto w-75">Crea una función llamada "fecha_y_hora_actual", esta función deberá indicarle al usuario si quiere ver la fecha actual o la hora, al elegir la hora imprime en pantalla la hora, al elegir la fecha imprime en pantalla la fecha.</p>
                            </div>
                        </div>
                        <div className="accordion-item mt-4 rounded-5" style={{ background: "#010483" }}>
                            <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a5" aria-expanded="false" aria-controls="flush-collapseFive">
                                <h2 data-aos="fade-right" className="text-light">Clase 5</h2>
                            </button>
                            <div id="a5" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body text-light bg-dark rounded-5 rounded-top">

                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mt-4 rounded-5" style={{ background: "#010483" }}>
                            <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a6" aria-expanded="false" aria-controls="flush-collapseSix">
                                <h2 data-aos="fade-right" className="text-light">Clase 6</h2>
                            </button>
                            <div id="a6" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body text-light bg-dark rounded-5 rounded-top">

                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mt-4 rounded-5" style={{ background: "#010483" }}>
                            <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a7" aria-expanded="false" aria-controls="flush-collapseSeven">
                                <h2 data-aos="fade-right" className="text-light">Clase 7</h2>
                            </button>
                            <div id="a7" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mt-4 rounded-5" style={{ background: "#010483" }}>
                            <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a7" aria-expanded="false" aria-controls="flush-collapseEight">
                                <h2 data-aos="fade-right" className="text-light">Clase 8</h2>
                            </button>
                            <div id="a7" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body text-light bg-dark rounded-5 rounded-top">
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