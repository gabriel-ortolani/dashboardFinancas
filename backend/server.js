const express = require("express")
const mysql = require("mysql2")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dashboardFinanceira"
})

// salvar
app.post("/transactions", (req, res) => {
  const { name, value, type } = req.body

  const sql = "INSERT INTO transactions (name, value, type) VALUES (?, ?, ?)"

  db.query(sql, [name, value, type], (err) => {
    if (err) return res.status(500).send(err)
    res.send("Salvo com sucesso")
  })
})

// deletar 1
app.delete("/transactions/:id", (req, res) => {
  const { id } = req.params

  db.query("DELETE FROM transactions WHERE id = ?", [id], (err) => {
    if (err) return res.status(500).send(err)
    res.send("Deletado")
  })
})

// deletar tudo
app.delete("/transactions", (req, res) => {
  db.query("DELETE FROM transactions", (err) => {
    if (err) return res.status(500).send(err)
    res.send("Tudo deletado")
  })
})

// buscar
app.get("/transactions", (req, res) => {
  db.query("SELECT * FROM transactions", (err, result) => {
    if (err) return res.status(500).send(err)
    res.json(result)
  })
})

app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001")
})

app.put("/transactions/:id", (req, res) => {
  const { id } = req.params
  const { name, value, type } = req.body

  const sql = "UPDATE transactions SET name=?, value=?, type=? WHERE id=?"

  db.query(sql, [name, value, type, id], (err) => {
    if (err) return res.status(500).send(err)
    res.send("Atualizado")
  })
})