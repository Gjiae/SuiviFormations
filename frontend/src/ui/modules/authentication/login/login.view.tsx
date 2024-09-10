import { Box } from '@/ui/design-system/box'
import { Typography } from '@/ui/design-system/typography'
import Link from 'next/link'
import { Container } from '@/ui/components/container'
import { LoginForm } from '../login/login.form'
import Image from 'next/image'
import { FormsType } from '@/types/forms'

interface Props {
  form: FormsType
}

export const LoginView = ({ form }: Props) => {
  return (
    <Container className="grid grid-cols-2 gap-20">
      <div className="flex items-center">
        <div className="relative w-full h-[531px]">
          <Image
            fill
            src="/assets/svg/illus_inscription.svg"
            alt="Illustration de la page d'inscription"
            className=""
          />
        </div>
      </div>
      <div className="flex items-center">
        <Box>
          <div className="flex items-center justify-between">
            <Typography variant="h3" component="h1">
              Connexion
            </Typography>
            <div className="flex items-center gap-2">
              <Typography variant="14Med" component="span" theme="gray">
                Tu n'as pas de compte ?
              </Typography>
              <Link href="/connexion/inscription">
                <Typography variant="14Med" component="span" theme="primary">
                  S'inscrire
                </Typography>
              </Link>
            </div>
          </div>
          <LoginForm form={form} />
        </Box>
      </div>
    </Container>
  )
}
