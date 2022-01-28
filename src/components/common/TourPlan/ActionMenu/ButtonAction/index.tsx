import React from 'react'
import { ImageContainer } from 'styles/styled/app/Image'
import Image from 'next/image'
import { ButtonActionProps } from 'interfaces/ButtonAction'
import { ButtonActionContainer } from './styled'

const ButtonAction: React.FC<ButtonActionProps> = ({ ...rest }) => {
  return (
    <ButtonActionContainer {...rest}>
      <ImageContainer width={16} height={4}>
        <Image src="/icons/more.svg" alt="" layout="fill" objectFit="fill" priority />
      </ImageContainer>
    </ButtonActionContainer>
  )
}

ButtonAction.defaultProps = {
  margin: 'auto',
}

export default ButtonAction
