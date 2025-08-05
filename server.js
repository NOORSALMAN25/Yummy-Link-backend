const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const storeRouter = require('./Routes/store')

const PORT = process.env.PORT || 3000

const db = require('./config/db')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use('/', (req, res) => {
  res.send(`Connected!`)
})

app.listen(PORT, () => {
  console.log(`Running Express server on Port ${PORT} . . .`)
})
