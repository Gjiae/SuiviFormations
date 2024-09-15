import { Box } from '@/ui/design-system/box'
import { Typography } from '@/ui/design-system/typography'
import { AddEmployeeForm } from '../addEmployee/addEmployee.form'
import { FormsType } from '@/types/forms'
import Link from 'next/link'

interface Props {
  form: FormsType
}

export const AddEmployeeView = ({ form }: Props) => {
  return (
      <div className="flex items-center">
        <Box className='bg-white'>
          <div className="flex items-center">
            <Typography variant="h3" component="h1">
              Ajouter un salarié
            </Typography>
          </div>
          <AddEmployeeForm form={form} />
        </Box>
      </div>
  )
}
