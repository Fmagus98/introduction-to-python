import React, { useState } from 'react';

export const CopyButton = ({ code }) => {

    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);

        setTimeout(() => {
            setCopied(false); // Cambiar de nuevo a "Copiar" después de 2 segundos
        }, 1000);
    };

    return (
        <div className="w-75 mx-auto d-flex p-2 flex-row-reverse justify-content-between">
            <span>
                <button
                    className="btn btn-sm text-light"
                    style={{ backgroundColor: "#234A91" }}
                    onClick={copyToClipboard}
                    disabled={copied} // Deshabilitar el botón cuando se ha copiado
                >
                    <i className="bi bi-clipboard" /> {copied ? 'Copiado ✓' : 'Copiar'}
                </button>
            </span>
        </div>
    );
};

export default CopyButton;
