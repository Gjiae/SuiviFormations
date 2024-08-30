import { IconProps } from '@/types/iconProps'
import clsx from 'clsx'

interface Props {
  size?: 'small' | 'medium' | 'large'
  icon?: IconProps
  iconTheme?: 'basique' | 'secondary' | 'gray'
}

export const Pastille = ({
  size = 'medium',
  icon,
  iconTheme = 'basique',
}: Props) => {
  let variantStyles: string = '',
    sizeStyles: string = '',
    icoSize: number = 0

  if (iconTheme === 'basique') {
    //Default
    variantStyles = 'bg-primary hover:bg-primary/70 text-gray rounded-full'
  }
  if (iconTheme === 'secondary') {
    variantStyles =
      'bg-white hover:bg-stroke border border-primary text-primary rounded-full'
  }
  if (iconTheme === 'gray') {
    variantStyles =
      'bg-gray border border-gray hover:bg-darkgray text-primary rounded-full'
  }

  switch (size) {
    case 'small': //Default
      sizeStyles = 'flex items-center justify-center w-[40px] h-[40px]'
      icoSize = 18
      break
    case 'medium':
      sizeStyles = 'flex items-center justify-center w-[46px] h-[46px]'
      icoSize = 20
      break
    case 'large':
      sizeStyles = 'flex items-center justify-center w-[60px] h-[60px]'
      icoSize = 35
      break
  }

  return (
    <>
      <label className={clsx(variantStyles, sizeStyles, icoSize, 'relative')}>
        <div>{icon && icoSize ? <icon.icon size={icoSize} /> : <></>}</div>
      </label>
    </>
  )
}
