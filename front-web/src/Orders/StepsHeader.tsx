

function StepsHeader() {
    return(
        <header className="orders-steps-container">
        <div className="steps-title"></div>
        <h1 className="steps-title">
            SIGA AS <br/>ETAPAS
        </h1>
        <ul className="steps-items">
            <li>
            <span className="steps-number">1</span>
            Selecione os produtos e localização.
            </li>
            <li>
            <span className="steps-number">2</span>
            depois clique em <strong>ENVIAR PEDIDO</strong>
            </li>
        </ul>
        </header>
    )
}

export default StepsHeader;