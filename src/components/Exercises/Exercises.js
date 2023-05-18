import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Exercises = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="index">
            <section className="section-index container">
                <div className="row">
                    <div className="col mt-4 mb-4"></div>
                    <div className="mb-4 mt-4"></div>
                    <div className="grid-item mt-4 mb-2">
                        <h1 className="text-center">
                            Ejercicios
                        </h1>
                    </div>
                    <div className="col mt-4"></div>
                </div>
                <div className="row">
                    <div className="col mt-4"></div>
                    <div className="text-center grid-item mt-4 px-4">
                        <p>
                            Este apartado proporciona la oportunidad de practicar y aplicar los conceptos aprendidos. Los ejercicios van desde simples hasta desafiantes, permitiendo a los estudiantes resolver problemas y adquirir experiencia en la escritura de código Python. Cada ejercicio se describe brevemente, se brinda un ejemplo de solución y se alienta a los estudiantes a intentar resolverlos por sí mismos antes de revisar la solución. Los ejercicios abarcan temas como impresión en la consola, cálculos matemáticos, entrada y procesamiento de datos, y uso de estructuras de control. El objetivo es fortalecer las habilidades de programación y la comprensión de los conceptos básicos de Python.
                        </p>
                    </div>
                    <div className="col mt-4"></div>
                </div>
            </section>
            <section className="intr">
                <img className="wave" alt="" src='../img/wave.png' />
                <h2 data-aos="flip-left" className="h2-c text-center mx-auto">Contenido</h2>
                <div className="accordion accordion-flush w-75 mx-auto  " id="accordionFlushExample">
                    <div className="accordion-item bg-transparent">
                        <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a1" aria-expanded="false" aria-controls="flush-collapseOne">
                            <h2 data-aos="fade-right" className="text-light">Clase 1</h2>
                        </button>
                        <div id="a1" className="accordion-collapse collapse text-light" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
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
                    <div className="accordion-item bg-transparent">
                        <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a2" aria-expanded="false" aria-controls="flush-collapseTwo">
                            <h2 data-aos="fade-right" className="text-light">Clase 2</h2>
                        </button>
                        <div id="a2" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body text-light">

                            </div>
                        </div>
                    </div>
                    <div className="accordion-item  bg-transparent">
                        <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a3" aria-expanded="false" aria-controls="flush-collapseThree">
                            <h2 data-aos="fade-right" className="text-light">Clase 3</h2>
                        </button>
                        <div id="a3" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body text-light">

                            </div>
                        </div>
                    </div>
                    <div class="accordion-item bg-transparent">
                        <button class="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a4" aria-expanded="false" aria-controls="flush-collapseTwo">
                            <h2 data-aos="fade-right" className="text-light">Clase 4</h2>
                        </button>
                        <div id="a4" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body text-light">

                            </div>
                        </div>
                    </div>
                    <div class="accordion-item bg-transparent">
                        <button class="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a5" aria-expanded="false" aria-controls="flush-collapseTwo">
                            <h2 data-aos="fade-right" className="text-light">clase 5</h2>
                        </button>
                        <div id="a5" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body text-light">

                            </div>
                        </div>
                    </div>
                    <div class="accordion-item bg-transparent text-center">
                        <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a6" aria-expanded="false" aria-controls="flush-collapseTwo">
                            <h2 data-aos="fade-right" className="text-light">Clase 6</h2>
                        </button>
                        <div id="a6" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body text-light">

                            </div>
                        </div>
                    </div>
                    <div class="accordion-item bg-transparent text-center">
                        <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a6" aria-expanded="false" aria-controls="flush-collapseTwo">
                            <h2 data-aos="fade-right" className="text-light">Clase 7</h2>
                        </button>
                        <div id="a6" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body text-light">

                            </div>
                        </div>
                    </div>
                    <div class="accordion-item bg-transparent text-center">
                        <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a6" aria-expanded="false" aria-controls="flush-collapseTwo">
                            <h2 data-aos="fade-right" className="text-light">Clase 8</h2>
                        </button>
                        <div id="a6" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body text-light">

                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}

export default Exercises