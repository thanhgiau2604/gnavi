import CustomDate from 'components/common/CustomFields/DateField'
import CustomInput from 'components/common/CustomFields/InputField'
import CustomSelect from 'components/common/CustomFields/SelectField'
import { FastField } from 'formik'
import React from 'react'
import { Container } from 'styles/styled/layout/ContainerLayout'

const BasicInfo: React.FC = () => {
  return (
    <Container padding="0 3rem">
      <div className="basic-info">
        <h3 className="title">ツアー情報</h3>
        <FastField name="tourName" component={CustomInput} label="ツアー名（テーマ）" />
        <FastField name="orderDate" component={CustomDate} label="受注日" />
        <FastField name="startDate" component={CustomDate} label="催行日" />
        <FastField name="startTime" component={CustomInput} label="催行時間" />
        <FastField
          name="overview"
          component={CustomInput}
          label="概要"
          type="text-area"
          height={200}
        />
        <FastField name="orderForm" component={CustomSelect} label="催行時間" />
        <FastField name="companyName" component={CustomInput} label="会社名" />
        <FastField name="phone" component={CustomInput} label="電話番号" />
      </div>
    </Container>
  )
}

export default BasicInfo
