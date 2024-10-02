const salariesSchema = require('../models/salaries')

//Création d'un salarié
exports.createSalarie = async (req, res) => {
  try {
    const newSalarie = new salariesSchema(req.body);
    console.log(newSalarie);
    const savedSalarie = await newSalarie.save();
    res.status(201).json({
      message: `${newSalarie.surname} ${newSalarie.name} ajouté avec succès`,
      value: savedSalarie
    });
  } catch (error) {
    res.status(500).json({ error: "Erreur dans l'ajout du nouveau salarié"});
  }
}

// GetAll API - Permet de récupérer toutes les données de la DB
exports.getAll = async (req, res) => {
  try {
    const Salaries = await salariesSchema.find().sort({ name: 1 })
    res.status(200).json(Salaries);
  } catch (error) {
    res.status(500).json({ error: 'Une erreur a eu lieu lors de la récupération des salariés' });
  }
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
      res.status(201).json({"response": "success"})
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      })
    })
}
