const express = require("express")

const app = express()
app.use(express.json())

const pedidos = [
    { id: 1, cliente: "Ana", valor: 100 },
    { id: 2, cliente: "Bruno", valor: 250 }
]

app.get("/pedidos", (req, res) => {
    if (req.query.valorMin === undefined) {
        return res.status(200).json(pedidos)
    }

    const valorMin = Number(req.query.valorMin)
    res.status(200).json(pedidos.filter(pedido => pedido.valor >= valorMin))
})

app.get("/pedidos/:id", (req, res, next) => {
    const id = Number(req.params.id)
    const pedido = pedidos.find(item => item.id === id)

    if (!pedido) {
        const erro = new Error("Pedido nao encontrado")
        erro.status = 404
        return next(erro)
    }

    res.status(200).json(pedido)
})

function validarPedido(req, res, next) {
    if (!req.body || !req.body.cliente) {
        return res.status(400).json({ erro: "O campo cliente e obrigatorio" })
    }

    if (typeof req.body.valor !== "number") {
        return res.status(400).json({ erro: "O campo valor deve ser um numero" })
    }

    next()
}

app.post("/pedidos", validarPedido, (req, res) => {
    res.status(201).json({ mensagem: "Pedido criado" })
})

app.use((erro, req, res, next) => {
    res.status(erro.status || 500).json({ erro: erro.message })
})

module.exports = app