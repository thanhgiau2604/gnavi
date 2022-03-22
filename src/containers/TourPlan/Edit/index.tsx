import React from 'react'
import { ROUTES, TOUR_PLAN_EDIT_FAKE_DATA } from '@constants'
import Header from 'components/common/Header'
import TourPlanFormInfo from 'components/tourplan/TourPlanFormInfo'
import { TourPlanEditContainer } from './styled'

const TourPlanEdit: React.FC = () => {
  return (
    <TourPlanEditContainer>
      <Header showBtnBack title="新規ツアープランの編集" backTo={ROUTES.tour_plan.view} />
      <TourPlanFormInfo data={TOUR_PLAN_EDIT_FAKE_DATA} />
    </TourPlanEditContainer>
  )
}

export default TourPlanEdit
