import Button from 'components/common/Button'
import { BUTTON_COLORS, FONT_SIZES } from '@constants'
import { Form } from 'formik'
import React from 'react'
import { TourPlanInfoProps } from 'interfaces/TourPlan'
import BasicInfo from './BasicInfo'
import GuestInfo from './GuestInfo'
import PlanInfo from './PlanInfo'

interface FormInfoProps {
  tab: string
  data: TourPlanInfoProps
}

const FormInfo: React.FC<FormInfoProps> = ({ tab, data }) => {
  return (
    <Form>
      {tab === 'ツアー情報' && <BasicInfo />}
      {tab === 'ゲスト情報' && <GuestInfo />}
      {tab === 'スポット情報' && <PlanInfo events={data.events} />}
      <div className="btn-submit">
        <Button
          title="保存する"
          type="submit"
          buttonColor={BUTTON_COLORS.style02}
          width={320}
          height={40}
          margin="0.8rem auto"
          _fontSize={FONT_SIZES.large}
        />
      </div>
    </Form>
  )
}

export default FormInfo
