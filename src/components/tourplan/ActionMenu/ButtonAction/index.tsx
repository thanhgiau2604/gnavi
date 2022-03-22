import React from 'react'
import Image from 'next/image'
import { ButtonActionProps } from 'interfaces/ButtonAction'
import { ImageContainer } from 'styles/styled/app/Image'
import { ButtonActionContainer } from './styled'

const ButtonAction: React.FC<ButtonActionProps> = ({ ...rest }) => {
  const myLoader = ({ src, width, quality }: any) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }
  return (
    <ButtonActionContainer {...rest}>
      <ImageContainer width={16} height={4}>
        <Image
          loader={myLoader}
          src="/icons/more.svg"
          alt=""
          layout="fill"
          objectFit="fill"
          priority
        />
      </ImageContainer>
    </ButtonActionContainer>
  )
}

ButtonAction.defaultProps = {
  margin: 'auto',
}

export default ButtonAction
