import { SubmitHandler, useForm } from 'react-hook-form'
import React, { useState } from 'react'
import { AddEmployeeFormFieldsType } from '@/types/forms'
import { Container } from '@/ui/components/container'
import addEmployeeAPI from '@/api/addEmployee'
import { Box } from '@/ui/design-system/box'
import { Typography } from '@/ui/design-system/typography'
import { IoCloseOutline } from 'react-icons/io5'
import { Input } from '@/ui/design-system/forms/input'
import { Select } from '@/ui/design-system/forms/select'
import { Button } from '@/ui/design-system/button'
import { useAlerts } from '@/ui/components/alerts/alerts-context'

interface Props {
  isOpen: boolean
  onClose: () => void
}

export const AddEmployee = ({ isOpen, onClose }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<AddEmployeeFormFieldsType>()

  const { addAlert } = useAlerts()
  const onSubmit: SubmitHandler<AddEmployeeFormFieldsType> = async (formData) => {
    setIsLoading(true)
    console.log('formData', formData)
    const { name, surname, service, metier, email, sexe } = formData
    try {
      await addEmployeeAPI.addEmployee({
        name, surname, service, metier, email, sexe
      })
      onClose()
      setIsLoading(false)
      window.location.reload()
      addAlert({ severity: 'success', message: `${surname} ${name} a bien été ajouté`, timeout: 5 });
    } catch (exception) {
      alert("Erreur dans le chargement de la liste des salariés")
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
                Ajouter un salarié
              </Typography>
              <button className="text-dark" onClick={onClose}><IoCloseOutline size="1.5rem" />
              </button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 pb-5 pt-8">
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
              <Select
                id="sexe" errors={errors} isLoading={isLoading} register={register}>
                <option disabled selected>Choisir le sexe</option>
                <option>Féminin</option>
                <option>Masculin</option>
              </Select>
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
          </Box>
        </div>
      </Container>
    </div>
  )
}
