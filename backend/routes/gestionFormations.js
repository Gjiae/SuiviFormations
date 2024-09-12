const express = require('express')
const router = express.Router()
const FormationCtrl = require('../controllers/ctrlFormations')
const auth = require('../middleware/auth')

router.post('/', /*auth,*/ FormationCtrl.createFormation)
router.get('/', /*auth,*/ FormationCtrl.getAll)
router.get('/:id', /*auth,*/ FormationCtrl.getOne)
router.patch('/:id', /*auth,*/ FormationCtrl.update)
router.delete('/:id', /*auth,*/ FormationCtrl.delete)

module.exports = router
