import clsx from 'clsx'
import Image from 'next/image'

interface Props {
  size?: 'small' | 'medium' | 'large' | 'extra'
  forme?: 'rond' | 'carre'
  src: string
  alt: string
  className?: string
}

export const Avatar = ({
  size = 'medium',
  src,
  alt,
  forme = 'rond',
  className = '',
}: Props) => {
  let sizeStyles: string, formeStyle: string

  switch (size) {
    case 'small':
      sizeStyles = 'w-[24px] h-[24px]'
      break
    case 'medium':
      sizeStyles = 'w-[34px] h-[34px]'
      break
    case 'large':
      sizeStyles = 'w-[50px] h-[50px]'
      break
    case 'extra':
      sizeStyles = 'w-[74px] h-[74px]'
      break
  }

  switch (forme) {
    case 'rond': //Default
      formeStyle = 'rounded-full'
      break
    case 'carre':
      formeStyle = 'rounded'
      break
  }

  return (
    <div
      className={clsx(
        className,
        sizeStyles,
        formeStyle,
        'bg-darkgray relative'
      )}
    >
      <Image
        fill
        src={src}
        alt={alt}
        className={clsx(className, formeStyle, 'object-cover object-center')}
      />
    </div>
  )
}
