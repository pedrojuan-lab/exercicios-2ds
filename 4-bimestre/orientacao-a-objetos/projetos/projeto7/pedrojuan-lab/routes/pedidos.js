
const express = require("express")
const validarPedido = require("../middlewares/validarPedido")

const router = express.Router()


let pedidos = [
    { id: 1, cliente: "Ana", sabor: "Chocolate", bolas: 2, status: "entregue" },
    { id: 2, cliente: "Bruno", sabor: "Morango", bolas: 1, status: "montando" },
    { id: 3, cliente: "Carla", sabor: "Limao", bolas: 3, status: "montando" }
]


router.get("/", (req, res) => {
    let resultado = pedidos

    const { status, bolasMin } = req.query

    if (status) {
        resultado = resultado.filter(pedido => pedido.status === status)
    }

    if (bolasMin !== undefined) {
        resultado = resultado.filter(
            pedido => pedido.bolas >= Number(bolasMin)
        )
    }

    res.status(200).json(resultado)
})


router.get("/:id", (req, res, next) => {
    const id = Number(req.params.id)

    const pedido = pedidos.find(pedido => pedido.id === id)

    if (!pedido) {
        const erro = new Error("Pedido nao encontrado")
        erro.status = 404
        return next(erro)
    }

    res.status(200).json(pedido)
})


router.post("/", validarPedido, (req, res) => {
    const { cliente, sabor, bolas } = req.body

    const maiorId = Math.max(...pedidos.map(pedido => pedido.id))

    const novoPedido = {
        id: maiorId + 1,
        cliente,
        sabor,
        bolas: Number(bolas),
        status: "recebido"
    }

    pedidos.push(novoPedido)

    res.status(201).json({
        mensagem: "Registro de pedido criado"
    })
})

module.exports = router
