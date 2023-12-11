// JavaScript source code
const express = require('express')
const sensorRouter = require('./router/router')
const PORT = process.env.PORT || 8080

const app = express()
app.set("view engine","ejs")
app.use(express.json())
app.use('/api', sensorRouter)

app.listen(PORT, () => {console.log(PORT+"хуняма") })

