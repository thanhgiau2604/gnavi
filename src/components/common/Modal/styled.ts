import styled from 'styled-components'
import { Variables } from 'styles/styled/app/Variables'

interface ModalContainerProps {
  displayModal?: boolean
}

export const ModalContainer = styled.div<ModalContainerProps>`
  display: ${({ displayModal }) => (displayModal ? 'flex' : 'none')};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
`

export const ModalContent = styled.div`
  background-color: ${Variables.colorWhite};
  margin: auto;a
  padding: 30px;
  border: 1px solid #888;
  border-radius: 10px;
  width: 60%;
`

export const ModalHeader = styled.div`
  padding: 10px;

  border-bottom: 1px solid rgb(202, 207, 211);
`
