const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const path = require('path')

const storeRouter = require('./routes/store')

const PORT = process.env.PORT || 3000

const db = require('./config/db')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use('/images', express.static(path.join(__dirname, 'images')))

// app.use('/', (req, res) => {
//   res.send(`Connected!`)
// })

app.use('/stores', storeRouter)

app.listen(PORT, () => {
  console.log(`Running Express server on Port ${PORT} . . .`)
})
