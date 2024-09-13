import axios from 'axios'
const baseUrl = 'http://localhost:3000/api/salaries'

const addEmployee = async (informations: any) => {
  const response = await axios.post(baseUrl, informations)
  return response.data
}

export default { addEmployee }
