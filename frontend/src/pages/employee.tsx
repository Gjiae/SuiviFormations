import { Layout } from '@/ui/components/layout/layout'
import { Seo } from '@/ui/components/seo'
import { EmployeeContainer } from '@/ui/modules/employee/employee.container'

export default function Employee() {
  return (
    <>
      <Seo
        title="Salariés"
        description="Liste des salariés de l'entreprise avec les formations associées."
      />
      <div className="min-h-screen bg-bggray/50">
        <Layout>
          <EmployeeContainer />
        </Layout>
      </div>
    </>
  )
}
