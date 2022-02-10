import { TourEventProps } from './TourEvent'

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
}

interface GuestInfoProps {
  no_of_adults: number
  no_of_teens: number
  no_of_childs: number
  relation: string
  diet: string
  represent: string
  gender: string
  age: number
  country: string
  contact_phone: string
  contact_email: string
  note: string
}

interface PlanInfoProps {
  tour_start_time: string
  tour_end_time: string
  meeting_place: string
  dissolution_place: string
  events: TourEventProps[]
}

interface TourPlanInfoProps extends BasicInfoProps, GuestInfoProps, PlanInfoProps {}

export type { TourPlanInfoProps, BasicInfoProps, GuestInfoProps, PlanInfoProps }
