import { IconProps } from '@/types/iconProps'
import clsx from 'clsx'

interface Props {
  variant?: 'basique' | 'white'
  icon?: IconProps
  iconPosition?: 'left' | 'right'
  onChange?: Function
}

export const Search = ({ variant = 'basique', icon, onChange = () => {} }: Props) => {
  let variantStyles: string = ''

  switch (variant) {
    case 'basique': //Default
      variantStyles =
        'bg-gray h-[40px] w-[300px] text-16Med text-textcolor border border-stroke rounded'
      break
    case 'white':
      variantStyles = 'bg-dark text-white rounded'
      break
  }

  const handleChange = () => {
    if (onChange) {
      onChange()
    }
  }

  return (
    <>
      <div className={clsx(icon && 'flex items-center gap-2')}>
        <input
          type="search"
          className={clsx(variantStyles, 'outline-none px-8')}
          placeholder="Chercher..."
          onChange={handleChange}
        />
        <div className="absolute text-textcolor px-2">
          {icon && <icon.icon />}
        </div>
      </div>
    </>
  )
}
