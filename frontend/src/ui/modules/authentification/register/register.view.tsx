import { Container } from '@/ui/components/container'
import { Box } from '@/ui/design-system/box'
import { Typography } from '@/ui/design-system/typography'
import Image from 'next/image'
import Link from 'next/link'
import { RegisterForm } from './register.form'

export const RegisterView = () => {
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
              Inscription
            </Typography>
            <div className="flex items-center gap-2">
              <Typography variant="14Med" component="span" theme="gray">
                Tu as déjà un compte ?
              </Typography>
              <Link href="/connexion">
                <Typography variant="14Med" component="span" theme="primary">
                  Connexion
                </Typography>
              </Link>
            </div>
          </div>
          <RegisterForm />
        </Box>
      </div>
    </Container>
  )
}
