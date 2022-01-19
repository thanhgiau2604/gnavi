import React from 'react'
import { ModalContainer, ModalContent, ModalHeader } from './styled'

interface ModalContainerProps {
  open: boolean
  changeOpen: React.Dispatch<React.SetStateAction<boolean>>
  children: React.ReactNode
}

const Modal = ({ open, changeOpen, children }: ModalContainerProps) => {
  return (
    <ModalContainer displayModal={open} className="fadeIn">
      <ModalContent>
        <ModalHeader>
          <p>Title</p>
          <button type="button" onClick={() => changeOpen(false)}>
            &times;
          </button>
        </ModalHeader>
        {children}
      </ModalContent>
    </ModalContainer>
  )
}

export default Modal
