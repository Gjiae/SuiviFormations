import { Layout } from '@/ui/components/layout/layout'
import { Seo } from '@/ui/components/seo'
import { EmpProfileContainer } from '@/ui/modules/employ_profile/empprofile.container'

export default function EmpProfile() {
  return (
    <>
      <Seo
        title="gestion du salarié"
        description="Page de gestion et de modification du salarié."
      />
      <div className="min-h-screen bg-bggray/50">
        <Layout>
          <EmpProfileContainer />
        </Layout>
      </div>
    </>
  )
}
