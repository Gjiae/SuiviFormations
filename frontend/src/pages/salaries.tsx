import { Layout } from '@/ui/components/layout/layout'
import { Seo } from '@/ui/components/seo'
import { Button } from '@/ui/design-system/button'
import { EmployeeContainer } from '@/ui/modules/employee/employee.container'
import { FaPlus } from 'react-icons/fa6'
import { Modal } from '@/ui/components/modal/modal'
import { AddEmployeeContainer } from '@/ui/modules/employee/addEmployee/addEmployee.container'
import { useState } from 'react'

export default function Salaries() {

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Seo
        title="Salariés"
        description="Liste des salariés de l'entreprise avec les formations associées."
      />
      <div className="min-h-screen bg-bggray/50">
        <Layout>
          <EmployeeContainer />
          <Modal isOpen={modalOpen} onClose={closeModal}>
              <AddEmployeeContainer/>
          </Modal>
          <div className="fixed bottom-8 right-8 z-40">
            <Button variant="ico" icon={{ icon: FaPlus }} action={openModal}/>
          </div>
        </Layout>
      </div>
    </>
  )
}
