import { Layout } from '@/ui/components/layout/layout'
import { Seo } from '@/ui/components/seo'
import { RegisterContainer } from '@/ui/modules/authentication/register/register.container'

export default function Inscription() {
  return (
    <>
      <Seo
        title="Inscription sur l'outil de suivi des formations"
        description="Page d'inscription du site"
      />
      <div className="min-h-screen bg-bggray/50">
        <Layout>
          <RegisterContainer />
        </Layout>
      </div>
    </>
  )
}
