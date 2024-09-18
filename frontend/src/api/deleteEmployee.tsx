import axios from 'axios'

const deleteEmployee = async (__id: any) => {
  const response = await axios.delete(`http://localhost:3000/api/salaries/${__id}`)
  return response.data
}

export default { deleteEmployee }
