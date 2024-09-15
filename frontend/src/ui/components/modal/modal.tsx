import React, { useEffect } from 'react'

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
      <div className="fixed mt-32 left-1/3 w-2/5">
          {children}
      </div>
  )
}
