import styled from 'styled-components'
import { ButtonColor } from 'interfaces/Button'

interface ButtonProps {
  margin?: string
  width?: number | string
  height?: number | string
  radius?: number
  buttonColor?: ButtonColor
  fontWeight?: number
  _fontSize?: string
}

const setValue = (param: string | number): string => {
  if (typeof param === 'string') {
    // height
    if (param === 'auto') {
      return 'auto'
    }
    // width | height
    return param
  }
  // width | height
  return `calc(${param}rem / 10)`
}

const ButtonContainer = styled.button<ButtonProps>`
  text-align: center;
  margin: ${({ margin }) => margin && margin};
  width: ${({ width }) => width && setValue(width)};
  height: ${({ height }) => height && setValue(height)};
  background: ${({ buttonColor }) => buttonColor && buttonColor.bgColor};
  border-radius: ${({ radius }) => radius && `${radius}px`};
  color: ${({ buttonColor }) => buttonColor && buttonColor.color};
  border: ${({ buttonColor }) => buttonColor && buttonColor.border};
  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: ${({ _fontSize }) => _fontSize && _fontSize};
  padding: 0.5rem 0.8rem;
  cursor: pointer;
`

export { ButtonContainer }
