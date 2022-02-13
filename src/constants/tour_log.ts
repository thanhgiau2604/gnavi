import { TourLogInfoProps } from 'interfaces/TourLog'

export const INIT_TOUR_LOG_FORM_VALUE: TourLogInfoProps = {
  id: 0,
  // 基本情報 - Basic info
  basic_info: {
    tour_name: '',
    order_date: '',
    start_date: '',
    start_time: '',
    overview: '',
    order_form: '直接',
    company_name: '',
    phone: '',
    email: '',
    remuneration: 0,
    price: 0,
    payment_date: '',
    method_payment: '',
    add_to_profile: false,
    title: '',
    explanation: '',
    images: [],
  },
  // 振り返り - History info
  history_info: {
    tour_start_time: '',
    tour_end_time: '',
    when_gathering: [],
    during_tour: [],
    when_disbanded: [],
    looking_back_at_later_date: [],
    general_comment: '',
    well_done: '',
    points_to_improve: '',
  },
}

export const OPTIONS_WHEN_GATHERING: string[] = [
  '集合時間に余裕を持って到達できたか',
  '自己紹介をしっかりと行うことができたか',
  'ツアーの概要（ルート、訪れるスポット、スケジュール、注意事項など）を説明できたか',
  'ゲストが期待していること、楽しみにしていることをヒアリングできたか',
  '現地での金銭の支払いに関して説明できたか（旅行者の支払いまたはガイドの支払い）',
  '集合の際に緊急連絡先をゲストに伝えることができたか',
]

export const OPTIONS_DURING_THE_TOUR: string[] = [
  '次のスポットの概要や所要時間について説明できたか',
  '訪れるスポットで必要な説明ができたか',
  'ゲストからの質問に対して十分な説明ができたか',
  '一方的な説明ではなく、ゲストの反応を踏まえたコミュニケーションができたか',
  'ゲストへの十分な気配りができたか（トイレ、休憩、体調など）',
  'ゲストの要望や、トラブルなどに柔軟に対応できたか',
  '自身のある振る舞いを行うことができたか',
  '後日提出が必要な書類などを入手できたか（領収書など',
]

export const OPTIONS_WHEN_DISBANDED: string[] = [
  '所定の場所で解散できたか',
  'ゲストの今後の予定を踏まえ、移動手段やおすすめの場所を紹介できたか',
]

export const OPTIONS_LOOK_BACK: string[] = [
  'ゲストの感想やフィードバックを確認したか',
  'ツアーの振り返りを行い、改善点を確認できたか',
  '（会社、団体経由の場合）報告書の提出は完了したか',
  '（会社、団体経由の場合）報酬や経費の精算は完了したか',
]
