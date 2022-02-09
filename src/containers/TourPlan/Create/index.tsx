import ButtonGroup, { ButtonGroupItem } from 'components/common/ButtonGroup'
import Header from 'components/common/Header'
import FormInfo from 'components/common/TourPlan/FormInfo'
import { Formik } from 'formik'
import React from 'react'
import { TourPlanCreateContainer } from './styled'

const TourPlanCreate = () => {
  const [isTab, setIsTab] = React.useState<string>('ツアー情報')
  const initialValues = {
    // 基本情報 - Basic info
    tourName: '',
    orderDate: '',
    startDate: '',
    startTime: '',
    overview: '',
    orderForm: '直接',
    companyName: '',
    phone: '',
    email: '',
    remuneration: 0,
    price: 0,
    paymentDate: '',
    methodPayment: '',
    // ゲスト情報 - Guest info
    noOfAdults: 0,
    noOfTeens: 0,
    noOfChilds: 0,
    relation: '',
    diet: '',
    represent: '',
    gender: 'male',
    age: 0,
    country: '',
    contactPhone: '',
    contactEmail: '',
    note: '',
    // スポット情報 - Plan info
    tourStartTime: '',
    tourEndTime: '',
    meetingPlace: '',
    dissolutionPlace: '',
    events: [
      {
        id: 1,
        eventName: '',
        postCode: '',
        provinces: '',
        address1: '',
        address2: '',
        phone: '',
        reservation: false,
        startTime: '',
        endTime: '',
        content: '',
        transporation: [],
      },
    ],
  }

  return (
    <TourPlanCreateContainer>
      <Header showBtnBack title="新規ツアープランの追加" backTo="/tourplan" />
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
        {() => {
          return <FormInfo tab={isTab} />
        }}
      </Formik>
    </TourPlanCreateContainer>
  )
}

export default TourPlanCreate
