import Header from 'components/common/Header'
import Image from 'next/image'
import { ImageContainer } from 'styles/styled/app/Image'
import type { FC } from 'react'
import FlexContainer from 'styles/styled/layout/FlexLayout'
import { HomeContainer } from './styled'
import Menu from './Menu'

const HomeMain: FC = () => {
  return (
    <HomeContainer>
      <Header />
      <div className="profile-container">
        <FlexContainer
          justifyContent="space-between"
          alignItems="center"
          className="container profile"
        >
          <ImageContainer width={96} height={96} className="profile-logo">
            <Image src="/images/no_avatar.svg" alt="Picture" layout="fill" objectFit="contain" />
          </ImageContainer>
          <FlexContainer
            justifyContent="space-between"
            alignItems="center"
            className="profile-text"
          >
            <div>
              <h2>旅行花子</h2>
              <a href="/profile">プロフィールページへ</a>
            </div>

            <div className="info-guide-button">
              <ImageContainer width={12} height={20}>
                <Image
                  src="/images/arrow_right.png"
                  alt="Picture"
                  layout="fill"
                  objectFit="contain"
                />
              </ImageContainer>
            </div>
          </FlexContainer>
        </FlexContainer>
        <Menu />
        <FlexContainer justifyContent="center" alignItems="center" className="profile-logout">
          <a href="#">ログアウト</a>
        </FlexContainer>
        <div className="profile-line" />
      </div>
    </HomeContainer>
  )
}

export default HomeMain
