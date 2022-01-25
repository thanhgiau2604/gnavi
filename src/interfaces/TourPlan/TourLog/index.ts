interface ITourLog {
  id: number | string
  datetime: string
  title: string
  content: string
  images: string[]
}

interface ITourPlan {
  id: number | string
  year: string
  tourLogs: ITourLog[] | []
}

export type { ITourPlan, ITourLog }
