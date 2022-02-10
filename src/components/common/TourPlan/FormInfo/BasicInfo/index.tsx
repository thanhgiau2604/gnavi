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
        <FastField name="tour_name" component={CustomInput} label="ツアー名（テーマ" pb={34} />
        <FastField name="order_date" component={CustomDate} label="受注日" pb={34} />
        <FastField name="start_date" component={CustomDate} label="催行日" pb={34} />
        <FastField name="start_time" component={CustomInput} label="催行時間" pb={34} />
        <FastField
          name="overview"
          component={CustomInput}
          label="概要"
          type="text-area"
          height={200}
          pb={34}
        />
        <h3 className="title">依頼元情報</h3>
        <FastField
          name="order_form"
          component={CustomSelect}
          label="受注形態"
          options={orderFormOptions}
          pb={34}
        />
        <FastField name="company_name" component={CustomInput} label="会社名" pb={34} />
        <FastField name="phone" component={CustomInput} label="電話番号" pb={34} />
        <FastField name="email" component={CustomInput} label="メールアドレス" pb={34} />
        <FlexContainer alignItems="center">
          <FastField
            name="remuneration"
            component={CustomInput}
            label="報酬"
            type="number"
            pb={34}
          />
          <p className="unit unit-currency">円</p>
        </FlexContainer>
        <FlexContainer alignItems="center">
          <FastField name="price" component={CustomInput} label="経費" type="number" pb={34} />
          <p className="unit unit-currency">円</p>
        </FlexContainer>
        <FastField name="payment_date" component={CustomDate} label="入金日" pb={34} />
        <FastField name="method_payment" component={CustomInput} label="支払い方法" />
      </div>
    </Container>
  )
}

export default BasicInfo
