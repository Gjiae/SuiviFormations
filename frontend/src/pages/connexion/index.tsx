import { Layout } from '@/ui/components/layout/layout'
import { Seo } from '@/ui/components/seo'
import { LoginContainer } from '@/ui/modules/authentication/login/login.container'

export default function Connexion() {
  return (
    <>
      <Seo
        title="Connexion sur l'outil de suivi des formations"
        description="Page de connexion du site"
      />
      <div className="min-h-screen bg-bggray/50">
        <Layout>
          <LoginContainer />
        </Layout>
      </div>
    </>
  )
}
