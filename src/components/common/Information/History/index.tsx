import { CHECKBOX_THEME } from '@constants'
import CustomCheckBox from 'components/common/CustomFields/CheckboxField'
import CustomInput from 'components/common/CustomFields/InputField'
import CustomSelect from 'components/common/CustomFields/SelectField'
import { FastField } from 'formik'
import React from 'react'
import { Container } from 'styles/styled/layout/ContainerLayout'
import { HistoryLogContainer } from './styled'

const History = () => {
  return (
    <Container padding="0 3rem">
      <HistoryLogContainer>
        <FastField name="tour_start_time" component={CustomSelect} label="ツアー開始時間" pb={41} />
        <FastField name="tour_end_time" component={CustomSelect} label="ツアー終了時間" pb={40} />
        <h3 className="title">振り返り</h3>
        <div className="history_info.when-gathering">
          <h3 className="label">集合時</h3>
          <FastField
            name="when_gathering"
            component={CustomCheckBox}
            label="集合時間に余裕を持って到達できたか"
            pb={80}
            theme={CHECKBOX_THEME.primary}
            lbweight="normal"
          />
          <FastField
            name="when_gathering"
            component={CustomCheckBox}
            label="自己紹介をしっかりと行うことができたか"
            pb={80}
            theme={CHECKBOX_THEME.primary}
            lbweight="normal"
          />
          <FastField
            name="when_gathering"
            component={CustomCheckBox}
            label="ツアーの概要（ルート、訪れるスポット、スケジュール、注意事項など）を説明できたか"
            pb={80}
            theme={CHECKBOX_THEME.primary}
            lbweight="normal"
          />
          <FastField
            name="when_gathering"
            component={CustomCheckBox}
            label="ゲストが期待していること、楽しみにしていることをヒアリングできたか"
            pb={80}
            theme={CHECKBOX_THEME.primary}
            lbweight="normal"
          />
          <FastField
            name="when_gathering"
            component={CustomCheckBox}
            label="現地での金銭の支払いに関して説明できたか（旅行者の支払いまたはガイドの支払い）"
            pb={80}
            theme={CHECKBOX_THEME.primary}
            lbweight="normal"
          />
          <FastField
            name="when_gathering"
            component={CustomCheckBox}
            label="集合の際に緊急連絡先をゲストに伝えることができたか"
            pb={80}
            theme={CHECKBOX_THEME.primary}
            lbweight="normal"
          />
        </div>
        <div className="history_info.during-the-tour">
          <h3 className="label">ツアー中</h3>
          <FastField
            name="during_the_tour"
            component={CustomCheckBox}
            label="次のスポットの概要や所要時間について説明できたか"
            pb={80}
            theme={CHECKBOX_THEME.primary}
            lbweight="normal"
          />
          <FastField
            name="during_the_tour"
            component={CustomCheckBox}
            label="訪れるスポットで必要な説明ができたか"
            pb={80}
            theme={CHECKBOX_THEME.primary}
            lbweight="normal"
          />
          <FastField
            name="during_the_tour"
            component={CustomCheckBox}
            label="ゲストからの質問に対して十分な説明ができたか"
            pb={80}
            theme={CHECKBOX_THEME.primary}
            lbweight="normal"
          />
          <FastField
            name="during_the_tour"
            component={CustomCheckBox}
            label="一方的な説明ではなく、ゲストの反応を踏まえたコミュニケーションができたか"
            pb={80}
            theme={CHECKBOX_THEME.primary}
            lbweight="normal"
          />
          <FastField
            name="during_the_tour"
            component={CustomCheckBox}
            label="ゲストへの十分な気配りができたか（トイレ、休憩、体調など）"
            pb={80}
            theme={CHECKBOX_THEME.primary}
            lbweight="normal"
          />
          <FastField
            name="during_the_tour"
            component={CustomCheckBox}
            label="ゲストの要望や、トラブルなどに柔軟に対応できたか"
            pb={80}
            theme={CHECKBOX_THEME.primary}
            lbweight="normal"
          />
          <FastField
            name="during_the_tour"
            component={CustomCheckBox}
            label="自身のある振る舞いを行うことができたか"
            pb={80}
            theme={CHECKBOX_THEME.primary}
            lbweight="normal"
          />
          <FastField
            name="during_the_tour"
            component={CustomCheckBox}
            label="後日提出が必要な書類などを入手できたか（領収書など"
            pb={80}
            theme={CHECKBOX_THEME.primary}
            lbweight="normal"
          />
        </div>
        <div className="history_info.when-disbanded">
          <h3 className="label">解散時</h3>
          <FastField
            name="when_disbanded"
            component={CustomCheckBox}
            label="所定の場所で解散できたか"
            pb={80}
            theme={CHECKBOX_THEME.primary}
            lbweight="normal"
          />
          <FastField
            name="when_disbanded"
            component={CustomCheckBox}
            label="ゲストの今後の予定を踏まえ、移動手段やおすすめの場所を紹介できたか"
            pb={80}
            theme={CHECKBOX_THEME.primary}
            lbweight="normal"
          />
        </div>
        <div className="history_info.locking_back_at_later_date">
          <h3 className="label">後日の振り返り</h3>
          <FastField
            name="locking_back_at_later_date"
            component={CustomCheckBox}
            label="ゲストの感想やフィードバックを確認したか"
            pb={80}
            theme={CHECKBOX_THEME.primary}
            lbweight="normal"
          />
          <FastField
            name="locking_back_at_later_date"
            component={CustomCheckBox}
            label="ツアーの振り返りを行い、改善点を確認できたか"
            pb={80}
            theme={CHECKBOX_THEME.primary}
            lbweight="normal"
          />
          <FastField
            name="locking_back_at_later_date"
            component={CustomCheckBox}
            label="（会社、団体経由の場合）報告書の提出は完了したか"
            pb={80}
            theme={CHECKBOX_THEME.primary}
            lbweight="normal"
          />
          <FastField
            name="locking_back_at_later_date"
            component={CustomCheckBox}
            label="（会社、団体経由の場合）報酬や経費の精算は完了したか"
            pb={80}
            theme={CHECKBOX_THEME.primary}
            lbweight="normal"
          />
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
