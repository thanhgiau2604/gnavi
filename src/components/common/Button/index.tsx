import React from 'react'
import { ButtonColor, ButtonProps } from 'interfaces/Button'
import { buttonColors, fontSize } from 'constants/index'
import { ButtonContainer, ButtonTitle } from './styled'

interface DefaultProps {
  type?: string
  radius?: number
  buttonColor?: ButtonColor
  fontWeight?: number
  _fontSize?: string
}

const Button: React.FC<ButtonProps & DefaultProps> = ({ title, ...rest }) => {
  const { radius, buttonColor, fontWeight, _fontSize } = rest
  return (
    <ButtonContainer
      onClick={rest.onClick}
      radius={radius}
      buttonColor={buttonColor}
      fontWeight={fontWeight}
    >
      <ButtonTitle fontSize={_fontSize}>{title}</ButtonTitle>
    </ButtonContainer>
  )
}

Button.defaultProps = {
  type: 'button',
  radius: 2,
  buttonColor: buttonColors.STYLE01,
  fontWeight: 400,
  _fontSize: fontSize.MEDIUM,
}

export default Button
