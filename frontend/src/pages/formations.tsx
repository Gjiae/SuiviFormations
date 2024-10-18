import { Layout } from '@/ui/components/layout/layout'
import { Seo } from '@/ui/components/seo'
import { FormationsContent } from '@/pages/formations/Content'

export default function Formations() {
  return (
    <>
      <Seo
        title="Formations"
        description="Liste des formations disponibles dans l'entreprise."
      />
      <div className="bg-bggray/50 min-h-screen">
        <Layout>
          <FormationsContent/>
        </Layout>
      </div>
    </>
  )
}
