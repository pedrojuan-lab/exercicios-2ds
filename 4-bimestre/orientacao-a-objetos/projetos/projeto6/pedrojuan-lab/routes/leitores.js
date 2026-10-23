
const express = require("express")

const router = express.Router()

const leitores = [
    {
        id: 1,
        nome: "Ana",
        plano: "mensal"
    },
 {
        id: 2,
        nome: "Bruno",
        plano: "anual"
    }
]

router.get("/", (req, res) => {
    res.status(200).json(leitores)
})

router.get("/total", (req, res) => {
    res.status(200).json({
        total: leitores.length
    })
})

module.exports = router
