import React from 'react'
import { ImageContainer } from 'styles/styled/app/Image'
import Image from 'next/image'
import { ButtonActionContainer } from './styled'

interface ButtonActionProps {
  margin?: string
  state: boolean
  setState: React.Dispatch<React.SetStateAction<boolean>>
}

const ButtonAction: React.FC<ButtonActionProps> = ({ margin, state, setState }) => {
  const handleDropdownMenu = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation()
    setState(!state)
  }

  return (
    <ButtonActionContainer
      onClick={(e: React.MouseEvent<HTMLElement>) => handleDropdownMenu(e)}
      margin={margin}
    >
      <ImageContainer width={16} height={4}>
        <Image src="/images/more.png" alt="" layout="fill" objectFit="fill" priority />
      </ImageContainer>
    </ButtonActionContainer>
  )
}

ButtonAction.defaultProps = {
  margin: 'auto',
}

export default ButtonAction
