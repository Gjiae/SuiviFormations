import { Statut } from '@/lib/status'
import clsx from 'clsx'

interface Props {
  status?: Statut
}

export const Status = ({ status = 'validated' }: Props) => {
  let variantStyles: string = '',
    label: string = ''

  if (status === 'validated') {
    //Default
    variantStyles = 'bg-green'
    label = 'Valide'
  }
  if (status === 'tree-months') {
    variantStyles = 'bg-yellow'
    label = 'Expire dans 3 mois'
  }
  if (status === 'outdated') {
    variantStyles = 'bg-red'
    label = 'Expirée'
  }

  return (
    <>
      <label
        className={clsx(
          variantStyles,
          'flex items-center justify-center rounded text-dark w-[200px] h-[25px]'
        )}
      >
        {label}
      </label>
    </>
  )
}
