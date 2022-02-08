import CustomInput from 'components/common/CustomFields/InputField'
import CustomSelect from 'components/common/CustomFields/SelectField'
import { FastField } from 'formik'
import React from 'react'
import { Container } from 'styles/styled/layout/ContainerLayout'

const PlanInfo: React.FC = () => {
  return (
    <Container padding="0 3rem">
      <div className="guest-info">
        <h3 className="title">ツアー行程</h3>
        <FastField name="relation" component={CustomInput} label="参加者同士の関係性" />
        <FastField
          name="diet"
          component={CustomInput}
          label="食事の制限"
          type="text-area"
          height={150}
        />
        <FastField name="represent" component={CustomInput} label="代表者" />
        <FastField name="gender" component={CustomSelect} label="性別" />
        <FastField name="age" component={CustomInput} label="年齢" />
        <FastField name="country" component={CustomInput} label="国籍" />
        <FastField name="contactPhone" component={CustomInput} label="連絡先電話番号" />
        <FastField name="contactEmail" component={CustomInput} label="連絡メールアドレス" />
        <FastField
          name="note"
          component={CustomInput}
          label="メモ（希望など）"
          type="text-area"
          height={335}
        />
      </div>
    </Container>
  )
}

export default PlanInfo
