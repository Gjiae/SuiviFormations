import React, { useEffect } from 'react'
import { Button } from '@/ui/design-system/button'

interface Props {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export const Modal = ({ children, isOpen, onClose }: Props) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
  }, [onClose])
  if (!isOpen) return null
  return (
    <>
      <div className="display-flex justify-center items-center">
        <div>
          <Button action={onClose}>Fermer</Button>
          {children}
        </div>
      </div>
    </>
  )
}
