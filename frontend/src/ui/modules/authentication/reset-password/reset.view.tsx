import { Container } from '@/ui/components/container'
import { Box } from '@/ui/design-system/box'
import { Typography } from '@/ui/design-system/typography'
import Link from 'next/link'
import Image from 'next/image'
import { ResetForm } from './reset.form'
import { FormsType } from '@/types/forms'

interface Props {
  form: FormsType
}

export const ResetView = ({ form }: Props) => {
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
              Mot de passe perdu ?
            </Typography>
            <Link href="/connexion">
              <Typography variant="14Med" component="span" theme="primary">
                Connexion
              </Typography>
            </Link>
          </div>
          <ResetForm form={form} />
        </Box>
      </div>
    </Container>
  )
}
