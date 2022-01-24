import React from 'react'
import Header from 'components/common/Header'
import { Container } from 'styles/styled/layout/ContainerLayout'
import TourPlanDetail from 'components/layout/TourPlan/Detail'

const TourPlan = () => {
  return (
    <div className="wrapper">
      <Header shadow showBtnBack title="マングローブSUPバラス島上陸" />
      <Container padding="0 2rem">
        <TourPlanDetail />
      </Container>
    </div>
  )
}

export default TourPlan
