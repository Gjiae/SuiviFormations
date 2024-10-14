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
    const image = await File.findById(req.params.id); //req -> local:Url
    // await console.log(image.name)
    if (!image) {
      return res.status(404).json({ error: 'Image not found' });
    }

    // Construct the path to the image file in the uploads folder based on _id
    // const imagePath = path.join(__dirname, 'uploads', `${req.user._id}-${image.name}`); //"will use when add authentication"
    // const imagePath = path.join(__dirname, 'uploads', `${image.name}`);  //this is disgusting `${}`
    const imagePath = path.join(__dirname, '..', 'public', image.name);
    // console.log(imagePath);

    // Check if the file exists
    if (!fs.existsSync(imagePath)) {
      return res.status(404).json({ error: 'Image file not found' });
    }

    // Send the image file as a response
    res.sendFile(imagePath);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve image' });
  }
}

module.exports = {uploadFile, getFile}