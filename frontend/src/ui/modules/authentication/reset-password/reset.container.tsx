import { useState } from 'react'
import { ResetView } from './reset.view'
import { ResetFormFieldsType } from '@/types/forms'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Container } from '@/ui/components/container'

export const ResetContainer = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const {
    handleSubmit,
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<ResetFormFieldsType>()

  const onSubmit: SubmitHandler<ResetFormFieldsType> = async (formData) => {
    setIsLoading(true)
    console.log('formData', formData)
  }

  return (
    <Container>
      <ResetView
        form={{
          errors,
          register,
          handleSubmit,
          onSubmit,
          isLoading,
        }}
      />
    </Container>
  )
}
