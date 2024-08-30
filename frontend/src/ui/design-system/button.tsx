import { IconProps } from '@/types/iconProps'
import clsx from 'clsx'
import { Spinner } from './spinner'
import { LinkType, LinkTypes } from '@/lib/link-type'
import Link from 'next/link'

interface Props {
  size?: 'small' | 'medium' | 'large'
  variant?:
    | 'basique'
    | 'secondary'
    | 'green'
    | 'black'
    | 'cancel'
    | 'disabled'
    | 'ico'
  icon?: IconProps
  iconTheme?: 'basique' | 'secondary' | 'gray'
  iconPosition?: 'left' | 'right'
  disabled?: boolean
  isLoading?: boolean
  children?: React.ReactNode
  baseUrl?: string
  linktype?: LinkType
  action?: Function
}

export const Button = ({
  size = 'medium',
  variant = 'basique',
  icon,
  iconTheme = 'basique',
  iconPosition = 'left',
  disabled,
  isLoading,
  children,
  baseUrl,
  linktype = 'internal',
  action = () => {},
}: Props) => {
  let variantStyles: string = '',
    sizeStyles: string = '',
    icoSize: number = 0

  switch (variant) {
    case 'basique': //Default
      variantStyles = 'bg-primary hover:bg-primary/70 text-gray rounded'
      break
    case 'secondary':
      variantStyles =
        'bg-white hover:bg-stroke border border-primary text-primary rounded'
      break
    case 'green':
      variantStyles = 'bg-green hover:bg-green/80 text-white rounded'
      break
    case 'black':
      variantStyles = 'bg-dark hover:bg-dark/60 text-white rounded'
      break
    case 'cancel':
      variantStyles =
        'bg-white hover:bg-gray border border-stroke text-dark rounded'
      break
    case 'disabled':
      variantStyles =
        'bg-gray border border-stroke text-darkgray rounded cursor-not-allowed'
      break
    case 'ico':
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
          'bg-gray border border-stroke hover:bg-darkgray text-textcolor rounded-full'
      }
      break
  }

  switch (size) {
    case 'small': //Default
      sizeStyles = `${
        variant === 'ico'
          ? 'flex items-center justify-center w-[40px] h-[40px]'
          : 'px-[25px] py-[8px]'
      }`
      icoSize = 18
      break
    case 'medium':
      sizeStyles = `${
        variant === 'ico'
          ? 'flex items-center justify-center w-[46px] h-[46px]'
          : 'px-[30px] py-[11px]'
      }`
      icoSize = 20
      break
    case 'large':
      sizeStyles = ''
      icoSize = 22
      break
  }

  const handleClick = () => {
    if (action) {
      action()
    }
  }

  const buttonContent = (
    <>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          {variant === 'basique' ||
          variant === 'green' ||
          variant === 'black' ? (
            <Spinner size="small" variant="white" />
          ) : (
            <Spinner size="small" />
          )}
        </div>
      )}

      <div className={clsx(isLoading && 'invisible')}>
        {icon && variant === 'ico' ? (
          <icon.icon size={icoSize} />
        ) : (
          <div className={clsx(icon && 'flex items-center gap-2')}>
            {icon && iconPosition === 'left' && <icon.icon size={icoSize} />}
            {children}
            {icon && iconPosition === 'right' && <icon.icon size={icoSize} />}
          </div>
        )}
      </div>
    </>
  )

  const buttonElement = (
    <button
      type="button"
      className={clsx(
        variantStyles,
        sizeStyles,
        icoSize,
        isLoading,
        'relative animate'
      )}
      onClick={handleClick}
      disabled={disabled}
    >
      {buttonContent}
    </button>
  )

  if (baseUrl) {
    if (linktype === LinkTypes.EXTERNAL) {
      return (
        <a href={baseUrl} target="_blank">
          {buttonElement}
        </a>
      )
    } else {
      return <Link href={baseUrl}>{buttonElement}</Link>
    }
  }

  return buttonElement
}
