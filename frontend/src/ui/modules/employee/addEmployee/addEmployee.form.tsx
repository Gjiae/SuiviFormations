import { FormsType } from '@/types/forms'
import { Button } from '@/ui/design-system/button'
import { Input } from '@/ui/design-system/forms/input'

interface Props {
  form: FormsType
}

export const AddEmployeeForm = ({ form }: Props) => {
  const { control, onSubmit, handleSubmit, errors, isLoading, register } = form
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pt-8 pb-5 space-y-4">
      <Input
        isLoading={isLoading}
        type="text"
        placeholder="Nom"
        register={register}
        errors={errors}
        id="name"
      />
      <Input
        isLoading={isLoading}
        type="text"
        placeholder="Prénom"
        register={register}
        errors={errors}
        id="surname"
      />
      <Input
        isLoading={isLoading}
        type="text"
        placeholder="Service"
        register={register}
        errors={errors}
        id="service"
      />
      <Input
        isLoading={isLoading}
        type="text"
        placeholder="Métier"
        register={register}
        errors={errors}
        id="metier"
      />
      <Input
        isLoading={isLoading}
        type="email"
        placeholder="johndoe@gmail.com"
        register={register}
        errors={errors}
        id="email"
      />
      <Button isLoading={isLoading} type="submit" fullWidth>
        Ajouter le salarié
      </Button>
    </form>
  )
}
