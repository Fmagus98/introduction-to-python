import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Class3 = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="index">
      < section className="section-index container" >
        <div className="row">
          <div className="col mt-4 mb-4"></div>
          <div className="mb-4 mt-4"></div>
          <div className="grid-item mt-4 mb-2">
            <h1 className="text-center">
              Clase 3: Estructuras de control de flujo
            </h1>
          </div>
          <div className="col mt-4"></div>
        </div>
        <div className="row">
          <div className="col mt-4"></div>
          <div className="text-center grid-item mt-4 px-4">
            <ul className="intr-ul">
              <li className="card-text text-center" style={{ fontSize: "1.3vw" }}>Estructuras de control de flujo: if, elif, else</li>
              <li className="card-text text-center" style={{ fontSize: "1.3vw" }}>Bucles while y for</li>
              <li className="card-text text-center" style={{ fontSize: "1.3vw" }}>Uso de break y continue en bucles</li>
            </ul>
          </div>
          <div className="col mt-4"></div>
        </div>
      </section>
      <section className="intr">
        <img className="wave" alt="" src='../img/wave.png' />
        <h2 data-aos="flip-left" className="h2-c text-center mx-auto">Contenido</h2>
        <div className="accordion accordion-flush w-75 mx-auto  " id="accordionFlushExample">
          <div className="accordion-item bg-transparent">
            <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a1" aria-expanded="false" aria-controls="flush-collapseOne">
              <h2 data-aos="fade-right" className="text-light">Condicionales</h2>
            </button>
            <div id="a1" className="accordion-collapse collapse text-light" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body text-light">
                <p className="text-center mx-auto w-75">En programación, las condicionales son estructuras que nos permiten tomar decisiones basadas en ciertas condiciones. Podemos pensar en ellas como una forma de emular el proceso de toma de decisiones que ocurre en la vida real.<br></br><br></br>
                  Te daré un ejemplo: Supongamos que una persona está por salir a la mañana desde su casa y hay probabilidad de que llueva a la tarde, en este caso tenemos la decisión de décidir si llevamos nuestro paraguas o no, cada decisión que hagamos nos va a provocar una situación diferente.</p>
                <img className="w-75 d-block mx-auto" alt="" src="../img/clase3/condition.jpg"></img>
                <p className="text-center mx-auto w-75">Las condicionales se basan en una expresión o condición que evalúa si es verdadera o falsa. Dependiendo del resultado de esa evaluación, se ejecutará un bloque de código específico. Esta estructura se puede representar de la siguient emanera en Python:</p>
                <img className="w-75 d-block mx-auto" alt="" src="../img/clase3/conditionalestructure.png"></img>
              </div>
            </div>
          </div>
          <div className="accordion-item bg-transparent">
            <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a2" aria-expanded="false" aria-controls="flush-collapseTwo">
              <h2 data-aos="fade-right" className="text-light">If else y elif</h2>
            </button>
            <div id="a2" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body text-light">
                <h3 className="display-4 mx-auto text-center mt-4 pt-4">If</h3>
                <p className="text-center mx-auto w-75">La palabra clave if se utiliza para iniciar una estructura condicional. Nos permite especificar una condición que se evalúa como verdadera o falsa. Si la condición es verdadera, se ejecuta el bloque de código indentado bajo el if. Si la condición es falsa, se omite ese bloque y el programa continúa con la siguiente instrucción después del if. Aquí tienes un ejemplo:</p>
                <img className="w-75 d-block mx-auto" alt="" src="../img/clase3/if.jpg"></img>
                <h3 className="display-4 mx-auto text-center mt-4 pt-4">Else</h3>
                <p className="text-center mx-auto w-75">La palabra clave else se utiliza junto con if y nos permite especificar un bloque de código que se ejecuta cuando la condición del if es falsa. Si la condición del if es verdadera, se omite el bloque de código bajo el else. Aquí tienes un ejemplo:</p>
                <img className="w-75 d-block mx-auto" alt="" src="../img/clase3/else.jpg"></img>
                <h3 className="display-4 mx-auto text-center mt-4 pt-4">Elif</h3>
                <p className="text-center mx-auto w-75">La palabra clave elif es una abreviatura de "else if" y se utiliza para agregar condiciones adicionales después del if. Se utiliza cuando hay múltiples condiciones que queremos evaluar secuencialmente. Si alguna de las condiciones anteriores es verdadera, se omite el bloque de código bajo el elif y se continúa con la siguiente instrucción después de la estructura condicional. Aquí tienes un ejemplo:</p>
                <img className="w-75 d-block mx-auto" alt="" src="../img/clase3/elif.jpg"></img>
              </div>
            </div>
          </div>
          <div className="accordion-item  bg-transparent">
            <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a3" aria-expanded="false" aria-controls="flush-collapseThree">
              <h2 data-aos="fade-right" className="text-light">Bucles</h2>
            </button>
            <div id="a3" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body text-light">
                <p className="text-center mx-auto w-75">En programación, los bucles son estructuras que nos permiten repetir un bloque de código varias veces. Estos bloques de código se ejecutan repetidamente hasta que se cumpla una condición específica.</p>
                <p className="text-center mx-auto w-75">Los bucles son especialmente útiles cuando queremos automatizar tareas repetitivas o cuando necesitamos procesar una colección de elementos. En lugar de escribir líneas de código individuales para cada elemento o repetición, podemos utilizar bucles para hacerlo de manera más eficiente y concisa.</p>
                <img className="w-75 d-block mx-auto" alt="" src="../img/clase3/bucles.png"></img>
              </div>
            </div>
          </div>
          <div className="accordion-item bg-transparent">
            <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a4" aria-expanded="false" aria-controls="flush-collapseTwo">
              <h2 data-aos="fade-right" className="text-light">While</h2>
            </button>
            <div id="a4" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body text-light">
                <p className="text-center mx-auto w-75">Bucle while (mientras): El bucle while ejecuta repetidamente un bloque de código siempre que una condición sea verdadera. La condición se verifica antes de cada iteración, y si es verdadera, se ejecuta el bloque de código. Si la condición se vuelve falsa en algún momento, se sale del bucle y se continúa con la siguiente instrucción después del bucle. Aquí tienes un ejemplo de un bucle while:</p>
                <img className="w-75 d-block mx-auto" alt="" src="../img/clase3/while.png"></img>
              </div>
            </div>
          </div>
          <div className="accordion-item bg-transparent">
            <button className="accordion-button collapsed bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a5" aria-expanded="false" aria-controls="flush-collapseTwo">
              <h2 data-aos="fade-right" className="text-light">For</h2>
            </button>
            <div id="a5" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body text-light">
                <p className="text-center mx-auto w-75"> El bucle for se utiliza para iterar sobre una secuencia de elementos, como una lista, una cadena de texto, un rango de números, entre otros. En cada iteración, el bucle for asigna el siguiente elemento de la secuencia a una variable y ejecuta el bloque de código. Aquí tienes unos ejemplos:</p>
                <h3 className="display-4 mx-auto text-center mt-4 pt-4">Bucle for en cadena de texto</h3>
                <img className="w-75 d-block mx-auto mb-4 pb-4" alt="" src="../img/clase3/for1.jpg"></img>
                <img className="w-75 d-block mx-auto mt-4 pt-4" alt="" src="../img/clase3/for2.jpg"></img>
                <h3 className="display-4 mx-auto text-center mt-4 pt-4">Bucle for en rango de números</h3>
                <img className="w-75 d-block mx-auto" alt="" src="../img/clase3/for3.jpg"></img>
                <h3 className="display-4 mx-auto text-center mt-4 pt-4">Bucle for en listas</h3>
                <img className="w-75 d-block mx-auto" alt="" src="../img/clase3/for4.jpg"></img>
              </div>
            </div>
          </div>
          <div className="accordion-item bg-transparent text-center">
            <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a6" aria-expanded="false" aria-controls="flush-collapseTwo">
              <h2 data-aos="fade-right" className="text-light">Resolución de problemas</h2>
            </button>
            <div id="a6" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body text-light">
              <p className="text-center mx-auto w-75">En esta instancia del curso de python estamos empezando a implementar con condicionales y bucles, es un buen momento de implementar estas herramientas en problemas reales y empezar a desarrollar la resolución de problemas con lógica</p>
                <h2 className="text-center mx-auto">Problema n°1 - validación de contraseña</h2>
                <p className="text-center mx-auto w-75">Supongamos que le damos a elegir al usuario una contraseña para su cuenta y como requisito debe tener al menos una letra, un número y debe tener al menos un largo de 8 caracteres.</p>
                <p className="text-center mx-auto w-75">Lo primero que podemos hacer es realizar un diagrama de flujo, Un diagrama de flujo es una representación gráfica de un algoritmo o proceso que utiliza símbolos y líneas para mostrar la secuencia de pasos o decisiones necesarios para resolver un problema. Los diagramas de flujo son una herramienta visual utilizada en programación y en otras disciplinas para planificar, analizar y comunicar la lógica de un proceso.</p>
                <p className="text-center mx-auto w-75">Si vemos lo que nos indica el problema, vemos que nos dice que el usuario debe ingresar una contraseña para su cuenta, </p>
                <img className="w-75 d-block mx-auto" alt="" src="../img/clase3/problem1-1.png"></img>
                <h2 className="text-center mx-auto">Format</h2>
                <p className="text-center mx-auto w-75">El método format() se llama en una cadena y toma uno o más argumentos que se utilizan para completar marcadores de posición dentro de la cadena. Estos marcadores de posición se definen utilizando llaves { } en la cadena y se reemplazan por los valores correspondientes.
                </p>
                <img className="w-75 d-block mx-auto" alt="" src="../img/clase2/format.png"></img>
                <h2 className="text-center mx-auto">Repr</h2>
                <p className="text-center mx-auto w-75">El método format() se llama en una cadena y toma uno o más argumentos que se utilizan para completar marcadores de posición dentro de la cadena. Estos marcadores de posición se definen utilizando llaves { } en la cadena y se reemplazan por los valores correspondientes.
                </p>
                <img className="w-75 d-block mx-auto" alt="" src="../img/clase2/repr.png"></img>
              </div>
            </div>
          </div>
          <div className="accordion-item bg-transparent text-center">
            <button className="accordion-button collapsed  bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#a7" aria-expanded="false" aria-controls="flush-collapseTwo">
              <h2 data-aos="fade-right" className="text-light">Métodos de String</h2>
            </button>
            <div id="a7" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body text-light">
                <h2 className="text-center mx-auto">Lower( )</h2>
                <p className="text-center mx-auto w-75">El método lower() se utiliza en objetos de tipo str (cadenas) en Python y se utiliza para convertir una cadena a minúsculas.
                </p>
                <img className="w-75 d-block mx-auto" alt="" src="../img/clase2/lower.png"></img>
                <h2 className="text-center mx-auto">Upper( )</h2>
                <p className="text-center mx-auto w-75">El método upper() se utiliza en objetos de tipo str (cadenas) en Python y se utiliza para convertir una cadena a mayúsculas.
                </p>
                <img className="w-75 d-block mx-auto" alt="" src="../img/clase2/upper.png"></img>
                <h2 className="text-center mx-auto">Islower( )</h2>
                <p className="text-center mx-auto w-75">El método islower() verifica si todos los caracteres de la cadena son minúsculas.
                </p>
                <img className="w-75 d-block mx-auto" alt="" src="../img/clase2/islower.png"></img>
                <h2 className="text-center mx-auto">isupper( )</h2>
                <p className="text-center mx-auto w-75">El método isupper() verifica si todos los caracteres de la cadena son mayúsculas.
                </p>
                <img className="w-75 d-block mx-auto" alt="" src="../img/clase2/isupper.png"></img>
                <h2 className="text-center mx-auto">Isdigit( )</h2>
                <p className="text-center mx-auto w-75">El método isdigit() Verifica si todos los caracteres de la cadena son dígitos.
                </p>
                <img className="w-75 d-block mx-auto" alt="" src="../img/clase2/isdigit.png"></img>
                <h2 className="text-center mx-auto">Isalpha( )</h2>
                <p className="text-center mx-auto w-75">El método isalpha() Verifica si todos los caracteres de la cadena son letras.
                </p>
                <img className="w-75 d-block mx-auto" alt="" src="../img/clase2/isalpha.png"></img>
                <h2 className="text-center mx-auto">Capitalize( )</h2>
                <p className="text-center mx-auto w-75"> El método capitalize() es utilizado en objetos de tipo str (cadenas) y se utiliza para devolver una copia de la cadena con el primer carácter en mayúscula y el resto en minúscula.
                </p>
                <img className="w-75 d-block mx-auto" alt="" src="../img/clase2/capitalize.png"></img>
                <h2 className="text-center mx-auto">Repr( )</h2>
                <p className="text-center mx-auto w-75">El método format() se llama en una cadena y toma uno o más argumentos que se utilizan para completar marcadores de posición dentro de la cadena. Estos marcadores de posición se definen utilizando llaves { } en la cadena y se reemplazan por los valores correspondientes.
                </p>
                <img className="w-75 d-block mx-auto" alt="" src="../img/clase2/repr.png"></img>
                <h2 className="text-center mx-auto">Center( )</h2>
                <p className="text-center mx-auto w-75">El método center() se utiliza en objetos de tipo str (cadenas) en Python y se utiliza para centrar una cadena dentro de un ancho determinado.
                </p>
                <img className="w-75 d-block mx-auto" alt="" src="../img/clase2/center.png"></img>
                <h2 className="text-center mx-auto">Strip( )</h2>
                <p className="text-center mx-auto w-75">El método strip() elimina los espacios en blanco al inicio y al final de la cadena, si quieres eliminar solo un lado debes usar la terminación lstrip o rstrip (l=left , r=right).
                </p>
                <img className="w-75 d-block mx-auto" alt="" src="../img/clase2/strip.png"></img>
                <h2 className="text-center mx-auto">Count( )</h2>
                <p className="text-center mx-auto w-75">El método count() se utiliza en objetos de tipo str (cadenas) en Python y se utiliza para contar el número de apariciones de una subcadena dentro de una cadena.
                </p>
                <img className="w-75 d-block mx-auto" alt="" src="../img/clase2/count.png"></img>
                <h2 className="text-center mx-auto">Endswith( )</h2>
                <p className="text-center mx-auto w-75">El método endswith() se utiliza en objetos de tipo str (cadenas) en Python y se utiliza para verificar si una cadena termina con una subcadena específica.
                </p>
                <img className="w-75 d-block mx-auto" alt="" src="../img/clase2/endswith.png"></img>
              </div>
            </div>
          </div>
        </div>
      </section >
    </div >
  )
}

export default Class3