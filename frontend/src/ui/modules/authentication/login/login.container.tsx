import { SubmitHandler, useForm } from 'react-hook-form'
import { LoginView } from './login.view'
import { useState } from 'react'
import { LoginFormFieldsType } from '@/types/forms'
import { Container } from '@/ui/components/container'

export const LoginContainer = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const {
    handleSubmit,
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<LoginFormFieldsType>()

  const onSubmit: SubmitHandler<LoginFormFieldsType> = async (formData) => {
    setIsLoading(true)
    console.log('formData', formData)
  }

  return (
    <Container>
      <LoginView
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
