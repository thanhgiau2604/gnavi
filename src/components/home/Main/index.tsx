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
      <div className="home-main">
        <div className="home-info-wrapper">
          <div className="container">
            <div className="home-info">
              <FlexContainer justifyContent="space-between" alignItems="center" className="" full>
                <FlexContainer justifyContent="flex-start" alignItems="flex-end">
                  <ImageContainer width={96} height={96} className="profile-logo">
                    <Image
                      src="/images/no_avatar.svg"
                      alt="avatar"
                      layout="fill"
                      objectFit="contain"
                    />
                  </ImageContainer>
                  <div className="home-info-name">
                    <h2>旅行花子</h2>
                    <a href="/profile">プロフィールページへ</a>
                  </div>
                </FlexContainer>

                <ImageContainer width={12} height={20}>
                  <Image
                    src="/images/arrow_right.png"
                    alt="Picture"
                    layout="fill"
                    objectFit="contain"
                  />
                </ImageContainer>
              </FlexContainer>
            </div>
          </div>
        </div>
        <Menu />
        <FlexContainer justifyContent="center" alignItems="center" className="home-logout">
          <a href="#">ログアウト</a>
        </FlexContainer>
      </div>
    </HomeContainer>
  )
}

export default HomeMain
