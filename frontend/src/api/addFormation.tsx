import axios from 'axios'
const baseUrl = 'http://localhost:3000/api/formations/'

const addFormation = async (informations: { id: string; idFormation: string; title: string; realisation: string; expiration: string; idAttestation: string; }) => {
  const response = await axios.patch(baseUrl + informations.id, {
    idFormation: informations.idFormation,
    title: informations.title,
    realisation: informations.realisation,
    expiration: informations.expiration,
    idAttestation: informations.idAttestation
  })

  return response.data
}

export default { addFormation }
