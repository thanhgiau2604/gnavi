import type { FC } from 'react'
import { ImageContainer } from 'styles/styled/app/Image'
import Image from 'next/image'
import FlexContainer from 'styles/styled/layout/FlexLayout'
import { MenuItemProps } from 'interfaces/Home'
import { useRouter } from 'next/router'
import { MenuItemContainer } from './styled'

const MenuItem: FC<MenuItemProps> = ({ option, redirectTo }) => {
  const route = useRouter()
  return (
    <MenuItemContainer onClick={() => route.push(redirectTo)}>
      <div className="container">
        <FlexContainer
          justifyContent="space-between"
          alignItems="center"
          className="flex-container"
        >
          <p className="menu-item-title">{option}</p>
          <div className="info-guide-button">
            <ImageContainer width={12} height={20}>
              <Image src="/images/arrow_right.png" alt="" layout="fill" objectFit="contain" />
            </ImageContainer>
          </div>
        </FlexContainer>
      </div>
    </MenuItemContainer>
  )
}

export default MenuItem
