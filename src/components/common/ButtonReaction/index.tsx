import { ButtonReactionProps } from 'interfaces/ButtonReaction'
import Image from 'next/image'
import React, { useState } from 'react'
import { ImageContainer } from 'styles/styled/app/Image'
import { ButtonReactionContainer } from './styled'

const ButtonReaction: React.FC<ButtonReactionProps> = ({ id, theme, ...rest }) => {
  const [active, setActive] = useState<boolean>(false)
  const [src, setSrc] = useState<string>(theme.src)
  const handleActive = (e: React.MouseEvent<HTMLElement>, ID: string | number) => {
    e.stopPropagation()
    // un-react
    if (active) {
      setSrc(theme.src)
    }
    // react
    else {
      setSrc(theme.activeSrc)
    }
    setActive(!active)
    console.log(ID)
  }

  return (
    <ButtonReactionContainer
      onClick={(e: React.MouseEvent<HTMLElement>) => handleActive(e, id)}
      {...rest}
    >
      <ImageContainer width={20} height={18}>
        <Image src={src} alt="reaction" layout="fill" objectFit="contain" />
      </ImageContainer>
    </ButtonReactionContainer>
  )
}

export default ButtonReaction
