import type { FC } from 'react'
import { ImageContainer } from 'styles/styled/app/Image'
import Image from 'next/image'
import FlexContainer from 'styles/styled/layout/FlexLayout'
import Link from 'next/link'
import { MenuItemContainer } from './styled'

interface MenuItemsProps {
  option: string
  redirectTo: string
}

const MenuItems: FC<MenuItemsProps> = ({ option, redirectTo }) => {
  return (
    <MenuItemContainer>
      <FlexContainer justifyContent="space-between" className="container item-container">
        <Link href={redirectTo}>
          <a className="text">{option}</a>
        </Link>
        <div className="info-guide-button">
          <ImageContainer width={12} height={20}>
            <Image src="/images/arrow_right.png" alt="Picture" layout="fill" objectFit="contain" />
          </ImageContainer>
        </div>
      </FlexContainer>
    </MenuItemContainer>
  )
}

export default MenuItems
