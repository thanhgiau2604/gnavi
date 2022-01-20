import React from 'react'
import { ButtonProps } from 'interfaces/Button'
import { ButtonContainer, ButtonTitle } from './styled'

interface DefaultProps {
  type?: string
}

const defaultProps: DefaultProps = {
  type: 'button',
}

const Button: React.FC<ButtonProps & DefaultProps> = ({
  // eslint-disable-next-line
  type,
  radius,
  buttonColor,
  fontSize,
  fontWeight,
  title,
  handleClick,
}) => {
  const event = () => {
    // eslint-disable-next-line
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

Button.defaultProps = defaultProps

export default Button
