export interface FormsType {
  control?: any
  onSubmit: any
  errors: any
  isLoading: boolean
  register: any
  handleSubmit: any
}

export interface RegisterFormFieldsType {
  email: string
  password: string
}

export interface LoginFormFieldsType {
  email: string
  password: string
}

export interface ResetFormFieldsType {
  email: string
}
