import { SubmitHandler, useForm } from 'react-hook-form'
import { RegisterView } from './register.view'
import { RegisterFormFieldsType } from '@/types/forms'
import { useState } from 'react'
import { Container } from '@/ui/components/container'

export const RegisterContainer = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const {
    handleSubmit,
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<RegisterFormFieldsType>()

  const onSubmit: SubmitHandler<RegisterFormFieldsType> = async (formData) => {
    setIsLoading(true)
    console.log('formData', formData)
  }

  return (
    <Container>
      <RegisterView
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
