import React from 'react'
import { useLocation } from 'react-router-dom';
import { colorPrimaryPython } from '../../colors'

const DigitalPortfolio = () => {

    const location = useLocation()

    return (
        <>
            <section id="hero" style={{ background: location.pathname.includes("micropython") ? "#B34229" : colorPrimaryPython }} >
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
                            <div>
                                <h1>Crea tu portfolio web</h1>
                                <h2>Conceptos básicos de desarrollo web</h2>
                                <h2>Introducción básica de Django</h2>
                                <h2>introduccion a bases de datos - SQL</h2>
                                <div className="text-center text-lg-start">
                                    <a href="#django" className={`btn-get-started scrollto python-theme`}>Contenido Django</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 order-1 order-lg-2 hero-img" >
                            <img src="../img/django.png" className="img-fluid animated vh-60" alt="" />
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
                    <g id="django" className="wave2">
                        <use xlinkHref="#wave-path" x="50" y="0" fill="rgba(255,255,255, .2)" />
                    </g>
                    <g className="wave3">
                        <use xlinkHref="#wave-path" x="50" y="9" fill="#fff" />
                    </g>
                </svg>
            </section>
        </>
    )
}

export default DigitalPortfolio