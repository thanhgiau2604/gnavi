import Button from 'components/common/Button'
import { BUTTON_COLORS, FONT_SIZES } from '@constants'
import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import { TourPlanInfoProps } from 'interfaces/TourPlan'
import BasicInfo from 'components/informations/BasicInfo'
import GuestInfo from 'components/informations/GuestInfo'
import PlanInfo from 'components/informations/PlanInfo'
import ButtonGroup, { ButtonGroupItem } from 'components/common/ButtonGroup'
import { TourPlanFormInfoContainer } from './styled'

interface Props {
  data: TourPlanInfoProps
}

const TourPlanFormInfo: React.FC<Props> = ({ data }) => {
  const [isTab, setIsTab] = useState<string>('ツアー情報')

  return (
    <TourPlanFormInfoContainer>
      <ButtonGroup itemPerRow={3}>
        <ButtonGroupItem
          text="基本情報"
          handleClick={() => setIsTab('ツアー情報')}
          active={isTab === 'ツアー情報'}
        />
        <ButtonGroupItem
          text="ゲスト情報"
          handleClick={() => setIsTab('ゲスト情報')}
          active={isTab === 'ゲスト情報'}
        />
        <ButtonGroupItem
          text="スポット情報"
          handleClick={() => setIsTab('スポット情報')}
          active={isTab === 'スポット情報'}
        />
      </ButtonGroup>
      <Formik
        initialValues={data}
        onSubmit={(values, actions) => {
          console.log(values)
          actions.setSubmitting(false)
        }}
      >
        {({ values }) => {
          return (
            <Form>
              {isTab === 'ツアー情報' && <BasicInfo of="tour-plan" />}
              {isTab === 'ゲスト情報' && <GuestInfo />}
              {isTab === 'スポット情報' && <PlanInfo events={values.plan_info.events} />}
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
        }}
      </Formik>
    </TourPlanFormInfoContainer>
  )
}

export default TourPlanFormInfo
