import React from 'react'
import { ButtonProps } from 'interfaces/Button'
import { buttonColors, fontSize } from 'constants/index'
import { ButtonContainer } from './styled'

const Button: React.FC<ButtonProps> = ({ title, ...rest }) => {
  return <ButtonContainer {...rest}>{title}</ButtonContainer>
}

Button.defaultProps = {
  type: 'button',
  width: 'full',
  height: 'auto',
  radius: 2,
  buttonColor: buttonColors.STYLE01,
  fontWeight: 400,
  _fontSize: fontSize.MEDIUM,
}

export default Button
