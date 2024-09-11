import { SubmitHandler, useForm } from 'react-hook-form'
import { RegisterView } from './register.view'
import { RegisterFormFieldsType } from '@/types/forms'
import { useState } from 'react'
import { Container } from '@/ui/components/container'
import registerAPI from '@/api/register'

export const RegisterContainer = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState('')

  const {
    handleSubmit,
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<RegisterFormFieldsType>()

  const onSubmit: SubmitHandler<RegisterFormFieldsType> = async (formData) => {
    setIsLoading(true)

    const { email, password } = formData

    try {
      const user = await registerAPI.register({
        email,
        password,
      })
      setIsLoading(false)
    } catch (exception) {
      setErrorMessage('impossible de créer le compte')
      setTimeout(() => {
        setErrorMessage('')
      }, 5000)
    }
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
