const salariesSchema = require('../models/salaries')

//Méthode POST - Permet de créer un salarié
exports.createSalarie = (req, res) => {
  const newSalarie = new salariesSchema(req.body)
  newSalarie
    .save()
    .then(() => {
      res.status(201).json({
        message: `${newSalarie.surname} ${newSalarie.name} ajouté avec succès`,
      })
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      })
    })
}

// GetAll API - Permet de récupérer toutes les données de la DB
exports.getAll = async (req, res) => {
  await salariesSchema.find()
    .then((data) => {
      res.status(201).json(data)
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      })
    })
}

//Get by ID - Récupère un salarié via son ID unique
exports.getOne = async (req, res) => {
  await salariesSchema.findById(req.params.id)
    .then((data) => {
      res.status(201).json(data)
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      })
    })
}

//Update by ID - Permet de modifier les infos d'un salarié
exports.update = async (req, res) => {
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

//Supprimer un salarié de la DB par son ID unique
exports.delete = async (req, res) => {
  await salariesSchema.findByIdAndDelete({ _id: req.params.id })
    .then(() => {
      res.status(201).json({ message: 'Le salarié a bien été supprimé' })
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      })
    })
}
