import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { Link,useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Contact = () => {
    const [formularioView, setFormularioView] = useState(true)
    const form = useRef();
    const location = useLocation()
    const title = location.pathname.includes("micropython")?"micropython":"python"
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_om6xbij', 'template_szjk8z4', form.current, 'CxCHtiHIgRGkMAL1C')
            .then((result) => {
                setFormularioView(false)
            }, (error) => {
                console.log(error.text);
            });
    };
    useEffect(() => {
        AOS.init();
    }, [])
    const formulario = formularioView ?
        <form className="w-50 mx-auto" ref={form} onSubmit={sendEmail}>
        <p style={{ color: "#010483", fontWeight: "700", fontSize: "22px" }}>Envíame un mensaje directo por correo!</p>
            <div className="mb-3">
                <label className="form-label" style={{ color: "#010483", fontWeight: "700", fontSize: "22px" }}>Nombre</label>
                <input type="text" name="user_name" className="form-control w-50" style={{ borderColor: "#010483" }}></input>
            </div>
            <div className="mb-3">
                <label className="form-label" style={{ color: "#010483", fontWeight: "700", fontSize: "22px" }}>Email</label>
                <input type="email" name="user_email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ borderColor: "#010483" }} ></input>
            </div>
            <div className="mb-3">
                <label className="form-label" style={{ color: "#010483", fontWeight: "700", fontSize: "22px" }}>Mensaje</label>
                <textarea name="message" className="form-control" style={{ borderColor: "#010483" }} />
            </div>
            <div className="text-center text-lg-start">
                <a href="#contact" type="submit" className="btn-get-started scrollto">Contactame</a>
            </div>
            <button type="submit" className="btn" style={{ background: "#010483", color: "white" }}>Enviar</button>
        </form>: <div style={{ color: "#010483", fontWeight: "700", fontSize: "22px" }}>Gracias por enviarme un mensaje, en la brevedad te estaré respondiendo :)</div>
    return (
        <>
            <section id="hero" style={{background:location.pathname.includes("micropython")?"#B34229":"rgba(2, 5, 161, 0.91)"}}>
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
                            <div data-aos="zoom-out">
                                <h1>Contacto</h1>
                                <h2>Únanse a nuestro servidor de Discord, donde podrán hablar entre ustedes, consultar y crear proyectos.<br></br> Es un espacio colaborativo perfecto para fortalecer sus habilidades en programación.
                                    <br></br> <br></br>También pueden consultarme directamente por correo electrónico para abordar dudas personalizadas. Estoy aquí para ayudarles en su proceso de aprendizaje en Python.
                                    ¡Nos vemos en Discord y en nuestros intercambios de correo electrónico!</h2>
                                <div className="text-center text-lg-start">
                                    <a href="#contact" className="btn-get-started scrollto">Contactame</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 order-1 order-lg-2 hero-img" data-aos="zoom-out" data-aos-delay="300">
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
                    <g className="wave2">
                        <use xlinkHref="#wave-path" x="50" y="0" fill="rgba(255,255,255, .2)" />
                    </g>
                    <g className="wave3">
                        <use xlinkHref="#wave-path" x="50" y="9" fill="#fff" />
                    </g>
                </svg>
            </section>


            <section id="contact" className="contact">
                <div className="container">
                    <div className="section-title" data-aos="fade-up">
                        <h2>Contactos</h2>
                        <p>Medios de Comunicación</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4" data-aos="fade-right" data-aos-delay="100">
                            <div className="info">
                                <div>
                                    <i className="bi bi-geo-alt"></i>
                                    <h4>Localidad:</h4>
                                    <p className="mt-1 mb-4">Sta. Rosa 4146, B1602 Vicente López, Provincia de Buenos Aires</p>
                                </div>
                                <div>
                                    <i className="bi bi-envelope"></i>
                                    <h4>Email:</h4>
                                    <p className="mt-1 mb-4">federico@mvl.edu.ar</p>
                                </div>
                                <div>
                                    <i className="bi bi-discord"></i>
                                    <h4>Discord:</h4>
                                    <Link to="https://discord.gg/MC4UN4E2"><p className="mt-1 mb-4">https://discord.gg/MC4UN4E2</p></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 mt-5 mt-lg-0" data-aos="fade-left" data-aos-delay="200">
                            {formulario}
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}

export default Contact