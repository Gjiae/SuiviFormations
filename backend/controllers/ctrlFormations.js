const formationsSchema = require('../models/formations')
const salariesSchema = require('../models/salaries')

//Ajouter une formation au salarié
exports.createFormation = async (req, res) => {
  await salariesSchema.updateOne({ _id: req.params.id }, {
    $push: {
      ...req.body
    }
  },)
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

//Supprimer une formation de la DB par son ID unique
exports.delete = async (req, res) => {
  await salariesSchema.updateOne({ _id: req.params.id }, {
    $pull: {
      ...req.body.idFormation
    }
  },)
    .then(() => {
      res.status(201).json({ message: 'La formation a bien été supprimée' })
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      })
    })
}
