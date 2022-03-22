import React from 'react'
import Image from 'next/image'
import { ModalContainer, ModalHeader } from './styled'

interface ModalContainerProps {
  open: boolean
  title?: string
  onBack?: () => void
  onClose: () => void
  children: React.ReactNode
}

const Modal = ({ open, title, onBack, onClose, children }: ModalContainerProps) => {
  return (
    <ModalContainer displayModal={open}>
      <div className="content-container">
        <div className="content">
          <ModalHeader>
            {onBack && (
              <button type="button" className="btn-back" onClick={onBack}>
                <Image src="/images/arrow_back.png" alt="" width={100} height={100} />
              </button>
            )}
            {title && (
              <div className="title-container">
                <p className="text-title">{title}</p>
              </div>
            )}
            <button type="button" className="btn-close" onClick={onClose}>
              &times;
            </button>
          </ModalHeader>
          {children}
        </div>
      </div>
    </ModalContainer>
  )
}

export default Modal
