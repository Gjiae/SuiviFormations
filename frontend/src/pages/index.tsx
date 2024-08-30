import { Navigation } from '@/ui/components/navigation/navigation'
import { Footer } from '@/ui/components/navigation/footer'
import { Layout } from '@/ui/components/layout/layout'
import { Seo } from '@/ui/components/seo'

export default function Home() {
  return (
    <>
      <Seo
        title="Page d'accueil de l'application web de suivi des formations"
        description="Description..."
      />
      <Layout>Hello World</Layout>
    </>
  )
}
