const Notificacao = require("./Notificacao")
// CRIE SUA SOLUÇÃO ABAIXO ================

class Factory {

    static criar(tipo, mensagem) {

        if (tipo === "email") {
            return new Notificacao.Email(mensagem)
        }

        if (tipo === "sms") {
            return new Notificacao.SMS(mensagem)
        }

        if (tipo === "app") {
            return new Notificacao.App(mensagem)
        }

        throw new Error("Tipo de notificação inválido")
    }
}

// === FIM DO CÓDIGO =======================
// === NÃO FAZER NADA ABAIXO DESSA LINHA ===
module.exports = Factory