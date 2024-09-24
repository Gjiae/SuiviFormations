import { Box } from '@/ui/design-system/box'
import { Typography } from '@/ui/design-system/typography'
import { FormsType } from '@/types/forms'
import { AddFormationForm } from '@/ui/modules/employee/addFormation/addFormation.form'

interface Props {
  form: FormsType
}

export const AddFormationView = ({ form }: Props) => {
  return (
      <div className="flex items-center">
        <Box className='bg-white'>
          <div className="flex items-center">
            <Typography variant="h3" component="h1">
              Ajouter un salarié
            </Typography>
          </div>
          <AddFormationForm form={form} />
        </Box>
      </div>
  )
}
