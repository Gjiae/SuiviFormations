import { Typography } from '@/ui/design-system/typography'
import { Container } from '../container'

export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="mb-6 lg:px-5">
      <Container className="flex w-full flex-wrap items-center justify-center md:justify-between">
        <Typography variant="14Med">
          &copy; {year}, créé par{' '}
          <a className="font-bold transition-colors hover:text-blue-500">
            Valentin Gazzoli.
          </a>
        </Typography>
      </Container>
    </footer>
  )
}
