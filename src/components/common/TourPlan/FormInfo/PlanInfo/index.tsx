import Button from 'components/common/Button'
import CustomCheckBox from 'components/common/CustomFields/CheckboxField'
import CustomInput from 'components/common/CustomFields/InputField'
import CustomSelect from 'components/common/CustomFields/SelectField'
import { BUTTON_COLORS, CHECKBOX_THEME, INIT_TOUR_EVENT } from '@constants'
import { FastField, FieldArray } from 'formik'
import React from 'react'
import { Container } from 'styles/styled/layout/ContainerLayout'
import FlexContainer, { FlexItem } from 'styles/styled/layout/FlexLayout'
import { TourEventProps } from 'interfaces/TourEvent'

interface Props {
  events: TourEventProps[]
}

const PlanInfo: React.FC<Props> = ({ events }) => {
  return (
    <Container padding="0 3rem">
      <div className="plan-info">
        <h3 className="title">ツアー行程</h3>
        <FastField name="tourStartTime" component={CustomSelect} label="ツアー開始時間" pb={41} />
        <FastField name="tourEndTime" component={CustomSelect} label="ツアー終了時間" pb={41} />
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
        <FieldArray
          name="events"
          render={(arr) => (
            <div className="tour-event">
              {events.map((event, index) => (
                <div className="event" key={event.id}>
                  <h3 className="title">スポット情報{index + 1}</h3>
                  <FastField
                    name={`events[${index}].eventName`}
                    component={CustomInput}
                    label="施設名（イベント名）"
                    pb={41}
                  />
                  <FlexContainer alignItems="center">
                    <FastField
                      name={`events[${index}].postCode`}
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
                  <FastField
                    name={`events[${index}].provinces`}
                    component={CustomSelect}
                    label="都道府県"
                    pb={23}
                  />
                  <FastField
                    name={`events[${index}].address1`}
                    component={CustomInput}
                    label="住所1"
                    pb={26}
                  />
                  <FastField
                    name={`events[${index}].address2`}
                    component={CustomInput}
                    label="住所2"
                    pb={22}
                  />
                  <FastField
                    name={`events[${index}].phone`}
                    component={CustomInput}
                    label="電話番号"
                    pb={41}
                  />
                  <FastField
                    name={`events[${index}].reservation`}
                    component={CustomCheckBox}
                    label="要予約"
                    pb={46}
                    theme={CHECKBOX_THEME.primary}
                    lbweight="normal"
                  />
                  <FastField
                    name={`events[${index}].startTime`}
                    component={CustomSelect}
                    label="開始時間"
                    pb={41}
                  />
                  <FastField
                    name={`events[${index}].endTime`}
                    component={CustomSelect}
                    label="終了時間"
                    pb={41}
                  />
                  <FastField
                    name={`events[${index}].content`}
                    component={CustomInput}
                    label="内容"
                    type="text-area"
                    height={257}
                    pb={41}
                  />
                  <p className="label">移動手段</p>
                  <FlexContainer WRAP>
                    <FlexItem flex="50%">
                      <FastField
                        name={`events[${index}].transporation`}
                        component={CustomCheckBox}
                        label="徒歩"
                        pb={27}
                        theme={CHECKBOX_THEME.primary}
                        lbweight="normal"
                      />
                    </FlexItem>
                    <FlexItem flex="50%">
                      <FastField
                        name={`events[${index}].transporation`}
                        component={CustomCheckBox}
                        label="自転車"
                        pb={27}
                        theme={CHECKBOX_THEME.primary}
                        lbweight="normal"
                      />
                    </FlexItem>
                    <FlexItem flex="50%">
                      <FastField
                        name={`events[${index}].transporation`}
                        component={CustomCheckBox}
                        label="電車"
                        pb={27}
                        theme={CHECKBOX_THEME.primary}
                        lbweight="normal"
                      />
                    </FlexItem>
                    <FlexItem flex="50%">
                      <FastField
                        name={`events[${index}].transporation`}
                        component={CustomCheckBox}
                        label="バス"
                        pb={27}
                        theme={CHECKBOX_THEME.primary}
                        lbweight="normal"
                      />
                    </FlexItem>
                    <FlexItem flex="50%">
                      <FastField
                        name={`events[${index}].transporation`}
                        component={CustomCheckBox}
                        label="タクシー"
                        pb={52}
                        theme={CHECKBOX_THEME.primary}
                        lbweight="normal"
                      />
                    </FlexItem>
                    <FlexItem flex="50%">
                      <FastField
                        name={`events[${index}].transporation`}
                        component={CustomCheckBox}
                        label="ハイヤー"
                        pb={52}
                        theme={CHECKBOX_THEME.primary}
                        lbweight="normal"
                      />
                    </FlexItem>
                  </FlexContainer>
                </div>
              ))}

              <Button
                title="スポット情報を追加"
                buttonColor={BUTTON_COLORS.style06}
                radius={4}
                height={48}
                margin="0 0 8.2rem 0"
                onClick={() => arr.push({ ...INIT_TOUR_EVENT, id: events.length + 1 })}
              />
            </div>
          )}
        />
      </div>
    </Container>
  )
}

export default PlanInfo
