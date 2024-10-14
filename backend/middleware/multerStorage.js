const multerStorage = require('multer')

const storage = multerStorage.diskStorage({
  destination: function(req, file, callback) {
    callback(null, './public')
  },
  filename: function(req, file, callback) {
    callback(null, `${file.originalname}`)
  }
})

const fileUpload = multerStorage({storage})

module.exports = fileUpload;