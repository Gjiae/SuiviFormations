import { Seo } from '@/ui/components/seo'
import { Button } from '@/ui/design-system/button'
import { Typography } from '@/ui/design-system/typography'
import { Container } from '@/ui/components/container'
import { FaBell } from 'react-icons/fa6'
import { Layout } from '@/ui/components/layout/layout'

export default function DesignSystem() {
  return (
    <>
      <Seo
        title="Elements de design system boutons"
        description="Description..."
      />

      <Layout>
        <Container>
          {/*Boutons*/}
          <div className="space-y-2">
            <Typography variant="h1">Boutons</Typography>
            <div className="flex flex-col gap-2 p-5 border border-darkgray divide-y-2 divide-darkgray rounded">
              <div className="">
                <Typography variant="h2" weight="medium">
                  Petits boutons
                </Typography>
                <div className="flex items-center gap-4 p-10">
                  <Button variant="basique" size="small">
                    Basique
                  </Button>
                  <Button variant="secondary" size="small">
                    Secondaire
                  </Button>
                  <Button variant="green" size="small">
                    Vert
                  </Button>
                  <Button variant="black" size="small">
                    Noir
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
              </div>

              <div className="">
                <Typography variant="h2" weight="medium">
                  Boutons medium
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
              </div>

              <div className="">
                <Typography variant="h2" weight="medium">
                  Boutons icônes
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
                  <Button
                    variant="secondary"
                    size="medium"
                    icon={{ icon: FaBell }}
                  >
                    Bouton Secondaire
                  </Button>
                  <Button variant="green" size="medium" icon={{ icon: FaBell }}>
                    Bouton Vert
                  </Button>
                  <Button variant="black" size="medium" icon={{ icon: FaBell }}>
                    Bouton Noir
                  </Button>
                  <Button
                    variant="disabled"
                    size="medium"
                    icon={{ icon: FaBell }}
                  >
                    Disabled
                  </Button>
                </div>
              </div>

              <div className="">
                <Typography variant="h2" weight="medium">
                  Boutons spinner
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
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  )
}
