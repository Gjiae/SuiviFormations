import { Seo } from '@/ui/components/seo'
import { Button } from '@/ui/design-system/button/button'
import { Typography } from '@/ui/design-system/typography'

export default function Home() {
  return (
    <>
      <Seo title="Suivi des formations" description="Description..." />

      <Button>Accent</Button>
      <Button variant="basique">Accent</Button>
      <Button variant="secondaire">Accent</Button>
      <Button variant="disabled">Accent</Button>

      <Typography variant="h1" component="div">
        Dashboard
      </Typography>
      <Typography variant="h2" component="div">
        Dashboard
      </Typography>
      <Typography variant="h3" component="div">
        Dashboard
      </Typography>
    </>
  )
}
