import axios from 'axios'
import { capitalize } from '@mui/material'
const baseUrl = 'http://localhost:3000/api/salaries'

const addEmployee = async (informations: { name: string; surname: string; service: string; metier: string; email: string; sexe: string }) => {
  const response = await axios.post(baseUrl, {
    name: informations.name.toUpperCase(),
    surname: capitalize(informations.surname),
    service: informations.service,
    metier: informations.metier,
    email: informations.email,
    sexe: informations.sexe,
  })
  return response.data
}

export default { addEmployee }
