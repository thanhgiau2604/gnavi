import CustomInput from 'components/common/CustomFields/InputField'
import CustomSelect from 'components/common/CustomFields/SelectField'
import { FastField } from 'formik'
import { OptionProps } from 'interfaces/CustomField'
import React from 'react'
import { Container } from 'styles/styled/layout/ContainerLayout'
import FlexContainer from 'styles/styled/layout/FlexLayout'

const GuestInfo: React.FC = () => {
  const genderOptions: OptionProps[] = [
    {
      value: 'male',
      label: '男性',
    },
    {
      value: 'female',
      label: '女性',
    },
    {
      value: 'others',
      label: 'その他',
    },
  ]

  return (
    <Container padding="0 3rem">
      <div className="guest-info">
        <h3 className="title">ゲスト情報</h3>
        <p className="no">参加人数</p>
        <FlexContainer alignItems="center">
          <FastField
            name="noOfAdults"
            component={CustomInput}
            label="大人"
            lbweight="normal"
            width={64}
          />
          <p className="unit-people">人</p>
          <FastField
            name="noOfTeens"
            component={CustomInput}
            label="小人"
            lbweight="normal"
            width={64}
          />
          <p className="unit-people">人</p>
          <FastField
            name="noOfChilds"
            component={CustomInput}
            label="幼児"
            lbweight="normal"
            width={64}
          />
          <p className="unit-people">人</p>
        </FlexContainer>
        <FastField name="relation" component={CustomInput} label="参加者同士の関係性" />
        <FastField
          name="diet"
          component={CustomInput}
          label="食事の制限"
          type="text-area"
          height={150}
        />
        <FastField name="represent" component={CustomInput} label="代表者" />
        <FastField name="gender" component={CustomSelect} label="性別" options={genderOptions} />
        <FlexContainer alignItems="center">
          <FastField name="age" component={CustomInput} label="年齢" width={64} />
          <p className="unit-age">歳</p>
        </FlexContainer>
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

export default GuestInfo
