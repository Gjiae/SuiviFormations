import axios from 'axios'
const baseUrl = 'http://localhost:3000/api/auth/login'

const login = async (credentials: any) => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}

export default { login }
