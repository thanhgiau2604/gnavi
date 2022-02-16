import { ROUTES, TOUR_PLAN_EDIT_FAKE_DATA } from '@constants'
import ButtonGroup, { ButtonGroupItem } from 'components/common/ButtonGroup'
import Header from 'components/common/Header'
import TourPlanFormInfo from 'components/tourplan/TourPlanFormInfo'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { TourPlanEditContainer } from './styled'

const TourPlanEdit = () => {
  const [isTab, setIsTab] = useState<string>('ツアー情報')

  return (
    <TourPlanEditContainer>
      <Header showBtnBack title="新規ツアープランの編集" backTo={ROUTES.tour_plan.view} />
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
        initialValues={TOUR_PLAN_EDIT_FAKE_DATA}
        onSubmit={(values, actions) => {
          console.log(values)
          actions.setSubmitting(false)
        }}
      >
        {(data) => {
          return <TourPlanFormInfo tab={isTab} data={data.values} />
        }}
      </Formik>
    </TourPlanEditContainer>
  )
}

export default TourPlanEdit
