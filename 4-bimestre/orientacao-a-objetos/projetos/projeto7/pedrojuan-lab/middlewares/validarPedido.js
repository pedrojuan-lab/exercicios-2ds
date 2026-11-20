
function validarPedido(req, res, next) {
    const { cliente, sabor, bolas } = req.body

    if (!cliente) {
        return res.status(400).json({
            erro: "O campo cliente e obrigatorio"
        })
    }

    if (!sabor) {
        return res.status(400).json({
            erro: "O campo sabor e obrigatorio"
        })
    }

    if (bolas === undefined || bolas === null || bolas === "" || typeof bolas === "boolean" || (typeof bolas !== "number" && typeof bolas !== "string")) {
        return res.status(400).json({
            erro: "O campo bolas deve ser um numero"
        })
    }

    if (Number.isNaN(Number(bolas))) {
        return res.status(400).json({
            erro: "O campo bolas deve ser um numero"
        })
    }

    if (Number(bolas) <= 0) {
        return res.status(400).json({
            erro: "O campo bolas deve ser maior que zero"
        })
    }

    next()
}

module.exports = validarPedido
