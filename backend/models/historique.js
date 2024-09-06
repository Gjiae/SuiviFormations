const mongoose = require('mongoose')

const historiqueSchema = mongoose.Schema({
  idSalarie: { type: String, required: true },
  idFormation: { type: String, required: true },
  realisation: { type: Date, required: true },
  expiration: { type: Date, required: true },
})

module.exports = mongoose.model('historique', historiqueSchema)
