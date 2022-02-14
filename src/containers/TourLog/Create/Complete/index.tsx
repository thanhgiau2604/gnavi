import { BUTTON_COLORS, FIELD_LABEL_WEIGHT, FONT_SIZES, ROUTES } from '@constants'
import Button from 'components/common/Button'
import Header from 'components/common/Header'
import { useRouter } from 'next/router'
import React from 'react'
import { Container } from 'styles/styled/layout/ContainerLayout'
import { TourLogCreateCompleteContainer } from './styled'

const TourLogCreateComplete: React.FC = () => {
  const router = useRouter()
  const handleRoute = (url: string) => {
    router.push(url)
  }

  return (
    <TourLogCreateCompleteContainer>
      <Header title="ツアーログの追加" showBtnBack backTo={ROUTES.home} />
      <Container padding="0 3rem">
        <h3 className="message">ツアーログを追加しました</h3>
        <Button
          title="ツアーログ一覧へ"
          buttonColor={BUTTON_COLORS.style07}
          fontWeight={FIELD_LABEL_WEIGHT.normal}
          margin="3.2rem 0 0 0"
          onClick={() => handleRoute(ROUTES.tour_log.view)}
        />
        <Button
          title="スキルチェックへ"
          buttonColor={BUTTON_COLORS.style06}
          radius={4}
          height={48}
          _fontSize={FONT_SIZES.small}
          fontWeight={FIELD_LABEL_WEIGHT.normal}
          margin="3.2rem 0 0 0"
          onClick={() => handleRoute(ROUTES.skill_check)}
        />
      </Container>
    </TourLogCreateCompleteContainer>
  )
}

export default TourLogCreateComplete
