import axios from 'axios'
const baseUrl = 'http://localhost:3000/api/formations'

const createFormation = async (title: string) => {
  const response = await axios.post(baseUrl, {
    title: title
  })
  return response.data
}

export default { createFormation }
