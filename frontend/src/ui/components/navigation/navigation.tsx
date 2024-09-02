import Link from 'next/link'
import { Button } from '../../design-system/button'
import { Logo } from '../../design-system/logo'
import { Typography } from '../../design-system/typography'
import { Container } from '../container'
import { ActiveLink } from './active-link'

interface Props {}

export const Navigation = ({}: Props) => {
  return (
    <div className="border-b-2 bg-dark border-gray">
      <Container className="flex items-center justify-between py-3 gap-7">
        <div className="flex items-center gap-2.5">
          <div className="flex flex-col">
            <Typography variant="16Med" theme="gray" component="span">
              Home / Suivi des formations
            </Typography>
          </div>
        </div>

        <div className="flex items-right gap-7">
          <div className="flex items-center gap-2">
            <Button size="small">Connexion</Button>
            <Button size="small" variant="secondary">
              Rejoindre
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}
