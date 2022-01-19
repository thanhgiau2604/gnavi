import styled from 'styled-components'
import { ButtonColor } from 'interfaces/Button'

interface ButtonProps {
  width?: number
  height?: number
  radius: number
  buttonColor: ButtonColor
  fontWeight: number
}

interface pProps {
  fontSize: string
}

const ButtonContainer = styled.button<ButtonProps>`
  ${({ width }) => width && `width: ${width}px`};
  ${({ height }) => height && `width: ${height}px`};
  margin: auto;
  text-align: center;
  background-color: ${({ buttonColor }) => buttonColor.BGCOLOR};
  border-radius: ${({ radius }) => `${radius}px`};
  color: ${({ buttonColor }) => buttonColor.COLOR};
  border: ${({ buttonColor }) => buttonColor.BORDER};
  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: 62.5%;
  cursor: pointer;
`

const ButtonTitle = styled.p<pProps>`
  padding: 2px 8px;
  letter-spacing: 1.5px;
  font-size: ${({ fontSize }) => fontSize};
`

export { ButtonContainer, ButtonTitle }
