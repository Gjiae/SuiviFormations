import axios from 'axios'
import { capitalize } from '@mui/material'
const baseUrl = 'http://localhost:3000/api/salaries'

const addEmployee = async (informations: any) => {
  const response = await axios.post(baseUrl, {
    name: informations.name.toUpperCase(),
    surname: capitalize(informations.surname),
    service: informations.service,
    metier: informations.metier,
    email: informations.email,
  })
  return response.data
}

export default { addEmployee }
