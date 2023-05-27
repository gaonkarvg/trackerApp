const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config();

const excercisesRouter = require('./routes/excercises')
const usersRouter = require('./routes/users')

const app = express();

const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())


const uri = process.env.ATLAS_URI
mongoose.connect(uri, { useNewUrlParser: true })
const connection = mongoose.connection

connection.once('open', () => {
    console.log('MongoDB daatabase connection established successfully')
})

app.use('/excercises', excercisesRouter)
app.use('/users', usersRouter)

app.listen(port, () => {
    console.log(`Server is runnning on port: ${port}`)
})

