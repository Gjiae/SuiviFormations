import Link from 'next/link'
import { Button } from '../../design-system/button'
import { Logo } from '../../design-system/logo'
import { Typography } from '../../design-system/typography'
import { Container } from '../container'
import { ActiveLink } from './active-link'

interface Props {}

export const Navigation = ({}: Props) => {
  return (
    <div className="border-b-2 border-gray">
      <Container className="flex items-center justify-between py-1.5 gap-7">
        <Link href="/">
          <div className="flex items-center gap-2.5">
            <Logo size="small" />
            <div className="flex flex-col">
              <div className="text-black font-extrabold text-[24px]">
                Suivi des formations
              </div>
              <Typography variant="12Reg" theme="gray" component="span">
                Outil de suivi des formations pour BEC
              </Typography>
            </div>
          </div>
        </Link>

        <div className="flex items-center gap-7">
          <Typography variant="14Reg" className="flex items-center gap-7">
            <ActiveLink href="/design-system">Design System</ActiveLink>
            <ActiveLink href="/salaries">Salariés</ActiveLink>
            <ActiveLink href="/formations">Formations</ActiveLink>
          </Typography>
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
