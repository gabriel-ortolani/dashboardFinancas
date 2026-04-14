import { useState, useEffect } from "react"

function Form({ addTransaction, updateTransaction, editing }) {
  const [name, setName] = useState("")
  const [value, setValue] = useState("")
  const [type, setType] = useState("entrada")

  // 🔥 preenche quando clicar em editar
  useEffect(() => {
    if (editing) {
      setName(editing.name)
      setValue(editing.value)
      setType(editing.type)
    }
  }, [editing])

  function handleSubmit(e) {
    e.preventDefault()

    const newTransaction = {
      id: editing ? editing.id : Math.random(),
      name,
      value: Number(value),
      type
    }

    // 🔥 decide se é editar ou adicionar
    if (editing) {
      updateTransaction(newTransaction)
    } else {
      addTransaction(newTransaction)
    }

    // limpar
    setName("")
    setValue("")
    setType("entrada")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <span className="input-group-text">Nome:</span>
          <input
            type="text"
            className="form-control"
            placeholder="Local referente ao valor"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text">Valor:</span>
          <input
            type="number"
            className="form-control"
            placeholder="Valor de entrada/saida"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>

        <select
          className="form-select mb-3"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="entrada">Entrada</option>
          <option value="saida">Saída</option>
        </select>

        <button type="submit" className="btn btn-outline-success">
          {editing ? "Atualizar" : "Adicionar"}
        </button>
      </form>
    </div>
  )
}

export default Form