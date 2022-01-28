import Header from 'components/common/Header'
import Image from 'next/image'
import { ImageContainer } from 'styles/styled/app/Image'
import type { FC } from 'react'
import { MainSession, ContainerMain, InfoGuide, InfoGeneral, InfoGeneralList } from './styled'

const HomeMain: FC = () => {
  return (
    <MainSession>
      <Header shadow />
      <ContainerMain>
        <div className="container-main">
          <InfoGuide>
            <div className="info-guide-logo">
              <ImageContainer width={96} height={96}>
                <Image
                  src="/images/info_logo.png"
                  alt="Picture"
                  layout="fill"
                  objectFit="contain"
                />
              </ImageContainer>
            </div>
            <div className="info-guide-title">
              <div className="info-guide-text">
                <p className="home-title">旅行花子</p>
                <p className="home-text">プロフィールページへ</p>
              </div>
              <div className="info-guide-button">
                <ImageContainer width={12} height={20}>
                  <Image
                    src="/images/arrow_back.png"
                    alt="Picture"
                    layout="fill"
                    objectFit="contain"
                  />
                </ImageContainer>
              </div>
            </div>
          </InfoGuide>
          <InfoGeneral>
            <InfoGeneralList>
              <p>スキルチェック</p>
              <div className="info-guide-button">
                <ImageContainer width={12} height={20}>
                  <Image
                    src="/images/arrow_back.png"
                    alt="Picture"
                    layout="fill"
                    objectFit="contain"
                  />
                </ImageContainer>
              </div>
            </InfoGeneralList>
            <InfoGeneralList>
              <p>ツアープラン一覧</p>
              <div className="info-guide-button">
                <ImageContainer width={12} height={20}>
                  <Image
                    src="/images/arrow_back.png"
                    alt="Picture"
                    layout="fill"
                    objectFit="contain"
                  />
                </ImageContainer>
              </div>
            </InfoGeneralList>
            <InfoGeneralList>
              <p>ツアーログ</p>
              <div className="info-guide-button">
                <ImageContainer width={12} height={20}>
                  <Image
                    src="/images/arrow_back.png"
                    alt="Picture"
                    layout="fill"
                    objectFit="contain"
                  />
                </ImageContainer>
              </div>
            </InfoGeneralList>
          </InfoGeneral>
          <InfoGeneralList>
            <strong>お役立ち</strong>
          </InfoGeneralList>

          <InfoGeneral>
            <InfoGeneralList>
              <p>ガイドの知恵袋</p>
              <div className="info-guide-button">
                <ImageContainer width={12} height={20}>
                  <Image
                    src="/images/arrow_back.png"
                    alt="Picture"
                    layout="fill"
                    objectFit="contain"
                  />
                </ImageContainer>
              </div>
            </InfoGeneralList>
            <InfoGeneralList>
              <p>その他</p>
              <div className="info-guide-button">
                <ImageContainer width={12} height={20}>
                  <Image
                    src="/images/arrow_back.png"
                    alt="Picture"
                    layout="fill"
                    objectFit="contain"
                  />
                </ImageContainer>
              </div>
            </InfoGeneralList>
          </InfoGeneral>
          <InfoGeneralList>
            <strong>設定</strong>
          </InfoGeneralList>

          <InfoGeneral>
            <InfoGeneralList>
              <p>アカウント情報</p>
              <div className="info-guide-button">
                <ImageContainer width={12} height={20}>
                  <Image
                    src="/images/arrow_back.png"
                    alt="Picture"
                    layout="fill"
                    objectFit="contain"
                  />
                </ImageContainer>
              </div>
            </InfoGeneralList>
            <InfoGeneralList>
              <p>決済情報</p>
              <div className="info-guide-button">
                <ImageContainer width={12} height={20}>
                  <Image
                    src="/images/arrow_back.png"
                    alt="Picture"
                    layout="fill"
                    objectFit="contain"
                  />
                </ImageContainer>
              </div>
            </InfoGeneralList>
          </InfoGeneral>
          <InfoGeneral>
            <InfoGeneralList>
              <p>公開プロフィール検索</p>
              <div className="info-guide-button">
                <ImageContainer width={12} height={20}>
                  <Image
                    src="/images/arrow_back.png"
                    alt="Picture"
                    layout="fill"
                    objectFit="contain"
                  />
                </ImageContainer>
              </div>
            </InfoGeneralList>
          </InfoGeneral>
          <InfoGeneral>
            <InfoGeneralList>
              <p>プライバシーポリシー</p>
              <div className="info-guide-button">
                <ImageContainer width={12} height={20}>
                  <Image
                    src="/images/arrow_back.png"
                    alt="Picture"
                    layout="fill"
                    objectFit="contain"
                  />
                </ImageContainer>
              </div>
            </InfoGeneralList>
            <InfoGeneralList>
              <p>利用規約</p>
              <div className="info-guide-button">
                <ImageContainer width={12} height={20}>
                  <Image
                    src="/images/arrow_back.png"
                    alt="Picture"
                    layout="fill"
                    objectFit="contain"
                  />
                </ImageContainer>
              </div>
            </InfoGeneralList>
          </InfoGeneral>
          <InfoGeneral>
            <InfoGeneralList>
              <p>ログアウト</p>
            </InfoGeneralList>
          </InfoGeneral>
        </div>
      </ContainerMain>
    </MainSession>
  )
}

export default HomeMain
