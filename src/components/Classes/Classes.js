import React, { useEffect, useState } from 'react'
import { db } from '../../Utils/firebase'
import { collection, getDocs } from 'firebase/firestore'
import ItemContainer from '../ItemContainer/ItemContainer'

const Classes = () => {
  const [course, setCourse] = useState([])
  useEffect(() => {
    getDocs(collection(db, "course")).then(response => {
      const getData = response.docs.map(doc => {
        return { id: doc.id, ...doc.data() }
      })
      return (setCourse(getData))
    })
  }, [])
  return (
    <>
      <div className="index">
        <section className="section-index container">
          <div className="row">
            <div className="col mt-4 mb-4"></div>
            <div className="mb-4 mt-4"></div>
            <div className="grid-item mt-4 mb-2">
              <h1 className="text-center">
                Clases
              </h1>
            </div>
            <div className="col mt-4"></div>
          </div>
          <div className="row">
            <div className="col mt-4"></div>
            <div className="text-center grid-item mt-4 px-4">
              <p>
                En este apartado encontrarás una serie de contenidos estructurados y
                organizados para aprender los conceptos fundamentales de la programación
                utilizando Python como lenguaje de referencia.
              </p>
            </div>
            <div className="col mt-4"></div>
          </div>
        </section>
      </div>
      <img className="wave" alt="" src="img/wave.png" />
      <section className="intr">
        <div className="row">
          <div className="col mt-4"></div>
          <div className="text-center grid-item mt-4 mb-4">
            <div id="content">
              <ItemContainer item={course} />
            </div>
            <div className="col mt-4"></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Classes