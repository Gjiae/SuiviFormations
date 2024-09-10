const SalarieModel = require('../models/salaries')

exports.createSalarie = (req, res) => {
  const newSalarie = new SalarieModel(req.body)
  newSalarie
    .save()
    .then(() => {
      res.status(201).json({
        message: 'Nouveau salarié créé avec succès !',
      })
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      })
    })
}
