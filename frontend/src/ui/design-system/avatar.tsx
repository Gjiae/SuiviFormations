import clsx from 'clsx'
import Image from 'next/image'

interface Props {
  size?: 'small' | 'medium' | 'large'
  forme?: 'rond' | 'carre'
  src: string
  alt: string
}

export const Avatar = ({
  size = 'medium',
  src,
  alt,
  forme = 'rond',
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
    <div className={clsx(sizeStyles, formeStyle, 'bg-darkgray relative')}>
      <Image
        fill
        src={src}
        alt={alt}
        className={clsx(formeStyle, 'object-cover object-center')}
      />
    </div>
  )
}
