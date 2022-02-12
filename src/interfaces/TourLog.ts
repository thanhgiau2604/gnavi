interface HistoryLogProps {
  tour_start_time: string
  tour_end_time: string
  when_gathering: string[]
  during_tour: string[]
  when_disbanded: string[]
  locking_back_at_later_date: string[]
  general_comment: string
  well_done: string
  points_to_improve: string
}

interface BasicInfoProps {
  tour_name: string
  order_date: string
  start_date: string
  start_time: string
  overview: string
  order_form: string
  company_name: string
  phone: string
  email: string
  remuneration: number
  price: number
  payment_date: string
  method_payment: string
  add_to_profile: boolean
  title: string
  explanation: string
  images: string[]
}

interface TourLogInfoProps extends BasicInfoProps, HistoryLogProps {}

export type { HistoryLogProps, TourLogInfoProps }
