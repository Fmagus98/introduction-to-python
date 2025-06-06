import React, { useEffect, useState, useCallback } from 'react'
import { useLocation } from 'react-router-dom'
import { db } from '../../Utils/firebase'
import { collection, getDocs } from 'firebase/firestore'
import ItemContainer from '../ItemContainer/ItemContainer'
import { colorPrimaryPython, colorPrimaryMicropython, colorSecondaryMicropython, colorPrimaryPythonKids, colorSecondaryPythonKids, colorPrimaryFlet } from '../../colors'
import useScrollAnimation from '../../useScrollAnimation'
import { Sidebar } from '../Sidebar/Sidebar'

const Classes = () => {

    const location = useLocation();
    const elementVisibility = useScrollAnimation();
    const title = location.pathname.includes("micropython") ? "micropython" : location.pathname.includes("flet") ? "flet" : "python"
    const content = location.pathname === "/micropython/classes" ? "courseMicropython" : location.pathname === "/github/classes" ? "courseGithub" : location.pathname === "/pythonKids/classes" ? "pythonKids": location.pathname.includes("flet") ? "courseFlet" : "course"
    const color = location.pathname.includes("micropython") ? colorSecondaryMicropython : location.pathname.includes("pythonKids") ? colorPrimaryPythonKids : location.pathname.includes("flet") ? colorSecondaryPythonKids : colorPrimaryPython
    const [course, setCourse] = useState([])
    const savedCourse = location.pathname === "/classes" ? localStorage.getItem('dataCourse'): location.pathname === "/micropython/classes" ? localStorage.getItem('dataCourseMicropython'): location.pathname === "/pythonKids/Classes" ? localStorage.getItem('dataCoursePhythonKids') : location.pathname === "/flet/Classes" ? localStorage.getItem('dataCourseFlet') : null

    const callFirebase = useCallback(() => {
        getDocs(collection(db, content)).then(response => {
            const getData = response.docs.map(doc => {
                const data = doc.data();
                data.date = data.date.toDate();
                return { id: doc.id, ...data };
            });
            if (content === "courseMicropython"){
                localStorage.removeItem('dataCourseMicropython');
                localStorage.setItem('dataCourseMicropython', JSON.stringify(getData.slice(0, -2)));
                setCourse(getData.slice(0, -2));
            }
            else if (content === "courseGithub") {
                localStorage.removeItem('dataCourseGithub');
                localStorage.setItem('dataCourseGithub', JSON.stringify(getData));
                setCourse(getData);
            }
            else if (content === "pythonKids") {
                localStorage.removeItem('dataCoursePhythonKids');
                localStorage.setItem('dataCoursePhythonKids', JSON.stringify(getData));
                setCourse(getData);
            }
            else if (content === "courseFlet") {
                localStorage.removeItem('dataCourseFlet');
                localStorage.setItem('dataCourseFlet', JSON.stringify(getData));
                setCourse(getData);
            }
            else{
                localStorage.removeItem('dataCourse');
                localStorage.setItem('dataCourse', JSON.stringify(getData));
                setCourse(getData);
            }
        });
    }, [content]);

    useEffect(() => {
        if (savedCourse) {
            const parsedDates = JSON.parse(savedCourse);
            const firstDate = new Date(parsedDates[1].date);
            const currentDate = new Date();
            
            if ((currentDate - firstDate) <= 1
            // 4742590612
        ) {
                setCourse(parsedDates);  
            } else {
                callFirebase();
            }
        } else {
            callFirebase();
        }
    }, [callFirebase,content])

    return (
        <>
            <section id="hero" style={{ background: location.pathname.includes("micropython") ? colorPrimaryMicropython : location.pathname.includes("pythonKids") ? colorPrimaryPythonKids : location.pathname.includes("flet") ? colorPrimaryFlet : colorPrimaryPython }} >
                <div className="container">
                    <div className="row justify-content-between">
                        <Sidebar/>
                        {location.pathname.includes("github") ?
                            <>
                                <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
                                    <div>
                                        <h1>Github</h1>
                                        <h2>Este curso está diseñado para proporcionar una comprensión completa y práctica de Git y GitHub, herramientas esenciales para el desarrollo de software y la gestión de proyectos.</h2>
                                        <div className="text-center text-lg-start">
                                            <a href="#classes" className={`btn-get-started scrollto python-theme`}>Empieza a cursar!</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 order-1 order-lg-2 hero-img">
                                    <img src={`../img/${title}.png`} className="img-fluid animated vh-60" alt="" />
                                </div>
                            </> :
                            <>
                                <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
                                    <div>
                                        <h1>Clases</h1>
                                        <h2>En este apartado encontrarás una serie de contenidos estructurados y
                                            organizados para aprender los conceptos fundamentales de la programación
                                            utilizando {title} como lenguaje de referencia.</h2>
                                        <div className="text-center text-lg-start">
                                            <a href="#classes" className={`btn-get-started scrollto ${title === "micropython"?"micropython-theme":"python-theme"}`} style={{background:location.pathname.includes("pythonKids") ? colorSecondaryPythonKids : location.pathname.includes("flet") ? colorSecondaryPythonKids : null}}>Empieza a cursar!</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 order-1 order-lg-2 hero-img">
                                    <img src={`../img/${title}.png`} className="img-fluid animated vh-60" alt="" />
                                </div>
                            </>}
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
                    <g id="classes" className="wave3">
                        <use xlinkHref="#wave-path" x="50" y="9" fill="#fff" />
                    </g>
                </svg>
            </section>
            <section id="counts" className="counts">
                <div className="container">
                    <div id="element2" className={`section-title animated-down ${elementVisibility.element2 ? 'slide-down' : ''}`} style={{ color: color }}>
                        <h2>Clases</h2>
                        <p>Elige una clase</p>
                    </div>
                </div>
                <div id="element3" className={`row w-100 animated-down ${elementVisibility.element3 ? 'slide-down' : ''}`}>
                    <ItemContainer item={course} />
                </div>
            </section>
        </>
    )
}
export default Classes
