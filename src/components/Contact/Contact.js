import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Contact = () => {
    const [formularioView, setFormularioView] = useState(true)
    const form = useRef();
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
            <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input type="text" name="user_name" className="form-control w-50"></input>
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" name="user_email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
            </div>
            <div className="mb-3">
                <label className="form-label">Mensaje</label>
                <textarea name="message" className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form> : <div>Gracias por enviarme un mensaje, en la brevedad te estaré respondiendo :)</div>
    return (
        <div className="index">
            <section className="section-index container" >
                <div className="row">
                    <div className="col mt-4 mb-4"></div>
                    <div className="mb-4 mt-4"></div>
                    <div className="grid-item mt-4 mb-2">
                        <h1 data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className="text-center">Contacto</h1>
                    </div>
                    <div className="col mt-4"></div>
                </div>
                <div className="row">
                    <div className="col mt-4"></div>
                    <div className="text-center grid-item mt-4 px-4">
                        <p className="mx-auto">Únanse a nuestro servidor de Discord, donde podrán hablar entre ustedes, consultar y crear proyectos.<br></br> Es un espacio colaborativo perfecto para fortalecer sus habilidades en programación.
                            <br></br> <br></br>También pueden consultarme directamente por correo electrónico para abordar dudas personalizadas. Estoy aquí para ayudarles en su proceso de aprendizaje en Python.
                            ¡Nos vemos en Discord y en nuestros intercambios de correo electrónico!</p>
                    </div>
                    <div className="col mt-4"></div>
                </div>
            </section>
            <section className="intr">
                <img className="wave" alt="" src='../img/wave.png' />
                <h2 data-aos="flip-left" className="h2-c text-center mx-auto mb-4">Medios de contacto</h2>
                <div className="mb-4 mt-4 w-50 mx-auto">
                    <h3 className="mx-auto w-25 text-center">Discord</h3>
                    <Link className="mx-auto" to="https://discord.gg/MC4UN4E2"><img className="d-block mx-auto w-50"alt="" src='../img/discord.png' /></Link>
                </div>
                <div className="pb-4 pt-4 mt-4 w-75 mx-auto">
                    <h3 className="mx-auto w-25 text-center">Email</h3>
                    {formulario}
                </div>
            </section>
        </div>
    )
}

export default Contact