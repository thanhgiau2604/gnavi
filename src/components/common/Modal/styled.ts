import styled from 'styled-components'
import { Variables } from 'styles/styled/app/Variables'

interface ModalContainerProps {
  displayModal: boolean
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

  .section__content_container {
    margin: auto;
    width: 90%;
  }

  .section__content {
    background-color: ${Variables.colorWhite};
    border: 1px solid #888;
    border-radius: 8px;
    margin: 15px 0;
  }
`

export const ModalHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  height: 5rem;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
  }

  .btn__back {
    position: absolute;
    width: 1.2rem;
    height: 1.2rem;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
  }

  .section__title {
    width: 90%;
    font-weight: 700;
    font-size: 1.6rem;
    .p__text_title {
      text-align: center;
    }
  }

  .btn__close {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.4rem;
    padding: 0;
  }
`
