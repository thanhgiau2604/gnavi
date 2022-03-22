import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { HeaderProps } from 'interfaces/Header'
import { ImageContainer } from 'styles/styled/app/Image'
import FlexContainer from 'styles/styled/layout/FlexLayout'
import { HeaderContainer, HeaderTitle } from './styled'

const Header = ({ title, showBtnBack, shadow, backTo, btnBackTitle, children }: HeaderProps) => {
  const router = useRouter()
  const handleNavigateBack = () => backTo && router.push(backTo)

  return (
    <HeaderContainer shadow={shadow}>
      <div className={showBtnBack ? 'back-btn' : ''}>
        {showBtnBack ? (
          <FlexContainer>
            <ImageContainer width={24} height={24} onClick={handleNavigateBack}>
              <Image src="/images/arrow_back.png" alt="" layout="fill" objectFit="contain" />
            </ImageContainer>
            {btnBackTitle && <h4 className="back-btn-title">{btnBackTitle}</h4>}
          </FlexContainer>
        ) : (
          <ImageContainer width={121} height={34}>
            <Image src="/images/logo.png" alt="logo" layout="fill" objectFit="contain" />
          </ImageContainer>
        )}
      </div>
      {title && <HeaderTitle>{title}</HeaderTitle>}
      {children}
    </HeaderContainer>
  )
}

export default Header
