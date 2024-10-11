import axios from 'axios'
const baseUrl = 'http://localhost:3000/api/formations/'

const addFormation = async (informations: { id: string; idFormation: string; title: string; realisation: string; expiration: string; }) => {

  console.log(informations.id)
  console.log(informations.idFormation)
  console.log(informations.title)
  console.log(informations.realisation)
  console.log(informations.expiration)

  const response = await axios.patch(baseUrl + informations.id, {
    idFormation: informations.idFormation,
    title: informations.title,
    realisation: informations.realisation,
    expiration: informations.expiration
  })

  return response.data
}

export default { addFormation }
