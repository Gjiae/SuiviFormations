const formationsSchema = require('../models/formations')
const salariesSchema = require('../models/salaries')

//Ajouter une formation au salarié
exports.createFormation = async (req, res) => {
  await salariesSchema.updateOne({ _id: req.params.id }, req.body)
    .then((data) => {
      res.status(201).json(data)
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      })
    })
}

// GetAll API - Permet de récupérer toutes les données de la DB
exports.getAll = async (req, res) => {
  await formationsSchema.find()
    .then((data) => {
      res.status(201).json(data)
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      })
    })
}