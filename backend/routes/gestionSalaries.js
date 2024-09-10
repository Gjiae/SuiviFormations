const express = require('express')
const router = express.Router()
const SalarieModel = require('../models/salaries')
const SalariesCtrl = require('../controllers/salaries')

router.post('/', salariesCtrl.createSalarie)

//Méthode POST - Permet de créer un salarié
router.post('/post', async (req, res) => {
  try {
    const newSalarie = new SalarieModel(req.body)
    await newSalarie.save()
    res.status(200).send(newSalarie)
  } catch (error) {
    res.status(400).send({ message: error.message })
  }
})

// GetAll API - Permet de récupérer toutes les données de la DB
router.get('/getAll', async (req, res) => {
  try {
    const data = await SalarieModel.find()
    res.json(data)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

//Get by ID - Récupère un salarié via son ID unique
router.get('/getOne/:id', async (req, res) => {
  try {
    const data = await SalarieModel.findById(req.params.id)
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

    const result = await SalarieModel.findByIdAndUpdate(
      id,
      updatedData,
      options
    )

    res.send(result)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

//Supprimer un salarié de la DB par son ID unique
router.delete('/delete/:id', async (req, res) => {
  try {
    const id = req.params.id
    const data = await SalarieModel.findByIdAndDelete(id)
    res.send(`Document with ${data.name} has been deleted..`)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

module.exports = router
