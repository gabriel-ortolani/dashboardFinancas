function TransactionList({ transactions, deleteTransaction, setEditing }) {
  return (
    <div className="transaction-list">
      {transactions.map((item) => (
        <div key={item.id} className="transaction">
          <span className="name">{item.name}</span>

          <span className={item.type === "entrada" ? "green" : "red"}>
            {item.type === "entrada" ? "+" : "-"}{" "}
            {Number(item.value).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL"
            })}
          </span>

          <button onClick={() => deleteTransaction(item.id)}>❌</button>

          <button onClick={() => setEditing(item)}>✏️</button>
        </div>
      ))}
    </div>
  )
}

export default TransactionList