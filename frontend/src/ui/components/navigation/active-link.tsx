import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useMemo } from 'react'

interface Props {
  href: string
  children: React.ReactNode
}

export const ActiveLink = ({ href, children }: Props) => {
  const router = useRouter()
  const isActive: boolean = useMemo(() => {
    return router.pathname === href
  }, [router.pathname, href])

  if (isActive) {
    return (
      <Link
        href={href}
        className={clsx(
          isActive &&
            'flex items-center w-full p-3 rounded hover:shadow-lg text-white bg-gradient-to-tr from-bluegray800 to-bluegray900'
        )}
      >
        {children}
      </Link>
    )
  } else {
    return (
      <Link
        href={href}
        className={clsx('flex items-center w-full p-3 rounded hover:bg-gray')}
      >
        {children}
      </Link>
    )
  }
}
