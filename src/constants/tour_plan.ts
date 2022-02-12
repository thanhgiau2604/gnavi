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
  // 基本情報 - Basic info
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
  // ゲスト情報 - Guest info
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
  // スポット情報 - Plan info
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
}

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
