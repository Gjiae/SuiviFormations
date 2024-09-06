const mongoose = require('mongoose')

const formationsSchema = mongoose.Schema({
  title: { type: String, required: true },
})

module.exports = mongoose.model('formations', formationsSchema)
