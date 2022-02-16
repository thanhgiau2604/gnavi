import { OptionProps } from 'interfaces/CustomField'
import { TourEventProps } from 'interfaces/TourEvent'
import { TourPlanInfoProps, TourPlanListProps } from 'interfaces/TourPlan'

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
    order_date: null,
    start_date: null,
    start_time: '',
    overview: '',
    order_form: '直接',
    company_name: '',
    phone: '',
    email: '',
    remuneration: 0,
    price: 0,
    payment_date: null,
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

export const OPTIONS_TRANSPORT: string[] = [
  '徒歩',
  '自転車',
  '電車',
  'バス',
  'タクシー',
  'ハイヤー',
]

// [WILL UPDATE MORE]
export const OPTIONS_TIME: OptionProps[] = [
  {
    value: '00:00',
    label: '00:00',
  },
  {
    value: '00:30',
    label: '00:30',
  },
  {
    value: '01:00',
    label: '01:00',
  },
  {
    value: '01:30',
    label: '01:30',
  },
  {
    value: '02:00',
    label: '02:00',
  },
  {
    value: '02:30',
    label: '02:30',
  },
  {
    value: '03:00',
    label: '03:00',
  },
  {
    value: '03:30',
    label: '03:30',
  },
  {
    value: '04:00',
    label: '04:00',
  },
  {
    value: '04:30',
    label: '04:30',
  },
  {
    value: '05:00',
    label: '05:00',
  },
  {
    value: '05:30',
    label: '05:30',
  },
  {
    value: '06:00',
    label: '06:00',
  },
  {
    value: '06:30',
    label: '06:30',
  },
  {
    value: '07:00',
    label: '07:00',
  },
  {
    value: '07:30',
    label: '07:30',
  },
  {
    value: '08:00',
    label: '08:00',
  },
  {
    value: '08:30',
    label: '08:30',
  },
  {
    value: '09:00',
    label: '09:00',
  },
  {
    value: '09:30',
    label: '09:30',
  },
  {
    value: '10:00',
    label: '10:00',
  },
  {
    value: '10:30',
    label: '10:30',
  },
  {
    value: '11:00',
    label: '11:00',
  },
  {
    value: '11:30',
    label: '11:30',
  },
  {
    value: '12:00',
    label: '12:00',
  },
  {
    value: '12:30',
    label: '12:30',
  },
  {
    value: '13:00',
    label: '13:00',
  },
  {
    value: '13:30',
    label: '13:30',
  },
  {
    value: '14:00',
    label: '14:00',
  },
  {
    value: '14:30',
    label: '14:30',
  },
  {
    value: '15:00',
    label: '15:00',
  },
  {
    value: '15:30',
    label: '15:30',
  },
  {
    value: '16:00',
    label: '16:00',
  },
  {
    value: '16:30',
    label: '16:30',
  },
  {
    value: '17:00',
    label: '17:00',
  },
  {
    value: '17:30',
    label: '17:30',
  },
  {
    value: '18:00',
    label: '18:00',
  },
  {
    value: '18:30',
    label: '18:30',
  },
  {
    value: '19:00',
    label: '19:00',
  },
  {
    value: '19:30',
    label: '19:30',
  },
  {
    value: '20:00',
    label: '20:00',
  },
  {
    value: '20:30',
    label: '20:30',
  },
  {
    value: '21:00',
    label: '21:00',
  },
  {
    value: '21:30',
    label: '21:30',
  },
  {
    value: '22:00',
    label: '22:00',
  },
  {
    value: '22:30',
    label: '22:30',
  },
  {
    value: '23:00',
    label: '23:00',
  },
  {
    value: '23:30',
    label: '23:30',
  },
]

// [WILL UPDATE MORE]
export const OPTIONS_ORDER_FORM: OptionProps[] = [
  {
    value: '直接',
    label: '直接',
  },
  {
    value: '間接',
    label: '間接',
  },
]

// [WILL UPDATE MORE]
export const OPTIONS_PROVINCES: OptionProps[] = [
  {
    value: '沖縄県',
    label: '沖縄県',
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
        datetime: new Date('2021/12/15'),
        title: '西表・由布・竹富島めぐり日帰りツアー',
        content:
          '西表島では仲間川マングローブクルーズにご乗船。水牛車で由布島に渡り、亜熱帯特有の動植物を観察できる由布島植物……',
      },
      {
        id: 2,
        datetime: new Date('2021/12/12'),
        title: 'マンタとウミガメシュノーケリング+幻の島上陸ツアー',
        content:
          '西表島の大自然を満喫する凝縮ツアー！SUP（またはカヌー）で”幸運の滝”クーラの滝へ！滝遊びと鍾乳洞探検を楽し……',
      },
      {
        id: 3,
        datetime: new Date('2021/12/10'),
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
    order_date: new Date('2021/12/05'),
    start_date: new Date('202/12/10'),
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
    payment_date: new Date('2021/12/08'),
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

// [WILL REMOVE SOON] tour-plan edit fake data - full data
export const TOUR_PLAN_EDIT_FAKE_DATA: TourPlanInfoProps = {
  id: 0,
  // 基本情報 - Basic info
  basic_info: {
    tour_name: 'マングローブSUPバラス島上陸',
    order_date: new Date('2021/12/05'),
    start_date: new Date('2021/12/10'),
    start_time: '09:00',
    overview: `西表島の大自然を満喫する凝縮ツアー！SUP（またはカヌー）で”幸運の滝”クーラの滝へ！
    滝遊びと鍾乳洞探検を楽しんだ後はサンゴの欠片でできた”奇跡の島”バラス島への上陸＆シュノーケリング。
    コバルトブルーの海遊びで最高の1日を締めくくります！`,
    order_form: '直接',
    company_name: 'インバウンドツアーズ株式会社',
    phone: '03-0000-0000',
    email: 'taro@inbound.co.jp',
    remuneration: 20000,
    price: 2500,
    payment_date: new Date('2021/12/08'),
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
    tour_start_time: '09:00',
    tour_end_time: '18:00',
    meeting_place: '上原港（西表島北部）または上原地区の各ホテルへお迎え',
    dissolution_place: '上原港（西表島北部）',
    events: [
      {
        id: 0,
        event_name: 'クーラ川SUP',
        post_code: '9051503',
        provinces: '沖縄県',
        address1: '国頭郡国頭村0-0-0',
        address2: '',
        phone: '00000000000',
        reservation: true,
        start_time: '10:00',
        end_time: '10:30',
        content: `・SUPかカヌーをお好みでお選びいただけます
        ・自然観察にうってつけのクーラ川をのんびりクルーズでマングローブの森を抜けていきます
        ・普段見ることのない亜熱帯独特の植物は生き物を見て楽しみましょう`,
        transporation: ['徒歩', 'タクシー'],
      },
      {
        id: 1,
        event_name: 'トレッキング',
        post_code: '9051503',
        provinces: '沖縄県',
        address1: '国頭郡国頭村0-0-0',
        address2: '',
        phone: '00000000000',
        reservation: true,
        start_time: '10:30',
        end_time: '10:40',
        content: `・SUPかカヌーをお好みでお選びいただけます
        ・自然観察にうってつけのクーラ川をのんびりクルーズでマングローブの森を抜けていきます
        ・普段見ることのない亜熱帯独特の植物は生き物を見て楽しみましょう`,
        transporation: ['徒歩', 'タクシー'],
      },
    ],
  },
}
