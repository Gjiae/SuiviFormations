const express = require('express')
const bodyParser = require('body-parser')
const Formations = require('./routes/gestionFormations')
const Formation = require('./routes/gestionFormation')
const Salaries = require('./routes/gestionSalaries')
const userRoutes = require('./routes/user')
const app = express()

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  )
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  )
  next()
})

app.use(bodyParser.json())

app.use('/api/formation', Formation)
app.use('/api/formations', Formations)
app.use('/api/salaries', Salaries)
app.use('/api/auth', userRoutes)

module.exports = app
