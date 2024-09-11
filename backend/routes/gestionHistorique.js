const express = require('express')
const router = express.Router()
const HistoriqueCtrl = require('../controllers/ctrlHistorique')
const auth = require('../middleware/auth')

router.post('/', auth, HistoriqueCtrl.createHistorique)
router.get('/', auth, HistoriqueCtrl.getAll)
router.get('/:id', auth, HistoriqueCtrl.getOne)
router.patch('/:id', auth, HistoriqueCtrl.update)
router.delete('/:id', auth, HistoriqueCtrl.delete)

module.exports = router
