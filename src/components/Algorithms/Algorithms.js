import React from 'react'
import { colorPrimaryPython } from '../../colors'
import useScrollAnimation from '../../useScrollAnimation'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { SearchAlgorithms,sortingAlgorithms } from './algorithmsCode';

const Algorithms = () => {
    const elementVisibility = useScrollAnimation();
    const algorithmsCode = (algorithm) => {
        return algorithm.map(p =>
            <div key={p.id} style={{ marginTop: "3rem" }}>
                <p className="w-75 mx-auto text-break"><span className="fw-bold">{p.name}</span><br></br>{p.description}</p>
                <div className="w-75 mx-auto d-flex p-2 flex-row-reverse justify-content-between">
                    <span><button className="btn btn-sm text-light" style={{ backgroundColor: "#234A91" }} onClick={() => navigator.clipboard.writeText(p.code)}><i className="bi bi-clipboard" /> Copiar</button></span>
                </div>
                <SyntaxHighlighter className="mx-auto border-content console" language="python" style={nightOwl}>
                    {p.code}
                </SyntaxHighlighter>
                <h6 className="w-75 mt-4 text-break mx-auto">Descripción paso a paso del código</h6>
                <ul className="intr-ul">
                    {p.steps.map((item, index) => (
                        <li key={index}>
                            <>
                                {item.split('\n').map((line, index) => (
                                    <p key={index} className="w-75 mx-auto mt-4 mb-4 text-break">{line}</p>
                                ))}
                            </>
                        </li>
                    ))}
                </ul>
                <hr></hr>
            </div>
            )
    }

    return (
        <>{localStorage.getItem("access") ?
            <>
                <section id="hero" style={{ background: colorPrimaryPython }}>
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
                                <div>
                                    <h1>Algoritmos</h1>
                                    <h2>En este apartado verás una serie de algoritmos que te ayudará a comprender la programación</h2>
                                    <div className="text-center text-lg-start">
                                        <a href="/#algorithms" className="btn-get-started scrollto">Mira los algoritmos</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 order-1 order-lg-2 hero-img">
                                <img src="../img/python.png" className="img-fluid animated vh-60" alt="" />
                            </div>
                        </div>
                    </div>
                    <svg id="algorithms" className="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28 " preserveAspectRatio="none">
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
                        <div id="element1" className={`section-title animated-down ${elementVisibility.element1 ? 'slide-down' : ''}`}>
                            <h2>Algoritmos</h2>
                            <p>Contenido</p>
                        </div>
                        <div className="accordion accordion-flush w-100 mx-auto" id="accordionFlushExample">
                            <div id="element2" className={`accordion-item animated-left ${elementVisibility.element2 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }} >
                                <button className="accordion-button collapsed  bg-transparent text-light" type="button" data-bs-toggle="collapse" data-bs-target="#a1" aria-expanded="false" aria-controls="flush-collapseOne">
                                    <h2>¿Que es un algoritmo?</h2>
                                </button>
                                <div id="a1" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className=" accordion-body text-light bg-dark">
                                        <h3 className="mt-7 text-break mx-auto w-75 fw-bold">Descripción</h3>
                                        <p className="text-break mx-auto w-75">Un algoritmo es una secuencia de pasos bien definidos y ordenados que describe cómo resolver un problema o realizar una tarea específica. En esencia, un algoritmo es como una receta o un conjunto de instrucciones detalladas que guían a una computadora (o a cualquier otra entidad que pueda seguir instrucciones) para llevar a cabo una serie de operaciones con el fin de alcanzar un objetivo deseado.</p>
                                        <h3 className="mt-4 text-break mx-auto w-75 fw-bold">Caracteristicas</h3>
                                        <p className="text-break mx-auto w-75">Veamos con más detalle los componentes y características de un algoritmo:</p>
                                        <ul className="intr-ul">
                                            <li><p className="mt-4 mb-4 text-break mx-auto w-75"><span className="fw-bold">Secuencia de pasos:</span> Un algoritmo está compuesto por una serie de pasos o instrucciones que deben seguirse en un orden específico. Cada paso indica una acción que debe realizarse, como realizar cálculos, manipular datos o tomar decisiones.</p></li>
                                            <li><p className="mt-4 mb-4 text-break mx-auto w-75"><span className="fw-bold">Precisión y claridad:</span> Los pasos de un algoritmo deben ser precisos y claros, de modo que no haya ambigüedad en cuanto a lo que se debe hacer en cada paso. Deben estar definidos con suficiente detalle para que cualquier persona (o computadora) pueda entender y seguir las instrucciones sin confusión.</p></li>
                                            <li><p className="mt-4 mb-4 text-break mx-auto w-75"><span className="fw-bold">Finitud:</span> Un algoritmo debe ser finito, lo que significa que debe tener un número finito de pasos y eventualmente debe terminar después de un número finito de operaciones. No puede entrar en un bucle infinito o continuar para siempre sin llegar a una conclusión.</p></li>
                                            <li><p className="mt-4 mb-4 text-break mx-auto w-75"><span className="fw-bold">Entradas y salidas definidas:</span> Un algoritmo debe tener claramente definidas las entradas que recibe, es decir, los datos con los que trabaja, y las salidas que produce, es decir, los resultados que devuelve después de completar la tarea.</p></li>
                                            <li><p className="mt-4 mb-4 text-break mx-auto w-75"><span className="fw-bold">Eficiencia:</span> Un buen algoritmo debe ser eficiente en términos de tiempo y recursos. Debería poder resolver el problema en un tiempo razonable y utilizando una cantidad razonable de recursos computacionales.</p></li>
                                            <li><p className="mt-4 mb-4 text-break mx-auto w-75"><span className="fw-bold">Independencia de la máquina:</span> Los algoritmos deben ser independientes de la máquina o plataforma en la que se ejecutan. Deben ser diseñados de manera que funcionen correctamente en diferentes sistemas y entornos.</p></li>
                                            <li><p className="mt-4 mb-4 text-break mx-auto w-75"><span className="fw-bold">Generalidad::</span> Un algoritmo bien diseñado debe ser generalizable, lo que significa que debería poder aplicarse a diferentes conjuntos de datos y problemas similares sin necesidad de modificaciones significativas.</p></li>
                                        </ul>
                                        <p className="text-break mx-auto w-75">Los algoritmos son fundamentales en informática y en muchos otros campos, ya que proporcionan un marco sistemático para resolver problemas de manera efectiva y eficiente. Desde simples algoritmos de ordenamiento hasta complejos algoritmos de aprendizaje automático, la capacidad de diseñar y comprender algoritmos es esencial para la resolución de problemas en el mundo digital y más allá.</p>
                                    </div>
                                </div>
                            </div>
                            <div id="element3" className={`accordion-item mt-4  animated-left ${elementVisibility.element3 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
                                <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a2" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    <h2 className="text-light">Algoritmos de búsqueda</h2>
                                </button>
                                <div id="a2" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body text-light bg-dark">
                                        <h3 className="mt-7 text-break mx-auto w-75 fw-bold">Descripción</h3>
                                        <p className="text-break mx-auto w-75">Los algoritmos de búsqueda son conjuntos de reglas y procedimientos diseñados para encontrar uno o más elementos específicos dentro de un conjunto de datos. Estos algoritmos son esenciales en informática y se utilizan en una variedad de aplicaciones, desde la búsqueda de un elemento en una lista hasta la exploración de un espacio de soluciones en problemas de inteligencia artificial.</p>
                                        <p className="text-break mx-auto w-75">Los algoritmos de búsqueda pueden variar en complejidad y eficiencia, y su elección depende del tamaño de los datos, la estructura de los datos y la velocidad requerida para encontrar el elemento deseado.</p>
                                        <h3 className="mt-7 text-break mx-auto w-75 fw-bold">Lista de algoritmos de búsqueda</h3>
                                        {algorithmsCode( SearchAlgorithms )}
                                    </div>
                                </div>
                            </div>
                            <div id="element4" className={`accordion-item mt-4  animated-left ${elementVisibility.element4 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
                                <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a3" aria-expanded="false" aria-controls="flush-collapseThree">
                                    <h2 className="text-light">Algoritmos de ordenamiento</h2>
                                </button>
                                <div id="a3" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body text-light bg-dark  ">
                                        <div id="content">
                                            <h3 className="mt-7 text-break mx-auto w-75 fw-bold">Descripción</h3>
                                            <p className="text-break mx-auto w-75">Los algoritmos de ordenamiento son algoritmos diseñados para organizar los elementos de una lista en un orden específico, generalmente ascendente o descendente, según un criterio definido.</p>
                                            <p className="text-break mx-auto w-75">La tarea principal de estos algoritmos es reorganizar los elementos de una lista de manera que estén dispuestos de acuerdo con un criterio de ordenamiento predefinido, lo que facilita su búsqueda, acceso y manipulación.</p>
                                            <h3 className="mt-7 text-break mx-auto w-75 fw-bold">Lista de algoritmos de ordenamiento</h3>
                                            {algorithmsCode( sortingAlgorithms )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="element5" className={`accordion-item mt-4  animated-left ${elementVisibility.element5 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
                                <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a4" aria-expanded="false" aria-controls="flush-collapseFour">
                                    <h2 className="text-light">Algoritmos de grafos</h2>
                                </button>
                                <div id="a4" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body text-light bg-dark  ">

                                    </div>
                                </div>
                            </div>
                            <div id="element6" className={`accordion-item mt-4  animated-left ${elementVisibility.element6 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
                                <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a5" aria-expanded="false" aria-controls="flush-collapseFive">
                                    <h2 className="text-light">Algoritmos de árboles</h2>
                                </button>
                                <div id="a5" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body text-light bg-dark  ">

                                    </div>
                                </div>
                            </div>
                            <div id="element7" className={`accordion-item mt-4  animated-left ${elementVisibility.element7 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
                                <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a6" aria-expanded="false" aria-controls="flush-collapseFive">
                                    <h2 className="text-light">Algoritmos de cadenas de texto</h2>
                                </button>
                                <div id="a6" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body text-light bg-dark">

                                    </div>
                                </div>
                            </div>
                            <div id="element8" className={`accordion-item mt-4  animated-left ${elementVisibility.element8 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
                                <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a7" aria-expanded="false" aria-controls="flush-collapseSix">
                                    <h2 className="text-light">Algoritmos de geometría computacional</h2>
                                </button>
                                <div id="a7" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body text-light bg-dark  ">

                                    </div>
                                </div>
                            </div>
                            <div id="element9" className={`accordion-item mt-4  animated-left ${elementVisibility.element9 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
                                <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a8" aria-expanded="false" aria-controls="flush-collapseSeven">
                                    <h2 className="text-light">Algoritmos de optimización</h2>
                                </button>
                                <div id="a8" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body text-light bg-dark  ">

                                    </div>
                                </div>
                            </div>
                            <div id="element10" className={`accordion-item mt-4  animated-left ${elementVisibility.element10 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
                                <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a9" aria-expanded="false" aria-controls="flush-collapseSeven">
                                    <h2 className="text-light">Algoritmos de aprendizaje automático y inteligencia artificial</h2>
                                </button>
                                <div id="a9" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body text-light bg-dark  ">

                                    </div>
                                </div>
                            </div>
                            <div id="element11" className={`accordion-item mt-4  animated-left ${elementVisibility.element11 ? 'slide-left' : ''}`} style={{ background: colorPrimaryPython, borderRadius: "40px" }}>
                                <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a10" aria-expanded="false" aria-controls="flush-collapseSeven">
                                    <h2 className="text-light">Algoritmos de compresión</h2>
                                </button>
                                <div id="a10" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body text-light bg-dark  ">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </> :
            <section id="hero" style={{ background: colorPrimaryPython }}>
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
                            <div >
                                <h1>Algoritmos</h1>
                                <h2>Este apartado estará disponible proximamente</h2>
                            </div>
                        </div>
                        <div className="col-lg-4 order-1 order-lg-2 hero-img" >
                            <img src="../img/python.png" className="img-fluid animated vh-60" alt="" />
                        </div>
                    </div>
                </div>
                <svg id="algorithms" className="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28 " preserveAspectRatio="none">
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

export default Algorithms
