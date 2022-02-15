import { ROUTES } from '@constants'
import ButtonGroup, { ButtonGroupItem } from 'components/common/ButtonGroup'
import Header from 'components/common/Header'
import TourLogFormInfo from 'components/tourlog/TourLogFormInfo'
import { INIT_TOUR_LOG_FORM_VALUE } from 'constants/tour_log'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { TourLogCreateContainer } from './styled'

const TourLogCreate: React.FC = () => {
  const [isTab, setIsTab] = useState<string>('基本情報')

  return (
    <TourLogCreateContainer>
      <Header title="ツアーログの追加" showBtnBack backTo={ROUTES.tour_log.create.instruction} />
      <ButtonGroup itemPerRow={2}>
        <ButtonGroupItem
          text="基本情報"
          handleClick={() => setIsTab('基本情報')}
          active={isTab === '基本情報'}
        />
        <ButtonGroupItem
          text="振り返り"
          handleClick={() => setIsTab('振り返り')}
          active={isTab === '振り返り'}
        />
      </ButtonGroup>
      <Formik
        initialValues={INIT_TOUR_LOG_FORM_VALUE}
        onSubmit={(values, actions) => {
          console.log(values)
          actions.setSubmitting(false)
        }}
      >
        {({ values, setFieldValue }) => {
          return (
            <TourLogFormInfo
              tab={isTab}
              images={values.basic_info.images}
              setImages={setFieldValue}
            />
          )
        }}
      </Formik>
    </TourLogCreateContainer>
  )
}

export default TourLogCreate
