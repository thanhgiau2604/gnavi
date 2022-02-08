import Header from 'components/common/Header'
import Image from 'next/image'
import { ImageContainer } from 'styles/styled/app/Image'
import type { FC } from 'react'
import FlexContainer from 'styles/styled/layout/FlexLayout'
import Button from 'components/common/Button'
import { buttonColors, fontSize } from 'constants/index'
import { HomeMainSection } from './styled'
import Menu from '../Menu'

const HomeMain: FC = () => {
  return (
    <HomeMainSection>
      <Header shadow />
      <div className="home-main">
        <div className="home-info-wrapper">
          <div className="home-info container">
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
        <Menu />
        <Button
          title="ログアウト"
          buttonColor={buttonColors.STYLE05}
          radius={0}
          _fontSize={fontSize.MEDIUM}
          fontWeight={400}
          margin="4rem 0 0"
          height={48}
          width="100%"
        />
      </div>
    </HomeMainSection>
  )
}

export default HomeMain
