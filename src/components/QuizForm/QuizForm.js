import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'
import emailjs from '@emailjs/browser';
import { questionsPythonClass2, questionsPythonClass3, questionsPythonClass4,questionsPythonClass5, questionsPythonClass6,questionsPythonClass7 } from './questionsPython'

const QuizForm = () => {

    const [userAnswers, setUserAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);
    const [score, setScore] = useState(0);
    const [feedback, setFeedback] = useState([]);
    const location = useLocation();
    const url = { 
        "/classes/2KLc4SOyBBSsZ3MvrydE": questionsPythonClass2, 
        "/classes/Ok0Mm7iHM1fIw69Twf4o": questionsPythonClass3, 
        "/classes/atVa7k6EyWDn7tZV7v1b": questionsPythonClass4, 
        "/classes/gHRanIzZrKbdu1K8Qb4x": questionsPythonClass5, 
        "/classes/id2wolQKcDk77qxdG24W": questionsPythonClass6,
        "/classes/kgTSxaASCl9vPGuCGC7t": questionsPythonClass7
    }
    let questions = url[location.pathname]
    const [messageSubmit, setMessageSubmit] = useState("");
    const [email, setEmail] = useState("");


    const handleChange = (e, index) => {
        setUserAnswers({ ...userAnswers, [index]: e.target.value });
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (localStorage.getItem(`${location.pathname}-${email}`)) {
            setMessageSubmit("Ya has enviado la encuesta anteriormente");
            setTimeout(() => {
                setMessageSubmit("");
            }, 2000);
            return;

        }
        else {
            let tempScore = 0;
            let tempFeedback = [];

            questions.forEach((question, index) => {
                if (userAnswers[index] === question.answer) {
                    tempScore += 1;
                } else {
                    tempFeedback.push({
                        question: question.question,
                        userAnswer: userAnswers[index],
                        correctAnswer: question.answer
                    });
                }
            });
            const message = `
            Puntaje: ${tempScore} / ${questions.length}\n\n
            ${tempFeedback.map(item => `
                Pregunta: ${item.question}\n
                Tu respuesta: ${item.userAnswer || "No respondida"}\n
                Respuesta correcta: ${item.correctAnswer}\n
                \n
            `).join('')}
        `;
            const templateParams = {
                user_email: email,
                user_name: email, 
                message: message
            };

            emailjs.send('service_om6xbij', 'template_szjk8z4', templateParams, 'CxCHtiHIgRGkMAL1C')
                .then((response) => {
                    setMessageSubmit("Tu respuesta fue enviada con éxito");
                }, (error) => {
                    console.error('Error al enviar el email:', error);
                    setMessageSubmit("Hubo un error al enviar tu respuesta. Inténtalo nuevamente.");
                });

            localStorage.setItem(`${location.pathname}-${email}`, true);
            setScore(tempScore);
            setFeedback(tempFeedback);
            setShowResults(true);
            setMessageSubmit("Tu respuesta fue enviada con exito");
            setTimeout(() => {
                setMessageSubmit("");
            }, 2000);



        }
    };

    return (
        <div className="container mt-5 w-75 ">
              <h2 className="text-break mx-auto mt-4">Refuerza tus conocimientos de la clase</h2>
                <p className="text-break mx-auto mb-4">Completa este formulario para revisar y afianzar los conceptos claves de esta clase. Asegúrate de leer cada pregunta detenidamente antes de responder.</p>
            <form onSubmit={handleSubmit}>
                 {questions.map((question, index) => (
                    <div className="mb-4" key={index}>
                        <h5> <span className="text-break mx-auto w-75 mb-4" dangerouslySetInnerHTML={{ __html: question.question.replace(/\n/g, '<br/>').replace(/ /g, '&nbsp;') }} /></h5>
                        {question.options.map((option, i) => (
                            <div className="form-check mb-3" key={i}>
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name={`question-${index}`}
                                    id={`id-${i}${index}`}
                                    value={option}
                                    onChange={(e) => handleChange(e, index)}
                                    required
                                />
                                <label className="form-check-label" htmlFor={`id-${i}${index}`}>
                                    <span className="text-break mx-auto w-75 mb-3" style={{ whiteSpace: 'pre-line' }} dangerouslySetInnerHTML={{ __html: option.replace(/\n/g, '<br/>').replace(/ /g, '&nbsp;') }} />
                                </label>
                            </div>
                        ))}
                    </div>
                ))}
                {!messageSubmit ?
                    <>
                        <label className="form-check-label mb-2">Ingresa tu Email</label>
                        <input className="d-block mb-4 rounded" name="email" type="user_mail" required onChange={handleEmailChange}></input>
                        <button type="submit" className="mb-4 text-light px-4 btn" style={{ background: "#2f6997", borderRadius: "30px" }}>Enviar</button>
                    </>
                    :
                    <p>{messageSubmit}</p>
                }

            </form>

            {
                showResults && (
                    <div className="mt-5">
                        <h3>Resultados:</h3>
                        <p>Puntaje: {score} / {questions.length}</p>
                        {feedback.length > 0 && (
                            <div>
                                <h4>Errores:</h4>
                                {feedback.map((item, index) => (
                                    <div key={index} className="mb-3">
                                        <p><strong>Pregunta:</strong> {item.question}</p>
                                        <p><strong>Tu respuesta:</strong> {item.userAnswer || "No respondida"}</p>
                                        <p><strong>Respuesta correcta:</strong> {item.correctAnswer}</p>
                                        <hr />
                                    </div>
                                ))}
                            </div>
                        )}
                        {feedback.length === 0 && (
                            <p>¡Felicidades! Todas tus respuestas son correctas.</p>
                        )}
                    </div>
                )
            }
        </div >
    );
};

export default QuizForm;
