const Guia = require("./Guia")

function criar(tipo, contribuinte) {

    if (tipo === "icms") {
        return new Guia.Icms(contribuinte)
    }

    if (tipo === "iss") {
        return new Guia.Iss(contribuinte)
    }

    if (tipo === "ipi") {
        return new Guia.Ipi(contribuinte)
    }

    throw new Error("Tipo de guia inválido")
}

module.exports = {
    criar
}

