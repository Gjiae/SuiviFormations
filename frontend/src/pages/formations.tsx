import { Layout } from '@/ui/components/layout/layout'
import { Seo } from '@/ui/components/seo'
import { FormationsContainer } from '@/ui/modules/formations/formations.container'
import { Button } from '@/ui/design-system/button'
import { FaPlus } from 'react-icons/fa6'

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
          <div className="fixed bottom-8 right-8 z-40">
            <Button variant="ico" icon={{ icon: FaPlus }} />
          </div>
        </Layout>
      </div>
    </>
  )
}
