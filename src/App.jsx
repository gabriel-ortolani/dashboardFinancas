import { useState, useEffect } from "react"
import Form from "./components/Form"
import TransactionList from "./components/TransactionList"
import Summary from "./components/Summary"

function App() {
  const [transactions, setTransactions] = useState([])
  const [editing, setEditing] = useState(null)

  // ➕ adicionar
  async function addTransaction(transaction) {
    await fetch("http://localhost:3001/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(transaction)
    })

    loadTransactions()
  }

  // 📥 carregar
  async function loadTransactions() {
    const response = await fetch("http://localhost:3001/transactions")
    const data = await response.json()
    setTransactions(data)
  }

  // ❌ deletar 1
  async function deleteTransaction(id) {
    await fetch(`http://localhost:3001/transactions/${id}`, {
      method: "DELETE"
    })

    loadTransactions()
  }

  // 💣 deletar tudo
  async function clearAll() {
    await fetch("http://localhost:3001/transactions", {
      method: "DELETE"
    })

    loadTransactions()
  }

  function handleClear() {
    const confirm = window.confirm("Tem certeza que deseja apagar TODAS as transações?")
    if (confirm) clearAll()
  }

  // ✏️ editar
  async function updateTransaction(transaction) {
    await fetch(`http://localhost:3001/transactions/${transaction.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(transaction)
    })

    setEditing(null)
    loadTransactions()
  }

  useEffect(() => {
    loadTransactions()
  }, [])

  return (
    <div className="app">
      <h1>Dashboard Financeira</h1>

      <Form 
        addTransaction={addTransaction} 
        updateTransaction={updateTransaction}
        editing={editing}
      />

      <Summary transactions={transactions} />

      <TransactionList 
        transactions={transactions} 
        deleteTransaction={deleteTransaction}
        setEditing={setEditing}
      />

      <button className="clear-btn" onClick={handleClear}>
        🗑️ Zerar tudo
      </button>
    </div>
  )
}

export default App