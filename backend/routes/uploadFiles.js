const express = require('express')
const router = express.Router()
const fileUpload = require('../middleware/multerStorage'); // Import the multer middleware
const {uploadFile, getFile} = require('../controllers/ctrlUploadFile'); // Import the image controller
const auth = require('../middleware/auth')

router.post('/', /*auth,*/fileUpload.single('my-image-file'), uploadFile)
router.route('/:id').get(getFile)

module.exports = router