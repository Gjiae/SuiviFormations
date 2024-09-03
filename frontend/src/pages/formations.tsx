import { Layout } from '@/ui/components/layout/layout'
import { Seo } from '@/ui/components/seo'
import { FormationsContainer } from '@/ui/modules/formations/formations.container'

export default function Formations() {
  return (
    <>
      <Seo
        title="Formations"
        description="Liste des formations disponibles dans l'entreprise."
      />
      <div className="min-h-screen bg-bggray/50">
        <Layout>
          <FormationsContainer />
        </Layout>
      </div>
    </>
  )
}
