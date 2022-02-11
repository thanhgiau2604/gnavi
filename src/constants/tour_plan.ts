import { TourEventProps } from 'interfaces/TourEvent'
import { TourPlanInfoProps } from 'interfaces/TourPlan'

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
