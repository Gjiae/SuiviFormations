import { Seo } from '@/ui/components/seo'
import { Typography } from '@/ui/design-system/typography'
import { Container } from '@/ui/components/container'
import { Layout } from '@/ui/components/layout/layout'

export default function DesignSystem() {
  return (
    <>
      <Seo
        title="Elements de design system Typography"
        description="Description..."
      />

      <Layout>
        <Container>
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
        </Container>
      </Layout>
    </>
  )
}
