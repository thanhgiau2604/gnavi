import Button from 'components/common/Button'
import CustomCheckBox from 'components/common/CustomFields/CheckboxField'
import CustomInput from 'components/common/CustomFields/InputField'
import CustomSelect from 'components/common/CustomFields/SelectField'
import {
  BUTTON_COLORS,
  CHECKBOX_THEME,
  INIT_TOUR_EVENT,
  OPTIONS_PROVINCES,
  OPTIONS_TIME,
  OPTIONS_TRANSPORT,
} from '@constants'
import { FastField, FieldArray } from 'formik'
import React from 'react'
import { Container } from 'styles/styled/layout/ContainerLayout'
import FlexContainer, { FlexItem } from 'styles/styled/layout/FlexLayout'
import { TourEventProps } from 'interfaces/TourEvent'
import { PlanInfoContainer } from './styled'

interface Props {
  events: TourEventProps[]
}

const PlanInfo: React.FC<Props> = ({ events }) => {
  return (
    <Container padding="0 3rem">
      <PlanInfoContainer>
        <h3 className="title">ツアー行程</h3>
        <FastField
          name="plan_info.tour_start_time"
          component={CustomSelect}
          options={OPTIONS_TIME}
          label="ツアー開始時間"
          pb={41}
        />
        <FastField
          name="plan_info.tour_end_time"
          component={CustomSelect}
          options={OPTIONS_TIME}
          label="ツアー終了時間"
          pb={41}
        />
        <FastField
          name="plan_info.meeting_place"
          component={CustomInput}
          label="集合場所"
          type="text-area"
          height={100}
          pb={33}
        />
        <FastField
          name="plan_info.dissolution_place"
          component={CustomInput}
          label="解散場所"
          type="text-area"
          height={100}
          pb={38}
        />
        <FieldArray
          name="plan_info.events"
          render={(arr) => (
            <div className="tour-event">
              {events.map((event, index) => (
                <div className="event" key={event.id}>
                  <h3 className="title">スポット情報{index + 1}</h3>
                  <FastField
                    name={`plan_info.events[${index}].event_name`}
                    component={CustomInput}
                    label="施設名（イベント名）"
                    pb={41}
                  />
                  <FlexContainer alignItems="center">
                    <FastField
                      name={`plan_info.events[${index}].post_code`}
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
                    name={`plan_info.events[${index}].provinces`}
                    component={CustomSelect}
                    options={OPTIONS_PROVINCES}
                    label="都道府県"
                    pb={23}
                  />
                  <FastField
                    name={`plan_info.events[${index}].address1`}
                    component={CustomInput}
                    label="住所1"
                    pb={26}
                  />
                  <FastField
                    name={`plan_info.events[${index}].address2`}
                    component={CustomInput}
                    label="住所2"
                    pb={22}
                  />
                  <FastField
                    name={`plan_info.events[${index}].phone`}
                    component={CustomInput}
                    label="電話番号"
                    pb={41}
                  />
                  <FastField
                    name={`plan_info.events[${index}].reservation`}
                    component={CustomCheckBox}
                    label="要予約"
                    pb={46}
                    theme={CHECKBOX_THEME.primary}
                    lbweight="normal"
                    checked={events[index].reservation}
                  />
                  <FastField
                    name={`plan_info.events[${index}].start_time`}
                    component={CustomSelect}
                    options={OPTIONS_TIME}
                    label="開始時間"
                    pb={41}
                  />
                  <FastField
                    name={`plan_info.events[${index}].end_time`}
                    component={CustomSelect}
                    options={OPTIONS_TIME}
                    label="終了時間"
                    pb={41}
                  />
                  <FastField
                    name={`plan_info.events[${index}].content`}
                    component={CustomInput}
                    label="内容"
                    type="text-area"
                    height={257}
                    pb={41}
                  />
                  <p className="label">移動手段</p>
                  <FlexContainer WRAP>
                    {OPTIONS_TRANSPORT.map((option: string) => (
                      <FlexItem flex="50%" key={option}>
                        <FastField
                          name={`plan_info.events[${index}].transporation`}
                          component={CustomCheckBox}
                          label={option}
                          pb={27}
                          theme={CHECKBOX_THEME.primary}
                          lbweight="normal"
                          checked={events[index].transporation.includes(option)}
                        />
                      </FlexItem>
                    ))}
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
      </PlanInfoContainer>
    </Container>
  )
}

export default PlanInfo
