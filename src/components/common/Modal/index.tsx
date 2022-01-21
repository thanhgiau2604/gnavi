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
      <div className="section__content_container">
        <div className="section__content">
          <ModalHeader>
            {onBack && (
              <button type="button" className="btn__back" onClick={onBack}>
                <Image src="/images/arrow_back.png" alt="" layout="fill" objectFit="contain" />
              </button>
            )}
            {title && (
              <div className="section__title">
                <p className="p__text_title">{title}</p>
              </div>
            )}
            <button type="button" className="btn__close" onClick={onClose}>
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
