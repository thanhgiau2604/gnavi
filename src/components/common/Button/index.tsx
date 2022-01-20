import React from 'react'
import { ButtonProps } from 'interfaces/Button'
import { buttonColors, fontSize } from 'constants/index'
import { ButtonContainer, ButtonTitle } from './styled'

const Button: React.FC<ButtonProps> = ({ title, ...rest }) => {
  const { radius, buttonColor, fontWeight, _fontSize } = rest
  return (
    <ButtonContainer
      onClick={rest.onClick}
      radius={radius}
      buttonColor={buttonColor}
      fontWeight={fontWeight}
      {...rest}
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
