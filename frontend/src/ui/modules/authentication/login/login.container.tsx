import { SubmitHandler, useForm } from 'react-hook-form'
import { LoginView } from './login.view'
import { useState } from 'react'
import { LoginFormFieldsType } from '@/types/forms'
import { Container } from '@/ui/components/container'
import loginService from '@/api/login'

export const LoginContainer = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [user, setUser] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')

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

    const { email, password } = formData

    try {
      const user = await loginService.login({
        email,
        password,
      })
      window.localStorage.setItem('loggedNoteappUser', JSON.stringify(user))
      setUser(user)
      // console.log(user)
      setIsLoading(false)
    } catch (exception) {
      setErrorMessage('Wrong credentials')
      setTimeout(() => {
        setErrorMessage('')
      }, 5000)
    }
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
