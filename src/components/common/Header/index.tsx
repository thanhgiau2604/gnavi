import React from 'react'
import { HeaderProps } from 'interfaces/Header'
import Image from 'next/image'
import { HeaderContainer, HeaderTitle } from './styled'

const Header = ({ title, showLogo, shadow, children }: HeaderProps) => {
  return (
    <div className="wrapper">
      <HeaderContainer shadow={shadow}>
        <div>
          {showLogo ? (
            <Image src="/images/logo.png" alt="logo" width="121" height="34" />
          ) : (
            <Image src="/images/arrow_back.png" alt="" width="24" height="24" />
          )}
        </div>
        {title && <HeaderTitle>{title}</HeaderTitle>}
        {children}
      </HeaderContainer>
    </div>
  )
}

export default Header
