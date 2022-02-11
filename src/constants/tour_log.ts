import { TourLogInfoProps } from 'interfaces/TourLog'

export const INIT_TOUR_LOG_FORM_VALUE: TourLogInfoProps = {
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
  add_to_profile: false,
  title: '',
  explanation: '',
  images: [],
  // 振り返り - History info
  tour_start_time: '',
  tour_end_time: '',
  when_gathering: [],
  during_tour: [],
  when_disbanded: [],
  locking_back_at_later_date: [],
  general_comment: '',
  well_done: '',
  points_to_improve: '',
}
