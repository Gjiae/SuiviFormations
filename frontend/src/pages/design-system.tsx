import { Navigation } from '@/ui/components/navigation/navigation'
import { Seo } from '@/ui/components/seo'
import { Avatar } from '@/ui/design-system/avatar'
import { Button } from '@/ui/design-system/button'
import { Logo } from '@/ui/design-system/logo'
import { Spinner } from '@/ui/design-system/spinner'
import { Typography } from '@/ui/design-system/typography'
import { Container } from '@/ui/components/container'
import { FaBell } from 'react-icons/fa6'
import { Footer } from '@/ui/components/navigation/footer'

export default function DesignSystem() {
  return (
    <>
      <Seo
        title="Design Système de l'application"
        description="Description..."
      />

      <Navigation />

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

        {/*Typography*/}
        <div className="space-y-2">
          <Typography variant="h1">Typography</Typography>
          <div className="flex flex-col gap-2 p-5 border border-darkgray divide-y-2 divide-darkgray rounded">
            <div className="pb-5 space-y-5">
              <Typography variant="h1" weight="medium">
                H1 noir
              </Typography>
              <Typography variant="h1" weight="medium">
                Nothing is impossible
              </Typography>
            </div>

            <div className="pb-5 space-y-2">
              <Typography variant="h2" weight="medium">
                H2 noir
              </Typography>
              <Typography variant="h2" weight="medium">
                Nothing is impossible
              </Typography>
            </div>

            <div className="pb-5 space-y-5">
              <Typography variant="h3" weight="medium">
                H3 noir
              </Typography>
              <Typography variant="h3" weight="medium">
                Nothing is impossible
              </Typography>
            </div>
          </div>

          <div className="flex flex-col gap-2 p-5 border border-darkgray divide-y-2 divide-darkgray rounded">
            <div className="pb-5 space-y-5">
              <Typography variant="h1" theme="gray" weight="medium">
                H1 gris
              </Typography>
              <Typography variant="h1" theme="gray" weight="medium">
                Nothing is impossible
              </Typography>
            </div>

            <div className="pb-5 space-y-2">
              <Typography variant="h2" theme="gray" weight="medium">
                H2 gris
              </Typography>
              <Typography variant="h2" theme="gray" weight="medium">
                Nothing is impossible
              </Typography>
            </div>

            <div className="pb-5 space-y-5">
              <Typography variant="h3" theme="gray" weight="medium">
                H3 gris
              </Typography>
              <Typography variant="h3" theme="gray" weight="medium">
                Nothing is impossible
              </Typography>
            </div>
          </div>

          <div className="flex flex-col gap-2 p-5 border border-darkgray divide-y-2 divide-darkgray rounded">
            <div className="pb-5 space-y-5">
              <Typography variant="h1" theme="primary" weight="medium">
                H1 primaire
              </Typography>
              <Typography variant="h1" theme="primary" weight="medium">
                Nothing is impossible
              </Typography>
            </div>

            <div className="pb-5 space-y-2">
              <Typography variant="h2" theme="primary" weight="medium">
                H2 primaire
              </Typography>
              <Typography variant="h2" theme="primary" weight="medium">
                Nothing is impossible
              </Typography>
            </div>

            <div className="pb-5 space-y-5">
              <Typography variant="h3" theme="primary" weight="medium">
                H3 primaire
              </Typography>
              <Typography variant="h3" theme="primary" weight="medium">
                Nothing is impossible
              </Typography>
            </div>
          </div>

          <div className="flex flex-col gap-2 p-5 border border-darkgray divide-y-2 divide-darkgray rounded">
            <div className="pb-5 space-y-5">
              <Typography variant="h1" theme="secondary" weight="medium">
                H1 secondaire
              </Typography>
              <Typography variant="h1" theme="secondary" weight="medium">
                Nothing is impossible
              </Typography>
            </div>

            <div className="pb-5 space-y-2">
              <Typography variant="h2" theme="secondary" weight="medium">
                H2 secondaire
              </Typography>
              <Typography variant="h2" theme="secondary" weight="medium">
                Nothing is impossible
              </Typography>
            </div>

            <div className="pb-5 space-y-5">
              <Typography variant="h3" theme="secondary" weight="medium">
                H3 secondaire
              </Typography>
              <Typography variant="h3" theme="secondary" weight="medium">
                Nothing is impossible
              </Typography>
            </div>
          </div>
        </div>

        {/*Spinners*/}
        <div className="space-y-2">
          <Typography variant="h1">Spinners</Typography>
          <div className="flex felx-col gap-2 p-5 border border-darkgray divide-y-2 divide-darkgray rounded">
            <div className="flex items-center gap-4 p-10">
              <Spinner size="small" />
              <Spinner size="medium" />
              <Spinner size="large" />
            </div>
          </div>
        </div>

        {/*Logos*/}
        <div className="space-y-2">
          <Typography variant="h1">Logos</Typography>
          <div className="flex felx-col gap-2 p-5 border border-darkgray divide-y-2 divide-darkgray rounded">
            <div className="flex items-center gap-4 p-10">
              <Logo size="very-small" />
              <Logo size="small" />
              <Logo />
              <Logo size="large" />
            </div>
          </div>
        </div>

        {/*Avatar*/}
        <div className="space-y-2">
          <Typography variant="h1">Avatar</Typography>
          <div className="flex felx-col gap-2 p-5 border border-darkgray divide-y-2 divide-darkgray rounded">
            <div className="flex items-center gap-4 p-10">
              <Avatar
                size="small"
                src="/assets/images/md.png"
                alt="Avatar de Valentin Gazzoli"
              />
              <Avatar
                src="/assets/images/md.png"
                alt="Avatar de Valentin Gazzoli"
              />
              <Avatar
                size="large"
                src="/assets/images/oiseau.png"
                alt="Avatar de Valentin Gazzoli"
              />
            </div>
          </div>
        </div>
      </Container>

      <Footer />
    </>
  )
}
