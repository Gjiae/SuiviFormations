import { SubmitHandler, useForm } from 'react-hook-form'
import React, { useState } from 'react'
import { CreateFormationFormFieldsType } from '@/types/forms'
import { Container } from '@/ui/components/container'
import createFormationAPI from '@/api/createFormation'
import { Box } from '@/ui/design-system/box'
import { Typography } from '@/ui/design-system/typography'
import { IoCloseOutline } from 'react-icons/io5'
import { Input } from '@/ui/design-system/forms/input'
import { Button } from '@/ui/design-system/button'
import { useAlerts } from '@/ui/components/alerts/alerts-context'

interface Props {
  isOpen: boolean
  onClose: () => void
}

export const AddFormation = ({ isOpen, onClose }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { addAlert } = useAlerts()

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<CreateFormationFormFieldsType>()

  const onSubmit: SubmitHandler<CreateFormationFormFieldsType> = async (formData) => {
    setIsLoading(true)
    const { title } = formData
    try {
      await createFormationAPI.createFormation(title)
      onClose()
      setIsLoading(false)
      window.location.reload()
      addAlert({ severity: 'success', message: `${title} a bien été ajoutée`, timeout: 5 });
    } catch (exception) {
      alert("Erreur dans la création de la formation")
    }
  }

  if (!isOpen) return null
  return (
    <div className={`fixed left-1/3 top-[20%] h-screen w-2/5`}>
      <Container>
        <div className="flex items-center">
          <Box className="bg-white">
            <div className="flex items-center justify-between">
              <Typography variant="h3" component="h1">
                Créer une formation
              </Typography>
              <button className="text-dark" onClick={onClose}><IoCloseOutline size="1.5rem" />
              </button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 pb-5 pt-8">
              <Input
                isLoading={isLoading}
                type="text"
                placeholder="Titre de la formation"
                register={register}
                errors={errors}
                id="title"
              />
              <Button isLoading={isLoading} type="submit" fullWidth>
                Valider la création
              </Button>
            </form>
          </Box>
        </div>
      </Container>
    </div>
  )
}
