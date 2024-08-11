import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { Link, useLocation } from 'react-router-dom';
import { colorPrimaryPython, colorPrimaryMicropython, colorSecondaryMicropython} from '../../colors'
import useScrollAnimation from '../../useScrollAnimation'

const Contact = () => {

    const elementVisibility = useScrollAnimation()
    const [formularioView, setFormularioView] = useState(true)
    const form = useRef();
    const location = useLocation()
    const title = location.pathname.includes("micropython") ? "micropython" : "python"
    const color = location.pathname.includes("/micropython") ? colorSecondaryMicropython : ""
    const color2 = location.pathname.includes("/micropython") ? colorPrimaryMicropython : colorPrimaryPython
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_om6xbij', 'template_szjk8z4', form.current, 'CxCHtiHIgRGkMAL1C')
            .then((result) => {
                setFormularioView(false)
                console.log(form.current)
            }, (error) => {
                console.log(error.text);
            });
    };

    const formulario = formularioView ?
        <form className="w-50" ref={form} onSubmit={sendEmail}>
            <p style={{ color: color2, fontWeight: "700", fontSize: "20px" }}>Envíame un mensaje directo por correo!</p>
            <div className="mb-3">
                <label className="form-label" style={{ color: color2, fontWeight: "700", fontSize: "22px" }}>Nombre</label>
                <input type="text" name="user_name" className="form-control w-50" style={{ borderColor: color2 }}></input>
            </div>
            <div className="mb-3">
                <label className="form-label" style={{ color: color2, fontWeight: "700", fontSize: "22px" }}>Email</label>
                <input type="email" name="user_email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ borderColor: color2 }} ></input>
            </div>
            <div className="mb-3">
                <label className="form-label" style={{ color: color2, fontWeight: "700", fontSize: "22px" }}>Mensaje</label>
                <textarea name="message" className="form-control" style={{ borderColor: color2 }} />
            </div>
            <div className="text-center text-lg-start">
                <a style={{color:color}}href="#contact" type="submit" className="btn-get-started scrollto">Contactame</a>
            </div>
            <button type="submit" className="btn" style={{ background: color2, color: "white" }}>Enviar</button>
        </form> : <div style={{ color: colorPrimaryPython, fontWeight: "700", fontSize: "22px" }}>Gracias por enviarme un mensaje, en la brevedad te estaré respondiendo :)</div>

    return (
        <>
            <section id="hero" style={{ background: location.pathname.includes("micropython") ? "#B34229" : colorPrimaryPython }}>
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
                            <div >
                                <h1>Contacto</h1>
                                <h2>Únanse a nuestro servidor de Discord, donde podrán hablar entre ustedes, consultar y crear proyectos.<br></br> Es un espacio colaborativo perfecto para fortalecer sus habilidades en programación.
                                    <br></br> <br></br>También pueden consultarme directamente por correo electrónico para abordar dudas personalizadas. Estoy aquí para ayudarles en su proceso de aprendizaje en Python.
                                    ¡Nos vemos en Discord y en nuestros intercambios de correo electrónico!</h2>
                                <div className="text-center text-lg-start">
                                    <a href="#contact" style={{ backgroundColor: color }} className="btn-get-started scrollto">Contactame</a>
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
                    <div id="element1" className={`section-title animated-down ${elementVisibility.element1 ? 'slide-down' : ''}`}>
                        <h2>Contactos</h2>
                        <p style={{color:color2}}>Medios de Comunicación</p>
                    </div>
                    <div id="element2" className={`container animated-down ${elementVisibility.element2 ? 'slide-down' : ''}`}>
                        <div className="row info mt-7">
                            <div className="col-sm-4">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color2} ><circle cx="12" cy="10" r="3"></circle><path d="M12 2a8 8 0 0 0-8 8c0 1.892.402 3.13 1.5 4.5L12 22l6.5-7.5c1.098-1.37 1.5-2.608 1.5-4.5a8 8 0 0 0-8-8z"></path></svg>
                                <p style={{color:color2}} className="mt-1 mb-4">Sta. Rosa 4146, B1602 Vicente López, Provincia de Buenos Aires</p>
                            </div>
                            <div className="col-sm-4">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color2} ><path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6z"></path><path d="M2 8l7.501 6.001a4 4 0 0 0 4.998 0L22 8"></path></svg>
                                <h4 style={{color:color2}}>Email:</h4>
                                <p style={{color:color2}}className="mt-1 mb-4">federico@mvl.edu.ar</p>
                            </div>
                            <div className="col-sm-4">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color2} ><path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026c.462-.62.874-1.275 1.226-1.963.021-.04.001-.088-.041-.104a13.201 13.201 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z"></path></svg>
                                <h4 style={{color:color2}}>Discord:</h4>
                                <Link to="https://discord.gg/MC4UN4E2"><p style={{color:color2}} className="mt-1 mb-4">https://discord.gg/MC4UN4E2</p></Link>
                            </div>
                        </div>
                        <div className="col-lg-8 mt-5 mt-lg-0" >
                            {formulario}
                        </div>
                    </div>

                </div>
            </section >

        </>
    )
}

export default Contact