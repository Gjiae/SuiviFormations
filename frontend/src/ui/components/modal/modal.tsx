import React from 'react'
import { IoCloseOutline } from "react-icons/io5";

interface Props {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export const Modal = ({ children, isOpen, onClose }: Props) => {

  if (!isOpen) return null
  return (
      <div className={`flex items-center absolute left-1/3 w-2/5 h-screen`}>
        <button className="text-dark absolute right-2 top-2" onClick={onClose}><IoCloseOutline size='1.5rem'/></button>
          {children}
      </div>
  )
}
