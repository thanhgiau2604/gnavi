import Button from 'components/common/Button'
import CustomCheckBox from 'components/common/CustomFields/CheckboxField'
import CustomInput from 'components/common/CustomFields/InputField'
import CustomSelect from 'components/common/CustomFields/SelectField'
import { CHECKBOX_THEME, BUTTON_COLORS } from '@constants'
import { FastField } from 'formik'
import React from 'react'
import { Container } from 'styles/styled/layout/ContainerLayout'
import FlexContainer, { FlexItem } from 'styles/styled/layout/FlexLayout'

const PlanInfo: React.FC = () => {
  return (
    <Container padding="0 3rem">
      <div className="plan-info">
        <h3 className="title">ツアー行程</h3>
        <FastField name="tourStartTime" component={CustomInput} label="ツアー開始時間" pb={41} />
        <FastField name="tourEndTime" component={CustomInput} label="ツアー終了時間" pb={41} />
        <FastField
          name="meetingPlace"
          component={CustomInput}
          label="集合場所"
          type="text-area"
          height={100}
          pb={33}
        />
        <FastField
          name="dissolutionPlace"
          component={CustomInput}
          label="解散場所"
          type="text-area"
          height={100}
          pb={38}
        />
        <h3 className="title">スポット情報1</h3>
        <FastField
          name="events[0].eventName"
          component={CustomInput}
          label="施設名（イベント名）"
          pb={41}
        />
        <FlexContainer alignItems="center">
          <FastField
            name="events[0].postCode"
            component={CustomInput}
            label="郵便番号"
            pb={22}
            width={162}
          />
          <Button
            title="住所検索"
            buttonColor={BUTTON_COLORS.style06}
            radius={4}
            height={48}
            margin="3.8rem auto auto 2.3rem"
          />
        </FlexContainer>
        <FastField name="events[0].provinces" component={CustomSelect} label="都道府県" pb={23} />
        <FastField name="events[0].address1" component={CustomInput} label="住所1" pb={26} />
        <FastField name="events[0].address2" component={CustomInput} label="住所2" pb={22} />
        <FastField name="events[0].phone" component={CustomInput} label="電話番号" pb={41} />
        <FastField
          name="events[0].reservation"
          component={CustomCheckBox}
          label="要予約"
          pb={46}
          theme={CHECKBOX_THEME.primary}
          lbweight="normal"
        />
        <FastField name="events[0].startTime" component={CustomSelect} label="開始時間" pb={41} />
        <FastField name="events[0].endTime" component={CustomSelect} label="終了時間" pb={41} />
        <FastField
          name="events[0].content"
          component={CustomInput}
          label="内容"
          type="text-area"
          height={257}
          pb={41}
        />
        <p className="label">移動手段</p>
        <FlexContainer wrap={1}>
          <FlexItem flex="50%">
            <FastField
              name="events[0].transporation"
              component={CustomCheckBox}
              label="徒歩"
              pb={27}
              theme={CHECKBOX_THEME.primary}
              lbweight="normal"
            />
          </FlexItem>
          <FlexItem flex="50%">
            <FastField
              name="events[0].transporation"
              component={CustomCheckBox}
              label="自転車"
              pb={27}
              theme={CHECKBOX_THEME.primary}
              lbweight="normal"
            />
          </FlexItem>
          <FlexItem flex="50%">
            <FastField
              name="events[0].transporation"
              component={CustomCheckBox}
              label="電車"
              pb={27}
              theme={CHECKBOX_THEME.primary}
              lbweight="normal"
            />
          </FlexItem>
          <FlexItem flex="50%">
            <FastField
              name="events[0].transporation"
              component={CustomCheckBox}
              label="バス"
              pb={27}
              theme={CHECKBOX_THEME.primary}
              lbweight="normal"
            />
          </FlexItem>
          <FlexItem flex="50%">
            <FastField
              name="events[0].transporation"
              component={CustomCheckBox}
              label="タクシー"
              pb={52}
              theme={CHECKBOX_THEME.primary}
              lbweight="normal"
            />
          </FlexItem>
          <FlexItem flex="50%">
            <FastField
              name="events[0].transporation"
              component={CustomCheckBox}
              label="ハイヤー"
              pb={52}
              theme={CHECKBOX_THEME.primary}
              lbweight="normal"
            />
          </FlexItem>
          <Button
            title="スポット情報を追加"
            buttonColor={BUTTON_COLORS.style06}
            radius={4}
            height={48}
            margin="0 0 8.2rem 0"
          />
        </FlexContainer>
      </div>
    </Container>
  )
}

export default PlanInfo
