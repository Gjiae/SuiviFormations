const express = require('express')
const router = express.Router()
const HistoriqueCtrl = require('../controllers/ctrlHistorique')

router.post('/', HistoriqueCtrl.createHistorique)
router.get('/', HistoriqueCtrl.getAll)
router.get('/:id', HistoriqueCtrl.getOne)
router.patch('/:id', HistoriqueCtrl.update)
router.delete('/:id', HistoriqueCtrl.delete)

module.exports = router
