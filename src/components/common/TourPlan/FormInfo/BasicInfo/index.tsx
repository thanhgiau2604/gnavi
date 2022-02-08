import CustomDate from 'components/common/CustomFields/DateField'
import CustomInput from 'components/common/CustomFields/InputField'
import CustomSelect from 'components/common/CustomFields/SelectField'
import { FastField } from 'formik'
import { OptionProps } from 'interfaces/CustomField'
import React from 'react'
import { Container } from 'styles/styled/layout/ContainerLayout'
import FlexContainer from 'styles/styled/layout/FlexLayout'

const BasicInfo: React.FC = () => {
  const orderFormOptions: OptionProps[] = [
    {
      value: '直接',
      label: '直接',
    },
  ]

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
        <h3 className="title">依頼元情報</h3>
        <FastField
          name="orderForm"
          component={CustomSelect}
          label="受注形態"
          options={orderFormOptions}
        />
        <FastField name="companyName" component={CustomInput} label="会社名" />
        <FastField name="phone" component={CustomInput} label="電話番号" />
        <FastField name="email" component={CustomInput} label="メールアドレス" />
        <FlexContainer alignItems="center">
          <FastField name="remuneration" component={CustomInput} label="報酬" />
          <p className="unit-currency">円</p>
        </FlexContainer>
        <FlexContainer alignItems="center">
          <FastField name="price" component={CustomInput} label="経費" />
          <p className="unit-currency">円</p>
        </FlexContainer>
        <FastField name="paymentDate" component={CustomDate} label="入金日" />
        <FastField name="methodPayment" component={CustomInput} label="支払い方法" />
      </div>
    </Container>
  )
}

export default BasicInfo
