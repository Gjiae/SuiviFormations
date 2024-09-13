import { SubmitHandler, useForm } from 'react-hook-form'
import { AddEmployeeView } from './addEmployee.view'
import { useState } from 'react'
import { AddEmployeeFormFieldsType } from '@/types/forms'
import { Container } from '@/ui/components/container'
import addEmployeeAPI from '@/api/addEmployee'

export const AddEmployeeContainer = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState('')

  const {
    handleSubmit,
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<AddEmployeeFormFieldsType>()

  const onSubmit: SubmitHandler<AddEmployeeFormFieldsType> = async (formData) => {
    setIsLoading(true)
    console.log('formData', formData)

    const { name, surname, service, metier, email } = formData

    try {
      await addEmployeeAPI.addEmployee({
        name, surname, service, metier, email
      })
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
      <AddEmployeeView
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
