import React from 'react'
import { HeaderProps } from 'interfaces/Header'
import { HeaderContainer, HeaderTitle } from './styled'

const Header = ({ title, showLogo, shadow, children }: HeaderProps) => {
  return (
    <div className="wrapper">
      <HeaderContainer shadow={shadow}>
        <div>
          {showLogo ? (
            <img srcSet="/images/logo.png 2x" alt="logo" />
          ) : (
            <img className="back-icon" srcSet="/images/arrow_back.png 2x" alt="back-icon" />
          )}
        </div>
        {title && <HeaderTitle>{title}</HeaderTitle>}
        {children}
      </HeaderContainer>
    </div>
  )
}

export default Header
