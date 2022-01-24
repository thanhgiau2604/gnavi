interface IContent {
  tag: string | ''
  info: string | ''
}

interface Detail {
  field: string | ''
  content: IContent[] | []
}

interface ITourPlanDetail {
  title: string | ''
  images: string[] | []
  details: Detail[] | []
}

export type { ITourPlanDetail, Detail, IContent }
