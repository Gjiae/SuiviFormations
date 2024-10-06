import { useState } from 'react'
import AlertTestForm from '@/ui/components/alert-test'
import { Layout } from '@/ui/components/layout/layout'
import { Button } from '@/ui/design-system/button'

function Alert() {
  const [showForm, setShowForm] = useState(true)

  return (
      <Layout>
        <main className="border-bordergray m-auto w-full min-w-fit max-w-sm rounded border">
          <Button
            action={() => setShowForm((prev) => !prev)}
            type="button">
            {showForm ? 'Cacher ' : 'Montrer '} le formulaire
          </Button>
          {showForm && <AlertTestForm />}
        </main>
      </Layout>
  )
}

export default Alert