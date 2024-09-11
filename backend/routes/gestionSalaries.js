const express = require('express')
const router = express.Router()
const SalariesCtrl = require('../controllers/ctrlSalaries')

router.post('/', SalariesCtrl.createSalarie)
router.get('/', SalariesCtrl.getAll)
router.get('/:id', SalariesCtrl.getOne)
router.patch('/:id', SalariesCtrl.update)
router.delete('/:id', SalariesCtrl.delete)

module.exports = router
