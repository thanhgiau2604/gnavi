import { OPTIONS_GENDER } from '@constants'
import CustomInput from 'components/common/CustomFields/InputField'
import CustomSelect from 'components/common/CustomFields/SelectField'
import { FastField } from 'formik'
import React from 'react'
import { Container } from 'styles/styled/layout/ContainerLayout'
import FlexContainer from 'styles/styled/layout/FlexLayout'

const GuestInfo: React.FC = () => {
  return (
    <Container padding="0 3rem">
      <div className="guest-info">
        <h3 className="title">ゲスト情報</h3>
        <p className="label">参加人数</p>
        <FlexContainer alignItems="center">
          <FastField
            name="no_of_adults"
            component={CustomInput}
            label="大人"
            lbweight="normal"
            width={64}
            pb={46}
          />
          <p className="unit-people">人</p>
          <FastField
            name="no_of_teens"
            component={CustomInput}
            label="小人"
            lbweight="normal"
            width={64}
            pb={46}
          />
          <p className="unit-people">人</p>
          <FastField
            name="no_of_childs"
            component={CustomInput}
            label="幼児"
            lbweight="normal"
            width={64}
            pb={46}
          />
          <p className="unit-people">人</p>
        </FlexContainer>
        <FastField name="relation" component={CustomInput} label="参加者同士の関係性" pb={39} />
        <FastField
          name="diet"
          component={CustomInput}
          label="食事の制限"
          type="text-area"
          height={150}
          pb={35}
        />
        <FastField name="represent" component={CustomInput} label="代表者" pb={41} />
        <FastField
          name="gender"
          component={CustomSelect}
          label="性別"
          options={OPTIONS_GENDER}
          pb={41}
        />
        <FlexContainer alignItems="center">
          <FastField name="age" component={CustomInput} label="年齢" width={64} pb={41} />
          <p className="unit unit-age">歳</p>
        </FlexContainer>
        <FastField name="country" component={CustomInput} label="国籍" pb={41} />
        <FastField name="contact_phone" component={CustomInput} label="連絡先電話番号" pb={41} />
        <FastField
          name="contact_email"
          component={CustomInput}
          label="連絡メールアドレス"
          pb={41}
        />
        <FastField
          name="note"
          component={CustomInput}
          label="メモ（希望など）"
          type="text-area"
          height={335}
          pb={76}
        />
      </div>
    </Container>
  )
}

export default GuestInfo
