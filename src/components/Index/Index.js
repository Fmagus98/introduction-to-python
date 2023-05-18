import React, { useEffect, useState } from 'react'
import { db } from '../../Utils/firebase'
import { collection, getDocs } from 'firebase/firestore'
import ItemContainer from '../ItemContainer/ItemContainer'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Index = () => {
  const [course, setCourse] = useState([])
  
  useEffect(() => {
    getDocs(collection(db, "course")).then(response => {
      const getData = response.docs.map(doc => {
        return { id: doc.id, ...doc.data() }
      })
      return (setCourse(getData))
    })
  }, [])
  useEffect(() => {
    AOS.init();
}, [])
  return (
    <div className="index">
      < section className="section-index" >
        <div className="row">
          <div className="col mt-4 mb-4"></div>
          <div className="mb-4 mt-4"></div>
          <div className="grid-item mt-4 mb-2">
            <h1 className="text-center" data-aos="fade-right">
              Introducción a la programacion en python
            </h1>
          </div>
          <div className="col mt-4"></div>
        </div>
        <div className="row">
          <div className="col mt-4"></div>
          <div className="text-center grid-item mt-4 px-4">
            <p style={{fontSize:"1.2vw"}} data-aos="fade-right">
              Este curso está diseñado para introducir a los estudiantes al
              lenguaje de programación Python, desde los conceptos básicos hasta
              habilidades más avanzadas. Los estudiantes aprenderán a diseñar,
              escribir y depurar programas simples y complejos utilizando Python,
              y se les presentará a las principales estructuras de datos y
              algoritmos utilizados en la programación.
            </p>
          </div>
          <div className="col mt-4"></div>
        </div>
      </section>
      <section className="intr">
        <img className="wave" alt="" src='./img/wave.png' />
        <div className="row">
          <div className="col mt-4"></div>
          <div className="text-center grid-item mt-4 mb-4">
            <h2 className="h2-c">Contenido</h2>
            <div id="content">
              <ItemContainer item={course} />
            </div>
            <div className="col mt-4"></div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Index