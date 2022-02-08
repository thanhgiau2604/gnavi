interface TourLogProps {
  id: number | string
  datetime: string
  title: string
  content: string
  images: string[]
}

interface TourPlanProps {
  id: number | string
  year: string
  tourLogs: TourLogProps[] | []
}

export type { TourPlanProps, TourLogProps }
