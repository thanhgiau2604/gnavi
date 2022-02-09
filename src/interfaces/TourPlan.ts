import { TourEventProps } from './TourEvent'

interface BasicInfoProps {
  tourName: string
  orderDate: string
  startDate: string
  startTime: string
  overview: string
  orderForm: string
  companyName: string
  phone: string
  email: string
  remuneration: number
  price: number
  paymentDate: string
  methodPayment: string
}

interface GuestInfoProps {
  noOfAdults: number
  noOfTeens: number
  noOfChilds: number
  relation: string
  diet: string
  represent: string
  gender: 'male'
  age: number
  country: string
  contactPhone: string
  contactEmail: string
  note: string
}

interface PlanInfoProps {
  tourStartTime: string
  tourEndTime: string
  meetingPlace: string
  dissolutionPlace: string
  events: TourEventProps[]
}

interface TourPlanInfoProps extends BasicInfoProps, GuestInfoProps, PlanInfoProps {}

export type { TourPlanInfoProps, BasicInfoProps, GuestInfoProps, PlanInfoProps }
