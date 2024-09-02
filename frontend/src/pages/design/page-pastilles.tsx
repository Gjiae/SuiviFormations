import { Seo } from '@/ui/components/seo'
import { Typography } from '@/ui/design-system/typography'
import { Container } from '@/ui/components/container'
import { FaBell } from 'react-icons/fa6'
import { Layout } from '@/ui/components/layout/layout'
import { Pastille } from '@/ui/design-system/pastilles'

export default function DesignSystem() {
  return (
    <>
      <Seo
        title="Elements de design system Pastilles"
        description="Description..."
      />

      <Layout>
        <Container>
          {/*Pastilles*/}
          <div className="space-y-2">
            <Typography variant="h1">Pastilles</Typography>
            <div className="flex flex-col gap-2 p-5 border border-darkgray divide-y-2 divide-darkgray rounded">
              <div className="">
                <div className="flex items-center gap-4 p-10">
                  <Pastille
                    iconTheme="basique"
                    size="small"
                    icon={{ icon: FaBell }}
                  />
                  <Pastille
                    iconTheme="secondary"
                    size="small"
                    icon={{ icon: FaBell }}
                  />
                  <Pastille
                    iconTheme="gray"
                    size="small"
                    icon={{ icon: FaBell }}
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  )
}
