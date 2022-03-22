import React from 'react'
import { ROUTES } from '@constants'
import Header from 'components/common/Header'
import { Container } from 'styles/styled/layout/ContainerLayout'
import { TourLogContainer } from './styled'

const TourLog: React.FC = () => {
  return (
    <TourLogContainer>
      <Header title="新規ツアーログの追加" showBtnBack backTo={ROUTES.home} />
      <Container />
    </TourLogContainer>
  )
}

export default TourLog
