const formationsSchema = require('../models/formations')
const salariesSchema = require('../models/salaries')

//Créer une formation
exports.createFormation = async (req, res) => {
  try {
    const newFormation = new formationsSchema(req.body)
    const savedFormation = await newFormation.save()
    res.status(201).json({
      message: `${newFormation.title} ajoutée avec succès`,
      value: savedFormation
    })
  } catch (error) {
    res.status(500).json({ error: 'Erreur dans la création d\'une nouvelle formation\'' })
  }
}

//Ajouter une formation au salarié
exports.addFormation = async (req, res) => {
  await salariesSchema.updateOne({ _id: req.params.id }, {
    $push: {
      formations: {
        idFormation: req.body.idFormation,
        title: req.body.title,
        realisation: req.body.realisation,
        expiration: req.body.expiration,
        idAttestation: req.body.idAttestation
      }
    }
  })
    .then((data) => {
      res.status(201).json(data)
    })
    .catch((error) => {
      res.status(400).json({
        error: error
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
        error: error
      })
    })
}

//Supprimer une formation de la DB par son ID unique
exports.deleteFormation = async (req, res) => {
  await salariesSchema.updateOne({ _id: req.params.id }, {
    $pull: {
      formations: {
        idFormation: req.body.idFormation
      }
    }
  })
    .then(() => {
      res.status(201).json({ 'response': 'success' })
    })
    .catch((error) => {
      res.status(400).json({
        error: error
      })
    })
}