import { TourEventProps } from 'interfaces/TourEvent'
import { TourPlanFieldProps, TourPlanInfoProps, TourPlanListProps } from 'interfaces/TourPlan'

export const INIT_TOUR_EVENT: TourEventProps = {
  id: 0,
  event_name: '',
  post_code: '',
  provinces: '',
  address1: '',
  address2: '',
  phone: '',
  reservation: false,
  start_time: '',
  end_time: '',
  content: '',
  transporation: [],
}

export const INIT_TOUR_PLAN_FORM_VALUE: TourPlanInfoProps = {
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
  },
  // ゲスト情報 - Guest info
  guest_info: {
    no_of_adults: 0,
    no_of_teens: 0,
    no_of_childs: 0,
    relation: '',
    diet: '',
    represent: '',
    gender: 'male',
    age: 0,
    country: '',
    contact_phone: '',
    contact_email: '',
    note: '',
  },
  // スポット情報 - Plan info
  plan_info: {
    tour_start_time: '',
    tour_end_time: '',
    meeting_place: '',
    dissolution_place: '',
    events: [
      {
        id: 1,
        event_name: '',
        post_code: '',
        provinces: '',
        address1: '',
        address2: '',
        phone: '',
        reservation: false,
        start_time: '',
        end_time: '',
        content: '',
        transporation: [],
      },
    ],
  },
}

export const TOUR_PLAN_DETAIL_FORM_FIELDS: TourPlanFieldProps[] = [
  {
    label: '受注日',
  },
  {
    label: '催行日時',
  },
  {
    label: '概要',
  },
  {
    label: '受注形態',
  },
  {
    label: '会社名',
  },
  {
    label: '電話番号',
  },
  {
    label: 'メールアドレス',
  },
  {
    label: '報酬',
  },
  {
    label: '経費',
  },
  {
    label: '入金日',
  },
  {
    label: '支払い方法',
  },
]

// [WILL REMOVE SOON] tour-plan list fake data - full data
export const TOUR_PLAN_LIST_FAKE_FULL_DATA: TourPlanListProps[] = [
  {
    id: 1,
    year: '2021年',
    tour_plan_list: [
      {
        id: 1,
        datetime: '12月15日',
        title: '西表・由布・竹富島めぐり日帰りツアー',
        content:
          '西表島では仲間川マングローブクルーズにご乗船。水牛車で由布島に渡り、亜熱帯特有の動植物を観察できる由布島植物……',
      },
      {
        id: 2,
        datetime: '12月12日',
        title: 'マンタとウミガメシュノーケリング+幻の島上陸ツアー',
        content:
          '西表島の大自然を満喫する凝縮ツアー！SUP（またはカヌー）で”幸運の滝”クーラの滝へ！滝遊びと鍾乳洞探検を楽し……',
      },
      {
        id: 3,
        datetime: '12月10日',
        title: 'マングローブSUP&バラス島上陸',
        content:
          '西表島の大自然を満喫する凝縮ツアー！SUP（またはカヌー）で”幸運の滝”クーラの滝へ！滝遊びと鍾乳洞探検を楽し……',
      },
    ],
  },
]

// [WILL REMOVE SOON] tour-plan list fake data - empty data
export const TOUR_PLAN_LIST_FAKE_EMPTY_DATA: TourPlanListProps[] = []

// [WILL REMOVE SOON] tour-plan detail fake data
export const TOUR_PLAN_DETAIL_FAKE_DATA: TourPlanInfoProps = {
  id: 0,
  // 基本情報 - Basic info
  basic_info: {
    tour_name: 'マングローブSUPバラス島上陸',
    order_date: '2021年12月5日',
    start_date: '2021年12月10日',
    start_time: '　9：00',
    overview: `西表島の大自然を満喫する凝縮ツアー！SUP（またはカヌー）で”幸運の滝”クーラの滝へ！
    滝遊びと鍾乳洞探検を楽しんだ後はサンゴの欠片でできた”奇跡の島”バラス島への上陸＆シュノーケリング。
    コバルトブルーの海遊びで最高の1日を締めくくります！`,
    order_form: '直接',
    company_name: 'インバウンドツアーズ株式会社',
    phone: '03-0000-0000',
    email: 'taro@inbound.co.jp',
    remuneration: 20000,
    price: 2500,
    payment_date: '2021年12月8日',
    method_payment: '銀行振込',
  },
  // ゲスト情報 - Guest info
  guest_info: {
    no_of_adults: 2,
    no_of_teens: 2,
    no_of_childs: 0,
    relation: '家族',
    diet: '息子さんがアレルギー（エビ）',
    represent: '東京太郎',
    gender: 'male',
    age: 40,
    country: '日本',
    contact_phone: '090-0000-0000',
    contact_email: 'taro_t@yahoo.co.jp',
    note: `マングローブSUP
    鍾乳洞
    パラス島上陸`,
  },
  // スポット情報 - Plan info
  plan_info: {
    tour_start_time: '9:00',
    tour_end_time: '18:00',
    meeting_place: '上原港（西表島北部）または上原地区の各ホテルへお迎え',
    dissolution_place: '上原港（西表島北部）',
    events: [
      {
        id: 0,
        event_name: 'クーラ川SUP',
        post_code: '905-1503',
        provinces: '',
        address1: '',
        address2: '',
        phone: '',
        reservation: false,
        start_time: '10:00',
        end_time: '',
        content: `・SUPかカヌーをお好みでお選びいただけます
        ・自然観察にうってつけのクーラ川をのんびりクルーズでマングローブの森を抜けていきます
        ・普段見ることのない亜熱帯独特の植物は生き物を見て楽しみましょう`,
        transporation: ['徒歩', 'タクシー'],
      },
      {
        id: 1,
        event_name: 'トレッキング',
        post_code: '905-1503',
        provinces: '',
        address1: '',
        address2: '',
        phone: '',
        reservation: false,
        start_time: '10:30',
        end_time: '',
        content: `・SUPかカヌーをお好みでお選びいただけます
        ・自然観察にうってつけのクーラ川をのんびりクルーズでマングローブの森を抜けていきます
        ・普段見ることのない亜熱帯独特の植物は生き物を見て楽しみましょう`,
        transporation: ['徒歩', 'タクシー'],
      },
    ],
  },
}
