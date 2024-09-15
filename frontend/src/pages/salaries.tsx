import { Layout } from '@/ui/components/layout/layout'
import { Seo } from '@/ui/components/seo'
import { Button } from '@/ui/design-system/button'
import { EmployeeContainer } from '@/ui/modules/employee/employee.container'
import { FaPlus } from 'react-icons/fa6'
import { Modal } from '@/ui/components/modal/modal'
import { Box } from '@/ui/design-system/box'
import { AddEmployeeContainer } from '@/ui/modules/employee/addEmployee/addEmployee.container'

export default function Salaries() {
  return (
    <>
      <Seo
        title="Salariés"
        description="Liste des salariés de l'entreprise avec les formations associées."
      />
      <div className="min-h-screen bg-bggray/50">
        <Layout>
          <EmployeeContainer />
          <Modal isOpen={true} onClose={() => alert(222)}>
              <AddEmployeeContainer/>
          </Modal>
          <div className="fixed bottom-8 right-8 z-40">
            <Button variant="ico" icon={{ icon: FaPlus }} />
          </div>
        </Layout>
      </div>
    </>
  )
}
