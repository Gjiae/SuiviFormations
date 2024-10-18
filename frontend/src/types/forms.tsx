export interface FormsType {
  control?: never
  onSubmit: never
  errors: never
  isLoading: boolean
  register: never
  handleSubmit: never
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

export interface AddFormationFormFieldsType {
  id: string
  idFormation: string
  title: string
  realisation: string
  expiration: string
  idAttestation: string
}
