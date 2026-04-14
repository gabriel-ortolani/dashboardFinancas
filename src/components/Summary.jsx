function Summary({ transactions }) {
    const entradas = transactions.filter((item) => item.type === "entrada")
    const saidas = transactions.filter((item) => item.type === "saida")

    const entrada = entradas.reduce((total, valor) => total + valor.value, 0)
    const saida = saidas.reduce((total, valor) => total + valor.value, 0)
    const saldo = entrada - saida

    return (
        <div className="summary">
            <p style={{color: "green"}}>Entradas: {Number(entrada)}</p>
            <p style={{color: "red"}}>Saídas: {Number(saida)}</p>
            <span style={{color: saldo > 0 ? "green" : "red"}}>Saldo: {Number(saldo)}</span>
        </div>
    )
}

export default Summary