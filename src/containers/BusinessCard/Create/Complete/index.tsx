import React from 'react'
import { BUTTON_COLORS, FIELD_LABEL_WEIGHT, FONT_SIZES, ROUTES } from '@constants'
import CardTemplate from 'components/business_card/CardTemplate'
import Button from 'components/common/Button'
import Header from 'components/common/Header'
import { Container } from 'styles/styled/layout/ContainerLayout'
import { BusinessCardCreateCompleteContainer } from './styled'

const BusinessCardCreateComplete = () => {
  return (
    <BusinessCardCreateCompleteContainer>
      <Header title="名刺作成" showBtnBack backTo={ROUTES.home} />
      <Container padding="0 1rem">
        <CardTemplate />
        <Container padding="0 2.5rem">
          <Button
            title="ダウンロードする"
            buttonColor={BUTTON_COLORS.style02}
            height={48}
            fontWeight={FIELD_LABEL_WEIGHT.bold}
            radius={4}
            _fontSize={FONT_SIZES.large}
            margin="5.2rem auto auto auto"
          />
        </Container>
      </Container>
    </BusinessCardCreateCompleteContainer>
  )
}

export default BusinessCardCreateComplete
