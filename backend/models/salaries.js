const mongoose = require('mongoose')

const salariesSchema = mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  service: { type: String, required: false },
  metier: { type: String, required: false },
  email: { type: String, required: false },
  sexe: { type: String, required: false },
  formations: {
    idFormation: { type: String, required: false },
    title: { type: String, required: false },
    realisation: { type: Date, required: false },
    expiration: { type: Date, required: false }
  }
})

module.exports = mongoose.model('salaries', salariesSchema)
