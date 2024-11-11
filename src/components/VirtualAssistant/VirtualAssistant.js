import { React, useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import ReactMarkdown from "react-markdown";

const VirtualAssistant = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [maximizeChat, setMaximizeChat] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const location = useLocation();
    const [loadingLLM, setLoadingLLM] = useState('');
    const [disabledButton, setDisabledButton] = useState(false);
    let promptDefault = "Te llamas PyBot y eres un asistente virtual amigable ayudando a un usuario a resolver solo y unicamente cosas relaciona a python, en el caso que no sea sobre python(saludar si es valido), diles explicitamente: 'Perdon, Estoy  no puedo responder una consulta no relacionada a python'. Al usuario hablale en español. El mensaje del usuario es:"

    const messagesEndRef = useRef(null);
    const scrollSendMessage = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollTo({
                top: messagesEndRef.current.scrollHeight,
                behavior: 'smooth'
            });
        }
    }

    useEffect(() => {
        const savedMessages = localStorage.getItem('messages');
        if (savedMessages) {
            setMessages(JSON.parse(savedMessages));
        }
    }, []);

    useEffect(() => {
        const savedMessages = localStorage.getItem('messages');
        if (!savedMessages) {
            messages.push({ 'text': '¡Hola! Soy PyBot, tu asistente virtual para ayudarte con Python. ¿Tienes alguna pregunta sobre Python que pueda resolver?', 'role': 'bot' })
        }
        localStorage.setItem('messages', JSON.stringify(messages));
       scrollSendMessage()
    }, [messages]);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const toggleMaximizeChat = () => {
        setMaximizeChat(!maximizeChat)
    };

    const handleSend = async () => {
        let userInput = input.trim();
        if (userInput !== "") {
            setDisabledButton(true);
            setLoadingLLM("Por favor espera, estoy procesando tu consulta...")
            const existingMessage = messages.find(message => message.role === 'user' && message.text === userInput);

            if (existingMessage) {
                const botResponse = messages.find((message, index) =>
                    messages[index - 1] &&
                    messages[index - 1].text === userInput &&
                    messages[index - 1].role === 'user' &&
                    message.role === 'bot'
                );

                if (botResponse) {
                    setMessages(prevMessages => [...prevMessages, { text: userInput, role: 'user' }, botResponse]);
                    setInput('');
                    setDisabledButton(false);
                    setLoadingLLM("");
                    return;
                }
            }

            else {
                try {
                    const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyDY61QLJdNNeon3DM83Qj4AgifolaAY3Bk', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            contents: [{ parts: [{ text: promptDefault + userInput }] }],
                        }),
                    });

                    if (!response.ok) {
                        throw new Error('Lo siento, Pybot está en mantenimiento, inténtelo más tarde.');
                    }

                    const data = await response.json();
                    setMessages(prevMessages => [...prevMessages, { text: userInput, role: 'user' }]);
                    setInput('');
                    setMessages(prevMessages => [...prevMessages, { text: data.candidates[0].content.parts[0].text, role: 'bot' }]);
                } catch (error) {
                    console.error(error);
                    setMessages(prevMessages => [...prevMessages, { text: "Lo siento, Pybot está en mantenimiento, inténtelo más tarde.", role: 'bot' }]);
                }
                setDisabledButton(false);
                setLoadingLLM("")
            }
        }
    }

    return (
        <div className="virtual-assistant">
            <button
                className="btn rounded-circle chat-button"
                onClick={toggleChat}
            >
                {location.pathname.includes("micropython") ? <img src="../../img/virtualAssistant2.png" alt="VirtualAssistant" /> : <img src="../img/virtualAssistant.png" alt="VirtualAssistant" />}
            </button>
            {isOpen && (
                <div className={`card chat-window bg-dark chat-size ${maximizeChat?'':'chat-max-size'}`}>
                    <div className="card-header d-flex justify-content-between align-items-center "><b className="text-light">PyBot</b><i className={`bi ${maximizeChat === false ? 'bi-arrows-angle-contract': 'bi-arrows-angle-expand'} text-white maximize-chat`} onClick={toggleMaximizeChat}></i></div>
                    <div className="card-body overflow-auto chat-body" ref={messagesEndRef}>
                        <ul className="list-group list-group-flush">
                            {messages.map((msg, index) => (
                                <div key={index} className="list-group list-group-flush">
                                    {msg.role === "user" ? (
                                        <>
                                            <span className="item item-user">Tu</span>
                                            <li className='list-group-item text-light user-message'><p>{msg.text}</p></li>
                                        </>
                                    ) : (
                                        <>
                                            <span className="item-bot">PyBot</span>
                                            <ReactMarkdown className="list-group-item text-light bot-message">{msg.text}</ReactMarkdown>
                                        </>
                                    )}
                                </div>
                            ))}
                        </ul>
                    </div >
                    <div className="card-footer">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            />
                            {disabledButton ? <button className="btn btn-send disabled"><img src="../img/send.png" alt="send" /></button> : <button className="btn btn-send" onClick={handleSend}><img src="img/send.png" alt="send" /></button>}
                        </div>
                    </div>
                    <small>{loadingLLM}</small>
                </div>
            )}
        </div>
    )
}

export default VirtualAssistant