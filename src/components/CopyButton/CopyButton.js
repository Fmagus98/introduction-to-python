export const CopyButton = (code) => {
    return (
        <div className="w-75 mx-auto d-flex p-2 flex-row-reverse justify-content-between">
            <span><button className="btn btn-sm text-light" style={{ backgroundColor: "#234A91" }} onClick={() => navigator.clipboard.writeText(code)}><i className="bi bi-clipboard" /> Copiar</button></span>
        </div>
    )
}