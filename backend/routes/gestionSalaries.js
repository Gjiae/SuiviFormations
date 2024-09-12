const express = require('express')
const router = express.Router()
const SalariesCtrl = require('../controllers/ctrlSalaries')
const auth = require('../middleware/auth')

router.post('/', /*auth,*/ SalariesCtrl.createSalarie)
router.get('/', /*auth,*/ SalariesCtrl.getAll)
router.get('/:id', /*auth,*/ SalariesCtrl.getOne)
router.patch('/:id', /*auth,*/ SalariesCtrl.update)
router.delete('/:id', /*auth,*/ SalariesCtrl.delete)

module.exports = router
