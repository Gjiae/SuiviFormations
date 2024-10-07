import { SubmitHandler, useForm } from 'react-hook-form'
import React, { useEffect, useState } from 'react'
import { AddFormationFormFieldsType } from '@/types/forms'
import { Container } from '@/ui/components/container'
import { Box } from '@/ui/design-system/box'
import { Typography } from '@/ui/design-system/typography'
import { IoCloseOutline } from 'react-icons/io5'
import { Input } from '@/ui/design-system/forms/input'
import { Button } from '@/ui/design-system/button'
import { useAlerts } from '@/ui/components/alerts/alerts-context'
import addFormationAPI from '@/api/addFormation'
import { Select } from '@/ui/design-system/forms/select'
import axios from 'axios'

interface Props {
  isOpen: boolean
  onClose: () => void
  idSalaried: string
}

export const AddFormation = ({ isOpen, onClose, idSalaried }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const id: string = idSalaried

  const [Formations, setFormations] = useState([
    {
      idFormation: '',
      title: '',
      realisation: '',
      expiration: '',
    }
  ])

  const getFormationsInfos = async (): Promise<void> => {
    try {
      const response = await axios.get('http://localhost:3000/api/formations');
      setFormations(response.data);
    } catch (error) {
      //addAlert({ severity: 'error', message: { error }, timeout: 5 });
    }
  };

  useEffect(() => {
    getFormationsInfos()
  }, [])

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<AddFormationFormFieldsType>()

  const { addAlert } = useAlerts()
  const onSubmit: SubmitHandler<AddFormationFormFieldsType> = async (formData) => {
    setIsLoading(true)
    const { idFormation, title, realisation, expiration } = formData
    try {
      await addFormationAPI.addFormation({
        id, idFormation, title, realisation, expiration
      })
      onClose()
      setIsLoading(false)
      window.location.reload()
      addAlert({ severity: 'success', message: `${title} a bien été ajoutée`, timeout: 5 });
    } catch (exception) {
      addAlert({ severity: 'error', message: `Erreur dans l'ajout d'une formation`, timeout: 5 });
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
                Ajouter une formation
              </Typography>
              <button className="text-dark" onClick={onClose}><IoCloseOutline size="1.5rem" />
              </button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 pb-5 pt-8">
              <Select
                id="title" errors={errors} isLoading={isLoading} register={register}>
                <option disabled selected>Choisir la formation</option>
                {Formations.map((formation) => (
                  <option>{formation.title}</option>))}
              </Select>
              <Input
                isLoading={isLoading}
                type="text"
                placeholder="ID de formation"
                register={register}
                errors={errors}
                id="idFormation"
              />
              <Input
                isLoading={isLoading}
                type="date"
                placeholder="Date de réalisation"
                register={register}
                errors={errors}
                id="realisation"
              />
              <Input
                isLoading={isLoading}
                type="date"
                placeholder="Date d'expiration"
                register={register}
                errors={errors}
                id="expiration"
              />
              <Button isLoading={isLoading} type="submit" fullWidth>
                Ajouter la formation
              </Button>
            </form>
          </Box>
        </div>
      </Container>
    </div>
  )
}
