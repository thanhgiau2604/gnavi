import React from 'react'
import { ButtonProps } from 'interfaces/Button'
import { BUTTON_COLORS, FONT_SIZES } from 'constants/index'
import { ButtonContainer } from './styled'

const Button: React.FC<ButtonProps> = ({ title, ...rest }) => {
  return <ButtonContainer {...rest}>{title}</ButtonContainer>
}

Button.defaultProps = {
  type: 'button',
  width: '100%',
  height: 'auto',
  radius: 2,
  buttonColor: buttonColors.STYLE01,
  fontWeight: 700,
  _fontSize: FONT_SIZES.medium,
  margin: '1.8rem auto auto auto',
}

export default Button
