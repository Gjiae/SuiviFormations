const express = require('express')
const router = express.Router()
const FormationCtrl = require('../controllers/ctrlFormations')
const auth = require('../middleware/auth')

router.post('/', /*auth,*/ FormationCtrl.createFormation)
router.patch('/:id', /*auth,*/ FormationCtrl.addFormation)
router.get('/', /*auth,*/ FormationCtrl.getAll)

module.exports = router
