
const express = require("express")

const router = express.Router()

const livros = [
    {
        id: 1,
        titulo: "Dom Casmurro",
        genero: "romance",
        preco: 42,
        disponivel: true
    },
    {
        id: 2,
        titulo: "O Cortico",
        genero: "realismo",
        preco: 38,
        disponivel: true
    },
    {
        id: 3,
        titulo: "Memorias Postumas",
        genero: "romance",
        preco: 55,
        disponivel: false
    }
]

router.get("/", (req, res) => {
    res.status(200).json(livros)
})

router.get("/disponiveis", (req, res) => {
    const disponiveis = livros.filter(
        livro => livro.disponivel === true
    )

    res.status(200).json(disponiveis)
})

router.get("/total", (req, res) => {
    res.status(200).json({
        total: livros.length
    })
})

router.post("/", (req, res) => {
    res.status(201).json({
        mensagem: "Cadastro de livro realizado"
    })
})

module.exports = router
