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




                    <div className="accordion accordion-flush w-100 mx-auto rounded-5" style={{background:"#010483"}} id="accordionFlushExample">
                    <div className="accordion-item bg-transparent rounded-5" style={{background:"#010483"}}>
                        <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a1" aria-expanded="false" aria-controls="flush-collapseOne">
                            <h2 data-aos="fade-right" className="text-light">Clase 1</h2>
                        </button>
                        <div id="a1" className="accordion-collapse collapse text-light bg-dark" data-bs-parent="#accordionFlushExample">
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
                    <div className="accordion-item bg-transparent rounded-5 bg-dark" >
                        <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a2" aria-expanded="false" aria-controls="flush-collapseTwo">
                            <h2 data-aos="fade-right" className="text-light">Clase 2</h2>
                        </button>
                        <div id="a2" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body text-light">

                            </div>
                        </div>
                    </div>
                    <div className="accordion-item  bg-transparent rounded-5 bg-dark">
                        <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a3" aria-expanded="false" aria-controls="flush-collapseThree">
                            <h2 data-aos="fade-right" className="text-light">Clase 3</h2>
                        </button>
                        <div id="a3" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body text-light">
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item bg-transparent rounded-5 bg-dark">
                        <button class="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a4" aria-expanded="false" aria-controls="flush-collapseTwo">
                            <h2 data-aos="fade-right" className="text-light">Clase 4</h2>
                        </button>
                        <div id="a4" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body text-light">

                            </div>
                        </div>
                    </div>
                    <div class="accordion-item bg-transparent rounded-5 bg-dark">
                        <button class="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a5" aria-expanded="false" aria-controls="flush-collapseTwo">
                            <h2 data-aos="fade-right" className="text-light">clase 5</h2>
                        </button>
                        <div id="a5" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body text-light">

                            </div>
                        </div>
                    </div>
                    <div class="accordion-item bg-transparent text-center rounded-5 bg-dark">
                        <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a6" aria-expanded="false" aria-controls="flush-collapseTwo">
                            <h2 data-aos="fade-right" className="text-light">Clase 6</h2>
                        </button>
                        <div id="a6" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body text-light">

                            </div>
                        </div>
                    </div>
                    <div class="accordion-item bg-transparent text-center rounded-5 bg-dark">
                        <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a6" aria-expanded="false" aria-controls="flush-collapseTwo">
                            <h2 data-aos="fade-right" className="text-light">Clase 7</h2>
                        </button>
                        <div id="a6" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body text-light">

                            </div>
                        </div>
                    </div>
                    <div class="accordion-item bg-transparent text-center rounded-5 bg-dark">
                        <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a6" aria-expanded="false" aria-controls="flush-collapseTwo">
                            <h2 data-aos="fade-right" className="text-light">Clase 8</h2>
                        </button>
                        <div id="a6" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body text-light">
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