const multer = require('multer')

const storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, './public')
  },
  filename: function(req, file, callback) {
    callback(null, `${file.originalname}`)
  }
})

const fileUpload = multer({storage})

module.exports = fileUpload;

