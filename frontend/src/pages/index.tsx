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
      <div className="bg-bggray/50 min-h-screen">
        <Layout>
          <HomepageContainer />
        </Layout>
      </div>
    </>
  )
}
