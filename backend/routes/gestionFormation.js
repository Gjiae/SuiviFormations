const express = require('express')
const router = express.Router()
const FormationCtrl = require('../controllers/ctrlFormations')
const auth = require('../middleware/auth')

router.patch('/:id', /*auth,*/ FormationCtrl.deleteFormation)

module.exports = router
