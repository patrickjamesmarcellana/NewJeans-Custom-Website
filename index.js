const express = require("express")
require('dotenv').config()

const app = express()

const router = require("./src/routes/routes.js")
app.use("", router)

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.sendStatus(400)
    next()
})

app.listen(process.env.PORT, () => {
    console.log(`NewJeans app now listening to port ${process.env.PORT}`)
})