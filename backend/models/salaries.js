const mongoose = require('mongoose')

const salariesSchema = mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  service: { type: String, required: false },
  metier: { type: String, required: false },
  embauche: { type: Date, required: true },
  email: { type: String, required: false },
})

module.exports = mongoose.model('salaries', salariesSchema)
