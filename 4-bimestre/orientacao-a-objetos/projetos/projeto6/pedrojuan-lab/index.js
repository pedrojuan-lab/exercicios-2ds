
const express = require("express")

const app = express()

const rotas = require("./routes")

app.use(express.json())

app.use("/api", rotas)

module.exports = app
