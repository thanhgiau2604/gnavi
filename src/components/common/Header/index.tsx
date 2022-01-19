import React from 'react'
import { HeaderProps } from 'interfaces/Header'
import Image from 'next/image'
import { ImageContainer } from 'styles/styled/app/Image'
import { HeaderContainer, HeaderTitle } from './styled'

const Header = ({ title, showBtnBack, shadow, children }: HeaderProps) => {
  return (
    <div className="wrapper">
      <HeaderContainer shadow={shadow}>
        <div className={showBtnBack ? 'back-btn' : ''}>
          {showBtnBack ? (
            <ImageContainer width={24} height={24}>
              <Image src="/images/arrow_back.png" alt="" layout="fill" objectFit="contain" />
            </ImageContainer>
          ) : (
            <ImageContainer width={121} height={34}>
              <Image src="/images/logo.png" alt="logo" layout="fill" objectFit="contain" />
            </ImageContainer>
          )}
        </div>
        {title && <HeaderTitle>{title}</HeaderTitle>}
        {children}
      </HeaderContainer>
    </div>
  )
}

export default Header
