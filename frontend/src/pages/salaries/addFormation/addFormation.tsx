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
import axios from 'axios'
import clsx from 'clsx'
import uploadFileAPI from '@/api/uploadFile'

interface Props {
  isOpen: boolean
  onClose: () => void
  idSalaried: string
}

export const AddFormation = ({ isOpen, onClose, idSalaried }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const id: string = idSalaried
  const [idFormation, setIDForm] = useState('')
  const { addAlert } = useAlerts()
  const [file, setFile] = useState(null)
  const [Formations, setFormations] = useState<
    { _id: string; title: string }[]
  >([])

  const getFormationsInfos = async (): Promise<void> => {
    try {
      const response = await axios.get('http://localhost:3000/api/formations')
      setFormations(response.data)
    } catch (error) {
      addAlert({ severity: 'error', message: { error }, timeout: 5 })
    }
  }

  useEffect(() => {
    getFormationsInfos().then(() => console.log('Chargement des formations réussi.'))
  }, [])

  const {
    formState: { errors },
    register,
    handleSubmit,
    reset
  } = useForm<AddFormationFormFieldsType>({
    defaultValues: {
      title: 'Choisir la formation',
      idFormation: '',
      realisation: '',
      expiration: '',
    }
  })

  const onSubmit: SubmitHandler<AddFormationFormFieldsType> = async (formData) => {
    setIsLoading(true)
    const { title, realisation, expiration } = formData
    try {
      await uploadFileAPI.uploadFile(file)
      const idAttestation = global.config.test.idAttest
      await addFormationAPI.addFormation({
        id, idFormation, title, realisation, expiration, idAttestation
      })
      reset()
      onClose()
      setIsLoading(false)
      addAlert({ severity: 'success', message: `${title} a bien été ajoutée`, timeout: 5 })
      window.location.reload()
    } catch (error) {
      addAlert({ severity: 'error', message: `Erreur dans l'ajout d'une formation : ${error}`, timeout: 5 })
    }
  }

  const getFileInfo = (e) => {
    const formData = new FormData();
    //FILE INFO NAME WILL BE "my-image-file"
    formData.append('my-image-file', e.target.files[0], e.target.files[0].name);
    setFile(formData);
  }

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setIDForm(event.target.selectedOptions[0].id)
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
              <select {...register('title')} className={clsx(
                isLoading && 'cursor-not-allowed',
                'border-bordergray focus:ring-primary w-full rounded border p-3 font-light focus:outline-none focus:ring-1'
              )}
                      id="title" onChange={handleSelectChange}>
                <option disabled defaultValue={'Choisir la formation'}>Choisir la formation</option>
                {Formations.map((formation) => (
                  <option key={formation._id} id={formation._id} value={formation.title}>{formation.title}</option>))}
              </select>
              <div className="h-2">
                <label
                  className="w-full p-3 font-light">Date
                  de réalisation :</label>
              </div>
              <Input
                isLoading={isLoading}
                type="date"
                placeholder="Date de réalisation"
                register={register}
                errors={errors}
                id="realisation"
              />
              <div className="h-2">
                <label
                  className="w-full p-3 font-light">Date
                  de fin de validité :</label>
              </div>
              <Input
                isLoading={isLoading}
                type="date"
                placeholder="Date d'expiration"
                register={register}
                errors={errors}
                id="expiration"
              />
              <div className="h-2">
                <label
                  className="w-full p-3 font-light">Joindre l'attestation :</label>
              </div>
              <Input
                isLoading={isLoading}
                type="file"
                placeholder="Attestation"
                register={register}
                errors={errors}
                id="attestation"
                onChange={getFileInfo}
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
