import Image from 'next/image'
import React from 'react'
import { ImageContainer } from 'styles/styled/app/Image'
import { Container } from 'styles/styled/layout/ContainerLayout'
import FlexContainer from 'styles/styled/layout/FlexLayout'
import { CardTemplateComponent } from './styled'

const CardTemplate: React.FC = () => {
  return (
    <CardTemplateComponent>
      <Container padding="3rem 2rem 2.5rem 2rem">
        <div className="business-card">
          <FlexContainer justifyContent="space-between">
            <div className="info">
              <p className="position">チーフマネージャー</p>
              <h3 className="name">旅行 太郎</h3>
            </div>
            <div className="avatar">
              <ImageContainer width={69.92} height={67.12}>
                <Image src="/images/card_avatar.png" layout="fill" objectFit="contain" />
              </ImageContainer>
            </div>
          </FlexContainer>
          <div className="contact">
            <p className="phone">〒000-0000</p>
            <p className="address">東京都港区青山1-1-1</p>
            <p className="email">yokou@syo.co.jp</p>
          </div>
        </div>
      </Container>
    </CardTemplateComponent>
  )
}

export default CardTemplate
