# 💰 Dashboard Financeira (React + Node + MySQL)

## 📌 Descrição

Este é um sistema de **controle financeiro** desenvolvido com **React (frontend)**, **Node.js + Express (backend)** e **MySQL (banco de dados)**.

O objetivo do projeto é permitir o gerenciamento de entradas e saídas financeiras de forma simples e visual, além de consolidar meus conhecimentos em React, JavaScript e desenvolvimento fullstack.

---

## 🚀 Funcionalidades

* ➕ Adicionar transações (entrada/saída)
* 📋 Listar transações
* ✏️ Editar transações
* ❌ Deletar transações individuais
* 🗑️ Zerar todas as transações
* 💰 Cálculo automático:

  * Total de entradas
  * Total de saídas
  * Saldo final

---

## 🧠 Tecnologias Utilizadas

### Frontend

* React
* Vite
* Bootstrap
* CSS

### Backend

* Node.js
* Express
* MySQL
* CORS

## 📂 Estrutura do Projeto

```
dashboard-financas/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Form.jsx
│   │   │   ├── TransactionList.jsx
│   │   │   └── Summary.jsx
│   │   └── App.jsx
│
└── backend/
    ├── server.js
    ├── package.json
```

---

## ⚙️ Como Rodar o Projeto

### 🔹 1. Clonar o repositório

```bash
git clone https://github.com/gabriel-ortolani/dashboardFinancas
cd dashboardFinancas
```


---

### 🔹 2. Rodar o Backend

```bash
cd backend
npm install
node server.js
```

Servidor rodando em:

```
http://localhost:3001
```

---

### 🔹 3. Rodar o Frontend

```bash
npm install
npm run dev
```

Acesse no navegador:

```
http://localhost:5173
```

---

## 🔄 Rotas da API

| Método | Rota              | Descrição       |
| ------ | ----------------- | --------------- |
| POST   | /transactions     | Criar transação |
| GET    | /transactions     | Listar todas    |
| PUT    | /transactions/:id | Atualizar       |
| DELETE | /transactions/:id | Deletar uma     |
| DELETE | /transactions     | Deletar todas   |

---

## 🖥️ Interface

* Tema escuro 🌙
* Lista estilo tabela 📊
* Valores coloridos:

  * Verde → entrada
  * Vermelho → saída
* Scroll para muitas transações

---

## 🏆 Status do Projeto

✅ CRUD completo<br>
✅ Integração com banco de dados

---

## 📸 Preview 
<img width="350" height="450" alt="image" src="https://github.com/user-attachments/assets/8fadfca9-d6ad-4cc0-8113-40f8196dd9a2" />




