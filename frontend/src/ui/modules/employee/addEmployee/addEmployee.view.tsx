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
          <div className="flex items-center justify-between">
            <Typography variant="h3" component="h1">
              Ajouter un salarié
            </Typography>
            <div className="flex items-center gap-2">
              <Typography variant="14Med" component="span" theme="gray">
                Fermer
              </Typography>
            </div>
          </div>
          <AddEmployeeForm form={form} />
        </Box>
      </div>
  )
}
