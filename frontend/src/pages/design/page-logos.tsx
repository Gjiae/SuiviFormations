import { Seo } from '@/ui/components/seo'
import { Logo } from '@/ui/design-system/logo'
import { Typography } from '@/ui/design-system/typography'
import { Container } from '@/ui/components/container'
import { Layout } from '@/ui/components/layout/layout'

export default function DesignSystem() {
  return (
    <>
      <Seo
        title="Elements de design system Logos"
        description="Description..."
      />

      <Layout>
        <Container>
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
        </Container>
      </Layout>
    </>
  )
}
