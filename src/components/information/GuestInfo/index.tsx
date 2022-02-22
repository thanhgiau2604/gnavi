import React from 'react'
import { FastField } from 'formik'
import { OPTIONS_GENDER } from '@constants'
import CustomInput from 'components/common/CustomFields/InputField'
import CustomSelect from 'components/common/CustomFields/SelectField'
import { Container } from 'styles/styled/layout/ContainerLayout'
import FlexContainer from 'styles/styled/layout/FlexLayout'
import { GuestInfoContainer } from './styled'

const GuestInfo: React.FC = () => {
  return (
    <Container padding="0 3rem">
      <GuestInfoContainer>
        <h3 className="title">ゲスト情報</h3>
        <p className="label">参加人数</p>
        <FlexContainer alignItems="center">
          <FastField
            name="guest_info.no_of_adults"
            component={CustomInput}
            label="大人"
            lbweight="normal"
            width={64}
            pb={46}
            type="number"
          />
          <p className="unit-people">人</p>
          <FastField
            name="guest_info.no_of_teens"
            component={CustomInput}
            label="小人"
            lbweight="normal"
            width={64}
            pb={46}
            type="number"
          />
          <p className="unit-people">人</p>
          <FastField
            name="guest_info.no_of_childs"
            component={CustomInput}
            label="幼児"
            lbweight="normal"
            width={64}
            pb={46}
            type="number"
          />
          <p className="unit-people">人</p>
        </FlexContainer>
        <FastField
          name="guest_info.relation"
          component={CustomInput}
          label="参加者同士の関係性"
          pb={39}
        />
        <FastField
          name="guest_info.diet"
          component={CustomInput}
          label="食事の制限"
          type="text-area"
          height={150}
          pb={35}
        />
        <FastField name="guest_info.represent" component={CustomInput} label="代表者" pb={41} />
        <FastField
          name="guest_info.gender"
          component={CustomSelect}
          label="性別"
          options={OPTIONS_GENDER}
          pb={41}
        />
        <FlexContainer alignItems="center">
          <FastField
            name="guest_info.age"
            component={CustomInput}
            label="年齢"
            type="number"
            width={64}
            pb={41}
          />
          <p className="unit unit-age">歳</p>
        </FlexContainer>
        <FastField name="guest_info.country" component={CustomInput} label="国籍" pb={41} />
        <FastField
          name="guest_info.contact_phone"
          component={CustomInput}
          label="連絡先電話番号"
          pb={41}
        />
        <FastField
          name="guest_info.contact_email"
          component={CustomInput}
          label="連絡メールアドレス"
          pb={41}
        />
        <FastField
          name="guest_info.note"
          component={CustomInput}
          label="メモ（希望など）"
          type="text-area"
          height={335}
          pb={76}
        />
      </GuestInfoContainer>
    </Container>
  )
}

export default GuestInfo
