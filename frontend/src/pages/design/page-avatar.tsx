import { Seo } from '@/ui/components/seo'
import { Avatar } from '@/ui/design-system/avatar'
import { Typography } from '@/ui/design-system/typography'
import { Container } from '@/ui/components/container'
import { Layout } from '@/ui/components/layout/layout'

export default function DesignSystem() {
  return (
    <>
      <Seo
        title="Elements de design system Avatar"
        description="Description..."
      />

      <Layout>
        <Container>
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
      </Layout>
    </>
  )
}
