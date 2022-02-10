import { ROUTES } from '@constants'
import ButtonGroup, { ButtonGroupItem } from 'components/common/ButtonGroup'
import Header from 'components/common/Header'
import FormInfo from 'components/common/TourPlan/FormInfo'
import { Formik } from 'formik'
import { TourPlanInfoProps } from 'interfaces/TourPlan'
import React, { useState } from 'react'
import { TourPlanCreateContainer } from './styled'

const TourPlanCreate = () => {
  const [isTab, setIsTab] = useState<string>('ツアー情報')
  const initialValues: TourPlanInfoProps = {
    // 基本情報 - Basic info
    tour_name: '',
    order_date: '',
    start_date: '',
    start_time: '',
    overview: '',
    order_form: '直接',
    company_name: '',
    phone: '',
    email: '',
    remuneration: 0,
    price: 0,
    payment_date: '',
    method_payment: '',
    // ゲスト情報 - Guest info
    no_of_adults: 0,
    no_of_teens: 0,
    no_of_childs: 0,
    relation: '',
    diet: '',
    represent: '',
    gender: 'male',
    age: 0,
    country: '',
    contact_phone: '',
    contact_email: '',
    note: '',
    // スポット情報 - Plan info
    tour_start_time: '',
    tour_end_time: '',
    meeting_place: '',
    dissolution_place: '',
    events: [
      {
        id: 1,
        event_name: '',
        post_code: '',
        provinces: '',
        address1: '',
        address2: '',
        phone: '',
        reservation: false,
        start_time: '',
        end_time: '',
        content: '',
        transporation: [],
      },
    ],
  }

  return (
    <TourPlanCreateContainer>
      <Header showBtnBack title="新規ツアープランの追加" backTo={ROUTES.tour_plan.view} />
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
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log(values)
          actions.setSubmitting(false)
        }}
      >
        {(data) => {
          return <FormInfo tab={isTab} data={data.values} />
        }}
      </Formik>
    </TourPlanCreateContainer>
  )
}

export default TourPlanCreate
