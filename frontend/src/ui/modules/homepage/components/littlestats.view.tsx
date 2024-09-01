import { Container } from '@/ui/components/container'
import { Pastille } from '@/ui/design-system/pastilles'
import { Typography } from '@/ui/design-system/typography'
import { FaRegClone } from 'react-icons/fa6'

export const LittleStats = () => {
  return (
    <div className="bg-stroke">
      <Container className="grid grid-cols-4 gap-4 py-2">
        <div className="flex items-center bg-white h-[120px] rounded-semi py-2 px-2">
          <Pastille iconTheme="gray" size="large" icon={{ icon: FaRegClone }} />
          <Typography className="px-5" variant="h1">
            108
          </Typography>
          <Typography variant="12Reg">salariés enregistrés</Typography>
        </div>
        <div className="flex items-center bg-white h-[120px] rounded-semi py-2 px-2">
          <Pastille iconTheme="gray" size="large" icon={{ icon: FaRegClone }} />
          <Typography className="px-5" variant="h1">
            524
          </Typography>
          <Typography variant="12Reg">formations</Typography>
        </div>
        <div className="flex items-center bg-white h-[120px] rounded-semi py-2 px-2">
          <Pastille iconTheme="gray" size="large" icon={{ icon: FaRegClone }} />
          <Typography className="px-5" variant="h1">
            108
          </Typography>
          <Typography variant="12Reg">salariés enregistrés</Typography>
        </div>
        <div className="flex items-center bg-white h-[120px] rounded-semi py-2 px-2">
          <Pastille iconTheme="gray" size="large" icon={{ icon: FaRegClone }} />
          <Typography className="px-5" variant="h1">
            8
          </Typography>
          <Typography variant="12Reg">formation/salarié</Typography>
        </div>
      </Container>
    </div>
  )
}
