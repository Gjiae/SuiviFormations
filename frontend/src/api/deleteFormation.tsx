import axios from 'axios'

const baseUrl = 'http://localhost:3000/api/formation/'

const deleteFormation = async (informations: { idSalaried: string; idFormation: string; }) => {

  console.log(informations.idSalaried)
  console.log(informations.idFormation)

  const response = await axios.patch(baseUrl + informations.idSalaried, {
    idFormation: informations.idFormation
  })

  return response.data
}

export default { deleteFormation }
