import { Layout } from '@/ui/components/layout/layout'
import { Seo } from '@/ui/components/seo'
import { ResetContainer } from '@/ui/modules/authentication/reset-password/reset.container'

export default function ResetPassword() {
  return (
    <>
      <Seo
        title="Mot de passe oublié"
        description="Formulaire permettant de retrouver son mot de passe"
      />
      <div className="min-h-screen bg-bggray/50">
        <Layout>
          <ResetContainer />
        </Layout>
      </div>
    </>
  )
}
