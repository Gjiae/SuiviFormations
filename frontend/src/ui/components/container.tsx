import clsx from 'clsx'

interface Props {
  children: React.ReactNode
  className?: string
}

export const Container = ({ children, className }: Props) => {
  return (
    <div className={clsx('mx-auto w-full px-5 lg:px-10', className)}>
      {children}
    </div>
  )
}
