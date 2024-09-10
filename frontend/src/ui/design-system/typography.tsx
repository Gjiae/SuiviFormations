import clsx from 'clsx'

interface Props {
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | '16Reg'
    | '14Reg'
    | '12Reg'
    | '16Med'
    | '14Med'
    | '12Med'
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'div' | 'p' | 'span'
  theme?:
    | 'black'
    | 'gray'
    | 'white'
    | 'primary'
    | 'secondary'
    | 'danger'
    | 'success'
    | 'warning'
  weight?: 'regular' | 'medium'
  className?: string
  children: React.ReactNode
}

export const Typography = ({
  variant = 'h3',
  component: Component = 'div',
  theme = 'black',
  weight = 'regular',
  className,
  children,
}: Props) => {
  let variantStyles: string = '',
    colorStyles: string = ''

  switch (variant) {
    case 'h1':
      variantStyles = 'text-H4'
      break
    case 'h2':
      variantStyles = 'text-H5'
      break
    case 'h3':
      variantStyles = 'text-H6'
      break
    case '16Reg':
      variantStyles = 'text-16Reg'
      break
    case '14Reg':
      variantStyles = 'text-14Reg'
      break
    case '12Reg':
      variantStyles = 'text-12Reg'
      break
    case '16Med':
      variantStyles = 'text-16Med'
      break
    case '14Med':
      variantStyles = 'text-14Med'
      break
    case '12Med':
      variantStyles = 'text-12Med'
      break
  }

  switch (theme) {
    case 'black':
      colorStyles = 'text-dark'
      break
    case 'white':
      colorStyles = 'text-white'
      break
    case 'gray':
      colorStyles = 'text-textcolor'
      break
    case 'primary':
      colorStyles = 'text-primary'
      break
    case 'secondary':
      colorStyles = 'text-secondary'
      break
    case 'danger':
      colorStyles = 'text-red'
      break
    case 'success':
      colorStyles = 'text-green'
      break
    case 'warning':
      colorStyles = 'text-yellow'
      break
  }

  return (
    <Component
      className={clsx(
        variantStyles,
        weight === 'medium' && 'font-medium',
        className,
        colorStyles
      )}
    >
      {children}
    </Component>
  )
}
