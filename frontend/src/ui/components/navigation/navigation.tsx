import { Button } from '../../design-system/button'
import { Container } from '../container'
import { FaBell } from 'react-icons/fa6'
import { Breadcrumbs } from '../breadcrumbs/breadcrumbs'
import { useEffect, useState } from 'react'

interface Props {}

export const Navigation = ({}: Props) => {
  let headers: any
  const [Authentified, setAuthentified] = useState(null)
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setAuthentified(user)
      //console.log(user.token)
      headers = { Authorization: `Bearer ${user.token}` }
    }
  }, [])

  const onClick = () => {
    console.log('Je dois trouver comment déconnecter')
  }

  return (
    <div className="flex flex-col-reverse justify-between gap-6 mt-5 md:flex-row md:items-center">
      <Container className="flex items-center justify-between py-3 gap-7">
        <div className="flex items-center gap-2.5">
          <Breadcrumbs />
        </div>

        <div className="flex items-right gap-7">
          <Button
            iconTheme="secondary"
            size="small"
            variant="ico"
            icon={{ icon: FaBell }}
          />
          {Authentified ? (
            <Button action={onClick} size="small">
              Se déconnecter
            </Button>
          ) : (
            <div className="flex items-center gap-2">
              <Button baseUrl="/connexion" size="small">
                Connexion
              </Button>
              <Button
                baseUrl="/connexion/inscription"
                size="small"
                variant="secondary"
              >
                Rejoindre
              </Button>
            </div>
          )}
        </div>
      </Container>
    </div>
  )
}
