import { BUTTON_COLORS, FIELD_LABEL_WEIGHT, FONT_SIZES, ROUTES } from '@constants'
import Button from 'components/common/Button'
import Header from 'components/common/Header'
import React from 'react'
import { Container } from 'styles/styled/layout/ContainerLayout'
import { BusinessCardCreateInstructionContainer } from './styled'

const BusinessCardCreateInstruction = () => {
  return (
    <BusinessCardCreateInstructionContainer>
      <Header title="名刺作成" showBtnBack backTo={ROUTES.home} />
      <Container padding="0 2rem">
        <Button
          title="テンプレートから作成"
          buttonColor={BUTTON_COLORS.style09}
          height={48}
          fontWeight={FIELD_LABEL_WEIGHT.normal}
          radius={4}
          _fontSize={FONT_SIZES.large}
          margin="5.2rem auto"
        />
        <Button
          title="保存した名刺から作成"
          buttonColor={BUTTON_COLORS.style09}
          height={48}
          fontWeight={FIELD_LABEL_WEIGHT.normal}
          radius={4}
          _fontSize={FONT_SIZES.large}
          margin="auto"
        />
      </Container>
    </BusinessCardCreateInstructionContainer>
  )
}

export default BusinessCardCreateInstruction
