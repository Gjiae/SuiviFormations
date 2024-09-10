import { FormsType } from '@/types/forms'
import { Button } from '@/ui/design-system/button'
import { Input } from '@/ui/design-system/forms/input'

interface Props {
  form: FormsType
}

export const LoginForm = ({ form }: Props) => {
  const { control, onSubmit, handleSubmit, errors, isLoading, register } = form
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pt-8 pb-5 space-y-4">
      <Input
        isLoading={isLoading}
        type="email"
        placeholder="johndoe@gmail.com"
        register={register}
        errors={errors}
        id="email"
      />
      <Input
        isLoading={isLoading}
        type="password"
        placeholder="Mot de passe"
        register={register}
        errors={errors}
        id="password"
      />
      <Button isLoading={isLoading} type="submit" fullWidth>
        Connexion
      </Button>
    </form>
  )
}
