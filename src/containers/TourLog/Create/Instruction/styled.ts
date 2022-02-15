import { FONT_SIZES } from '@constants'
import styled from 'styled-components'
import { Variables } from 'styles/styled/app/Variables'

const TourLogCreateInstructionContainer = styled.div`
  div[class*='ModalContainer'] {
    .option {
      font-size: ${FONT_SIZES.medium};
      margin: 3.1rem auto;
      input[type='radio'] {
        appearance: none;
        border-radius: 50%;
        outline: none;
        border: 2px solid ${Variables.color3};
        width: 2rem;
        height: 2rem;
        position: relative;
        :before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 70%;
          height: 70%;
          border-radius: 50%;
        }
        &:checked {
          border: 2px solid ${Variables.colorPrimary};
        }
        &:checked:before {
          background: ${Variables.colorPrimary};
        }
      }
      p {
        padding: 0 1.5rem 0.5rem 1.5rem;
      }
    }
  }
`

export { TourLogCreateInstructionContainer }
