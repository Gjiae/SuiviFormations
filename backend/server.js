const http = require('http')
const app = require('./app')
const mongoose = require('mongoose')
require('dotenv').config()
const mongoString = process.env.DATABASE_URL
const cors = require('cors')
const corsOptions = {
  origin: ['http://localhost:3001'],
}

app.use(cors(corsOptions))

mongoose.connect(mongoString)
const database = mongoose.connection

database.on('error', (error) => {
  console.log(error)
})
database.once('connected', () => {
  console.log('Base de donnée connectée')
})

const port = process.env.PORT || 3000
app.set('port', port)

const server = http.createServer(app)

server.on('listening', () => {
  console.log("Serveur lancé à l'adresse http://localhost:" + port)
})

server.listen(port)
