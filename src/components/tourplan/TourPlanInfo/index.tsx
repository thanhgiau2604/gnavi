import React from 'react'
import { TourPlanInfoProps } from 'interfaces/TourPlan'
import TourPlanInfoBasic from './BasicInfo'
import TourPlanGuestInfo from './GuestInfo'
import TourPlanSpotInfo from './SpotInfo'
import { TourPlanInfoContainer } from './styled'

interface Props {
  tab: string
  data: TourPlanInfoProps
}

const TourPlanInfo: React.FC<Props> = ({ tab, data }) => {
  return (
    <TourPlanInfoContainer>
      {tab === '基本情報' && <TourPlanInfoBasic data={data.basic_info} />}
      {tab === 'ゲスト情報' && <TourPlanGuestInfo data={data.guest_info} />}
      {tab === 'スポット情報' && <TourPlanSpotInfo data={data.plan_info} />}
    </TourPlanInfoContainer>
  )
}

export default TourPlanInfo
