import axios from 'axios'

const deleteFormation = async (__id: any) => {
  const response = await axios.delete(`http://localhost:3000/api/formations/${__id}`)
  return response.data
}

export default { deleteFormation }
