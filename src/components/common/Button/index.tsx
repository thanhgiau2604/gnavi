import React from 'react'
import { ButtonProps } from 'interfaces/Button'
import { ButtonContainer, ButtonTitle } from './styled'

const Button: React.FC<ButtonProps> = ({
  radius,
  buttonColor,
  fontSize,
  fontWeight,
  title,
  handleClick,
}) => {
  const event = () => {
    handleClick && handleClick()
  }
  return (
    <ButtonContainer
      radius={radius}
      buttonColor={buttonColor}
      fontWeight={fontWeight}
      onClick={() => event()}
    >
      <ButtonTitle fontSize={fontSize}>{title}</ButtonTitle>
    </ButtonContainer>
  )
}

export default Button
