import { CHECKBOX_THEME } from '@constants'
import CustomCheckBox from 'components/common/CustomFields/CheckboxField'
import CustomInput from 'components/common/CustomFields/InputField'
import CustomSelect from 'components/common/CustomFields/SelectField'
import {
  OPTIONS_DURING_THE_TOUR,
  OPTIONS_LOOK_BACK,
  OPTIONS_WHEN_DISBANDED,
  OPTIONS_WHEN_GATHERING,
} from 'constants/tour_log'
import { FastField } from 'formik'
import React from 'react'
import { Container } from 'styles/styled/layout/ContainerLayout'
import { HistoryLogContainer } from './styled'

const History: React.FC = () => {
  return (
    <Container padding="0 3rem">
      <HistoryLogContainer>
        <FastField name="tour_start_time" component={CustomSelect} label="ツアー開始時間" pb={41} />
        <FastField name="tour_end_time" component={CustomSelect} label="ツアー終了時間" pb={40} />
        <h3 className="title">振り返り</h3>
        <div className="history_info.when_gathering">
          <h3 className="label">集合時</h3>
          {OPTIONS_WHEN_GATHERING.map((option: string) => (
            <FastField
              name="history_info.when_gathering"
              component={CustomCheckBox}
              label={option}
              pb={80}
              theme={CHECKBOX_THEME.primary}
              lbweight="normal"
              key={option}
            />
          ))}
        </div>
        <div className="history_info.during_the_tour">
          <h3 className="label">ツアー中</h3>
          {OPTIONS_DURING_THE_TOUR.map((option: string) => (
            <FastField
              name="history_info.during_the_tour"
              component={CustomCheckBox}
              label={option}
              pb={80}
              theme={CHECKBOX_THEME.primary}
              lbweight="normal"
              key={option}
            />
          ))}
        </div>
        <div className="history_info.when_disbanded">
          <h3 className="label">解散時</h3>
          {OPTIONS_WHEN_DISBANDED.map((option: string) => (
            <FastField
              name="history_info.when_disbanded"
              component={CustomCheckBox}
              label={option}
              pb={80}
              theme={CHECKBOX_THEME.primary}
              lbweight="normal"
              key={option}
            />
          ))}
        </div>
        <div className="history_info.looking_back_at_later_date">
          <h3 className="label">後日の振り返り</h3>
          {OPTIONS_LOOK_BACK.map((option: string) => (
            <FastField
              name="history_info.looking_back_at_later_date"
              component={CustomCheckBox}
              label={option}
              pb={80}
              theme={CHECKBOX_THEME.primary}
              lbweight="normal"
              key={option}
            />
          ))}
        </div>
        <FastField
          name="history_info.general_comment"
          component={CustomInput}
          type="text-area"
          height={275}
          label="総評"
          pb={50}
        />
        <FastField
          name="history_info.well_done"
          component={CustomInput}
          type="text-area"
          height={169}
          label="よくできた点"
          pb={50}
        />
        <FastField
          name="history_info.points_to_improve"
          component={CustomInput}
          type="text-area"
          height={169}
          label="改善したい点"
          pb={86}
        />
      </HistoryLogContainer>
    </Container>
  )
}

export default History
