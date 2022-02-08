interface ISchedule {
  timeline: string
  title: string
  image: string
  content: string
  transportation: string[]
}

interface IDetailInformation {
  tag?: string
  content?: string
  schedules?: ISchedule[]
}

interface IInfomartion {
  field: string
  details: IDetailInformation[]
}

interface ITourInfo {
  id: number | string
  title: string
  images: string[]
  infos: IInfomartion[]
}

export type { ITourInfo, IInfomartion, IDetailInformation, ISchedule }
