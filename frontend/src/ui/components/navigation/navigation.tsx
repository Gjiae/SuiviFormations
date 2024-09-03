import Link from 'next/link'
import { Button } from '../../design-system/button'
import { Typography } from '../../design-system/typography'
import { Container } from '../container'
import { FaBell } from 'react-icons/fa6'

interface Props {}

export const Navigation = ({}: Props) => {
  return (
    <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
      <Container className="flex items-center justify-between py-3 gap-7">
        <div className="flex items-center gap-2.5">
          <Link href="/">
            <Typography
              variant="14Med"
              theme="gray"
              weight="medium"
              className="transition-all hover:text-primary hover:opacity-100"
            >
              Tableau de bord
            </Typography>
          </Link>
          <Typography
            variant="14Med"
            theme="black"
            weight="medium"
            className="transition-all hover:text-primary hover:opacity-100"
          >
            /
          </Typography>
          <Link href="/">
            <Typography
              variant="14Med"
              theme="black"
              weight="medium"
              className="transition-all hover:text-primary hover:opacity-100"
            >
              Test
            </Typography>
          </Link>
        </div>

        <div className="flex items-right gap-7">
          <div className="flex items-center gap-2">
            <Button
              iconTheme="secondary"
              size="small"
              variant="ico"
              icon={{ icon: FaBell }}
            />
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
