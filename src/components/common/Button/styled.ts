import styled from 'styled-components'
import { ButtonColor } from 'interfaces/Button'

interface ButtonProps {
  width?: number | string
  height?: number | string
  radius?: number
  buttonColor?: ButtonColor
  fontWeight?: number
  _fontSize?: string
}

const ButtonContainer = styled.button<ButtonProps>`
  text-align: center;
  width: ${({ width }) => (width && width === 'full' ? '100%' : width)};
  height: ${({ height }) => height && height};
  background-color: ${({ buttonColor }) => buttonColor && buttonColor.BGCOLOR};
  border-radius: ${({ radius }) => radius && `${radius}px`};
  color: ${({ buttonColor }) => buttonColor && buttonColor.COLOR};
  border: ${({ buttonColor }) => buttonColor && buttonColor.BORDER};
  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: ${({ _fontSize }) => _fontSize && _fontSize};
  padding: 0.5rem 0.8rem;
  cursor: pointer;
`

export { ButtonContainer }
