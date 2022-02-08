import Button from 'components/common/Button'
import { buttonColors, fontSize } from 'constants/index'
import { Form } from 'formik'
import React from 'react'
import BasicInfo from './BasicInfo'
import GuestInfo from './GuestInfo'
import PlanInfo from './PlanInfo'

interface FormInfoProps {
  tab: string
}

const FormInfo: React.FC<FormInfoProps> = ({ tab }) => {
  return (
    <Form>
      {tab === 'ツアー情報' && <BasicInfo />}
      {tab === 'ゲスト情報' && <GuestInfo />}
      {tab === 'スポット情報' && <PlanInfo />}
      <div className="btn-submit">
        <Button
          title="保存する"
          type="submit"
          buttonColor={buttonColors.STYLE02}
          width={320}
          height={40}
          margin="0.8rem auto"
          _fontSize={fontSize.LARGE}
        />
      </div>
    </Form>
  )
}

export default FormInfo
