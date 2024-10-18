import axios from 'axios'

const uploadFile = async (file) => {
  const response = await axios.post('http://localhost:3000/api/uploadFile', file)
  global.config.test.idAttest = response.data._id
}

const getFile = async (file) => {
  const response = await axios.get(`http://localhost:3000/api/uploadFile/${file}`)
  return response.data
}

export default { uploadFile, getFile }

