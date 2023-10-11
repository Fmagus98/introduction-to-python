import React, { useEffect, useState } from 'react'
import { useLocation} from 'react-router-dom'
import { db } from '../../Utils/firebase'
import { collection, getDocs } from 'firebase/firestore'
import ItemContainer from '../ItemContainer/ItemContainer'
import {colorPrimaryPython,colorSecondaryMicropython} from '../../colors'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Classes = () => {
    
  const location = useLocation();
  const title = location.pathname.includes("micropython")?"micropython":"python"
  const content = location.pathname==="/micropython/classes"?"courseMicropython":"course"
  const color = location.pathname.includes("micropython")?colorSecondaryMicropython:colorPrimaryPython
  const [course, setCourse] = useState([])
  
  useEffect(() => {
    getDocs(collection(db, content)).then(response => {
      const getData = response.docs.map(doc => {
        return { id: doc.id, ...doc.data() }
      })
      return (setCourse(getData))
    })
  }, [content])
  
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <section id="hero" style={{background:location.pathname.includes("micropython")?"#B34229":"rgba(2, 5, 161, 0.91)"}} >
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
              <div data-aos="zoom-out">
                <h1>Clases</h1>
                <h2>En este apartado encontrarás una serie de contenidos estructurados y
                  organizados para aprender los conceptos fundamentales de la programación
                  utilizando {title} como lenguaje de referencia.</h2>
                <div className="text-center text-lg-start">
                  <a href="#class" className="btn-get-started scrollto" style={{backgroundColor:location.pathname.includes("micropython")?"rgb(238, 112, 83)":"#2f6997"}}>Empieza a cursar!</a>
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
          <g id="class" className="wave3">
            <use xlinkHref="#wave-path" x="50" y="9" fill="#fff" />
          </g>
        </svg>
      </section>
      <section id="counts" className="counts">
        <div className="container">
          <div className="section-title" style={{color: color}} data-aos="fade-up">
            <h2>Clases</h2>
            <p>Elige una clase</p>
          </div>
        </div>
        <div className="row w-100">
          <ItemContainer item={course}/>
        </div>
      </section>
    </>
  )
}

export default Classes

