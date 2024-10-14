const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  name: String,
  contentType: String,
  fileURL: String, // Store the image URL here ->// we can fetch the image from databse using this
});


module.exports = mongoose.model('Fichier', fileSchema);