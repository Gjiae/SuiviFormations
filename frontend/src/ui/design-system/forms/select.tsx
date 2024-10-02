import clsx from 'clsx'
import { Typography } from '../typography'
import { ReactNode } from 'react'

interface Props {
  isLoading: boolean
  register: any
  errors: any
  errorMsg?: string
  id: string
  required?: boolean
  children: ReactNode
}

export const Select = ({
                         isLoading,
                         register,
                         children,
                         errors,
                         errorMsg = 'Ce champs doit être renseigné',
                         id,
                         required = true
                       }: Props) => {
  return (
    <div>
      <select
        className={clsx(
          isLoading && 'cursor-not-allowed',
          errors[id] ? 'placeholder:text-red border-red' : '',
          'border-bordergray focus:ring-primary w-full rounded border p-3 font-light focus:outline-none focus:ring-1'
        )}
        disabled={isLoading}
        {...register(id, {
          required: {
            value: required,
            message: errorMsg
          }
        })}
      >{children}</select>
      {errors[id] && (
        <Typography variant="14Med" component="div" theme="danger">
          {errors[id]?.message}
        </Typography>
      )}
    </div>
  )
}
