import { Seo } from '@/ui/components/seo'
import { Button } from '@/ui/design-system/button/button'
import { Typography } from '@/ui/design-system/typography'

export default function Home() {
  return (
    <>
      <Seo title="Suivi des formations" description="Description..." />

      <Button>Bouton basique</Button>
      <Button variant="secondaire" size="medium">Bouton Secondaire</Button>
      <Button variant="disabled" size="medium">Disabled</Button>
      <Button variant="cancel" size="small">Cancel</Button>

      <Button variant="basique" size="small">Save</Button>

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
