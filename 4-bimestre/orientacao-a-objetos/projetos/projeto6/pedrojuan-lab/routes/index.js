
const express = require("express")

const router = express.Router()

const livrosRouter = require("./livros")
const leitoresRouter = require("./leitores")

router.get("/", (req, res) => {
    res.status(200).json({
        mensagem: "API de Biblioteca"
    })
})

router.use("/livros", livrosRouter)
router.use("/leitores", leitoresRouter)

module.exports = router
