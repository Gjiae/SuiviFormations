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

export interface AddEmployeeFormFieldsType {
  name: string
  surname: string
  service: string
  metier: string
  email: string
  sexe: string
}

export interface CreateFormationFormFieldsType {
  title: string
}

export interface AddFormationFormFieldsType {
  id: string
  idFormation: string
  title: string
  realisation: string
  expiration: string
  idAttestation: string
}
