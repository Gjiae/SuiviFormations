import React, { useEffect, useState } from 'react'
import { useAlerts } from './alerts/alerts-context'
import { Button } from '@/ui/design-system/button'

export default function AlertTestForm() {
  const initialFormData = { severity: 'info', message: '', timeout: 0 }
  const [formData, setFormData] = useState(initialFormData)
  const { addAlert, clearAlerts } = useAlerts()

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    const { severity, message, timeout } = formData
    addAlert({ severity, message, timeout })
    //setFormData(initialFormData)
  }

  useEffect(() => {
    return () => {
      clearAlerts()
    }
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <label className="mt-6 block text-sm font-medium text-gray-900" htmlFor="severity">Alert severity</label>
      <select
        className="border-bordergray focus:ring-primary w-full rounded border p-3 font-light focus:outline-none focus:ring-1"
        onChange={handleChange} value={formData.severity} required name="severity"
        id="severity">
        <option value="info">Info</option>
        <option value="success">Success</option>
        <option value="warning">Warning</option>
        <option value="error">Error</option>
      </select>

      <label className="mt-6 block text-sm font-medium text-gray-900" htmlFor="message">Alert message</label>
      <input onChange={handleChange} value={formData.message}
             className="border-bordergray focus:ring-primary w-full rounded border p-3 font-light focus:outline-none focus:ring-1"
             type="text" name="message" id="message"
             required placeholder="Alert message" />

      <label className="mt-6 block text-sm font-medium text-gray-900" htmlFor="timeout">Timeout</label>
      <input onChange={handleChange} value={formData.timeout} min={0}
             className="border-bordergray focus:ring-primary w-full rounded border p-3 font-light focus:outline-none focus:ring-1"
             type="number" required
             name="timeout" id="timeout" placeholder="Auto dismiss (in seconds)" />

      <Button
        type="submit">Show alert
      </Button>
      <Button type="button"
              action={clearAlerts}>Clear alerts
      </Button>
    </form>
  )

};