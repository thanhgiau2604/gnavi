import { ButtonReactionProps } from 'interfaces/ButtonReaction'
import Image from 'next/image'
import React from 'react'
import { ImageContainer } from 'styles/styled/app/Image'
import { ButtonReactionContainer } from './styled'

const ButtonReaction: React.FC<ButtonReactionProps> = ({ theme, active, ...rest }) => {
  return (
    <ButtonReactionContainer {...rest}>
      <ImageContainer width={20} height={18}>
        <Image
          src={active ? theme.activeSrc : theme.src}
          alt="reaction"
          layout="fill"
          objectFit="contain"
        />
      </ImageContainer>
    </ButtonReactionContainer>
  )
}

export default ButtonReaction
