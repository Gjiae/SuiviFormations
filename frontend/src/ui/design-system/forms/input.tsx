import clsx from 'clsx'
import { Typography } from '../typography'

interface Props {
  isLoading: boolean
  placeholder: string
  type?: 'text' | 'email' | 'password' | 'date'
  register: any
  errors: any
  errorMsg?: string
  id: string
  required?: boolean
  isAutoCompleted?: boolean
}

export const Input = ({
  isLoading,
  placeholder,
  type = 'text',
  register,
  errors,
  errorMsg = 'Ce champs doit être renseigné',
  id,
  required = true,
  isAutoCompleted = false,
}: Props) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className={clsx(
          isLoading && 'cursor-not-allowed',
          errors[id] ? 'placeholder-red border-red' : '',
          'border-bordergray focus:ring-primary w-full rounded border p-3 font-light focus:outline-none focus:ring-1'
        )}
        disabled={isLoading}
        {...register(id, {
          required: {
            value: required,
            message: errorMsg,
          },
        })}
        autoComplete={isAutoCompleted ? 'on' : 'off'}
      />
      {errors[id] && (
        <Typography variant="14Med" component="div" theme="danger">
          {errors[id]?.message}
        </Typography>
      )}
    </div>
  )
}
