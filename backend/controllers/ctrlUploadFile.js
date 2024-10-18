const File = require("../models/files");
const path = require("path");
const fs = require('fs');

// Enregistrer le fichier dans la DB et sur le serveur
const uploadFile = async (req, res) => {
  try {
    // Create a File model instance.
    const file = new File({
      name: req.file.originalname,
      contentType: req.file.mimetype,
    });

    // Save the File model instance to the database.
    const savedFile = await file.save();

    // Set the fileUrl based on your server URL and the file ID
    savedFile.fileURL = `http://localhost:3000/api/uploadFile/${savedFile._id}`;
    //this is for getting the file from the database

    // Save the updated File model
    await savedFile.save();

    res.json(savedFile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'File upload failed' });
  }
}

// Obtenir l'url du fichier pour l'ouvrir
const getFile = async (req, res) => {
  try {
    const file = await File.findById(req.params.id); //req -> local:Url
    if (!file) {
      return res.status(404).json({ error: 'File not found' });
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