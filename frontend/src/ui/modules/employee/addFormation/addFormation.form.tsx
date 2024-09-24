import { FormsType } from '@/types/forms'
import { Button } from '@/ui/design-system/button'
import { Input } from '@/ui/design-system/forms/input'

interface Props {
  form: FormsType
}

export const AddFormationForm = ({ form }: Props) => {
  const { control, onSubmit, handleSubmit, errors, isLoading, register } = form
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pt-8 pb-5 space-y-4">
      <Input
        isLoading={isLoading}
        type="text"
        placeholder="Nom"
        register={register}
        errors={errors}
        id="formation"
      />
      <Input
        isLoading={isLoading}
        type="text"
        placeholder="Date de réalisation"
        register={register}
        errors={errors}
        id="realisation"
      />
      <Input
        isLoading={isLoading}
        type="text"
        placeholder="Date d'expiration"
        register={register}
        errors={errors}
        id="expiration"
      />
      <Button isLoading={isLoading} type="submit" fullWidth>
        Ajouter la formation
      </Button>
    </form>
  )
}
