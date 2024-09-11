const express = require('express')
const router = express.Router()
const FormationCtrl = require('../controllers/ctrlFormations')

router.post('/', FormationCtrl.createFormation)
router.get('/', FormationCtrl.getAll)
router.get('/:id', FormationCtrl.getOne)
router.patch('/:id', FormationCtrl.update)
router.delete('/:id', FormationCtrl.delete)

module.exports = router
