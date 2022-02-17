import { TourEventProps } from './TourEvent'

interface BasicInfoProps {
  tour_name: string
  order_date: Date | null
  start_date: Date | null
  start_time: string
  overview: string
  order_form: string
  company_name: string
  phone: string
  email: string
  remuneration: number
  price: number
  payment_date: Date | null
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

// tour-plan infos
interface TourPlanInfoProps {
  id: number
  basic_info: BasicInfoProps
  guest_info: GuestInfoProps
  plan_info: PlanInfoProps
}

interface TourPlanItemProps {
  id: number
  datetime: Date | null
  title: string
  content: string
}

// get tour-plan list
interface TourPlanListProps {
  id: number
  year: string
  tour_plan_list: TourPlanItemProps[]
}

export type {
  BasicInfoProps,
  GuestInfoProps,
  PlanInfoProps,
  TourPlanInfoProps,
  TourPlanListProps,
  TourPlanItemProps,
}
