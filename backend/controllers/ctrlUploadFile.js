const File = require("../models/files");
const path = require("path");
const fs = require('fs');

// Enregistrer le fichier dans la DB et sur le serveur
const uploadFile = async (req, res) => {
  try {
    // Create an Image model instance.
    const image = new File({
      name: req.file.originalname,
      contentType: req.file.mimetype,
    });

    // Save the Image model instance to the database.
    const savedImage = await image.save();

    // Set the imageUrl based on your server URL and the image ID
    savedImage.fileURL = `http://localhost:3000/api/uploadFile/${savedImage._id}`;
    //this is for getting the image from the database

    // Save the updated Image model
    await savedImage.save();

    res.json(savedImage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Image upload failed' });
  }
}

// Obtenir l'url du fichier pour l'ouvrir
const getFile = async (req, res) => {
  try {
    const file = await File.findById(req.params.id); //req -> local:Url
    if (!file) {
      return res.status(404).json({ error: 'Image not found' });
    }

    const filePath = path.join(__dirname, '..', 'public', file.name);

    // Check if the file exists
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: 'File file not found' });
    }

    // Visionner le fichier
    //res.sendFile(imagePath);
    //Télécharger le fichier
    res.download(filePath)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve file' });
  }
}

module.exports = {uploadFile, getFile}