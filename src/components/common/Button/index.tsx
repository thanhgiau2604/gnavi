import React from 'react'
import { ButtonProps } from 'interfaces/Button'
import { ButtonContainer, ButtonTitle } from './styled'

const Button: React.FC<ButtonProps> = ({
  width,
  height,
  radius,
  color,
  fontSize,
  fontWeight,
  title,
  event,
}) => {
  return (
    <ButtonContainer
      width={width}
      height={height}
      radius={radius}
      color={color}
      fontWeight={fontWeight}
      onClick={() => event()}
    >
      <ButtonTitle fontSize={fontSize}>{title}</ButtonTitle>
    </ButtonContainer>
  )
}

export default Button
