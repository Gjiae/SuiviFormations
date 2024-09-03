import { Typography } from '@/ui/design-system/typography'
import { Container } from '../container'

export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="py-2 px-5 lg:px-10">
      <div className="flex w-full flex-wrap items-center justify-center gap-6 px-2 md:justify-between">
        <Typography variant="14Med">
          &copy; {year}, créé par{' '}
          <a className="transition-colors hover:text-blue-500 font-bold">
            Valentin Gazzoli.
          </a>
        </Typography>
      </div>
    </footer>
  )
}
