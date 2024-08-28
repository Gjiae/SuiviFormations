import { Seo } from '@/ui/components/seo'
import { Button } from '@/ui/design-system/button'
import { Spinner } from '@/ui/design-system/spinner'
import { Typography } from '@/ui/design-system/typography'
import { Container } from '@/ui/components/container'
import { FaBell } from 'react-icons/fa6'

export default function Home() {
  return (
    <>
      <Seo title="Suivi des formations" description="Description..." />

      <Container>
        <Typography variant="h1" component="div">
          Affichage spinner
        </Typography>
        <div className="flex items-center gap-4 p-10">
          <Spinner size="small" />
          <Spinner size="medium" />
          <Spinner size="large" />
        </div>

        <Typography variant="h1" component="div">
          Affichage grands boutons
        </Typography>
        <div className="flex items-center gap-4 p-10">
          <Button>Bouton basique</Button>
          <Button variant="secondary" size="medium">
            Bouton Secondaire
          </Button>
          <Button variant="green" size="medium">
            Bouton Vert
          </Button>
          <Button variant="black" size="medium">
            Bouton Noir
          </Button>
          <Button variant="disabled" size="medium">
            Disabled
          </Button>
          <Button
            iconTheme="basique"
            size="medium"
            variant="ico"
            icon={{ icon: FaBell }}
          />
          <Button
            iconTheme="secondary"
            size="medium"
            variant="ico"
            icon={{ icon: FaBell }}
          />
          <Button
            iconTheme="gray"
            size="medium"
            variant="ico"
            icon={{ icon: FaBell }}
          />
        </div>

        <Typography variant="h1" component="div">
          Affichage boutons avec icon
        </Typography>
        <div className="flex items-center gap-4 p-10">
          <Button
            variant="basique"
            size="medium"
            icon={{ icon: FaBell }}
            iconPosition="right"
          >
            Bouton basique
          </Button>
          <Button variant="secondary" size="medium" icon={{ icon: FaBell }}>
            Bouton Secondaire
          </Button>
          <Button variant="green" size="medium" icon={{ icon: FaBell }}>
            Bouton Vert
          </Button>
          <Button variant="black" size="medium" icon={{ icon: FaBell }}>
            Bouton Noir
          </Button>
          <Button variant="disabled" size="medium" icon={{ icon: FaBell }}>
            Disabled
          </Button>
        </div>

        <Typography variant="h1" component="div">
          Affichage petits boutons
        </Typography>
        <div className="flex items-center gap-4 p-10">
          <Button variant="basique" size="small">
            Bouton basique small
          </Button>
          <Button variant="secondary" size="small">
            Bouton secondaire small
          </Button>
          <Button variant="green" size="small">
            Bouton Vert small
          </Button>
          <Button variant="black" size="small">
            Bouton Noir small
          </Button>
          <Button variant="cancel" size="small">
            Cancel
          </Button>
          <Button
            iconTheme="basique"
            size="small"
            variant="ico"
            icon={{ icon: FaBell }}
          />
          <Button
            iconTheme="secondary"
            size="small"
            variant="ico"
            icon={{ icon: FaBell }}
          />
          <Button
            iconTheme="gray"
            size="small"
            variant="ico"
            icon={{ icon: FaBell }}
          />
        </div>

        <Typography variant="h1" component="div">
          Affichage boutons spinner
        </Typography>
        <div className="flex items-center gap-4 p-10">
          <Button isLoading variant="basique" size="small">
            Bouton basique small
          </Button>
          <Button isLoading variant="secondary" size="small">
            Bouton secondaire small
          </Button>
          <Button isLoading variant="green" size="small">
            Bouton Vert small
          </Button>
          <Button isLoading variant="black" size="small">
            Bouton Noir small
          </Button>
        </div>
      </Container>
    </>
  )
}
