const express = require('express')
const bodyParser = require('body-parser')
const Salarie = require('./models/salaries')

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

app.post('/api/stuff', (req, res, next) => {
  delete req.body._id
  const salarie = new Salaries({
    ...req.body,
  })
  salarie
    .save()
    .then(() =>
      res.status(201).json({ message: 'Nouveau salarié enregistré !' })
    )
    .catch((error) => res.status(400).json({ error }))
})

app.use('/api/stuff', (req, res, next) => {
  Salarie.find()
    .then((salaries) => res.status(200).json(salaries))
    .catch((error) => res.status(400).json({ error }))
})

module.exports = app
