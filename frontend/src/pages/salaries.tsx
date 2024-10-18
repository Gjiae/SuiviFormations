import { Layout } from '@/ui/components/layout/layout'
import { Seo } from '@/ui/components/seo'
import { EmployeeContent } from './salaries/Content'

export default function Salaries() {
  return (
    <>
      <Seo
        title="Salariés"
        description="Liste des salariés de l'entreprise avec les formations associées."
      />
      <div className="bg-bggray/50 min-h-screen">
        <Layout>
          <EmployeeContent />
        </Layout>
      </div>
    </>
  )
}
