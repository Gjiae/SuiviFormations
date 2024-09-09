import { Typography } from '@/ui/design-system/typography'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { v4 as uuidv4 } from 'uuid'

export const Breadcrumbs = () => {
  const router = useRouter()
  const asPath = router.asPath
  const segments = asPath.split('/')
  const lastSegment = segments[segments.length - 1]
  segments[0] = 'Tableau de bord'

  const view = segments.map((path, index) => (
    <div key={uuidv4()}>
      <Link
        href={index > 0 ? `/${segments.slice(1, index + 1).join('/')}` : '/'}
      >
        <Typography
          variant="14Med"
          component="span"
          weight="medium"
          className={clsx(
            path !== lastSegment ? 'text-textcolor' : 'text-dark',
            'capitalize transition-all hover:text-primary hover:opacity-100'
          )}
        >
          {path}
        </Typography>
      </Link>
      {path !== lastSegment && (
        <Typography
          variant="14Med"
          component="span"
          className="ml-2 text-textcolor"
        >
          /
        </Typography>
      )}
    </div>
  ))

  return <>{view}</>
}
