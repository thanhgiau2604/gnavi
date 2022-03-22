import React from 'react'
import { INIT_TOUR_PLAN_FORM_VALUE, ROUTES } from '@constants'
import Header from 'components/common/Header'
import TourPlanFormInfo from 'components/tourplan/TourPlanFormInfo'
import { TourPlanCreateContainer } from './styled'

const TourPlanCreate: React.FC = () => {
  return (
    <TourPlanCreateContainer>
      <Header showBtnBack title="新規ツアープランの追加" backTo={ROUTES.tour_plan.view} />
      <TourPlanFormInfo data={INIT_TOUR_PLAN_FORM_VALUE} />
    </TourPlanCreateContainer>
  )
}

export default TourPlanCreate
