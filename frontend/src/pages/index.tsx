import { Layout } from '@/ui/components/layout/layout'
import { Seo } from '@/ui/components/seo'
import { HomepageContainer } from '@/ui/modules/homepage/homepage.container'

export default function Home() {
  return (
    <>
      <Seo
        title="Page d'accueil de l'application web de suivi des formations"
        description="Description..."
      />
      <Layout>
        <HomepageContainer />
      </Layout>
    </>
  )
}
