import styled from 'styled-components'
import { ButtonColor } from 'interfaces/Button'

interface ButtonProps {
  radius?: number
  buttonColor?: ButtonColor
  fontWeight?: number
}

interface pProps {
  fontSize?: string
}

const ButtonContainer = styled.button<ButtonProps>`
  margin: 1.8rem auto auto auto;
  text-align: center;
  background-color: ${({ buttonColor }) => buttonColor && buttonColor.BGCOLOR};
  border-radius: ${({ radius }) => radius && `${radius}px`};
  color: ${({ buttonColor }) => buttonColor && buttonColor.COLOR};
  border: ${({ buttonColor }) => buttonColor && buttonColor.BORDER};
  font-weight: ${({ fontWeight }) => fontWeight};
  cursor: pointer;
`

const ButtonTitle = styled.p<pProps>`
  padding: 0.5rem 0.8rem;
  letter-spacing: 1.5px;
  font-size: ${({ fontSize }) => fontSize && fontSize};
`

export { ButtonContainer, ButtonTitle }
