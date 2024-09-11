const HistoriqueModel = require('../models/historique')

//Méthode POST - Permet de créer une formation
exports.createHistorique = (req, res) => {
  const newHistorique = new HistoriqueModel(req.body)
  newHistorique
    .save()
    .then(() => {
      res.status(201).json({
        message: `La formation a bien été enregistrée`,
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
  await HistoriqueModel.find()
    .then((data) => {
      res.status(201).json(data)
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      })
    })
}

//Get by ID - Récupère une formation via son ID unique
exports.getOne = async (req, res) => {
  await HistoriqueModel.findById(req.params.id)
    .then((data) => {
      res.status(201).json(data)
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      })
    })
}

//Update by ID - Permet de modifier les infos d'une formation
exports.update = async (req, res) => {
  await HistoriqueModel.updateOne({ _id: req.params.id }, req.body)
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
  await HistoriqueModel.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(201).json({ message: 'La formation a bien été supprimée' })
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      })
    })
}
