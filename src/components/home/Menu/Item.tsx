import type { FC } from 'react'
import { ImageContainer } from 'styles/styled/app/Image'
import Image from 'next/image'
import FlexContainer from 'styles/styled/layout/FlexLayout'
import Link from 'next/link'
import { MenuItemProps } from 'interfaces/Home'
import { MenuItemContainer } from './styled'

const MenuItem: FC<MenuItemProps> = ({ option, redirectTo }) => {
  return (
    <MenuItemContainer>
      <div className="container">
        <FlexContainer
          justifyContent="space-between"
          alignItems="center"
          className="flex-container"
        >
          <Link href={redirectTo}>
            <a>{option}</a>
          </Link>
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
