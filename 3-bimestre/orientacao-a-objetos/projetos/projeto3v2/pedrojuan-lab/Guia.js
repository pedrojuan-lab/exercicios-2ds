class Guia {
    constructor(contribuinte) {
        this.contribuinte = contribuinte
    }

    emitir() {
        throw new Error("O método emitir() deve ser implementado")
    }
}

class Icms extends Guia {
    emitir() {
        return `Guia de ICMS emitida para: ${this.contribuinte}`
    }
}

class Iss extends Guia {
    emitir() {
        return `Guia de ISS emitida para: ${this.contribuinte}`
    }
}

class Ipi extends Guia {
    emitir() {
        return `Guia de IPI emitida para: ${this.contribuinte}`
    }
}

Guia.Icms = Icms
Guia.Iss = Iss
Guia.Ipi = Ipi

module.exports = Guia
