import { React, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { CreateMLCEngine } from "@mlc-ai/web-llm";

const VirtualAssistant = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const location = useLocation();

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };










    const handleSend = async () => {
        if (input.trim()) {
            setMessages([...messages, { text: input, sender: 'user' }]);
            setInput('');

            const initProgressCallback = (initProgress) => {
                console.log(initProgress);
            }

            const selectedModel = "TinyLlama-1.1B-Chat-v0.4-q4f16_1-MLC-1k";

            try {
                // Ajusta la configuración del motor para no superar los límites
                const engine = await CreateMLCEngine(
                    selectedModel,
                    {
                        initProgressCallback: initProgressCallback,
                        maxStorageBuffersPerShaderStage: 2,  // Ajustar a un valor dentro del límite
                        maxComputeWorkgroupInvocations: 2,  // Ajustar según sea necesario
                        maxComputeWorkgroupSize: [32, 32, 1],  // Ajustar el tamaño del grupo de trabajo
                        maxComputeSharedMemorySize: 875,  // Ajustar el tamaño de la memoria compartida
                    }
                );

                // Simulate bot response after successful engine initialization
                setTimeout(() => {
                    setMessages(prevMessages => [...prevMessages, { text: 'Hola, un gusto conocerte!', sender: 'bot' }]);
                }, 1000);
            } catch (error) {
                console.error('Error initializing engine:', error);

                // Fallback response in case of initialization error
                setTimeout(() => {
                    setMessages(prevMessages => [...prevMessages, { text: 'Hubo un problema al inicializar el motor. Por favor, intenta nuevamente más tarde.', sender: 'bot' }]);
                }, 1000);
            }
        }
    };






















    return (
        <div className="virtual-assistant">
            <button
                className="btn rounded-circle chat-button"
                onClick={toggleChat}
            >
                {location.pathname.includes("micropython") ? <img src="../img/virtualAssistant2.png" alt="VirtualAssistant" /> : <img src="../img/virtualAssistant.png" alt="VirtualAssistant" />}
            </button>
            {isOpen && (
                <div className="card chat-window bg-dark">
                    <div className="card-header"><b className="text-light">PythonBot</b></div>
                    <div className="card-body overflow-auto chat-body">
                        <ul className="list-group list-group-flush">
                            {messages.map((msg, index) => (
                                <div key={index} className="list-group list-group-flush">
                                    {msg.sender === "user" ? (
                                        <>
                                            <span className="item-user">Tu</span>
                                            <li className='list-group-item text-light user-message'>{msg.text}</li>
                                        </>
                                    ) : (
                                        <>
                                            <span className="item-bot">Bot</span>
                                            <li className='list-group-item text-light bot-message'>{msg.text}</li>
                                        </>
                                    )}
                                </div>
                            ))}
                        </ul>
                    </div>
                    <div className="card-footer">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            />
                            <button className="btn" onClick={handleSend}><img src="img/send.png" alt="send" /></button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VirtualAssistant