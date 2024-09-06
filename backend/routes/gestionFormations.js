const express = require('express')
const router = express.Router()
const FormationModel = require('../models/formations')

//Méthode POST - Permet de créer un salarié
router.post('/post', async (req, res) => {
  const data = new FormationModel({
    title: req.body.title,
  })

  try {
    const dataToSave = await data.save()
    res.status(200).json(dataToSave)
    console.log('Formation ajoutée')
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// GetAll API - Permet de récupérer toutes les données de la DB
router.get('/getAll', async (req, res) => {
  try {
    const data = await FormationModel.find()
    res.json(data)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

//Get by ID - Récupère un salarié via son ID unique
router.get('/getOne/:id', async (req, res) => {
  try {
    const data = await FormationModel.findById(req.params.id)
    res.json(data)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

//Update by ID - Permet de modifier les infos d'un salarié
router.patch('/update/:id', async (req, res) => {
  try {
    const id = req.params.id
    const updatedData = req.body
    const options = { new: true }

    const result = await FormationModel.findByIdAndUpdate(id, updatedData, options)

    res.send(result)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

//Supprimer un salarié de la DB par son ID unique
router.delete('/delete/:id', async (req, res) => {
  try {
    const id = req.params.id
    const data = await FormationModel.findByIdAndDelete(id)
    res.send(`Document with ${data.name} has been deleted..`)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

module.exports = router
