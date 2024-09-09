import { Button } from '../../design-system/button'
import { Container } from '../container'
import { FaBell } from 'react-icons/fa6'
import { Breadcrumbs } from '../breadcrumbs/breadcrumbs'

interface Props {}

export const Navigation = ({}: Props) => {
  return (
    <div className="flex flex-col-reverse justify-between gap-6 mt-5 md:flex-row md:items-center">
      <Container className="flex items-center justify-between py-3 gap-7">
        <div className="flex items-center gap-2.5">
          <Breadcrumbs />
        </div>

        <div className="flex items-right gap-7">
          <div className="flex items-center gap-2">
            <Button
              iconTheme="secondary"
              size="small"
              variant="ico"
              icon={{ icon: FaBell }}
            />
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
        </div>
      </Container>
    </div>
  )
}
