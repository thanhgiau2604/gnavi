import { ButtonReactionProps } from 'interfaces/ButtonReaction'
import Image from 'next/image'
import React, { useState } from 'react'
import { ImageContainer } from 'styles/styled/app/Image'
import { ButtonReactionContainer } from './styled'

const ButtonReaction: React.FC<ButtonReactionProps> = ({ theme, ...rest }) => {
  const [active, setActive] = useState<boolean>(false)
  const [src, setSrc] = useState<string>(theme.src)
  const handleActive = () => {
    // un-react
    if (active) {
      setSrc(theme.src)
    }
    // react
    else {
      setSrc(theme.activeSrc)
    }
    setActive(!active)
  }

  return (
    <ButtonReactionContainer onClick={() => handleActive()} {...rest}>
      <ImageContainer width={20} height={18}>
        <Image src={src} alt="reaction" layout="fill" objectFit="contain" />
      </ImageContainer>
    </ButtonReactionContainer>
  )
}

export default ButtonReaction
